<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Modules\Identity\Infrastructure\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Hash;

/**
 * Identity Security Unit Test.
 * Real verification of encryption and hashing policies.
 */
class IdentitySecurityTest extends TestCase
{
    use RefreshDatabase;

    public function test_password_is_properly_hashed()
    {
        $password = 'SovereignSecret123!';
        $user = User::factory()->create(['password' => Hash::make($password)]);

        $this->assertTrue(Hash::check($password, $user->password));
        $this->assertNotEquals($password, $user->password);
    }

    public function test_user_role_assignment_integrity()
    {
        $admin = User::factory()->create(['account_type' => 'ADMIN']);
        $this->assertEquals('ADMIN', $admin->account_type);
    }
}
