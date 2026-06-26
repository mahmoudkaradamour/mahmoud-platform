/**
 * Shipment Entity - Clean Architecture.
 * Represents the state and journey of a physical package.
 */
class Shipment {
  final String id;
  final String orderId;
  final String courierName;
  final String status; // PENDING, PICKED_UP, IN_TRANSIT, DELIVERED
  final double currentLat;
  final double currentLng;
  final List<ShipmentHistory> history;

  Shipment({
    required this.id,
    required this.orderId,
    required this.courierName,
    required this.status,
    required this.currentLat,
    required this.currentLng,
    required this.history,
  });
}

class ShipmentHistory {
  final String status;
  final String timestamp;
  final String location;

  ShipmentHistory({required this.status, required this.timestamp, required this.location});
}
