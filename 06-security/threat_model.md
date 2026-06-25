# Threat Model & Risk Assessment

## 1. Methodology: STRIDE
We evaluate every core service against the STRIDE model:
*   **Spoofing**: Identity theft, Session hijacking.
*   **Tampering**: Price manipulation, Inventory hacking.
*   **Repudiation**: Denying a payment or order.
*   **Information Disclosure**: Leaking PII, exposing merchant data.
*   **Denial of Service (DoS)**: Crashing the checkout or live stream.
*   **Elevation of Privilege**: Sellers accessing Admin tools.

## 2. High-Risk Scenarios
| Scenario | Impact | Mitigation |
| :--- | :--- | :--- |
| **Price Tampering** | High | Server-side validation of price at every stage of the checkout. |
| **Live Stream Hijack** | Medium | Secure token-based access to streaming keys. |
| **SQL Injection** | High | Use of ORMs (Prisma/TypeORM) and parameterized queries. |
| **MFA Bypass** | High | Strict TOTP validation and rate limiting on attempts. |
