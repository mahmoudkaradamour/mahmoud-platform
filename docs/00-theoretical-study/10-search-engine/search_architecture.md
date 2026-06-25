# Search Architecture (ElasticSearch)

## 1. Indexing Strategy
*   **Source**: MongoDB (Product documents).
*   **Sync**: Change Data Capture (CDC) via Kafka Connect or custom triggers.
*   **Language Support**: Dual-language indexing (Arabic & English) with specific analyzers (e.g., `arabic` analyzer for root word stemming).

## 2. Search Capabilities
*   **Fuzzy Search**: Handling typos in product names.
*   **Autocomplete**: Real-time suggestions as the user types.
*   **Synonyms**: Linking "Mobile" with "Phone", "آيفون" with "iPhone".
*   **Filters**: Dynamic facets based on category attributes (e.g., RAM size for laptops, Color for clothes).

## 3. Scaling
*   Sharding by `category_id` or `region` to handle millions of products.
*   Read replicas for high query throughput.
