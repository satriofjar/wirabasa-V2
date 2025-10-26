<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Testimonial;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TestimonialController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $testimonies = Testimonial::all();
        return Inertia::render('dashboard/testimony/testimonies', [
            'testimonies' => $testimonies,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('dashboard/testimony/createTestimony');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|max:100',
            'position' => 'required|max:100',
            'message' => 'required|max:100',
        ]);

        Testimonial::create($validated);
        return redirect()->route('testimony.create')-> with("success", "Testimony created successfully");
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
    public function edit(Testimonial $testimony)
    {
        return Inertia::render('dashboard/testimony/editTestimony', [
            'testimony'=> $testimony,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Testimonial $testimony)
    {
        $validated = $request->validate([
            'name' => 'required|max:100',
            'position' => 'required|max:100',
            'message' => 'required|max:100',
        ]);

        $testimony->update($validated);
        return redirect()->route('testimony.edit', $testimony->id)-> with("success", "Testimony edited successfully");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Testimonial $testimony)
    {
        $testimony->delete();

        return redirect()->route('testimony.index')->with("success", "Data deleted successfully");
    }
}
