<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            [
            'name'=> "Jasa Sunting",
            'description' => "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            ],
            [
            'name'=> 'Kelas Sunting',
            'description' => "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            ],
            [
            'name'=> 'Jasa Kepewaraan',
            'description' => "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            ],
            [
            'name'=> 'Kelas Kepewaraan',
            'description' => "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            ],
        ];

        foreach ($categories as $category) {
            Category::create($category);
            // slug otomatis kebentuk dari model
        }
    }
}
