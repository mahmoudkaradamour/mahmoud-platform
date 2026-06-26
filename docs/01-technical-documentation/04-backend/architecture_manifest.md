# Backend Architecture Manifest (V1)

## 1. Modular Monolith Strategy
To balance deployment speed with microservice scalability, the platform uses a **Modular Monolith** pattern. Each directory under `app/Modules` represents a **Bounded Context** that owns its own:
- **Domain Layer**: Core entities and business invariants.
- **Application Layer**: Use-cases (Actions) and Data Transfer Objects (DTOs).
- **Infrastructure Layer**: DB Models, external service clients, and persistence implementations.
- **Presentation Layer**: Controllers and API Resources.

## 2. Polyglot Persistence Layer
We reject the "One Size Fits All" database approach:
- **PostgreSQL**: Used for all transactional data where ACID compliance is non-negotiable (Finance, User Identity, Multi-store Ownership).
- **MongoDB**: Used for high-velocity, flexible data (Product Catalog, AR metadata, Social Feed) to avoid "Schema Rigidity".
- **Redis**: Used for transient data (Session, Cache, Notification Queue, WebSocket state).

## 3. Communication Patterns
- **Sync (REST)**: Internal module calls or Frontend-to-Backend V1 API.
- **Async (Broadcasting)**: Laravel Echo + Redis for real-time bid updates and push notifications.
- **Event-Driven**: Internal Laravel Events are used to decouple modules (e.g., `OrderPlaced` in Financial triggers `ShipmentCreated` in Logistics).

## 4. DX (Developer Experience) Guidelines
- **DTOs Only**: No raw request data should ever pass into an Action.
- **Resources Only**: No Eloquent models should ever be returned in a Controller response.
- **Action Injection**: Logic is encapsulated in Actions, which are injected into Controllers or Commands.
