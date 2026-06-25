# Global Product Catalog Integration

## 1. Data Aggregation
To save merchants from manual entry for common items (phones, laptops, electronics), we integrate with external data sources.

### Sources
*   **Official APIs**: Brand APIs (where available).
*   **Scrapers/Aggregators**: Structured data from global marketplaces (Amazon/GSMArena/Icecat).

## 2. Sync Logic
1.  Merchant enters an SN, Model Name, or Barcode.
2.  Platform checks "Global Specs Cache".
3.  If found, auto-fills: Name, Specs (RAM, CPU, Screen), and Official Media.
4.  Merchant only adds: Price, Stock, and Store-specific images.

## 3. Maintenance
*   Daily background jobs to update prices (USD) and newer models.
*   Manual override capability for merchants.
