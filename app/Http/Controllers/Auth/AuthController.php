<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        return inertia('Auth/Login');
    }

    public function doLogin(Request $request)
    {
        $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (auth('web')->attempt($request->only('email', 'password'))) {

            return redirect()->route('web.auth.welcome');
        }

        return back()->with('error', 'Invalid credentials');
    }

    public function logout(Request $request)
    {
        auth('web')->logout();

        return redirect()->route('web.auth.login');
    }

    public function welcomePage(Request $request)
    {
        return inertia('Welcome');
    }
}
