# Database Strategy & Overview

## 1. Dual-Database Philosophy
We utilize a hybrid approach to leverage the strengths of both Relational and NoSQL systems.

### PostgreSQL (The Source of Truth)
*   **Role**: Financial transactions, Identity, ACL, Order history.
*   **Why**: Strong ACID compliance, complex relational joins, and strict schema validation.
*   **Integrity**: Foreign keys and constraints ensure data consistency across sellers and users.

### MongoDB (The Flex Catalog)
*   **Role**: Product Catalog, Dynamic Attributes, User Reviews, Meta-data.
*   **Why**: Horizontal scalability, flexible schema for diverse product categories (from electronics to fashion), and fast read performance for document-based data.

## 2. Data Ownership Map
| Data Entity | Primary Database | Strategy |
| :--- | :--- | :--- |
| Users / Profiles | PostgreSQL | Relational for security/auth |
| Product Details | MongoDB | Document for flexibility |
| Inventory Levels | PostgreSQL | Transactional for accuracy |
| Orders & Invoices | PostgreSQL | Transactional for legal/audit |
| Search Index | ElasticSearch | Denormalized from Mongo/Postgres |
| Session / Cache | Redis | Memory for performance |
