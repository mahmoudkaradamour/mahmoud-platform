# Bulk Inventory Import (Excel/CSV)

## 1. Upload Flow
1.  **Selection**: Merchant uploads `.xlsx` or `.csv`.
2.  **Mapping**: User maps file columns to platform fields (e.g., "Product Name" -> `name`, "Available Qty" -> `stock`).
3.  **Validation**: Backend checks for errors (missing prices, invalid categories).
4.  **Dry Run**: Show merchant how many items will be added/updated.
5.  **Commit**: Process the ingestion asynchronously.

## 2. Image Handling
*   **Zip Upload**: Merchant uploads a zip file with images named after product SKUs.
*   **URL Column**: If images are already online, the system fetches them.

## 3. Technology
*   **Processing**: Background workers (BullMQ/Go routines) to prevent blocking the UI.
*   **Libraries**: `ExcelJS` or `Pandas` (if using Python microservice).
