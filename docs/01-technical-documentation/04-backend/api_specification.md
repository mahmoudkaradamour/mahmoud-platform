# Enterprise API Specification (V1)

## Base URL
`https://api.mahmoud-platform.com/api/v1`

## Response Envelope Standard
All API responses follow a strict enterprise envelope to ensure predictable parsing for the Flutter frontend:

```json
{
  "success": true,
  "data": { ... },
  "message": "Localized message",
  "errors": null
}
```

## 1. Identity & Access Management
| Method | Endpoint | Description | Auth |
| :--- | :--- | :--- | :--- |
| `POST` | `/auth/register` | User onboarding | Guest |
| `POST` | `/auth/login` | Token issuance (Sanctum) | Guest |
| `POST` | `/auth/logout` | Token revocation | Token |
| `GET` | `/auth/me` | Current profile | Token |

## 2. Product Catalog
| Method | Endpoint | Description | Auth |
| :--- | :--- | :--- | :--- |
| `GET` | `/catalog/products` | Paginated product discovery | Guest |
| `GET` | `/catalog/products/{id}` | Detailed product document | Guest |
| `POST` | `/catalog/products` | Merchant product creation | Token |

## 3. Reverse Bidding (On-Demand)
| Method | Endpoint | Description | Auth |
| :--- | :--- | :--- | :--- |
| `POST` | `/bidding/requests` | Post a new product request | Consumer |
| `POST` | `/bidding/quotes` | Submit a merchant bid | Merchant |
| `POST` | `/bidding/quotes/{id}/accept` | Accept a specific bid | Consumer |

## 4. Logistics & Tracking
| Method | Endpoint | Description | Auth |
| :--- | :--- | :--- | :--- |
| `GET` | `/logistics/track/{number}` | Public shipment tracking | Public |
| `GET` | `/logistics/my-shipments` | Personal shipment history | Token |

## 🛡 Security Implementation
- **Rate Limit**: 60 requests/minute per IP/User.
- **Header Guard**: Every response contains `Strict-Transport-Security`, `X-XSS-Protection`, and `Content-Security-Policy`.
