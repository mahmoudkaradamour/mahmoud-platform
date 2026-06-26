import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:mobile_app/shared/theme/app_theme.dart';

/**
 * Immersive Product Details Screen.
 * Includes AR Visualization trigger and high-fidelity specifications.
 */
class ProductDetailScreen extends StatelessWidget {
  const ProductDetailScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: CustomScrollView(
        slivers: [
          // Collapsible Image Header
          SliverAppBar(
            expandedHeight: 400.h,
            pinned: true,
            flexibleSpace: FlexibleSpaceBar(
              background: Container(
                color: AppTheme.background,
                child: Stack(
                  children: [
                    const Center(child: Icon(Icons.shopping_bag, size: 120, color: Colors.black12)),
                    // AR Badge
                    Positioned(
                      bottom: 30.h,
                      right: 20.w,
                      child: Container(
                        padding: EdgeInsets.symmetric(horizontal: 20.w, vertical: 12.h),
                        decoration: BoxDecoration(
                          color: Colors.black.withOpacity(0.8),
                          borderRadius: BorderRadius.circular(20.r),
                          border: Border.all(color: Colors.white10),
                        ),
                        child: Row(
                          children: [
                            const Icon(Icons.view_in_ar, color: AppTheme.secondary, size: 20),
                            SizedBox(width: 10.w),
                            Text(
                              "عرض بتقنية AR",
                              style: TextStyle(color: Colors.white, fontWeight: FontWeight.black, fontSize: 12.sp),
                            ),
                          ],
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ),

          // Content
          SliverToBoxAdapter(
            child: Padding(
              padding: EdgeInsets.all(24.w),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.between,
                    children: [
                      Container(
                        padding: EdgeInsets.symmetric(horizontal: 12.w, vertical: 6.h),
                        decoration: BoxDecoration(
                          color: AppTheme.primary.withOpacity(0.1),
                          borderRadius: BorderRadius.circular(10.r),
                        ),
                        child: Text(
                          "منتج سيادي",
                          style: TextStyle(color: AppTheme.primary, fontWeight: FontWeight.black, fontSize: 10.sp),
                        ),
                      ),
                      const Icon(Icons.favorite_border, color: AppTheme.error),
                    ],
                  ),
                  SizedBox(height: 20.h),
                  Text(
                    "هاتف آيفون 15 برو ماكس",
                    style: TextStyle(fontSize: 28.sp, fontWeight: FontWeight.black, color: Colors.black),
                  ),
                  SizedBox(height: 10.h),
                  Text(
                    "التيتانيوم الأزرق، 256 جيجابايت",
                    style: TextStyle(fontSize: 16.sp, color: Colors.black45, fontWeight: FontWeight.bold),
                  ),
                  SizedBox(height: 30.h),
                  
                  // Price and Stock
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          const Text("السعر الحالي", style: TextStyle(color: Colors.black26, fontWeight: FontWeight.bold)),
                          Text("\$1200", style: TextStyle(fontSize: 32.sp, fontWeight: FontWeight.black, color: AppTheme.primary)),
                        ],
                      ),
                      Container(
                        padding: EdgeInsets.symmetric(horizontal: 15.w, vertical: 8.h),
                        decoration: BoxDecoration(
                          color: AppTheme.success.withOpacity(0.1),
                          borderRadius: BorderRadius.circular(12.r),
                        ),
                        child: Text("متوفر في المخزن", style: TextStyle(color: AppTheme.success, fontWeight: FontWeight.black, fontSize: 12.sp)),
                      ),
                    ],
                  ),
                  
                  SizedBox(height: 40.h),
                  Text("المواصفات التقنية", style: TextStyle(fontSize: 18.sp, fontWeight: FontWeight.black)),
                  SizedBox(height: 20.h),
                  
                  // Mock Specs
                  _buildSpecItem("المعالج", "A17 Pro Chip"),
                  _buildSpecItem("الكاميرا", "48MP Main | Ultra Wide"),
                  _buildSpecItem("الشاشة", "6.7-inch Super Retina XDR"),
                ],
              ),
            ),
          ),
        ],
      ),
      bottomNavigationBar: Container(
        padding: EdgeInsets.all(24.w),
        decoration: BoxDecoration(
          color: Colors.white,
          boxShadow: [BoxShadow(color: Colors.black.withOpacity(0.05), blurRadius: 20, offset: const Offset(0, -10))],
        ),
        child: ElevatedButton(
          onPressed: () {},
          style: ElevatedButton.styleFrom(
            backgroundColor: AppTheme.primary,
            foregroundColor: Colors.white,
            minimumSize: Size(double.infinity, 70.h),
            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(24.r)),
          ),
          child: Text("أضف إلى السلة", style: TextStyle(fontSize: 18.sp, fontWeight: FontWeight.black)),
        ),
      ),
    );
  }

  Widget _buildSpecItem(String key, String value) {
    return Padding(
      padding: EdgeInsets.only(bottom: 12.h),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.between,
        children: [
          Text(key, style: const TextStyle(color: Colors.black45, fontWeight: FontWeight.bold)),
          Text(value, style: const TextStyle(fontWeight: FontWeight.black, color: Colors.black87)),
        ],
      ),
    );
  }
}
