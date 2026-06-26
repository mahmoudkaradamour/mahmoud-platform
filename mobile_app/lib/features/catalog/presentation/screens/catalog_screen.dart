import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:mobile_app/shared/theme/app_theme.dart';
import 'package:mobile_app/features/catalog/presentation/screens/product_detail_screen.dart';

/// Enterprise Catalog Discovery Screen.
/// Optimized for high-frequency trading and ZCL (Zero Cognitive Load).
class CatalogScreen extends StatelessWidget {
  const CatalogScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Discover Platform"),
        actions: [
          IconButton(onPressed: () {}, icon: const Icon(Icons.notifications_none, color: Colors.black)),
          IconButton(onPressed: () {}, icon: const Icon(Icons.search, color: Colors.black)),
        ],
      ),
      body: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            _buildPersonalizedSection(context),
            Padding(
              padding: EdgeInsets.symmetric(horizontal: 24.w, vertical: 10.h),
              child: const Text("Marketplace Inventory", style: TextStyle(fontWeight: FontWeight.w900, fontSize: 18)),
            ),
            GridView.builder(
              shrinkWrap: true,
              physics: const NeverScrollableScrollPhysics(),
              padding: EdgeInsets.all(20.w),
              gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                crossAxisCount: 2,
                childAspectRatio: 0.65,
                crossAxisSpacing: 15.w,
                mainAxisSpacing: 15.h,
              ),
              itemCount: 4,
              itemBuilder: (context, index) {
                return _buildProductCard(context, index);
              },
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildPersonalizedSection(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Padding(
          padding: EdgeInsets.symmetric(horizontal: 24.w, vertical: 20.h),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              const Text("Picked For You (AI)", style: TextStyle(fontWeight: FontWeight.w900, fontSize: 18, color: AppTheme.primary)),
              TextButton(onPressed: () {}, child: const Text("View All")),
            ],
          ),
        ),
        SizedBox(
          height: 180.h,
          child: ListView.separated(
            padding: EdgeInsets.symmetric(horizontal: 24.w),
            scrollDirection: Axis.horizontal,
            itemCount: 3,
            separatorBuilder: (context, index) => SizedBox(width: 15.w),
            itemBuilder: (context, index) {
              return Container(
                width: 140.w,
                decoration: BoxDecoration(
                  color: AppTheme.primary.withAlpha(200),
                  borderRadius: BorderRadius.circular(30.r),
                ),
                child: const Center(child: Icon(Icons.auto_awesome, color: Colors.white30, size: 40)),
              );
            },
          ),
        ),
      ],
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
          boxShadow: [BoxShadow(color: Colors.black.withAlpha(5), blurRadius: 15, offset: const Offset(0, 8))],
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Expanded(
              child: Container(
                width: double.infinity,
                decoration: BoxDecoration(
                  color: AppTheme.background,
                  borderRadius: BorderRadius.vertical(top: Radius.circular(30.r)),
                ),
                child: const Center(child: Icon(Icons.shopping_bag_outlined, size: 50, color: Colors.black12)),
              ),
            ),
            Padding(
              padding: EdgeInsets.all(15.w),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text("Electronics", style: TextStyle(fontSize: 10.sp, fontWeight: FontWeight.w900, color: Colors.black26)),
                  SizedBox(height: 4.h),
                  const Text("iPhone 15 Pro", style: TextStyle(fontSize: 14.sp, fontWeight: FontWeight.bold), maxLines: 1),
                  SizedBox(height: 12.h),
                  Text("\$1200", style: TextStyle(fontSize: 18.sp, fontWeight: FontWeight.w900, color: AppTheme.primary)),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
