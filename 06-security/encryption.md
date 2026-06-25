# Encryption & Data Protection

## 1. Data at Rest
*   **Database**: Full Disk Encryption (TDE) for PostgreSQL and MongoDB.
*   **Sensitive Fields**: Columns like `user_phone`, `address`, and `bank_details` are encrypted at the application level before storage using **AES-256-GCM**.
*   **Media**: S3 buckets (or local equivalent) are private; access is granted via signed URLs.

## 2. Data in Transit
*   **TLS 1.3**: Mandatory for all external and internal communication.
*   **Certificate Pinning**: In the Flutter app to prevent Man-in-the-Middle (MITM) attacks.
*   **HSTS**: Forced HTTPS with secure headers.

## 3. Key Management
*   Use of Hardware Security Modules (HSM) or Cloud KMS (Key Management Service) to manage master keys.
*   Regular rotation of keys and secrets.
