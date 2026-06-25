# Authentication & Identity Management

## 1. Flow: Secure Authentication
*   **JWT (JSON Web Tokens)**: Short-lived access tokens (15 mins) + Long-lived refresh tokens (7 days).
*   **Secure Storage**: On mobile, use Encrypted Shared Preferences (Android) and KeyChain (iOS).
*   **MFA (Multi-Factor Authentication)**: Mandatory for Sellers and Admins. Support for SMS OTP (local) and Authenticator Apps.

## 2. Password Policy
*   Minimum 12 characters.
*   Must contain uppercase, lowercase, numbers, and symbols.
*   Hashed using **Argon2id** with high salt complexity.

## 3. Session Management
*   Ability to view and revoke active sessions across devices.
*   IP-based anomaly detection (Alert user if login from new location).
