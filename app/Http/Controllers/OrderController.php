<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Order;
use App\Models\OrderEditing;
use App\Models\Payment;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

use function Termwind\render;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        return Inertia::render('orderProduct');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {

        $productId = $request->query('productId');
        $product = Product::with(['features', 'courseClass'])->findOrFail($productId);
        $category = Category::findOrFail($product->category_id);
        return Inertia::render('orderProduct', [
            'product' => $product,
            'category' => $category,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'user_id'    => 'required|exists:users,id',
            'product_id' => 'required|exists:products,id',
            'category'   => 'required|string|max:50',
            'pages'      => 'nullable|integer|min:0',
        ]);


        return DB::transaction(function () use ($validated) {
            $order = Order::create([
                'user_id'    => $validated['user_id'],
                'product_id' => $validated['product_id'],
            ]);

            $product = Product::findOrFail($validated['product_id']);
            $amount = $product->final_price;

            $category = strtolower($validated['category']);
            if ($category === 'jasa-sunting') {
                if (!isset($validated['pages'])) {
                    throw new \Exception("Pages field is required for jasa-sunting orders");
                }

                OrderEditing::create([
                    'order_id' => $order->id,
                    'pages'    => $validated['pages'],
                ]);

                $amount *= $validated['pages'];
            }

            // Set your Merchant Server Key
            \Midtrans\Config::$serverKey = config('midtrans.serverKey');
            // Set to Development/Sandbox Environment (default). Set to true for Production Environment (accept real transaction).
            \Midtrans\Config::$isProduction = false;
            // Set sanitization on (default)
            \Midtrans\Config::$isSanitized = true;
            // Set 3DS transaction for credit card to true
            \Midtrans\Config::$is3ds = false;

            $params = array(
                'transaction_details' => array(
                    'order_id' => $order->id,
                    'gross_amount' => $amount,
                )
            );

            $snapToken = \Midtrans\Snap::getSnapToken($params);

            Payment::create([
                'order_id' => $order->id,
                'amount' => $amount,
                'transaction_id' => $snapToken,
            ]);

            return response()->json([
                'token' => $snapToken,
                'order_id' => $order->id,
            ]);
        });
    }

    public function show(string $order_id)
    {
        return Inertia::render("paymentSuccess");
    }
    public function destroy(string $order_id)
    {

        $order = Order::findOrFail($order_id);
        $order->delete();
        return response()->json([
            'message' => 'order deleted successfully',
        ]);
    }
}
