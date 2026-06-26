import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:mobile_app/shared/theme/app_theme.dart';

/// Institutional Ledger Interface.
/// High-fidelity financial dashboard with real-time settlement tracking.
class WalletScreen extends StatelessWidget {
  const WalletScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Institutional Ledger"),
        actions: [
          IconButton(onPressed: () {}, icon: const Icon(Icons.info_outline)),
        ],
      ),
      body: SingleChildScrollView(
        padding: EdgeInsets.all(24.w),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            _buildBalanceCard(),
            SizedBox(height: 48.h),
            _buildQuickActions(),
            SizedBox(height: 48.h),
            _buildTransactionHeader(),
            SizedBox(height: 24.h),
            _buildTransactionList(),
          ],
        ),
      ),
    );
  }

  Widget _buildBalanceCard() {
    return Container(
      width: double.infinity,
      padding: EdgeInsets.all(32.w),
      decoration: BoxDecoration(
        color: const Color(0xFF0F172A),
        borderRadius: BorderRadius.circular(48.r),
        boxShadow: [
          BoxShadow(
            color: AppTheme.primary.withAlpha(77),
            blurRadius: 40,
            offset: const Offset(0, 20),
          ),
        ],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text("Liquid Capital", style: TextStyle(color: Colors.white.withAlpha(138), fontSize: 14.sp, fontWeight: FontWeight.bold, uppercase: true, tracking: 1)),
              const Icon(Icons.account_balance_wallet_outlined, color: AppTheme.primary, size: 24),
            ],
          ),
          SizedBox(height: 16.h),
          Text("\$4,250.00", style: TextStyle(color: Colors.white, fontSize: 40.sp, fontWeight: FontWeight.w900, letterSpacing: -1)),
          SizedBox(height: 40.h),
          Container(
            padding: EdgeInsets.symmetric(horizontal: 20.w, vertical: 12.h),
            decoration: BoxDecoration(
              color: Colors.white.withAlpha(13),
              borderRadius: BorderRadius.circular(20.r),
              border: Border.all(color: Colors.white.withAlpha(13)),
            ),
            child: Row(
              mainAxisSize: MainAxisSize.min,
              children: [
                const Icon(Icons.link, color: Colors.white38, size: 14),
                SizedBox(width: 8.w),
                Text(
                  "NODE-ID: ****9821",
                  style: TextStyle(color: Colors.white.withAlpha(97), fontSize: 10.sp, fontWeight: FontWeight.black, letterSpacing: 2),
                ),
              ],
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
        _buildActionItem(Icons.add_task_outlined, "Capitalize", AppTheme.primary),
        _buildActionItem(Icons.outbound_outlined, "Disburse", Colors.black),
        _buildActionItem(Icons.history_edu_outlined, "Ledger", Colors.black),
        _buildActionItem(Icons.query_stats_outlined, "Reporting", Colors.black),
      ],
    );
  }

  Widget _buildActionItem(IconData icon, String label, Color color) {
    return Column(
      children: [
        Container(
          padding: EdgeInsets.all(20.w),
          decoration: BoxDecoration(
            color: color == AppTheme.primary ? color : Colors.white,
            borderRadius: BorderRadius.circular(24.r),
            border: color == Colors.black ? Border.all(color: Colors.slate-100) : null,
            boxShadow: color == AppTheme.primary ? [BoxShadow(color: color.withAlpha(51), blurRadius: 20, offset: const Offset(0, 10))] : null,
          ),
          child: Icon(icon, color: color == AppTheme.primary ? Colors.white : Colors.slate-600, size: 24),
        ),
        SizedBox(height: 12.h),
        Text(label, style: TextStyle(fontSize: 11.sp, fontWeight: FontWeight.w900, color: Colors.black87, uppercase: true)),
      ],
    );
  }

  Widget _buildTransactionHeader() {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        const Text("Audit Feed", style: TextStyle(fontSize: 20.sp, fontWeight: FontWeight.w900, letterSpacing: -0.5)),
        TextButton(onPressed: () {}, child: const Text("Export CSV", style: TextStyle(fontWeight: FontWeight.black))),
      ],
    );
  }

  Widget _buildTransactionList() {
    return ListView.separated(
      shrinkWrap: true,
      physics: const NeverScrollableScrollPhysics(),
      itemCount: 3,
      separatorBuilder: (context, index) => SizedBox(height: 16.h),
      itemBuilder: (context, index) {
        final isDebit = index == 1;
        return Container(
          padding: EdgeInsets.all(24.w),
          decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.circular(32.r),
            border: Border.all(color: Colors.slate-50),
          ),
          child: Row(
            children: [
              Container(
                padding: EdgeInsets.all(14.w),
                decoration: BoxDecoration(
                  color: isDebit ? AppTheme.error.withAlpha(26) : AppTheme.success.withAlpha(26),
                  borderRadius: BorderRadius.circular(18.r),
                ),
                child: Icon(
                  isDebit ? Icons.arrow_upward : Icons.arrow_downward,
                  color: isDebit ? AppTheme.error : AppTheme.success,
                  size: 22,
                ),
              ),
              SizedBox(width: 20.w),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      isDebit ? "Inventory Acquisition" : "Capital Infusion",
                      style: TextStyle(fontWeight: FontWeight.w900, fontSize: 15.sp),
                    ),
                    Text("Protocol: CLEAR-NET • Institutional", style: TextStyle(color: Colors.black26, fontSize: 10.sp, fontWeight: FontWeight.black, uppercase: true)),
                  ],
                ),
              ),
              Text(
                isDebit ? "-\$1,200.00" : "+\$500.00",
                style: TextStyle(
                  fontWeight: FontWeight.w900,
                  fontSize: 17.sp,
                  color: isDebit ? Colors.black87 : AppTheme.success,
                  letterSpacing: -0.5
                ),
              ),
            ],
          ),
        );
      },
    );
  }
}
