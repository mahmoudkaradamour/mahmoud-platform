import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:mobile_app/shared/theme/app_theme.dart';

/// Bidding Stream Screen - Refactored for Flutter 3.x.
/// Real-time list of offers from merchants for a specific request.
class BiddingStreamScreen extends StatelessWidget {
  const BiddingStreamScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("عروض التجار"),
      ),
      body: ListView.builder(
        padding: EdgeInsets.all(20.w),
        itemCount: 3,
        itemBuilder: (context, index) {
          return _buildQuoteCard(context, index);
        },
      ),
    );
  }

  Widget _buildQuoteCard(BuildContext context, int index) {
    return Container(
      margin: EdgeInsets.only(bottom: 20.h),
      padding: EdgeInsets.all(24.w),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(30.r),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withAlpha(8), // Modern color spec
            blurRadius: 20, 
            offset: const Offset(0, 10)
          )
        ],
        border: index == 0 ? Border.all(color: AppTheme.primary.withAlpha(51)) : null,
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween, // Fixed syntax error
            children: [
              Row(
                children: [
                  CircleAvatar(
                    radius: 20.r, 
                    backgroundColor: AppTheme.primary.withAlpha(26), 
                    child: const Icon(Icons.store, color: AppTheme.primary)
                  ),
                  SizedBox(width: 12.w),
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      const Text("متجر النخبة", style: TextStyle(fontWeight: FontWeight.w900)), // Fixed FontWeight.black
                      Text("بائع موثوق • 4.8", style: TextStyle(fontSize: 10.sp, color: Colors.black38, fontWeight: FontWeight.bold)),
                    ],
                  ),
                ],
              ),
              const Icon(Icons.verified, color: AppTheme.primary, size: 20),
            ],
          ),
          SizedBox(height: 25.h),
          Text(
            "نوفر لك المنتج بضمان محلي لمدة سنتين مع شاحن أصلي هدية.",
            style: TextStyle(fontSize: 14.sp, color: Colors.black87, fontWeight: FontWeight.w500), // Fixed FontWeight.medium
          ),
          SizedBox(height: 25.h),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween, // Fixed syntax error
            children: [
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Text("السعر المعروض", style: TextStyle(color: Colors.black26, fontWeight: FontWeight.bold)),
                  Text("\$1180", style: TextStyle(fontSize: 24.sp, fontWeight: FontWeight.w900, color: AppTheme.primary)),
                ],
              ),
              Row(
                children: [
                   IconButton(
                     onPressed: () {}, 
                     icon: const Icon(Icons.chat_bubble_outline, color: AppTheme.secondary),
                     style: IconButton.styleFrom(
                       backgroundColor: AppTheme.secondary.withAlpha(26), 
                       padding: EdgeInsets.all(12.w)
                     ),
                   ),
                   SizedBox(width: 10.w),
                   ElevatedButton(
                    onPressed: () {},
                    style: ElevatedButton.styleFrom(
                      backgroundColor: AppTheme.primary,
                      foregroundColor: Colors.white,
                      padding: EdgeInsets.symmetric(horizontal: 20.w, vertical: 15.h),
                      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(15.r)),
                    ),
                    child: const Text("قبول العرض", style: TextStyle(fontWeight: FontWeight.w900)),
                  ),
                ],
              ),
            ],
          ),
        ],
      ),
    );
  }
}
