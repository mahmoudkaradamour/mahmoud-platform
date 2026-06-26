import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

/// Dynamic Theme Engine.
/// Controlled by the Master Admin via Web Dashboard.
/// Synchronizes Colors, Fonts, and Branding assets in real-time.
class DynamicThemeEngine extends ChangeNotifier {
  Color _primaryColor = const Color(0xFF0A84FF);
  String _fontFamily = 'Cairo';

  ThemeData get currentTheme {
    return ThemeData(
      useMaterial3: true,
      colorScheme: ColorScheme.light(primary: _primaryColor),
      textTheme: GoogleFonts.getTextTheme(_fontFamily), // Fixed: Use getTextTheme
    );
  }

  void updateTheme(Color primary, String font) {
    _primaryColor = primary;
    _fontFamily = font;
    notifyListeners();
  }
}
