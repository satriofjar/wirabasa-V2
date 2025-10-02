<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Order;
use App\Models\OrderEditing;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

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
            'status'     => 'required|string|in:pending,paid,cancelled', // enum lebih aman
            'pages'      => 'nullable|integer|min:0',
        ]);

        return DB::transaction(function () use ($validated) {
            $order = Order::create([
                'user_id'    => $validated['user_id'],
                'product_id' => $validated['product_id'],
                'status'     => $validated['status'],
            ]);

            // Cari category by slug
            $category = strtolower($validated['category']);
            if ($category === 'jasa-sunting') {
                if (!isset($validated['pages'])) {
                    throw new \Exception("Pages field is required for jasa-sunting orders");
                }

                OrderEditing::create([
                    'order_id' => $order->id,
                    'pages'    => $validated['pages'],
                ]);
            }

            return redirect()->route('payment.create', [
                'orderId' => $order->id,
            ]);
        });
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product) {}

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
