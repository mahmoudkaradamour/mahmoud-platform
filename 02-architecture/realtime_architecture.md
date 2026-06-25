# Real-time Sync & WebSocket Design

## 1. Interaction Model
Real-time capabilities are critical for Live Commerce and immediate price updates.

### WebSocket Topics
*   `/live/{sellerId}`: Stream metadata, viewer count, reactions.
*   `/chat/{orderId}`: Peer-to-peer support and transaction chat.
*   `/price-updates`: Real-time currency/product price broadcast.

## 2. Technical Stack
*   **Signaling**: Socket.io or native WebSockets.
*   **State**: Redis Pub/Sub for cross-instance message broadcasting.
*   **Fallback**: Long polling for extremely unstable connections (Low-end device support).

## 3. Consistency Guarantee
While real-time is for "fast" updates, the **Transactional Log (PostgreSQL)** remains the single source of truth for all final states.
