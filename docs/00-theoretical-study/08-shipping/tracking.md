# Real-time Tracking & Delivery

## 1. Map Integration
*   Flutter app uses `google_maps_flutter`.
*   Shows driver's live location during the "In Transit" phase.
*   Estimated Time of Arrival (ETA) updated every 60 seconds.

## 2. Status Lifecycle
*   `PREPARING`: Merchant packing the order.
*   `READY_FOR_PICKUP`: Waiting for driver.
*   `IN_TRANSIT`: Driver on the move.
*   `ARRIVED`: Driver at location.
*   `DELIVERED`: Final handover (requires QR scan or SMS OTP from customer).

## 3. Delivery Verification
*   **QR/SN Scan**: Merchant scans the invoice QR to confirm handover to driver. Driver scans it again at customer's door.
*   **Proof of Delivery**: Photo upload required for high-value items.
