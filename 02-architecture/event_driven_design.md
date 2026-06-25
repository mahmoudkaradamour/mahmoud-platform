# Event-Driven Design & Event Schema

## 1. Core Event Flow
We use an event-driven approach to ensure the system is responsive and resilient.

### Key Events
| Event Name | Source | Consumers | Action |
| :--- | :--- | :--- | :--- |
| `order.created` | Order Service | Payment Service, Inventory Service | Reserve stock, Initiate payment |
| `product.published` | Catalog Service | Search Service, Social Sync | Update index, Post to FB/WhatsApp |
| `payment.completed` | Payment Service | Order Service, Notification Service | Mark paid, Notify user |
| `stock.low` | Inventory Service | Notification Service (Seller) | Alert seller for restock |

## 2. Retry & Dead Letter Strategy
*   **Idempotency**: All consumers must be idempotent to handle duplicate events.
*   **Exponential Backoff**: Failed event processing is retried with increasing delays.
*   **DLQ (Dead Letter Queue)**: After $N$ failures, events are moved to a DLQ for manual inspection and debugging.
