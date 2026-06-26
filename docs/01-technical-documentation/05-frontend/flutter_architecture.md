# Flutter Architecture & State Management

## 1. Directory Structure (Feature-First)
We use a feature-based structure to ensure scalability.

```
lib/
├── core/                # Shared utilities, themes, base widgets
├── features/
│   ├── auth/
│   │   ├── domain/      # Entities & Use cases
│   │   ├── data/        # Repositories & Data sources
│   │   └── presentation/# UI & Blocs/Providers
│   ├── catalog/
│   ├── checkout/
│   └── live_commerce/
├── l10n/                # Localization (Ar/En)
└── main.dart
```

## 2. State Management: BLoC (Business Logic Component)
*   **Why**: Clear separation of UI and logic, highly testable, and ideal for complex enterprise apps with many events (Live commerce, real-time updates).
*   **Pattern**: `Event` -> `Bloc` -> `State`.

## 3. Dependency Injection
*   **GetIt**: For service locator pattern.
*   **Injectable**: For code-generation based DI.

## 4. Navigation
*   **GoRouter**: Declarative routing with deep-link support and sub-routes for nested navigation (e.g., Seller Dashboard).
