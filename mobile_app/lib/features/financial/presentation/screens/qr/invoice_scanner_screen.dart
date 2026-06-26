import 'package:flutter/material.dart';
import 'package:mobile_app/shared/theme/app_theme.dart';

/// QR/Barcode Invoice Scanner.
/// Allows Users, Merchants, and Admins to verify invoices instantly.
class InvoiceScannerScreen extends StatelessWidget {
  const InvoiceScannerScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("ماسح الفواتير الذكي")),
      body: Stack(
        children: [
          Container(
            color: Colors.black,
            child: const Center(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Icon(Icons.qr_code_scanner, size: 120, color: AppTheme.primary),
                  SizedBox(height: 20),
                  Text(
                    "وجه الكاميرا نحو الـ QR الخاص بالفاتورة",
                    style: TextStyle(color: Colors.white70, fontWeight: FontWeight.w900),
                  ),
                ],
              ),
            ),
          ),
          // Scanner Overlay
          Center(
            child: Container(
              width: 250,
              height: 250,
              decoration: BoxDecoration(
                border: Border.all(color: AppTheme.primary, width: 4),
                borderRadius: BorderRadius.circular(30),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
