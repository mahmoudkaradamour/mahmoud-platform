# Product Requirements Document (PRD)

## 1. Overview
A multi-vendor e-commerce platform designed for the unique challenges of the MENA/Syrian market, focusing on trust, ease of use, and advanced seller tools.

## 2. Core Features

### 2.1 Consumer App (Flutter)
*   **Search & Discovery**: AI-powered search, advanced filters, and product comparison engine.
*   **Visual Commerce**: 3D previews, VR product views, and high-quality video integration.
*   **Live Commerce**: Real-time live streaming with interactive chat and instant buying.
*   **Request a Product**: If a product isn't found, users can post a request. Interested sellers can bid with their prices and specs.
*   **Account Management**: Multi-device sync, order tracking, and favorite stores.

### 2.2 Seller System
*   **Multi-Store Management**: One merchant can manage multiple distinct stores from one account.
*   **Product Ingestion**: 
    *   Excel/CSV import with field mapping.
    *   "Global Catalog" sync: Fetch specs for electronics (Samsung, Apple, etc.) automatically.
*   **Customization**: Store-specific colors, fonts, and layout templates.
*   **Staff Management**: RBAC (Role-Based Access Control) for employees (Sales, Support, Inventory).
*   **Social Integration**: Sync product updates automatically to WhatsApp Business, Facebook, and Instagram.

### 2.3 Logistics & Shipping
*   **Shipping Provider API**: Integration with both private fleets and 3rd party logistics.
*   **Dynamic Tracking**: Real-time map tracking for deliveries.

### 2.4 Payments
*   **Unified Checkout**: Support for multiple banks/wallets in one transaction.
*   **Seller Settlements**: Automated logic for distributing funds minus platform fees.

## 3. User Stories
*   *As a Customer*, I want to see a 3D model of a sofa so I can be sure it fits my living room.
*   *As a Seller*, I want to upload 1000 products via Excel so I can start selling immediately without manual entry.
*   *As an Admin*, I want to monitor the health and sales of every vendor in real-time.
