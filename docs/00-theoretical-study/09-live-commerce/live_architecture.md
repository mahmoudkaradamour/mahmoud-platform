# Live Commerce Infrastructure

## 1. Streaming Tech Stack
*   **Protocol**: HLS (for compatibility) or WebRTC (for sub-second latency).
*   **Provider**: Mux, AWS Interactive Video Service (IVS), or self-hosted Ant Media Server.
*   **Infrastructure**: Edge nodes to ensure low-latency video delivery in Syria/MENA.

## 2. Interaction Engine (Real-time)
*   **Socket.io/Centrifugo**: For chat messages, reactions (likes/hearts), and floating product cards.
*   **Redis**: For tracking "Real-time viewer count" and "Active buyers".

## 3. "Buy Now" Integration
*   While a seller features a product, a "Buy Now" button pops up on the viewers' screen.
*   Clicking allows "Instant Checkout" without leaving the stream (Picture-in-Picture mode).
