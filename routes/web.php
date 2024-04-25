<?php

use App\Http\Controllers\Auth\AuthController;
use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view('welcome');
// });

Route::controller(AuthController::class)->group(function () {
    Route::get('/', 'welcomePage')
        ->middleware(['auth'])
        ->name('web.auth.welcome');
    Route::get('auth/login', 'login')
        ->middleware(['guest'])
        ->name('web.auth.login');
    Route::post('auth/login', 'doLogin')
        ->middleware(['guest'])
        ->name('web.auth.doLogin');
    Route::post('auth/logout', 'logout')
        ->middleware(['auth'])
        ->name('web.auth.logout');
});
