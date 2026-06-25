# Microservices Architecture

## 1. Service Breakdown
Each service is independently scalable and owns its own data partition.

| Service Name | Responsibility | Database |
| :--- | :--- | :--- |
| **Auth Service** | Identity, RBAC, MFA, JWT management. | PostgreSQL |
| **Catalog Service** | Product listings, categories, global sync. | MongoDB |
| **Order Service** | Transaction lifecycle, state machine. | PostgreSQL |
| **Payment Service** | Multi-bank abstraction, settlement logic. | PostgreSQL |
| **Inventory Service** | Real-time stock, multi-warehouse support. | PostgreSQL |
| **Live Commerce Service** | Streaming orchestration, real-time chat. | Redis/Websocket |
| **Social Sync Service** | WhatsApp/FB/IG integration worker. | PostgreSQL |
| **Search Service** | Indexing and relevance scoring. | ElasticSearch |
| **Notification Service** | Push, SMS, Email, In-app alerts. | PostgreSQL |

## 2. Communication Strategy
*   **Synchronous**: gRPC/REST for critical request-response paths (e.g., Auth, Checkout).
*   **Asynchronous**: Kafka/RabbitMQ for background tasks (e.g., Indexing, Social Sync).
*   **Real-time**: WebSockets for Live interaction and status updates.
