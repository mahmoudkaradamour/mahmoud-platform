<?php

namespace App\Modules\Identity\Presentation\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'account_type' => $this->account_type,
            'store_id' => $this->store_id,
            'created_at' => $this->created_at,
        ];
    }
}
