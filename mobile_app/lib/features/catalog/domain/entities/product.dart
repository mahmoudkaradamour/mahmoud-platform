/**
 * Product Domain Entity.
 * Represents the core business logic of a Catalog item.
 * Clean Architecture: This is independent of any external libraries.
 */
class Product {
  final String id;
  final String storeId;
  final String name;
  final String slug;
  final String categoryPath;
  final double basePrice;
  final String currency;
  final Map<String, dynamic> attributes;
  final List<String> media;
  final String status;

  Product({
    required this.id,
    required this.storeId,
    required this.name,
    required this.slug,
    required this.categoryPath,
    required this.basePrice,
    required this.currency,
    required this.attributes,
    required this.media,
    required this.status,
  });
}
