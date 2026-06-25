# Recommendation Engine Architecture

## 1. Overview
The recommendation engine is designed to increase average order value (AOV) and user engagement by surfacing products relevant to the user's intent and history.

## 2. Algorithms
*   **Collaborative Filtering**: "Users who bought this also bought..." - based on cross-user behavior.
*   **Content-Based Filtering**: "More items like this" - based on product attributes (category, brand, price range).
*   **Hybrid Model**: Combining both behavior and attributes to overcome the "Cold Start" problem for new users/products.

## 3. Data Pipelines
*   **Real-time Tracking**: Capturing view, click, and purchase events via Kafka.
*   **Feature Store**: Storing processed user and product vectors for low-latency retrieval.
*   **Model Serving**: Light-weight inference service or pre-calculated recommendations stored in Redis.

## 4. Personalized Discovery
*   Homepage sections: "Picked for you", "Recently viewed", "Trending in your area".
*   Search re-ranking: Boosting products that match the user's preferred brands or price brackets.
