import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:mobile_app/features/identity/presentation/screens/login_screen.dart';

/// Professional Widget Test for Auth Interface.
/// Verifies the ZCL (Zero Cognitive Load) layout.
void main() {
  testWidgets('Login Screen UI Verification', (WidgetTester tester) async {
    await tester.pumpWidget(
      ScreenUtilInit(
        designSize: const Size(390, 844),
        builder: (context, child) => const MaterialApp(
          home: LoginScreen(),
        ),
      ),
    );

    // Verify institutional branding elements
    expect(find.text("Institutional Access"), findsOneWidget);
    expect(find.byIcon(Icons.security), findsOneWidget);
    
    // Verify action buttons
    expect(find.text("Authorize Session"), findsOneWidget);
  });
}
