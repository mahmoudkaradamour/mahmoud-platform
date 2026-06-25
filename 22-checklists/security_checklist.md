# Security Launch Checklist

- [ ] All API endpoints require valid JWT.
- [ ] MFA is active for all Admin and Seller accounts.
- [ ] AES-256 encryption applied to PII data in DB.
- [ ] Certificate Pinning active in Flutter app.
- [ ] No secrets (API Keys) in version control.
- [ ] Rate limiting active on Auth and Payment endpoints.
- [ ] Database backups verified and encrypted.
