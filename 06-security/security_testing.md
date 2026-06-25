# Security Testing & Compliance

## 1. Static Analysis (SAST)
*   Automated scans on every PR (SonarQube, Snyk).
*   Checking for hardcoded secrets and vulnerable dependencies.

## 2. Dynamic Analysis (DAST)
*   Regular automated penetration testing of the staging environment.
*   OWASP Top 10 compliance checks.

## 3. Pentest Scenarios
*   Attempting to checkout with a negative price.
*   Bypassing JWT verification with modified payloads.
*   Horizontal Privilege Escalation (Accessing another user's order).
*   Brute-forcing OTP codes.

## 4. Compliance
*   **GDPR-Ready**: Implementation of "Right to be Forgotten" and "Data Export".
*   **ISO 27001**: Following the roadmap for information security management.
