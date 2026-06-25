# Caching Strategy (Redis)

## 1. Layers of Caching
*   **Application Level**: Flutter's `CachedNetworkImage` and local DB for offline access.
*   **CDN Level**: Edge caching for images, static assets, and video streams.
*   **Server Level (Redis)**: Low-latency data access.

## 2. Cached Data
| Key Type | Data | TTL (Time to Live) | Invalidation Event |
| :--- | :--- | :--- | :--- |
| `user:session` | Auth tokens & Basic info | 24 Hours | Logout / Password change |
| `prod:details` | Hot product documents | 30 Mins | Product Update |
| `store:config` | Branding & Settings | 1 Hour | Config Update |
| `meta:categories` | Full category tree | 6 Hours | Hierarchy Change |

## 3. Invalidation Strategy
*   **Write-Through**: Update cache immediately on DB write (for critical data).
*   **TTL-Based**: Auto-expire for non-critical data (ratings, view counts).
*   **Pattern Purge**: Clear all keys starting with `prod:{id}` when a product is modified.
