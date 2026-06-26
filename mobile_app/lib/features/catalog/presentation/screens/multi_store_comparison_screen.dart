import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:mobile_app/shared/theme/app_theme.dart';

/// Comparative Market Intelligence.
/// Lists institutional inventory across multiple nodes for the same asset.
class MultiStoreComparisonScreen extends StatelessWidget {
  const MultiStoreComparisonScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Compare Market Offers"),
        centerTitle: false,
      ),
      body: ListView.separated(
        padding: EdgeInsets.all(32.w),
        itemCount: 3,
        separatorBuilder: (context, index) => SizedBox(height: 24.h),
        itemBuilder: (context, index) {
          return _buildTier1Offer(index);
        },
      ),
    );
  }

  Widget _buildTier1Offer(int index) {
    final prices = ["\$1,180.00", "\$1,195.00", "\$1,200.00"];
    final stores = ["Tech Distribution Node", "Al-Sham Global Group", "Elite Telecom Hub"];
    
    return Container(
      padding: EdgeInsets.all(28.w),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(40.r),
        boxShadow: [BoxShadow(color: Colors.black.withAlpha(5), blurRadius: 20, offset: const Offset(0, 10))],
        border: index == 0 ? Border.all(color: AppTheme.primary.withAlpha(51)) : null,
      ),
      child: Column(
        children: [
          Row(
            children: [
              Container(
                height: 60.r,
                width: 60.r,
                decoration: BoxDecoration(
                  color: AppTheme.primary.withAlpha(13),
                  borderRadius: BorderRadius.circular(20.r),
                ),
                child: const Icon(Icons.business_center_outlined, color: AppTheme.primary),
              ),
              SizedBox(width: 20.w),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(stores[index], style: TextStyle(fontWeight: FontWeight.w900, fontSize: 16.sp, letterSpacing: -0.5)),
                    const Text("LOGISTICS: 24H SETTLEMENT", style: TextStyle(fontSize: 10, color: Colors.slate-400, fontWeight: FontWeight.black, uppercase: true, tracking: 1)),
                  ],
                ),
              ),
              if (index == 0) const Icon(Icons.verified_outlined, color: AppTheme.primary, size: 20),
            ],
          ),
          SizedBox(height: 32.h),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Text("UNIT PRICE", style: TextStyle(color: Colors.slate-300, fontWeight: FontWeight.black, fontSize: 10, uppercase: true)),
                  Text(prices[index], style: TextStyle(color: AppTheme.primary, fontWeight: FontWeight.w900, fontSize: 22.sp, letterSpacing: -1)),
                ],
              ),
              ElevatedButton(
                onPressed: () {},
                style: ElevatedButton.styleFrom(
                  backgroundColor: AppTheme.primary,
                  foregroundColor: Colors.white,
                  elevation: 0,
                  padding: EdgeInsets.symmetric(horizontal: 24.w, vertical: 14.h),
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16.r)),
                ),
                child: const Text("ACQUIRE", style: TextStyle(fontWeight: FontWeight.w900, fontSize: 12, uppercase: true)),
              ),
            ],
          ),
        ],
      ),
    );
  }
}
