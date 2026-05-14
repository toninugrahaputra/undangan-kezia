<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Guest;

class GuestController extends Controller
{
    public function show($slug)
    {
        $guest = Guest::where('slug', $slug)->firstOrFail();
        return response()->json($guest);
    }

    public function rsvp(Request $request, $slug)
    {
        $guest = Guest::where('slug', $slug)->firstOrFail();
        
        $validated = $request->validate([
            'is_attending' => 'required|boolean',
            'message' => 'nullable|string',
            'attendance_count' => 'nullable|integer|min:0',
        ]);

        $guest->update($validated);

        return response()->json([
            'message' => 'RSVP submitted successfully',
            'guest' => $guest
        ]);
    }
}
