# API Specification & Standards

## 1. Design Philosophy
*   **RESTful for Resources**: Use standard HTTP methods (GET, POST, PUT, DELETE, PATCH).
*   **GraphQL for Complex Queries**: Use GraphQL for the "Customer Discovery" phase to allow the Flutter app to fetch only the data it needs (e.g., product list with specific attributes).
*   **Versioned**: All APIs prefixed with `/v1/`.

## 2. Core REST Endpoints (Sample)

### Identity Service
*   `POST /v1/auth/register`: Register new user/merchant.
*   `POST /v1/auth/login`: Issue JWT pair.
*   `POST /v1/auth/mfa/verify`: Verify TOTP/SMS code.

### Catalog Service
*   `GET /v1/products`: List products (with ElasticSearch query params).
*   `GET /v1/products/{id}`: Detailed product info.
*   `POST /v1/products/import`: Upload Excel for bulk ingestion.

### Order Service
*   `POST /v1/orders`: Create new order.
*   `GET /v1/orders/{id}`: Order status & history.
*   `PATCH /v1/orders/{id}/status`: Admin/Seller update status.

## 3. GraphQL Schema (Preview)
```graphql
type Product {
  id: ID!
  name: LocalizedString!
  basePrice: Float!
  attributes: [Attribute!]
  media: Media!
  seller: Store!
}

type Query {
  searchProducts(query: String, filter: ProductFilter): [Product]
  getLiveStreams: [LiveStream]
}
```

## 4. Response Format
Standard JSON wrapper:
```json
{
  "success": true,
  "data": { ... },
  "metadata": { "timestamp": "...", "version": "v1" }
}
```
