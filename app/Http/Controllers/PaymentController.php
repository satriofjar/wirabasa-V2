<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Payment;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PaymentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {

        $orderId = $request->query('orderId');
        $order = Order::with('product.category', 'orderEditing')->findOrFail($orderId);
        return Inertia::render('payment', [
            'order' => $order,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'order_id' => 'required|exists:orders,id',
            'amount' => 'required|integer|min:0',
            'proof' => 'nullable|file|mimes:jpeg,png,jpg,pdf|max:2048',
            'method' => 'required|string|max:20',
        ]);

        // Upload gambar
        if ($request->hasFile('proof')) {
            $path = $request->file('proof')->store('payments', 'public');
            $validated['proof'] = $path;
        }

        Payment::create($validated);

        return redirect()->route('home')->with("success", "Pembayaran berhasil dilakukan.");
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
