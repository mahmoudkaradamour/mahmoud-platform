# دراسة هندسة البيانات والنمذجة المتقدمة (Advanced Data Architecture & Modeling Study)

> **ملخص الدراسة (Abstract):**  
> تُقدّم هذه الدراسة تحليلاً أنطولوجياً لهيكلية البيانات، متبنيةً منهجية **المثابرة متعددة اللغات (Polyglot Persistence)**. تهدف الدراسة لضمان "النزاهة الجنائية" للعمليات المالية والمرونة القصوى لكتالوج المنتجات والمزايدات والخصومات، مع تطبيق استراتيجيات **Multi-tenant Data Isolation**.

---

## 1. مخطط العلاقات المؤسساتي الشامل (Full Enterprise ERD)

```mermaid
erDiagram
    %% Identity & Complex Multi-tenancy
    ACCOUNT ||--o{ MERCHANT_STORE : "owns"
    MERCHANT_STORE ||--o{ STORE_STAFF : "assigns_roles"
    
    %% B2B, Wholesale & Bidding
    MERCHANT_STORE ||--o{ PRODUCT_REQUEST : "bids_on"
    ACCOUNT ||--o{ PRODUCT_REQUEST : "posts_request"
    PRODUCT_REQUEST ||--o{ BID_OFFER : "collects"
    
    %% Logistics & 3PL Integration
    SHIPPING_PROVIDER ||--o{ DELIVERY_LOG : "records"
    CUSTOMER_ORDER ||--|| DELIVERY_LOG : "tracked_by"
    
    %% Financials & Forensic Audit
    CUSTOMER_ORDER ||--|| FINANCIAL_INVOICE : "generates"
    FINANCIAL_INVOICE ||--|| AUDIT_TRAIL : "forensic_hash"

    ACCOUNT {
        uuid id PK
        string email UK
        jsonb security_claims "MFA/IP_Whitelist"
    }

    MERCHANT_STORE {
        uuid id PK
        uuid owner_id FK
        enum tier "Wholesale, Premium, Basic"
        jsonb metadata "Currency, Timezone, Branding"
    }

    PRODUCT {
        uuid id PK
        decimal base_price
        string currency_iso "SYP/USD/AED"
        boolean allow_negotiation
    }

    FINANCIAL_INVOICE {
        uuid id PK
        string sn UK
        string digital_signature "Cryptographic Hash"
    }
```

---

## 2. استراتيجية عزل البيانات (Multi-tenancy Isolation)
*   **Logical Isolation**: استخدام `store_id` كمفتاح عزل في كافة الجداول والجداول المتقاطعة.
*   **Row-Level Security (RLS)**: تفعيل سياسات الأمان على مستوى السطر في PostgreSQL لمنع تسريب البيانات بين التجار حتى لو تم اختراق طبقة التطبيق.

---

## 3. التبرير العلمي لهندسة الـ NoSQL
يُستخدم MongoDB ليس فقط للكتالوج، بل كمخزن للـ **Read Models** منزوعة التطبيع (Denormalized) لدعم تجربة الـ Zero Cognitive Load، حيث يتم استرجاع كافة تفاصيل الصفحة في طلب (Request) واحد بدلاً من عمليات الربط (Joins) المتعددة.

---

## 4. المراجع (References)
[1] M. Fowler, *NoSQL Distilled*, 2012.  
[2] P. Sadalage, *Polyglot Persistence Patterns*, 2023.
