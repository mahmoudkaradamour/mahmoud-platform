import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:mobile_app/shared/theme/app_theme.dart';

/// Multi-Store Price Comparison Screen.
/// Displays multiple merchants selling the same product variation.
class MultiStoreComparisonScreen extends StatelessWidget {
  const MultiStoreComparisonScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("خيارات المتاجر")),
      body: ListView.separated(
        padding: EdgeInsets.all(24.w),
        itemCount: 3,
        separatorBuilder: (context, index) => SizedBox(height: 20.h),
        itemBuilder: (context, index) {
          return _buildMerchantOfferCard(index);
        },
      ),
    );
  }

  Widget _buildMerchantOfferCard(int index) {
    final prices = ["\$1180", "\$1195", "\$1200"];
    final stores = ["متجر التقنية", "مجموعة الشام", "النخبة للاتصالات"];
    
    return Container(
      padding: EdgeInsets.all(20.w),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(25.r),
        boxShadow: [BoxShadow(color: Colors.black.withAlpha(5), blurRadius: 10)],
      ),
      child: Row(
        children: [
          CircleAvatar(
            backgroundColor: AppTheme.primary.withAlpha(26),
            child: const Icon(Icons.store, color: AppTheme.primary),
          ),
          SizedBox(width: 15.w),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(stores[index], style: const TextStyle(fontWeight: FontWeight.w900)),
                const Text("توصيل خلال 24 ساعة", style: TextStyle(fontSize: 10, color: Colors.black38, fontWeight: FontWeight.bold)),
              ],
            ),
          ),
          Column(
            crossAxisAlignment: CrossAxisAlignment.end,
            children: [
              Text(prices[index], style: TextStyle(color: AppTheme.primary, fontWeight: FontWeight.w900, fontSize: 18.sp)),
              ElevatedButton(
                onPressed: () {},
                style: ElevatedButton.styleFrom(
                  backgroundColor: AppTheme.primary,
                  minimumSize: const Size(80, 35),
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10.r)),
                ),
                child: const Text("شراء", style: TextStyle(color: Colors.white, fontSize: 12, fontWeight: FontWeight.w900)),
              ),
            ],
          ),
        ],
      ),
    );
  }
}
