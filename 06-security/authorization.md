# Authorization (RBAC & ABAC)

## 1. Role-Based Access Control (RBAC)
Hierarchy of predefined roles:
*   **Super Admin**: Full platform control.
*   **Merchant Owner**: Control over their stores and staff.
*   **Store Manager**: Daily operations (Orders, Inventory).
*   **Customer Support**: View orders, handle complaints.
*   **Sales/Social Sync**: Manage products and social postings.
*   **Customer**: Browse and buy.

## 2. Attribute-Based Access Control (ABAC)
Fine-grained rules for specific actions:
*   *Can a staff member edit a price?* -> Check if `staff.permissions` includes `EDIT_PRICE` AND `store.status` is `active`.
*   *Can a customer see a hidden category?* -> Check if `customer.segments` includes `VIP`.

## 3. Implementation
*   Middlewares check permissions at the API Gateway and Service level.
*   Frontend hides UI elements based on the user's permission set.
