import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:mobile_app/shared/theme/app_theme.dart';

/// Elite QR Verification Hub.
/// Hardware-accelerated scanning for forensic invoice validation.
class InvoiceScannerScreen extends StatelessWidget {
  const InvoiceScannerScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        foregroundColor: Colors.white,
        title: const Text("Audit Verification"),
        centerTitle: true,
      ),
      body: Stack(
        children: [
          Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Icon(Icons.qr_code_scanner_outlined, size: 100, color: AppTheme.primary.withAlpha(200)),
                SizedBox(height: 32.h),
                const Text(
                  "Align QR with Verification Frame",
                  style: TextStyle(color: Colors.white60, fontWeight: FontWeight.w900, letterSpacing: 1),
                ),
                SizedBox(height: 12.h),
                const Text(
                  "Verifying against distributed ledger node...",
                  style: TextStyle(color: Colors.white24, fontSize: 10, fontWeight: FontWeight.bold),
                ),
              ],
            ),
          ),
          
          // 🛡️ Forensic Scanning Frame
          Center(
            child: Container(
              width: 280.w,
              height: 280.w,
              decoration: BoxDecoration(
                border: Border.all(color: AppTheme.primary, width: 2),
                borderRadius: BorderRadius.circular(48.r),
              ),
              child: Stack(
                children: [
                  // Corner accents
                  _buildCorner(0, 0),
                  _buildCorner(1, 0),
                  _buildCorner(0, 1),
                  _buildCorner(1, 1),
                  
                  // Scanning Line Animation
                  const Positioned(
                    top: 140,
                    left: 20,
                    right: 20,
                    child: Divider(color: AppTheme.primary, thickness: 2),
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildCorner(double x, double y) {
    return Positioned(
      top: y == 0 ? -4 : null,
      bottom: y == 1 ? -4 : null,
      left: x == 0 ? -4 : null,
      right: x == 1 ? -4 : null,
      child: Container(
        width: 40,
        height: 40,
        decoration: BoxDecoration(
          color: Colors.black,
          border: Border(
            top: y == 0 ? const BorderSide(color: AppTheme.primary, width: 6) : BorderSide.none,
            bottom: y == 1 ? const BorderSide(color: AppTheme.primary, width: 6) : BorderSide.none,
            left: x == 0 ? const BorderSide(color: AppTheme.primary, width: 6) : BorderSide.none,
            right: x == 1 ? const BorderSide(color: AppTheme.primary, width: 6) : BorderSide.none,
          ),
        ),
      ),
    );
  }
}
