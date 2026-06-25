# Shipping & Logistics System

## 1. Shipping Model
*   **Merchant Fleet**: Sellers use their own drivers.
*   **Platform Shipping**: Merchants use the platform's integrated logistics partners.
*   **Self-Pickup**: Customers pick up from the store.

## 2. Dynamic Pricing
Shipping cost is calculated based on:
*   **Distance**: Google Maps / OpenStreetMap distance matrix.
*   **Weight/Volume**: Data from the Catalog Service.
*   **Speed**: Express vs Standard.

## 3. Provider Integration
*   Standardized API interface for 3rd party logistics (3PL).
*   Real-time status updates (Picked up, In-transit, Delivered, Failed).
