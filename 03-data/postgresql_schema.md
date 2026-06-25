# PostgreSQL Schema (Core Entities)

## 1. Schema: `identity`
*   `users`: (uuid, email, phone, password_hash, status, created_at)
*   `roles`: (id, name, permissions[])
*   `user_roles`: (user_id, role_id)

## 2. Schema: `marketplace`
*   `merchants`: (uuid, owner_id, business_name, legal_info, settings)
*   `stores`: (uuid, merchant_id, name, branding_config, status)
*   `staff`: (id, store_id, user_id, role_id)

## 3. Schema: `sales`
*   `orders`: (uuid, customer_id, store_id, status, total_amount, currency)
*   `order_items`: (id, order_id, product_id, price, quantity)
*   `invoices`: (uuid, order_id, sn, qr_data, pdf_link, generated_at)

## 4. Schema: `payments`
*   `transactions`: (uuid, order_id, amount, provider, provider_ref, status)
*   `settlements`: (id, merchant_id, amount, bank_details, processed_at)

## 5. Indexing Strategy
*   B-Tree on all UUIDs and Foreign Keys.
*   GIN/GIST for searching in specialized types (if needed).
*   Partitioning for `orders` and `transactions` by `created_at` (yearly/monthly).
