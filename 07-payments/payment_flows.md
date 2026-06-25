# Payment Flows

## 1. Digital Payment (Synchronous)
1.  User selects "Bank Card".
2.  Backend creates `Transaction` (Status: PENDING).
3.  Redirects user to Secure Bank Page (or opens SDK).
4.  User pays.
5.  Bank sends webhook.
6.  Backend verifies signature and updates `Transaction` (Status: SUCCESS).
7.  Order Service marked as PAID via Kafka.

## 2. Manual Transfer / Wallet (Asynchronous)
1.  User selects "Manual Bank Transfer".
2.  App provides merchant's IBAN/Account details.
3.  User uploads screenshot of receipt.
4.  Merchant staff verifies receipt in Dashboard.
5.  Transaction updated to SUCCESS.

## 3. Settlement Flow (Merchant Payouts)
1.  Order is delivered and "Return Period" (e.g., 7 days) expires.
2.  Funds move from `Platform Escrow` to `Merchant Balance`.
3.  Merchant requests Payout.
4.  Admin approves and processes transfer to Merchant's bank.
