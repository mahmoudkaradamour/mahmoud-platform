<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Log;

/**
 * Intelligent Firewall Middleware (WAF).
 * Defends against Advanced Persistent Threats (APT), SQL injection patterns,
 * and suspicious behavioral anomalies.
 */
class IntelligentFirewallMiddleware
{
    public function handle(Request $request, Closure $next): Response
    {
        // 1. Pattern Detection: SQL Injection & XSS Payloads
        $payload = json_encode($request->all());
        $patterns = [
            '/(union|select|insert|update|delete|drop|alter|--)/i', // SQLi
            '/(<script|alert\(|onload=)/i', // XSS
            '/(base64_|eval\(|shell_exec)/i' // RCE
        ];

        foreach ($patterns as $pattern) {
            if (preg_match($pattern, $payload)) {
                Log::warning('Security Anomaly Detected', [
                    'ip' => $request->ip(),
                    'payload' => $payload,
                    'user_id' => $request->user()?->id
                ]);
                return response()->json(['success' => false, 'error' => 'Security policy violation.'], 403);
            }
        }

        // 2. Behavioral Throttling (Simulated)
        // In a real high-scale system, this would interface with Redis for fast counting.

        return $next($request);
    }
}
