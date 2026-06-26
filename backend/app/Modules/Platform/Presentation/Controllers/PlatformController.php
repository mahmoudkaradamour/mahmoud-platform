<?php

namespace App\Modules\Platform\Presentation\Controllers;

use App\Http\Controllers\Controller;
use App\Modules\Platform\Infrastructure\Models\Setting;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

/**
 * Enterprise Platform Control API.
 * Managed by Super Admins to govern global system behavior.
 */
class PlatformController extends Controller
{
    public function getSettings(string $group): JsonResponse
    {
        $settings = Setting::where('group', $group)->get();
        return response()->json([
            'success' => true,
            'data' => $settings
        ]);
    }

    public function updateSetting(Request $request, string $key): JsonResponse
    {
        // Permission check for Super Admin only
        if ($request->user()->account_type !== 'ADMIN') {
            return response()->json(['success' => false, 'error' => 'Unauthorized'], 403);
        }

        $setting = Setting::where('key', $key)->firstOrFail();
        $setting->update(['value' => $request->input('value')]);

        return response()->json([
            'success' => true,
            'message' => 'Platform configuration updated.'
        ]);
    }
}
