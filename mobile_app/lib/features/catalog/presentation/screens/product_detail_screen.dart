import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:mobile_app/shared/theme/app_theme.dart';

/// Elite Asset Detail View.
/// High-fidelity immersion with integrated AR visualization.
class ProductDetailScreen extends StatelessWidget {
  const ProductDetailScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: CustomScrollView(
        slivers: [
          SliverAppBar(
            expandedHeight: 450.h,
            pinned: true,
            stretch: true,
            flexibleSpace: FlexibleSpaceBar(
              background: Container(
                color: AppTheme.background,
                child: Stack(
                  children: [
                    const Center(child: Icon(Icons.inventory_2_outlined, size: 140, color: Colors.black12)),
                    Positioned(
                      bottom: 40.h,
                      right: 32.w,
                      child: Container(
                        padding: EdgeInsets.symmetric(horizontal: 24.w, vertical: 16.h),
                        decoration: BoxDecoration(
                          color: Colors.slate-900.withAlpha(230),
                          borderRadius: BorderRadius.circular(24.r),
                          border: Border.all(color: Colors.white.withAlpha(26)),
                          boxShadow: [BoxShadow(color: Colors.black.withAlpha(51), blurRadius: 40)],
                        ),
                        child: Row(
                          children: [
                            const Icon(Icons.view_in_ar_outlined, color: AppTheme.secondary, size: 24),
                            SizedBox(width: 12.w),
                            Text(
                              "Initiate AR View",
                              style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 13.sp, uppercase: true, tracking: 1),
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
          SliverToBoxAdapter(
            child: Padding(
              padding: EdgeInsets.all(32.w),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Container(
                        padding: EdgeInsets.symmetric(horizontal: 14.w, vertical: 8.h),
                        decoration: BoxDecoration(
                          color: AppTheme.primary.withAlpha(26),
                          borderRadius: BorderRadius.circular(12.r),
                        ),
                        child: Text(
                          "Enterprise Certified",
                          style: TextStyle(color: AppTheme.primary, fontWeight: FontWeight.w900, fontSize: 10.sp, uppercase: true, tracking: 1),
                        ),
                      ),
                      IconButton(onPressed: () {}, icon: const Icon(Icons.favorite_outline, color: AppTheme.error)),
                    ],
                  ),
                  SizedBox(height: 24.h),
                  Text(
                    "iPhone 15 Pro Max",
                    style: TextStyle(fontSize: 34.sp, fontWeight: FontWeight.w900, color: Colors.slate-900, letterSpacing: -1.5),
                  ),
                  SizedBox(height: 12.h),
                  Text(
                    "Natural Titanium • 1TB Institutional Grade",
                    style: TextStyle(fontSize: 16.sp, color: Colors.slate-500, fontWeight: FontWeight.w600),
                  ),
                  SizedBox(height: 48.h),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          const Text("Market Valuation", style: TextStyle(color: Colors.slate-400, fontWeight: FontWeight.black, fontSize: 11, uppercase: true, tracking: 1)),
                          Text("\$1,599.00", style: TextStyle(fontSize: 36.sp, fontWeight: FontWeight.w900, color: AppTheme.primary, letterSpacing: -1)),
                        ],
                      ),
                      Container(
                        padding: EdgeInsets.symmetric(horizontal: 20.w, vertical: 12.h),
                        decoration: BoxDecoration(
                          color: AppTheme.success.withAlpha(26),
                          borderRadius: BorderRadius.circular(16.r),
                        ),
                        child: Row(
                          children: [
                            const Icon(Icons.check_circle_outline, color: AppTheme.success, size: 16),
                            SizedBox(width: 8.w),
                            Text("Ready", style: TextStyle(color: AppTheme.success, fontWeight: FontWeight.w900, fontSize: 12.sp, uppercase: true)),
                          ],
                        ),
                      ),
                    ],
                  ),
                  SizedBox(height: 56.h),
                  const Text("Technical Parameters", style: TextStyle(fontSize: 20.sp, fontWeight: FontWeight.w900, letterSpacing: -0.5)),
                  SizedBox(height: 24.h),
                  _buildInstitutionalSpec("Silicon", "A17 Pro Cluster"),
                  _buildInstitutionalSpec("Imaging", "48MP Phase Detect AF"),
                  _buildInstitutionalSpec("Interface", "USB-C High Speed Node"),
                  _buildInstitutionalSpec("Network", "5G Global Protocol"),
                ],
              ),
            ),
          ),
        ],
      ),
      bottomNavigationBar: Container(
        padding: EdgeInsets.all(32.w),
        decoration: BoxDecoration(
          color: Colors.white,
          border: Border.at(top: BorderSide(color: Colors.slate-50)),
          boxShadow: [BoxShadow(color: Colors.black.withAlpha(8), blurRadius: 30, offset: const Offset(0, -10))],
        ),
        child: ElevatedButton(
          onPressed: () {},
          style: ElevatedButton.styleFrom(
            backgroundColor: Colors.slate-900,
            foregroundColor: Colors.white,
            minimumSize: Size(double.infinity, 75.h),
            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(28.r)),
            elevation: 15,
            shadowColor: Colors.black.withAlpha(77),
          ),
          child: Text("Initiate Acquisition", style: TextStyle(fontSize: 18.sp, fontWeight: FontWeight.w900, uppercase: true, tracking: 1)),
        ),
      ),
    );
  }

  Widget _buildInstitutionalSpec(String key, String value) {
    return Container(
      margin: EdgeInsets.only(bottom: 16.h),
      padding: EdgeInsets.all(20.w),
      decoration: BoxDecoration(
        color: Colors.slate-50,
        borderRadius: BorderRadius.circular(22.r),
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Text(key, style: const TextStyle(color: Colors.slate-400, fontWeight: FontWeight.black, fontSize: 12, uppercase: true)),
          Text(value, style: const TextStyle(fontWeight: FontWeight.w900, color: Colors.slate-800, fontSize: 14)),
        ],
      ),
    );
  }
}
