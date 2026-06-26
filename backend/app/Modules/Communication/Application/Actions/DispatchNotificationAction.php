<?php

namespace App\Modules\Communication\Application\Actions;

use App\Modules\Communication\Application\DTOs\SendNotificationDTO;
use App\Modules\Communication\Infrastructure\Models\Notification;

/**
 * Domain Action for Dispatching a Notification.
 * In a production environment, this would also trigger Push Notifications (FCM)
 * and Broadcasters (WebSockets).
 */
class DispatchNotificationAction
{
    public function execute(SendNotificationDTO $dto): Notification
    {
        return Notification::create([
            'user_id' => $dto->userId,
            'type' => $dto->type,
            'title' => $dto->title,
            'content' => $dto->content,
            'data' => $dto->data,
        ]);
    }
}
