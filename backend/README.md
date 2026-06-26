# 🚀 Mahmoud Platform: Enterprise Backend Core
### Sovereign Multi-Vendor Ecosystem | Hybrid Polyglot Persistence | Modular Monolith

[![Architecture: DDD](https://img.shields.io/badge/Architecture-DDD%20%2B%20Clean-blue.svg)](#)
[![PHP: 8.4](https://img.shields.io/badge/PHP-8.4-777bb4.svg)](#)
[![Laravel: 11](https://img.shields.io/badge/Laravel-11-ff2d20.svg)](#)
[![Security: ALE AES-256](https://img.shields.io/badge/Security-ALE%20AES--256-green.svg)](#)

---

## 🏛 Engineering Vision
This backend serves as the **Sovereign Digital Infrastructure** for a high-constraint, high-scale multi-vendor marketplace. Engineered to match the standards of Tier-1 global tech firms (Amazon/Stripe), it prioritizes **Zero Cognitive Load (ZCL)** for consumers and **Sovereign Operational Control** for merchants.

## 🛠 Strategic Technology Stack
- **Framework**: Laravel 11 + Octane (RoadRunner) for sub-millisecond response latency.
- **Relational Core**: PostgreSQL 16 (ACID-compliant transactions for Finance & Identity).
- **Flexible Catalog**: MongoDB Atlas (Schema-less document store for dynamic product attributes).
- **Real-time Layer**: Laravel Echo + Redis (WebSockets for bidding and chat).
- **Search Engine**: ElasticSearch (Planned for Phase 9 - Global Discovery).

---

## 🏗 Modular Architecture (DDD)
The system is divided into bounded contexts to ensure strict separation of concerns and high maintainability:

| Module | Purpose | Data Store |
| :--- | :--- | :--- |
| **Identity** | Centralized Auth, RS256 JWT, RBAC & Multi-tenancy | PostgreSQL |
| **Catalog** | Dynamic Product Engine, AR/3D Meta-data storage | MongoDB |
| **Bidding** | Reverse-Bidding engine & Product Request lifecycle | PostgreSQL |
| **Marketplace** | Merchant sovereignty, multi-store & staff management | PostgreSQL |
| **Financial** | Double-entry ledger, Payment Bridge & Invoicing | PostgreSQL |
| **Logistics** | Real-time tracking, Shipping State Machine | PostgreSQL |
| **Communication** | Unified Notification Dispatcher & Real-time Chat | PostgreSQL |

---

## 🛡 Security & Forensic Integrity
- **ALE (Application Level Encryption)**: Sensitive PII (Personally Identifiable Information) is encrypted using AES-256-GCM before hitting the database.
- **Fortified Headers**: HSTS, CSP, and XSS-Protection injected via global middleware.
- **Rate Limiting**: Intelligent throttling to prevent DoS and Brute Force attacks.
- **Forensic Audit**: Immutable transaction logs for all financial and state-changing events.

---

## 🚀 Getting Started (Enterprise Deployment)

### Prerequisites
- Docker Desktop (WSL2 recommended)
- PHP 8.4 (Local for linting)
- Composer 2.7+

### Local Development
```bash
# 1. Clone & Setup
git clone https://github.com/mahmoudkaradamour/mahmoud-platform.git
cd backend

# 2. Environment Configuration
cp .env.example .env # Ensure MongoDB Atlas URI is set

# 3. Start Sovereign Environment
docker compose up -d

# 4. Dependency Injection & Migrations
docker compose exec app composer install
docker compose exec app php artisan migrate
```

---

## 📜 Documentation Index
All technical blueprints are managed as code within the Monorepo:
- [System Architecture](file:///docs/01-technical-documentation/02-architecture/system_overview.md)
- [API Specification (V1)](file:///docs/01-technical-documentation/04-backend/api_specification.md)
- [Security Audit Report](file:///docs/01-technical-documentation/06-security/security_testing.md)
- [Database Modeling](file:///docs/01-technical-documentation/03-data/database_overview.md)

---
**Lead Architect**: Mahmoud Karadamour  
**License**: Proprietary / Sovereign Enterprise Standard
