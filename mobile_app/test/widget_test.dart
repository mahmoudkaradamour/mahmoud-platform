import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:mobile_app/features/catalog/presentation/screens/catalog_screen.dart';

void main() {
  testWidgets('Catalog Grid Visibility Test', (WidgetTester tester) async {
    // Wrap with ScreenUtilInit to fix LateInitializationError in test environment
    await tester.pumpWidget(
      ScreenUtilInit(
        designSize: const Size(390, 844),
        builder: (context, child) => const MaterialApp(
          home: CatalogScreen(),
        ),
      ),
    );
    
    // Allow animation/init to complete
    await tester.pumpAndSettle();

    expect(find.byType(GridView), findsOneWidget);
  });
}
