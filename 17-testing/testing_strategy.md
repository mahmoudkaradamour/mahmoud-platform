# Holistic Testing Strategy

## 1. Unit Testing
*   **Backend**: 80%+ coverage for Domain and Application layers.
*   **Frontend**: Testing BLoCs and mapping logic.

## 2. Integration Testing
*   Testing the interaction between services (e.g., Order -> Payment flow).
*   Mocking external bank APIs to test edge cases (Timeout, Rejection).

## 3. End-to-End (E2E) / UI Testing
*   **Flutter Integration Tests**: Automated scripts running on real devices (Discovery -> Purchase flow).
*   **Appium/Patrol**: Handling native device features (Camera for AR, Location).

## 4. Performance & Stress Testing
*   **JMeter/K6**: Simulating 10,000 concurrent users on a Live Stream.
*   **SQL Profiling**: Identifying slow queries under load.
