<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;

class MidtransController extends Controller
{
    public function handleNotification(Request $request)
    {
        $serverKey = config('midtrans.serverKey');
        $signatureKey = hash('sha512', $request->order_id, $request->status_code, $request->gross_amount, $serverKey);

        if ($signatureKey !== $request->signature_key) {
            return response()->json(['message' => 'invalid signature'], 403);
        }

        $order = Order::with('payment', 'product.category')->findOrFail($request->order_id);

        switch ($request->transaction_status) {
            case 'settlement':

                if ($order->product->category->slug === 'jasa-sunting') {
                    $order->update(['status' => 'processing']);
                } else {
                    $order->update(['status' => 'success']);
                }
                $order->payment->update(['status' => 'paid']);
            case 'deny':
                $order->status->update(['status' => 'failed']);
                $order->payment->update(['status' => 'falied']);
            case 'refund':
                $order->status->update(['status' => 'refund']);
                $order->payment->update(['status' => 'refund']);

        }

        $order->payment->update(["transaction_id" => $request->transaction_id]);

        return response()->json(['message' => 'ok']);
    }
}
