import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:mobile_app/shared/theme/app_theme.dart';
import 'package:mobile_app/features/catalog/presentation/screens/product_detail_screen.dart';

/**
 * Mobile Catalog Discovery Screen.
 * Implements ZCL (Zero Cognitive Load) via clean grid layout and high-fidelity cards.
 */
class CatalogScreen extends StatelessWidget {
  const CatalogScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("اكتشف المنتجات"),
        actions: [
          IconButton(
            onPressed: () {},
            icon: const Icon(Icons.search, color: Colors.black),
          ),
          IconButton(
            onPressed: () {},
            icon: const Icon(Icons.tune, color: Colors.black),
          ),
        ],
      ),
      body: GridView.builder(
        padding: EdgeInsets.all(20.w),
        gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
          crossAxisCount: 2,
          childAspectRatio: 0.65,
          crossAxisSpacing: 15.w,
          mainAxisSpacing: 15.h,
        ),
        itemCount: 6, // Mock count
        itemBuilder: (context, index) {
          return _buildProductCard(context, index);
        },
      ),
    );
  }

  Widget _buildProductCard(BuildContext context, int index) {
    return GestureDetector(
      onTap: () {
        Navigator.push(
          context,
          MaterialPageRoute(builder: (context) => const ProductDetailScreen()),
        );
      },
      child: Container(
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(30.r),
          boxShadow: [
            BoxShadow(
              color: Colors.black.withOpacity(0.03),
              blurRadius: 15,
              offset: const Offset(0, 8),
            ),
          ],
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Image Placeholder with Badge
            Expanded(
              child: Container(
                width: double.infinity,
                decoration: BoxDecoration(
                  color: AppTheme.background,
                  borderRadius: BorderRadius.vertical(top: Radius.circular(30.r)),
                ),
                child: Stack(
                  children: [
                    const Center(
                      child: Icon(Icons.shopping_bag_outlined, size: 50, color: Colors.black12),
                    ),
                    Positioned(
                      top: 12.h,
                      right: 12.w,
                      child: Container(
                        padding: EdgeInsets.symmetric(horizontal: 8.w, vertical: 4.h),
                        decoration: BoxDecoration(
                          color: Colors.white,
                          borderRadius: BorderRadius.circular(10.r),
                        ),
                        child: Row(
                          children: [
                            const Icon(Icons.star, size: 12, color: Colors.amber),
                            SizedBox(width: 2.w),
                            Text("4.9", style: TextStyle(fontSize: 10.sp, fontWeight: FontWeight.black)),
                          ],
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ),
            
            // Info
            Padding(
              padding: EdgeInsets.all(15.w),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    "إلكترونيات",
                    style: TextStyle(fontSize: 10.sp, fontWeight: FontWeight.black, color: Colors.black26),
                  ),
                  SizedBox(height: 4.h),
                  Text(
                    "هاتف آيفون 15 برو ماكس",
                    style: TextStyle(fontSize: 14.sp, fontWeight: FontWeight.bold, color: Colors.black87),
                    maxLines: 2,
                    overflow: TextOverflow.ellipsis,
                  ),
                  SizedBox(height: 12.h),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.between,
                    children: [
                      Text(
                        "\$1200",
                        style: TextStyle(fontSize: 18.sp, fontWeight: FontWeight.black, color: AppTheme.primary),
                      ),
                      Container(
                        padding: EdgeInsets.all(6.w),
                        decoration: BoxDecoration(
                          color: AppTheme.primary,
                          borderRadius: BorderRadius.circular(12.r),
                        ),
                        child: const Icon(Icons.add, color: Colors.white, size: 18),
                      ),
                    ],
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
