/// Institutional Transaction Entity.
/// Represents a finalized event in the distributed ledger.
class Transaction {
  final String id;
  final String orderId;
  final double amount;
  final String type; // DEBIT, CREDIT
  final String status;
  final DateTime createdAt;

  Transaction({
    required this.id,
    required this.orderId,
    required this.amount,
    required this.type,
    required this.status,
    required this.createdAt,
  });
}
