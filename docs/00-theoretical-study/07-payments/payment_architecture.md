# Payment Architecture & Abstraction

## 1. The Abstraction Layer
Given the fragmented payment landscape in Syria/MENA, we use a **Provider Pattern**.

```mermaid
graph TD
    A[Checkout] --> B[Payment Gateway Interface]
    B --> C[Provider: Local Bank A]
    B --> D[Provider: Digital Wallet B]
    B --> E[Provider: International (Stripe/Paypal)]
    B --> F[Provider: Cash on Delivery]
```

## 2. Core Components
*   **Payment Orchestrator**: Routes requests to the correct provider and handles status callbacks.
*   **Ledger**: Records every transaction attempt (Pending, Success, Failed, Refunded).
*   **Vault**: Securely stores payment tokens (never raw card data) for "saved cards" functionality.

## 3. Security
*   **PCI-DSS Mindset**: All sensitive data is handled outside our main DB or via tokens.
*   **Webhook Verification**: Every callback from a bank is verified with HMAC signatures.
