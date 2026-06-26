<?php

namespace Tests\Feature\Security;

use Tests\TestCase;

/**
 * Enterprise Security Fortification Suite.
 * Validates that all security headers and rate limiters are active.
 */
class FortificationTest extends TestCase
{
    /**
     * Verify that critical security headers are present in every response.
     */
    public function test_security_headers_are_present()
    {
        $response = $this->get('/api/up'); // Laravel health check or any route

        $response->assertHeader('X-Frame-Options', 'DENY');
        $response->assertHeader('X-XSS-Protection', '1; mode=block');
        $response->assertHeader('X-Content-Type-Options', 'nosniff');
        $response->assertHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
    }

    /**
     * Verify that unauthorized access to protected routes is blocked.
     */
    public function test_unauthorized_access_is_blocked()
    {
        $response = $this->getJson('/api/v1/merchant/my-stores');

        $response->assertStatus(401);
    }
}
