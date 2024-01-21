<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProfileController;
use App\Models\news;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', fn() => Inertia::render('Homepage', ['data' => news::all()]))->name('homepage');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware('auth')->group(function () {
    // Dashboard Route
    Route::get('/dashboard', [DashboardController::class, 'index'])->middleware('verified')->name('dashboard');
    Route::get('/dashboard/edit/{id}', [DashboardController::class, 'edit'])->name('formEdit');
    Route::post('/dashboard/store', [DashboardController::class, 'store'])->name('createNews');
    Route::post('/dashboard/edit', [DashboardController::class, 'update'])->name('editNews');
    Route::post('/dashboard', [DashboardController::class, 'destroy'])->name('deleteNews');
});


require __DIR__ . '/auth.php';
