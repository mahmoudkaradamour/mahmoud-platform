# Engineering & Documentation Standards

## 1. Coding Standards
*   **Architecture**: Clean Architecture / Domain Driven Design (DDD).
*   **Flutter**: Standardized State Management (Bloc/Riverpod), strict linting (lints package), and widget modularization.
*   **Backend**: Type-safe APIs (GraphQL/gRPC preferred for internal, REST for public).
*   **Formatting**: Automate with `dart format` and `prettier`.

## 2. Naming Conventions
*   **Files**: `snake_case.dart`, `kebab-case.md`
*   **Classes**: `PascalCase`
*   **Variables/Methods**: `camelCase`
*   **Database**: `snake_case` for tables and columns.

## 3. Documentation (FAANG-Level)
*   **Completeness**: Every public API, service, and complex logic block must be documented.
*   **Diagrams**: Use Mermaid.js or C4 model for visual representations.
*   **Versioned**: Docs must live alongside code in Git.

## 4. Security Mindset (ISO 27001)
*   **Zero Trust**: Never trust client input. Validate everything on the server.
*   **Encryption**: AES-256 for data at rest, TLS 1.3 for data in transit.
*   **Logging**: No PII (Personally Identifiable Information) in logs.
