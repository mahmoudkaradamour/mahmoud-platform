# Database Migration & Evolution

## 1. Relational Migration (PostgreSQL)
*   **Tool**: Using Prisma Migrations or Flyway.
*   **Strict Rule**: No manual schema changes. Every change must be a versioned SQL/TS migration file.
*   **Zero-Downtime**: Additions are made first, then code is updated, then old columns are removed (Expand-Contract pattern).

## 2. NoSQL Evolution (MongoDB)
*   **Versioned Documents**: Every product document contains a `schema_version` field.
*   **Lazy Migration**: Documents are updated to the latest schema only when they are read/written.

## 3. Data Integrity Audit
*   Monthly automated scripts to verify that references between PostgreSQL (Orders) and MongoDB (Products) are still valid.
