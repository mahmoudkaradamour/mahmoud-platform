<?php

namespace App\Modules\Financial\Application\Actions\Invoices;

/**
 * Sovereign Dynamic Invoice Engine.
 * Allows Admin to define templates and merchants to override specific fields.
 */
class GenerateDynamicInvoice
{
    public function execute(array $orderData, array $adminConfig, array $merchantOverrides = []): array
    {
        // 1. Merge Admin Standard with Merchant Customizations
        $config = array_merge($adminConfig, $merchantOverrides);

        // 2. Build Invoice Structure
        return [
            'id' => 'INV-' . time(),
            'language' => $config['language'] ?? 'ar',
            'theme' => $config['theme'] ?? 'modern',
            'show_tax' => $config['show_tax'] ?? true,
            'merchant_logo' => $config['show_logo'] ? ($merchantOverrides['logo'] ?? $adminConfig['default_logo']) : null,
            'qr_payload' => base64_encode(json_encode(['order_id' => $orderData['id'], 'hash' => sha1($orderData['id'])])),
            'footer' => $config['footer_text'] ?? 'Sovereign Receipt',
        ];
    }
}
