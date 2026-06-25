# Service Communication Protocols (Sync vs Async)

## 1. Overview
To ensure high availability and low latency, we distinguish between synchronous (blocking) and asynchronous (non-blocking) communication based on the business criticality.

## 2. Synchronous Communication (gRPC / REST)
Used when an immediate response is required for the user to proceed.

| Source | Target | Method | Use Case |
| :--- | :--- | :--- | :--- |
| Gateway | Auth Service | gRPC | Login / Token Validation |
| Order Service | Inventory Service | gRPC | Stock Reservation during Checkout |
| Payment Service | Bank Gateway | REST/HTTPS | Real-time Transaction Processing |
| Frontend | Catalog Service | GraphQL/REST | Product Details Retrieval |

## 3. Asynchronous Communication (Event-Driven via Kafka)
Used for tasks that can happen in the background without making the user wait.

| Event | Source | Consumers | Side Effect |
| :--- | :--- | :--- | :--- |
| `order.placed` | Order Service | Notification Service | Send Email/SMS to Customer |
| `order.placed` | Order Service | Social Sync Service | Post update to WhatsApp Business |
| `product.updated`| Catalog Service | Search Service | Re-index in ElasticSearch |
| `stream.started` | Live Service | Follower Service | Notify all followers via Push |

## 4. Performance Safeguards
*   **Timeouts**: Maximum 2 seconds for gRPC calls.
*   **Retries**: 3 retries with exponential backoff for Kafka consumers.
*   **Idempotency**: Every event must have a `unique_event_id` to prevent double-processing.
