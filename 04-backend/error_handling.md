# Error Handling & Resilience

## 1. Standardized Error Format
Consistency is key for the Flutter frontend to handle errors gracefully.

```json
{
  "success": false,
  "error": {
    "code": "AUTH_001",
    "message": "Invalid credentials",
    "details": {},
    "traceId": "unique-request-id"
  }
}
```

## 2. Error Categories
*   **400 Bad Request**: Validation errors (e.g., `VAL_001`).
*   **401 Unauthorized**: Missing or invalid token.
*   **403 Forbidden**: Insufficient permissions (RBAC).
*   **404 Not Found**: Resource doesn't exist.
*   **429 Too Many Requests**: Rate limit exceeded.
*   **500 Internal Server Error**: Unhandled exceptions.

## 3. Resilience Patterns
*   **Circuit Breaker**: Prevent cascading failures if an external service (e.g., Bank API) is down.
*   **Retry Policy**: Automatic retries for idempotent operations (e.g., GET requests) with exponential backoff.
*   **Timeout**: Strict timeouts on all external calls (e.g., 5 seconds for payment gateway).
*   **Fallback**: Provide default values or cached data if a non-critical service fails.
