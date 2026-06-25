# Detailed Tech Stack (Enterprise Standard)

## 1. Backend - PHP Laravel Ecosystem
*   **Core Framework**: Laravel 11.x (LTS mindset).
*   **Performance Engine**: Laravel Octane (Powered by Swoole or RoadRunner).
*   **API Security**: Laravel Sanctum & Fortify for MFA.
*   **Queue Management**: Laravel Horizon (Redis-based background jobs).
*   **ORM**: Eloquent (Advanced relationships & Multi-tenancy support).
*   **Admin/Seller UI**: Laravel Inertia.js with React (for seamless SPA experience).

## 2. Frontend - Flutter Ecosystem
*   **Core Framework**: Flutter (Stable Channel).
*   **State Management**: `flutter_bloc`.
*   **Communication**: `dio` with `retrofit`.

## 3. Storage & Databases
*   **Relational**: PostgreSQL (Transactions, Auth, Billing).
*   **NoSQL**: MongoDB (Product Catalog, Dynamic Specs).
*   **Caching**: Redis Cluster (Sessions, Live views).
*   **Search**: ElasticSearch (Advanced Discovery).

## 4. Infrastructure & Real-time
*   **Web Server**: Nginx with PHP-FPM / Swoole.
*   **Real-time**: Laravel Echo with Soketi (Self-hosted Pusher replacement).
*   **Containerization**: Docker & Kubernetes (K8s).
