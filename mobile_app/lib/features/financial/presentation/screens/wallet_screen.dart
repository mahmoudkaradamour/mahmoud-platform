import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:mobile_app/shared/theme/app_theme.dart';

/**
 * Sovereign Financial Wallet Screen.
 * Displays balance, recent transactions, and top-up options.
 * Aligns with the Financial module in the backend.
 */
class WalletScreen extends StatelessWidget {
  const WalletScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("محفظتي"),
        actions: [
          IconButton(onPressed: () {}, icon: const Icon(Icons.help_outline)),
        ],
      ),
      body: SingleChildScrollView(
        padding: EdgeInsets.all(24.w),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            _buildBalanceCard(),
            SizedBox(height: 40.h),
            _buildQuickActions(),
            SizedBox(height: 40.h),
            _buildTransactionHeader(),
            SizedBox(height: 20.h),
            _buildTransactionList(),
          ],
        ),
      ),
    );
  }

  Widget _buildBalanceCard() {
    return Container(
      width: double.infinity,
      padding: EdgeInsets.all(30.w),
      decoration: BoxDecoration(
        color: const Color(0xFF1C1C1E),
        borderRadius: BorderRadius.circular(40.r),
        boxShadow: [
          BoxShadow(
            color: AppTheme.primary.withOpacity(0.3),
            blurRadius: 30,
            offset: const Offset(0, 15),
          ),
        ],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.between,
            children: [
              Text("الرصيد المتاح", style: TextStyle(color: Colors.white54, fontSize: 14.sp, fontWeight: FontWeight.bold)),
              const Icon(Icons.security, color: AppTheme.primary, size: 20),
            ],
          ),
          SizedBox(height: 10.h),
          Text("\$4,250.00", style: TextStyle(color: Colors.white, fontSize: 36.sp, fontWeight: FontWeight.black)),
          SizedBox(height: 30.h),
          Container(
            padding: EdgeInsets.symmetric(horizontal: 15.w, vertical: 8.h),
            decoration: BoxDecoration(
              color: Colors.white.withOpacity(0.05),
              borderRadius: BorderRadius.circular(15.r),
            ),
            child: Text(
              "**** **** **** 9821",
              style: TextStyle(color: Colors.white38, fontSize: 12.sp, letterSpacing: 2),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildQuickActions() {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        _buildActionItem(Icons.add_circle_outline, "شحن", AppTheme.primary),
        _buildActionItem(Icons.arrow_outward, "سحب", Colors.black),
        _buildActionItem(Icons.receipt_long_outlined, "فواتير", Colors.black),
        _buildActionItem(Icons.analytics_outlined, "تقارير", Colors.black),
      ],
    );
  }

  Widget _buildActionItem(IconData icon, String label, Color color) {
    return Column(
      children: [
        Container(
          padding: EdgeInsets.all(18.w),
          decoration: BoxDecoration(
            color: color == AppTheme.primary ? color : Colors.white,
            borderRadius: BorderRadius.circular(20.r),
            border: color == Colors.black ? Border.all(color: Colors.black12) : null,
            boxShadow: color == AppTheme.primary ? [BoxShadow(color: color.withOpacity(0.2), blurRadius: 15, offset: const Offset(0, 8))] : null,
          ),
          child: Icon(icon, color: color == AppTheme.primary ? Colors.white : Colors.black87),
        ),
        SizedBox(height: 10.h),
        Text(label, style: TextStyle(fontSize: 12.sp, fontWeight: FontWeight.black, color: Colors.black87)),
      ],
    );
  }

  Widget _buildTransactionHeader() {
    return Row(
      mainAxisAlignment: MainAxisAlignment.between,
      children: [
        Text("آخر المعاملات", style: TextStyle(fontSize: 18.sp, fontWeight: FontWeight.black)),
        TextButton(onPressed: () {}, child: const Text("عرض الكل", style: TextStyle(fontWeight: FontWeight.bold))),
      ],
    );
  }

  Widget _buildTransactionList() {
    return ListView.separated(
      shrinkWrap: true,
      physics: const NeverScrollableScrollPhysics(),
      itemCount: 3,
      separatorBuilder: (context, index) => SizedBox(height: 15.h),
      itemBuilder: (context, index) {
        return Container(
          padding: EdgeInsets.all(20.w),
          decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.circular(25.r),
            border: Border.all(color: Colors.black.withOpacity(0.02)),
          ),
          child: Row(
            children: [
              Container(
                padding: EdgeInsets.all(12.w),
                decoration: BoxDecoration(
                  color: index == 1 ? AppTheme.error.withOpacity(0.1) : AppTheme.success.withOpacity(0.1),
                  borderRadius: BorderRadius.circular(15.r),
                ),
                child: Icon(
                  index == 1 ? Icons.arrow_outward : Icons.arrow_downward,
                  color: index == 1 ? AppTheme.error : AppTheme.success,
                  size: 20,
                ),
              ),
              SizedBox(width: 15.w),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      index == 1 ? "شراء آيفون 15" : "شحن رصيد محفظة",
                      style: TextStyle(fontWeight: FontWeight.black, fontSize: 14.sp),
                    ),
                    Text("منذ ساعتين • عبر بطاقة بنكية", style: TextStyle(color: Colors.black26, fontSize: 10.sp, fontWeight: FontWeight.bold)),
                  ],
                ),
              ),
              Text(
                index == 1 ? "-\$1200" : "+\$500",
                style: TextStyle(
                  fontWeight: FontWeight.black,
                  fontSize: 16.sp,
                  color: index == 1 ? Colors.black87 : AppTheme.success,
                ),
              ),
            ],
          ),
        );
      },
    );
  }
}
