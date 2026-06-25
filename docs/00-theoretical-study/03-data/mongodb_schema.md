# MongoDB Schema (Product Catalog)

## 1. Collection: `products`
The product document is designed for performance and flexibility.

```json
{
  "_id": "uuid",
  "store_id": "uuid",
  "name": { "en": "iPhone 15", "ar": "آيفون ١٥" },
  "slug": "iphone-15",
  "category_id": "uuid",
  "brand": "Apple",
  "base_price": 999.00,
  "currency": "USD",
  "status": "published",
  "attributes": [
    { "key": "color", "value": "Blue" },
    { "key": "storage", "value": "128GB" }
  ],
  "media": {
    "images": ["url1", "url2"],
    "video": "url3",
    "3d_model": "url4"
  },
  "global_sync": {
    "source": "apple.com",
    "last_updated": "timestamp"
  },
  "metadata": {
    "view_count": 1050,
    "avg_rating": 4.8
  }
}
```

## 2. Collection: `categories`
*   Hierarchical structure using parent-child relationships or materialized paths.

## 3. Collection: `reviews`
*   Linked to `product_id` and `user_id`.
*   Includes sentiment analysis scores.
