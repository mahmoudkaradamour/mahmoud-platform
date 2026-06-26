import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:mobile_app/shared/theme/app_theme.dart';

/// Enterprise Merchant Command Center.
/// High-fidelity analytics and operational control.
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
                  _buildSectionTitle("Management Protocols"),
                  SizedBox(height: 20.h),
                  _buildQuickActions(context),
                  SizedBox(height: 40.h),
                  _buildSectionTitle("Active Fulfillment"),
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
      expandedHeight: 200.h,
      floating: false,
      pinned: true,
      flexibleSpace: FlexibleSpaceBar(
        titlePadding: EdgeInsets.only(left: 24.w, bottom: 20.h),
        title: Text(
          "Control Center",
          style: TextStyle(fontWeight: FontWeight.w900, fontSize: 22.sp, color: Colors.white, letterSpacing: -1),
        ),
        background: Container(
          decoration: const BoxDecoration(
            gradient: LinearGradient(
              colors: [Color(0xFF0F172A), Color(0xFF1E293B)],
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
            ),
          ),
          child: Stack(
            children: [
              Positioned(
                right: -40,
                bottom: -40,
                child: Icon(Icons.analytics_outlined, size: 240, color: Colors.white.withValues(alpha: 0.05)),
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
      childAspectRatio: 1.4,
      crossAxisSpacing: 15.w,
      mainAxisSpacing: 15.h,
      children: [
        _buildStatCard("Daily Yield", "\$2,450", Icons.trending_up, AppTheme.success),
        _buildStatCard("Pending Clear", "12", Icons.hourglass_empty, AppTheme.warning),
        _buildStatCard("Total Inventory", "154", Icons.layers_outlined, AppTheme.primary),
        _buildStatCard("Network Rating", "4.9", Icons.verified_user_outlined, AppTheme.enterpriseGold),
      ],
    );
  }

  Widget _buildStatCard(String label, String value, IconData icon, Color color) {
    return Container(
      padding: EdgeInsets.all(24.w),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(30.r),
        boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.02), blurRadius: 10, offset: const Offset(0, 4))],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Icon(icon, color: color, size: 20),
          SizedBox(height: 10.h),
          Text(value, style: TextStyle(fontSize: 20.sp, fontWeight: FontWeight.w900, color: Colors.blueGrey[900])),
          Text(
            label, 
            style: TextStyle(
              fontSize: 10.sp, 
              color: Colors.blueGrey[300], 
              fontWeight: FontWeight.w900, 
              letterSpacing: 0.5
            )
          ),
        ],
      ),
    );
  }

  Widget _buildSectionTitle(String title) {
    return Text(title, style: TextStyle(fontSize: 18.sp, fontWeight: FontWeight.w900, letterSpacing: -0.5));
  }

  Widget _buildQuickActions(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        _buildActionItem(Icons.videocam_outlined, "Stream", AppTheme.error),
        _buildActionItem(Icons.add_business_outlined, "Inventory", AppTheme.primary),
        _buildActionItem(Icons.badge_outlined, "Staff", Colors.blueGrey[900]!),
        _buildActionItem(Icons.tune_outlined, "Settings", Colors.blueGrey[300]!),
      ],
    );
  }

  Widget _buildActionItem(IconData icon, String label, Color color) {
    return Column(
      children: [
        Container(
          padding: EdgeInsets.all(18.w),
          decoration: BoxDecoration(
            color: color.withValues(alpha: 0.05),
            borderRadius: BorderRadius.circular(22.r),
            border: Border.all(color: color.withValues(alpha: 0.1)),
          ),
          child: Icon(icon, color: color, size: 28),
        ),
        SizedBox(height: 12.h),
        Text(label, style: TextStyle(fontSize: 12.sp, fontWeight: FontWeight.w900, color: Colors.blueGrey[900])),
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
          padding: EdgeInsets.all(24.w),
          decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.circular(30.r),
            border: Border.all(color: Colors.black.withValues(alpha: 0.02)),
          ),
          child: Row(
            children: [
              CircleAvatar(
                radius: 25,
                backgroundColor: AppTheme.background, 
                child: const Icon(Icons.inventory_2_outlined, color: Colors.black26)
              ),
              SizedBox(width: 20.w),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text("Entry #9821 - S. Hassan", style: TextStyle(fontWeight: FontWeight.w900, fontSize: 14.sp)),
                    Text(
                      "SKU: IP15-PRO • Processing", 
                      style: TextStyle(
                        color: Colors.blueGrey[300], 
                        fontSize: 10.sp, 
                        fontWeight: FontWeight.w900, 
                        letterSpacing: 1
                      )
                    ),
                  ],
                ),
              ),
              const Icon(Icons.arrow_forward_ios, size: 14, color: Colors.black12),
            ],
          ),
        );
      },
    );
  }
}
