<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Modules\Financial\Application\Actions\Invoices\GenerateDynamicInvoice;

/**
 * Financial Ledger & Invoicing Unit Test.
 * Real verification of the Dynamic Invoicing Engine logic.
 */
class FinancialLedgerTest extends TestCase
{
    public function test_dynamic_invoice_generation_logic()
    {
        $action = new GenerateDynamicInvoice();
        $orderData = ['id' => 12345];
        $adminConfig = ['language' => 'en', 'show_tax' => true, 'show_logo' => true, 'default_logo' => 'std.png'];
        $merchantOverrides = ['language' => 'ar'];

        $result = $action->execute($orderData, $adminConfig, $merchantOverrides);

        $this->assertEquals('ar', $result['language']); // Override check
        $this->assertArrayHasKey('qr_payload', $result);
        $this->assertTrue($result['show_tax']);
    }
}
