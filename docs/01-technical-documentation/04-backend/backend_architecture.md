# Backend Architecture: Laravel Clean Patterns

## 1. Architectural Strategy
We utilize a **Domain-Driven Design (DDD)** approach within Laravel to prevent the framework from becoming a "Big Ball of Mud".

### Core Layers
*   **Domain Layer**: Pure business logic (Entities, Value Objects). No dependency on Laravel.
*   **Application Layer**: Laravel Services and Actions that coordinate domain logic.
*   **Infrastructure Layer**: Eloquent Models, Mailers, and External API integrations.
*   **Presentation Layer**: API Controllers and API Resources (Dyson format).

## 2. Advanced Laravel Patterns
*   **Service-Repository Pattern**: For abstracting data access and ensuring testability.
*   **Action Classes**: To handle single-responsibility tasks (e.g., `PlaceOrderAction`, `UpdateStockAction`).
*   **Custom Form Requests**: For strict input validation before reaching the controller.
*   **Middleware Chains**: For centralized authentication, logging, and performance monitoring.

## 3. High-Performance Configuration
*   **Octane**: Enables pre-booting the Laravel application to handle requests in milliseconds.
*   **Horizon**: Provides a monitoring dashboard for background queues, ensuring 100% processing of critical jobs like payments and social sync.
