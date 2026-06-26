<?php

namespace Tests\Feature\Bidding;

use App\Modules\Identity\Infrastructure\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class PostProductRequestTest extends TestCase
{
    use RefreshDatabase;

    public function test_user_can_post_product_request()
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)
            ->postJson('/api/v1/bidding/requests', [
                'title' => 'iPhone 15 Pro Max',
                'description' => 'I need 256GB Titanium Blue model.',
                'budget_limit' => 1200,
            ]);

        $response->assertStatus(201)
            ->assertJson([
                'success' => true,
                'message' => 'Product request published successfully.'
            ]);

        $this->assertDatabaseHas('bidding_product_requests', [
            'title' => 'iPhone 15 Pro Max',
            'customer_id' => $user->id,
        ]);
    }
}
