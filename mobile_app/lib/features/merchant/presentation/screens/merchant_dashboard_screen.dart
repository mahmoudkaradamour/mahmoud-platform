import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:mobile_app/shared/theme/app_theme.dart';

/// Mobile Merchant Command Center.
/// Provides high-level metrics and quick access to inventory, orders, and live streaming.
class MerchantDashboardScreen extends StatelessWidget {
  const MerchantDashboardScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: CustomScrollView(
        slivers: [
          _buildSliverAppBar(),
          SliverToBoxAdapter(
            child: Padding(
              padding: EdgeInsets.all(24.w),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  _buildStatsGrid(),
                  SizedBox(height: 40.h),
                  _buildSectionTitle("الأدوات السيادية"),
                  SizedBox(height: 20.h),
                  _buildQuickActions(context),
                  SizedBox(height: 40.h),
                  _buildSectionTitle("الطلبات النشطة"),
                  SizedBox(height: 20.h),
                  _buildActiveOrdersList(),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildSliverAppBar() {
    return SliverAppBar(
      expandedHeight: 180.h,
      floating: false,
      pinned: true,
      flexibleSpace: FlexibleSpaceBar(
        title: Text(
          "لوحة تحكم التاجر",
          style: TextStyle(fontWeight: FontWeight.w900, fontSize: 18.sp, color: Colors.white),
        ),
        background: Container(
          decoration: const BoxDecoration(
            gradient: LinearGradient(
              colors: [AppTheme.primary, AppTheme.secondary],
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
            ),
          ),
          child: Stack(
            children: [
              Positioned(
                right: -20,
                bottom: -20,
                child: Icon(Icons.storefront, size: 150, color: Colors.white.withAlpha(26)),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildStatsGrid() {
    return GridView.count(
      shrinkWrap: true,
      physics: const NeverScrollableScrollPhysics(),
      crossAxisCount: 2,
      childAspectRatio: 1.5,
      crossAxisSpacing: 15.w,
      mainAxisSpacing: 15.h,
      children: [
        _buildStatCard("مبيعات اليوم", "\$2,450", Icons.trending_up, AppTheme.success),
        _buildStatCard("طلبات معلقة", "12", Icons.pending_actions, AppTheme.warning),
        _buildStatCard("إجمالي المنتجات", "154", Icons.inventory_2_outlined, AppTheme.primary),
        _buildStatCard("تقييم المتجر", "4.9", Icons.star_border, AppTheme.sovereignGold),
      ],
    );
  }

  Widget _buildStatCard(String label, String value, IconData icon, Color color) {
    return Container(
      padding: EdgeInsets.all(20.w),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(24.r),
        boxShadow: [BoxShadow(color: Colors.black.withAlpha(5), blurRadius: 10)],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Icon(icon, color: color, size: 20),
          SizedBox(height: 8.h),
          Text(value, style: TextStyle(fontSize: 18.sp, fontWeight: FontWeight.w900)),
          Text(label, style: TextStyle(fontSize: 10.sp, color: Colors.black38, fontWeight: FontWeight.bold)),
        ],
      ),
    );
  }

  Widget _buildSectionTitle(String title) {
    return Text(title, style: TextStyle(fontSize: 18.sp, fontWeight: FontWeight.w900));
  }

  Widget _buildQuickActions(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        _buildActionItem(Icons.videocam_outlined, "بث مباشر", AppTheme.error),
        _buildActionItem(Icons.add_box_outlined, "أضف منتج", AppTheme.primary),
        _buildActionItem(Icons.people_outline, "الموظفين", Colors.black87),
        _buildActionItem(Icons.settings_outlined, "الإعدادات", Colors.black45),
      ],
    );
  }

  Widget _buildActionItem(IconData icon, String label, Color color) {
    return Column(
      children: [
        Container(
          padding: EdgeInsets.all(16.w),
          decoration: BoxDecoration(
            color: color.withAlpha(26),
            borderRadius: BorderRadius.circular(20.r),
          ),
          child: Icon(icon, color: color, size: 28),
        ),
        SizedBox(height: 10.h),
        Text(label, style: TextStyle(fontSize: 12.sp, fontWeight: FontWeight.w900)),
      ],
    );
  }

  Widget _buildActiveOrdersList() {
    return ListView.separated(
      shrinkWrap: true,
      physics: const NeverScrollableScrollPhysics(),
      itemCount: 2,
      separatorBuilder: (context, index) => SizedBox(height: 15.h),
      itemBuilder: (context, index) {
        return Container(
          padding: EdgeInsets.all(20.w),
          decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.circular(25.r),
            border: Border.all(color: Colors.black.withAlpha(5)),
          ),
          child: Row(
            children: [
              CircleAvatar(backgroundColor: AppTheme.background, child: const Icon(Icons.shopping_bag_outlined, color: Colors.black26)),
              SizedBox(width: 15.w),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text("طلب #9821 - سامر حسن", style: TextStyle(fontWeight: FontWeight.w900, fontSize: 14.sp)),
                    Text("آيفون 15 برو • بانتظار التجهيز", style: TextStyle(color: Colors.black26, fontSize: 10.sp, fontWeight: FontWeight.bold)),
                  ],
                ),
              ),
              const Icon(Icons.arrow_back_ios_new, size: 14, color: Colors.black12),
            ],
          ),
        );
      },
    );
  }
}
