<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::all();
        return Inertia::render("dashboard/product/products", [
            'products' => $products,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = Category::all();
        return Inertia::render('dashboard/product/createProduct', [
            'categories' => $categories,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'category_id' => 'required|exists:categories,id',
            'name' => 'required|string|max:200',
            'price' => 'required|integer|min:0',
            'discount' => 'integer|min:0|max:100',
            'is_active' => 'boolean',
            'features' => 'array',
            'features.*.name' => 'required|string|max:250',
            // course class
            'topic' => 'nullable|string|max:200',
            'zoom_link' => 'nullable|string|max:200',
            'yt_link' => 'nullable|string|max:200',
            'schedule'    => 'nullable|date_format:Y-m-d\TH:i',
            'poster'      => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
            'active_class' => 'boolean',
        ]);

        DB::transaction(function () use ($request, $validated) {
            $product = Product::create([
                'category_id' => $validated['category_id'],
                'name' => $validated['name'],
                'price' => $validated['price'],
                'discount' => $validated['discount'] ?? 0,
                'is_active' => $validated['is_active'] ?? true,
            ]);

            // features
            if ($request->features) {
                foreach ($request->features as $feature) {
                    $product->features()->create($feature);
                }
            }

            // course class (hanya untuk kategori kelas)
            if (isset($validated['topic'])) {
                $courseData = [
                    'topic' => $validated['topic'],
                    'zoom_link' => $validated['zoom_link'] ?? null,
                    'yt_link' => $validated['yt_link'] ?? null,
                    'schedule' => $validated['schedule'] ?? null,
                    'is_active' => $validated['active_class'] ?? true,
                ];

                if ($request->hasFile('poster')) {
                    $path = $request->file('poster')->store('posters', 'public');
                    $courseData['poster'] = $path;
                }

                $product->courseClass()->create($courseData);
            }
        });

        return redirect()->route('products.index')
            ->with('success', 'Product created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        $product->load('features', 'courseClass');
        $categories = Category::all();

        return Inertia::render('dashboard/product/editProduct', [
            'product' => $product,
            'categories' => $categories,
            'courseClass' => $product->courseClass,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {

        $validated = $request->validate([
            'category_id' => 'required|exists:categories,id',
            'name' => 'required|string|max:200',
            'price' => 'required|integer|min:0',
            'discount' => 'integer|min:0|max:100',
            'is_active' => 'boolean',
            'features' => 'array',
            'features.*.name' => 'required|string|max:250',
            // course class
            'topic' => 'nullable|string|max:200',
            'zoom_link' => 'nullable|string|max:200',
            'yt_link' => 'nullable|string|max:200',
            'schedule'    => 'nullable|date_format:Y-m-d\TH:i',
            'poster'      => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
            'active_class' => 'boolean',
        ]);

        DB::transaction(function () use ($request, $product, $validated) {
            $product->update([
                'category_id' => $validated['category_id'],
                'name' => $validated['name'],
                'price' => $validated['price'],
                'discount' => $validated['discount'] ?? 0,
                'is_active' => $validated['is_active'] ?? true,
            ]);

            // update features
            $product->features()->delete();
            if ($request->features) {
                foreach ($request->features as $feature) {
                    $product->features()->create($feature);
                }
            }

            // update course class
            if (isset($validated['topic'])) {
                $courseData = [
                    'topic' => $validated['topic'],
                    'zoom_link' => $validated['zoom_link'] ?? null,
                    'yt_link' => $validated['yt_link'] ?? null,
                    'schedule' => $validated['schedule'] ?? null,
                    'is_active' => $validated['active_class'] ?? true,
                ];

                if ($request->hasFile('poster')) {
                    $path = $request->file('poster')->store('posters', 'public');
                    $courseData['poster'] = $path;
                }

                if ($product->courseClass) {
                    $product->courseClass->update($courseData);
                } else {
                    $product->courseClass()->create($courseData);
                }
            }
        });

        return redirect()->route('products.index')
            ->with('success', 'Product updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        $product->features()->delete();
        $product->courseClass()->delete();
        $product->delete();

        return redirect()->route('products.index')
            ->with('success', 'Product deleted successfully.');
    }
}
