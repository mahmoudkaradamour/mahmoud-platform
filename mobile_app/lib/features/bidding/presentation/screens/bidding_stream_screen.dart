import 'dart:async';
import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:mobile_app/shared/theme/app_theme.dart';

/// Market Live Stream.
/// Institutional quote dissemination with high-frequency updates.
class BiddingStreamScreen extends StatefulWidget {
  const BiddingStreamScreen({super.key});

  @override
  State<BiddingStreamScreen> createState() => _BiddingStreamScreenState();
}

class _BiddingStreamScreenState extends State<BiddingStreamScreen> {
  final List<dynamic> _bufferedQuotes = [];
  Timer? _throttleTimer;

  @override
  void initState() {
    super.initState();
    _startInstitutionalStream();
  }

  void _startInstitutionalStream() {
    _throttleTimer = Timer.periodic(const Duration(milliseconds: 800), (timer) {
      if (_bufferedQuotes.isNotEmpty) {
        setState(() {
          _bufferedQuotes.clear();
        });
      }
    });
  }

  @override
  void dispose() {
    _throttleTimer?.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("Institutional Live Quotes")),
      body: ListView.builder(
        padding: EdgeInsets.all(24.w),
        itemCount: 5,
        itemBuilder: (context, index) => _buildInstitutionalQuoteCard(index),
      ),
    );
  }

  Widget _buildInstitutionalQuoteCard(int index) {
    return Container(
      margin: EdgeInsets.only(bottom: 24.h),
      padding: EdgeInsets.all(24.w),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(32.r),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withValues(alpha: 0.05), // Fixed syntax
            blurRadius: 20, 
            offset: const Offset(0, 8)
          )
        ],
        border: index == 0 ? Border.all(color: AppTheme.primary.withValues(alpha: 0.2)) : null,
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Row(
                children: [
                  CircleAvatar(
                    radius: 24.r, 
                    backgroundColor: AppTheme.primary.withValues(alpha: 0.1), 
                    child: const Icon(Icons.business_outlined, color: AppTheme.primary)
                  ),
                  SizedBox(width: 16.w),
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      const Text("Tier-1 Partner", style: TextStyle(fontWeight: FontWeight.w900, fontSize: 15)),
                      Text(
                        "Verified Network • Node #7", 
                        style: TextStyle(
                          fontSize: 10.sp, 
                          color: Colors.blueGrey, // Fixed color
                          fontWeight: FontWeight.w900, 
                        )
                      ),
                    ],
                  ),
                ],
              ),
              if (index == 0) const Icon(Icons.verified_outlined, color: AppTheme.primary, size: 22),
            ],
          ),
          SizedBox(height: 32.h),
          Text(
            "Inventory confirmed. Full institutional warranty and logic clearance provided.",
            style: TextStyle(fontSize: 14.sp, color: Colors.blueGrey[600], fontWeight: FontWeight.w500, height: 1.5),
          ),
          SizedBox(height: 32.h),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Text(
                    "STRIKE PRICE", 
                    style: TextStyle(
                      color: Colors.blueGrey, 
                      fontWeight: FontWeight.w900, 
                      fontSize: 10, 
                      letterSpacing: 1
                    )
                  ),
                  Text("\$1,180.00", style: TextStyle(fontSize: 24.sp, fontWeight: FontWeight.w900, color: AppTheme.primary, letterSpacing: -1)),
                ],
              ),
              ElevatedButton(
                onPressed: () {},
                style: ElevatedButton.styleFrom(
                  backgroundColor: AppTheme.primary,
                  foregroundColor: Colors.white,
                  padding: EdgeInsets.symmetric(horizontal: 24.w, vertical: 16.h),
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16.r)),
                  elevation: 8,
                  shadowColor: AppTheme.primary.withValues(alpha: 0.3),
                ),
                child: const Text("Execute Settlement", style: TextStyle(fontWeight: FontWeight.w900, fontSize: 13)),
              ),
            ],
          ),
        ],
      ),
    );
  }
}
