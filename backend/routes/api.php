<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\GuestController;

Route::get('/guests/{slug}', [GuestController::class, 'show']);
Route::post('/guests/{slug}/rsvp', [GuestController::class, 'rsvp']);
