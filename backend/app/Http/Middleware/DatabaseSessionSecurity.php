<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpFoundation\Response;

/**
 * Middleware to bridge Application Identity with PostgreSQL Row-Level Security.
 * Sets the 'app.current_user_id' session variable in the database.
 */
class DatabaseSessionSecurity
{
    public function handle(Request $request, Closure $next): Response
    {
        if ($user = $request->user()) {
            // Fortify DB Session with the authenticated user's ID for RLS enforcement
            DB::statement("SET app.current_user_id = '{$user->id}';");
        } else {
            // Default for guests to prevent unauthorized leaks
            DB::statement("SET app.current_user_id = '0';");
        }

        return $next($request);
    }
}
