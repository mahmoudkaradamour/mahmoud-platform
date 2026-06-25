# دراسة الهندسة الأمنية والتدقيق الجنائي (Security Engineering & Forensic Audit Study)

> **ملخص الدراسة (Abstract):**  
> تُقدّم هذه الدراسة الإطار الأمني الشامل للمنصة، متبنيةً نهج **"الأمن بالتصميم" (Security by Design)**. تتناول الدراسة تحليل التهديدات بنموذج **STRIDE**، وتصميم طبقات التشفير المتعددة، وآليات الامتثال للقوانين السيادية. تهدف الدراسة لضمان النزاهة الجنائية لكافة المعاملات وحماية خصوصية البيانات وفق معايير **ISO 27001**.

---

## 1. نمذجة التهديدات الهيكلية (STRIDE Threat Modeling)

تم إجراء تحليل دقيق لكل خدمة وظيفية لتحديد المخاطر ووضع استجابات هندسية (Mitigations):

| التهديد (Threat) | التوصيف (Description) | الاستجابة الهندسية (Mitigation) |
| :--- | :--- | :--- |
| **Spoofing** | انتحال هوية التاجر. | تطبيق **MFA** و **JWT-RS256** مع تشفير مفاتيح خاص. |
| **Tampering** | تعديل مبالغ الفواتير. | نظام **HMAC Signing** لكافة طلبات الدفع والتحقق في الـ DB. |
| **Repudiation** | نفي القيام بعملية استلام. | سجلات تدقيق (Audit Logs) مشفرة ومحمية بـ (Immutable Storage). |
| **Information Disclosure** | تسريب أرقام المستخدمين. | تشفير الحقول بـ **AES-256-GCM** في طبقة التطبيق (ALE). |

---

## 2. معمارية التشفير وإدارة النفاذ (Encryption & IAM)

### 2.1. حماية البيانات في السكون (Data at Rest)
*   **Application Level Encryption (ALE)**: يتم تشفير البيانات الحساسة قبل وصولها للقاعدة باستخدام مفاتيح فريدة مخزنة في (KMS).
*   **Password Hashing**: استخدام خوارزمية **Argon2id** لمقاومة هجمات الـ (Brute-force) والـ (GPU cracking).

### 2.2. حماية البيانات في الحركة (Data in Transit)
*   **TLS 1.3**: فرض البروتوكول الأحدث لضمان سرية الاتصال.
*   **Certificate Pinning**: في تطبيق Flutter لمنع هجمات (Man-in-the-Middle) على مستوى الشبكة.

---

## 3. الامتثال والتدقيق الجنائي (Forensic Readiness)

يحتوي النظام على وحدة **Forensic Logger** معزولة برمجياً تسجل:
*   بصمة الجهاز (Device Fingerprint)، الوقت المرجعي، ونتائج التحقق من النزاهة لكل عملية مالية.
*   تخزين السجلات في وسائط **WORM** (Write-once Read-many) لمنع التعديل الرجعي.

---

## 4. المراجع (References - IEEE Style)
[1] Microsoft Security, "The STRIDE Threat Model," 2024. [Link](https://learn.microsoft.com/en-us/previous-versions/azure/security/develop/threat-modeling-tool-threats)  
[2] ISO/IEC, "Standard 27001:2022 Information Security," 2022. [Link](https://www.iso.org/standard/27001)  
[3] OWASP, "Top 10 Web Security Risks," 2024. [Link](https://owasp.org/www-project-top-ten/)
