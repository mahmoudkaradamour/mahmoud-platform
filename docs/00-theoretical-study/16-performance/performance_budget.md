# Performance Budgets & Optimization

## 1. Metric Targets
*   **Time to First Byte (TTFB)**: < 200ms.
*   **App Launch (Cold Start)**: < 2.0s on mid-range Android.
*   **Frame Rate**: 60 FPS (mandatory for scroll/animations).
*   **Asset Size**: Initial JS/Dart bundle < 10MB.

## 2. Optimization Strategy
*   **Frontend (Flutter)**: 
    *   Image resizing/WebP conversion.
    *   List view virtualization.
    *   Deferred loading of non-critical modules (e.g., AR/VR).
*   **Backend**:
    *   Database indexing audit.
    *   Redis caching for hotspots.
    *   Gzip/Brotli compression for API responses.

## 3. Monitoring
*   Firebase Performance Monitoring for App.
*   New Relic / Prometheus for Backend services.
