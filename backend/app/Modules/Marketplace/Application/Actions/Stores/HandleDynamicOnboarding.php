<?php

namespace App\Modules\Marketplace\Application\Actions\Stores;

use App\Modules\Platform\Infrastructure\Models\Setting;
use Illuminate\Support\Facades\Storage;

/**
 * Dynamic Merchant Onboarding Engine.
 * Processes registrations based on Admin-defined forms.
 */
class HandleDynamicOnboarding
{
    public function getOnboardingForm(): array
    {
        $setting = Setting::where('key', 'merchant_onboarding_form')->first();
        return $setting ? $setting->value : [
            ['name' => 'tax_id', 'label' => 'الرقم الضريبي', 'type' => 'text', 'required' => true],
            ['name' => 'commercial_reg', 'label' => 'السجل التجاري', 'type' => 'file', 'required' => true],
        ];
    }

    public function submitApplication(int $userId, array $formData): string
    {
        // 1. Process File Uploads
        foreach ($formData as $key => $value) {
            if ($value instanceof \Illuminate\Http\UploadedFile) {
                $formData[$key] = $value->store('onboarding/' . $userId);
            }
        }

        // 2. Create Application Entry (In Marketplace Stores Table as PENDING)
        // Store logic here...

        return 'APPLICATION_SUBMITTED';
    }
}
