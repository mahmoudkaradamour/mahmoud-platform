<?php

namespace App\Modules\Communication\Presentation\Controllers;

use App\Http\Controllers\Controller;
use App\Modules\Communication\Infrastructure\Models\Notification;
use App\Modules\Communication\Presentation\Resources\NotificationResource;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

/**
 * Controller for managing User-facing Notifications.
 */
class NotificationController extends Controller
{
    /**
     * Retrieve all notifications for the authenticated user.
     */
    public function index(Request $request): JsonResponse
    {
        $notifications = Notification::where('user_id', $request->user()->id)
            ->latest()
            ->paginate(20);

        return response()->json([
            'success' => true,
            'data' => NotificationResource::collection($notifications)
        ]);
    }

    /**
     * Mark a specific notification as read.
     */
    public function markAsRead(string $id, Request $request): JsonResponse
    {
        $notification = Notification::where('user_id', $request->user()->id)
            ->findOrFail($id);

        $notification->update(['read_at' => now()]);

        return response()->json([
            'success' => true,
            'message' => 'Notification marked as read.'
        ]);
    }
}
