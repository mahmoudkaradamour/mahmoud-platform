# System Constraints & Environment

## 1. Hardware Constraints (Low-End Devices)
*   **Memory Management**: Target devices may have as little as 2GB RAM. Flutter implementation must be extremely efficient with memory (dispose of controllers, optimize image cache).
*   **CPU Sensitivity**: Heavy animations must be offloaded or simplified for older processors.
*   **Storage**: App size must be kept minimal (target < 50MB for initial download).

## 2. Network Constraints (MENA / Syria)
*   **Bandwidth**: Average speeds can be low. Assets must be compressed; lazy loading is mandatory.
*   **Latency**: High latency to international servers. CDN usage and edge computing are critical.
*   **Offline Capability**: Essential features (browsing cached items, adding to cart) must work offline.

## 3. Market & Legal Constraints
*   **Currency Volatility**: Real-time price updates (multi-currency support) are mandatory.
*   **Payment fragmentation**: No single dominant payment provider. The system must support manual bank transfers, digital wallets, and local cards.
*   **Logistics**: Address systems might be informal. Integration with map-based location picking is required.

## 4. Technical Constraints
*   **PostgreSQL**: For relational, transactional data (Users, Orders, Payments, RBAC).
*   **MongoDB**: For flexible, high-volume catalog data (Products, Attributes, Reviews).
*   **Security**: Compliance with ISO 27001 standards for data protection and encryption.
