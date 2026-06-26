import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

/**
 * Sovereign App Theme Configuration.
 * Aligns with the global Design System tokens.
 * Focused on ZCL (Zero Cognitive Load) and High-Fidelity UX.
 */
class AppTheme {
  static const Color primary = Color(0xFF0A84FF);
  static const Color secondary = Color(0xFF30B0C7);
  static const Color background = Color(0xFFF2F2F7);
  static const Color surface = Colors.white;
  static const Color error = Color(0xFFFF3B30);
  static const Color success = Color(0xFF34C759);
  static const Color sovereignGold = Color(0xFFD4AF37);

  static ThemeData get lightTheme {
    return ThemeData(
      useMaterial3: true,
      colorScheme: ColorScheme.light(
        primary: primary,
        secondary: secondary,
        surface: surface,
        error: error,
      ),
      scaffoldBackgroundColor: background,
      textTheme: GoogleFonts.cairoTextTheme().copyWith(
        displayLarge: GoogleFonts.cairo(fontWeight: FontWeight.w900, color: Colors.black),
        titleLarge: GoogleFonts.cairo(fontWeight: FontWeight.bold, color: Colors.black87),
        bodyMedium: GoogleFonts.cairo(color: Colors.black54),
      ),
      appBarTheme: const AppBarTheme(
        backgroundColor: Colors.transparent,
        elevation: 0,
        centerTitle: false,
        titleTextStyle: TextStyle(color: Colors.black, fontWeight: FontWeight.bold, fontSize: 20),
      ),
      cardTheme: CardTheme(
        elevation: 0,
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(30)),
        color: surface,
      ),
    );
  }
}
