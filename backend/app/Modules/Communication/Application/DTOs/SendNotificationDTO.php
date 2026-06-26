<?php

namespace App\Modules\Communication\Application\DTOs;

/**
 * Data Transfer Object for Dispatching Notifications.
 * Ensures uniform structure across all system alerts.
 */
class SendNotificationDTO
{
    public function __construct(
        public readonly int $userId,
        public readonly string $type,
        public readonly string $title,
        public readonly string $content,
        public readonly array $data = []
    ) {}

    /**
     * Factory method for creating DTO from varied system events.
     */
    public static function fromEvent(int $userId, string $type, string $title, string $content, array $data = []): self
    {
        return new self($userId, $type, $title, $content, $data);
    }
}
