import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:mobile_app/shared/theme/app_theme.dart';

/// Enterprise Logistics Tracking.
/// Real-time node monitoring and courier orchestration.
class TrackingScreen extends StatelessWidget {
  const TrackingScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppTheme.background,
      body: Stack(
        children: [
          _buildMapPlaceholder(),
          Positioned(
            top: 60.h,
            left: 20.w,
            child: CircleAvatar(
              backgroundColor: Colors.white,
              child: IconButton(
                icon: const Icon(Icons.arrow_back, color: Colors.black),
                onPressed: () => Navigator.pop(context),
              ),
            ),
          ),
          _buildTrackingDetails(),
        ],
      ),
    );
  }

  Widget _buildMapPlaceholder() {
    return Container(
      width: double.infinity,
      height: double.infinity,
      color: Colors.blueGrey[50],
      child: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Icon(Icons.location_searching, size: 80, color: Colors.black12),
            SizedBox(height: 24.h),
            const Text(
              "Global Geo-Node Active",
              style: TextStyle(fontWeight: FontWeight.w900, color: Colors.black26, letterSpacing: 2),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildTrackingDetails() {
    return DraggableScrollableSheet(
      initialChildSize: 0.4,
      minChildSize: 0.4,
      maxChildSize: 0.9,
      builder: (context, scrollController) {
        return Container(
          decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.vertical(top: Radius.circular(50.r)),
            boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.1), blurRadius: 30)],
          ),
          child: ListView(
            controller: scrollController,
            padding: EdgeInsets.all(32.w),
            children: [
              Center(
                child: Container(
                  width: 60.w,
                  height: 6.h,
                  decoration: BoxDecoration(color: Colors.blueGrey[50], borderRadius: BorderRadius.circular(10.r)),
                ),
              ),
              SizedBox(height: 40.h),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Row(
                    children: [
                      CircleAvatar(
                        radius: 28.r, 
                        backgroundColor: AppTheme.primary.withValues(alpha: 0.1), 
                        child: const Icon(Icons.local_shipping_outlined, color: AppTheme.primary)
                      ),
                      SizedBox(width: 20.w),
                      Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          const Text("A. Mansour", style: TextStyle(fontWeight: FontWeight.w900, fontSize: 18)),
                          Text(
                            "Enterprise Logistics • Node #01", 
                            style: TextStyle(
                              color: Colors.blueGrey[300], 
                              fontSize: 10.sp, 
                              fontWeight: FontWeight.w900, 
                              letterSpacing: 1
                            )
                          ),
                        ],
                      ),
                    ],
                  ),
                  Row(
                    children: [
                      _buildContactButton(Icons.call, AppTheme.success),
                      SizedBox(width: 12.w),
                      _buildContactButton(Icons.chat_bubble_outline, AppTheme.primary),
                    ],
                  ),
                ],
              ),
              SizedBox(height: 40.h),
              const Divider(color: Colors.black12),
              SizedBox(height: 40.h),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  const Text("Fulfillment Status", style: TextStyle(fontWeight: FontWeight.w900, fontSize: 20, letterSpacing: -0.5)),
                  Text(
                    "ETA: 15 MIN", 
                    style: TextStyle(
                      color: AppTheme.primary, 
                      fontWeight: FontWeight.w900, 
                      fontSize: 12.sp, 
                      letterSpacing: 1
                    )
                  ),
                ],
              ),
              SizedBox(height: 40.h),
              _buildTimelineTile("Package Dispatched", "10:15 AM", isPast: true),
              _buildTimelineTile("Out for Delivery", "11:02 AM", isPast: true, isCurrent: true),
              _buildTimelineTile("Final Handover", "Pending", isPast: false),
            ],
          ),
        );
      },
    );
  }

  Widget _buildContactButton(IconData icon, Color color) {
    return Container(
      padding: EdgeInsets.all(14.w),
      decoration: BoxDecoration(
        color: color.withValues(alpha: 0.1),
        borderRadius: BorderRadius.circular(18.r),
      ),
      child: Icon(icon, color: color, size: 22),
    );
  }

  Widget _buildTimelineTile(String title, String time, {required bool isPast, bool isCurrent = false}) {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Column(
          children: [
            Container(
              width: 22.w,
              height: 22.h,
              decoration: BoxDecoration(
                color: isCurrent ? AppTheme.primary : (isPast ? AppTheme.primary.withValues(alpha: 0.2) : Colors.blueGrey[50]),
                shape: BoxShape.circle,
                border: isCurrent ? Border.all(color: Colors.white, width: 4) : null,
              ),
              child: isCurrent ? null : (isPast ? const Icon(Icons.check, size: 14, color: AppTheme.primary) : null),
            ),
            if (title != "Final Handover") 
              Container(width: 2.w, height: 50.h, color: isPast ? AppTheme.primary.withValues(alpha: 0.2) : Colors.blueGrey[50]),
          ],
        ),
        SizedBox(width: 24.w),
        Expanded(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                title, 
                style: TextStyle(
                  fontWeight: FontWeight.w900, 
                  fontSize: 15.sp, 
                  color: isPast ? Colors.blueGrey[900] : Colors.blueGrey[200]
                )
              ),
              Text(
                time, 
                style: TextStyle(
                  fontSize: 10.sp, 
                  color: Colors.blueGrey[400], 
                  fontWeight: FontWeight.w900, 
                  letterSpacing: 1
                )
              ),
            ],
          ),
        ),
      ],
    );
  }
}
