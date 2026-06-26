import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:mobile_app/features/catalog/presentation/screens/catalog_screen.dart';

void main() {
  testWidgets('Catalog Grid Visibility Test', (WidgetTester tester) async {
    // Build our app and trigger a frame.
    await tester.pumpWidget(const MaterialApp(home: CatalogScreen()));
    expect(find.byType(GridView), findsOneWidget);
  });
}
