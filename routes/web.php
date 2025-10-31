<?php

use App\Http\Controllers\Auth\AdminAuthenticationController;
use App\Http\Controllers\Dashboard\CategoryController;
use App\Http\Controllers\Dashboard\ProductController;
use App\Http\Controllers\Dashboard\TestimonialController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LayananContoller;
use App\Http\Controllers\MidtransController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\UserProfileContoller;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/layanan', [LayananContoller::class, 'index'])->name('layanan');
Route::get('/order-product/create', [OrderController::class, 'create'])->name('order-product');
Route::get('/midtrans/payment-notification', [MidtransController::class, 'handleNotification']);


Route::middleware(['admin'])->group(function () {
    Route::prefix('dashboard')->group(function () {
        Route::get('/', function () {
            return Inertia::render('dashboard');
        })->name('dashboard');

        Route::resource('categories', CategoryController::class);
        Route::resource('products', ProductController::class);
        Route::resource('testimony', TestimonialController::class);
    });
});

Route::middleware(['auth'])->group(function () {

    Route::resource('order-product', OrderController::class);
    Route::resource('payment', PaymentController::class);
    Route::resource('user', UserProfileContoller::class);
});


require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
