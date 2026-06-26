import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:mobile_app/shared/theme/app_theme.dart';

/**
 * Real-time Shipment Tracking Screen.
 * Features: Interactive Map (stubbed), Status Timeline, and Courier Contact.
 */
class TrackingScreen extends StatelessWidget {
  const TrackingScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppTheme.background,
      body: Stack(
        children: [
          // Map Background Layer
          _buildMapPlaceholder(),
          
          // Back Button
          Positioned(
            top: 60.h,
            right: 20.w,
            child: CircleAvatar(
              backgroundColor: Colors.white,
              child: IconButton(
                icon: const Icon(Icons.arrow_forward, color: Colors.black),
                onPressed: () => Navigator.pop(context),
              ),
            ),
          ),

          // Draggable Bottom Sheet for Info
          _buildTrackingDetails(),
        ],
      ),
    );
  }

  Widget _buildMapPlaceholder() {
    return Container(
      width: double.infinity,
      height: double.infinity,
      color: const Color(0xFFE5E2DA), // Google Maps-like base color
      child: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Icon(Icons.map_outlined, size: 100, color: Colors.black12),
            SizedBox(height: 20.h),
            const Text(
              "محرك الخرائط السيادي نشط",
              style: TextStyle(fontWeight: FontWeight.black, color: Colors.black26),
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
            borderRadius: BorderRadius.vertical(top: Radius.circular(40.r)),
            boxShadow: [BoxShadow(color: Colors.black.withOpacity(0.1), blurRadius: 20)],
          ),
          child: ListView(
            controller: scrollController,
            padding: EdgeInsets.all(30.w),
            children: [
              // Handle
              Center(
                child: Container(
                  width: 50.w,
                  height: 5.h,
                  decoration: BoxDecoration(color: Colors.black12, borderRadius: BorderRadius.circular(10.r)),
                ),
              ),
              SizedBox(height: 30.h),

              // Courier Info
              Row(
                mainAxisAlignment: MainAxisAlignment.between,
                children: [
                  Row(
                    children: [
                      CircleAvatar(radius: 25.r, backgroundColor: AppTheme.primary.withOpacity(0.1), child: const Icon(Icons.person, color: AppTheme.primary)),
                      SizedBox(width: 15.w),
                      Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          const Text("أحمد منصور", style: TextStyle(fontWeight: FontWeight.black, fontSize: 16)),
                          Text("مندوب التوصيل • سيارة بيضاء", style: TextStyle(color: Colors.black38, fontSize: 10.sp, fontWeight: FontWeight.bold)),
                        ],
                      ),
                    ],
                  ),
                  Row(
                    children: [
                      _buildContactButton(Icons.phone, AppTheme.success),
                      SizedBox(width: 10.w),
                      _buildContactButton(Icons.chat, AppTheme.primary),
                    ],
                  ),
                ],
              ),

              SizedBox(height: 40.h),
              const Divider(color: Colors.black12),
              SizedBox(height: 30.h),

              // Timeline Header
              Row(
                mainAxisAlignment: MainAxisAlignment.between,
                children: [
                  const Text("حالة الشحنة", style: TextStyle(fontWeight: FontWeight.black, fontSize: 18)),
                  Text("يصل خلال 15 دقيقة", style: TextStyle(color: AppTheme.primary, fontWeight: FontWeight.black, fontSize: 12.sp)),
                ],
              ),
              SizedBox(height: 30.h),

              // Simplified Timeline
              _buildTimelineTile("تم الاستلام", "10:15 AM", isPast: true),
              _buildTimelineTile("في الطريق إليك", "11:02 AM", isPast: true, isCurrent: true),
              _buildTimelineTile("تم التسليم", "متوقع قريباً", isPast: false),
            ],
          ),
        );
      },
    );
  }

  Widget _buildContactButton(IconData icon, Color color) {
    return Container(
      padding: EdgeInsets.all(12.w),
      decoration: BoxDecoration(
        color: color.withOpacity(0.1),
        borderRadius: BorderRadius.circular(15.r),
      ),
      child: Icon(icon, color: color, size: 20),
    );
  }

  Widget _buildTimelineTile(String title, String time, {required bool isPast, bool isCurrent = false}) {
    return Row(
      children: [
        Column(
          children: [
            Container(
              width: 20.w,
              height: 20.h,
              decoration: BoxDecoration(
                color: isCurrent ? AppTheme.primary : (isPast ? AppTheme.primary.withOpacity(0.2) : Colors.black12),
                shape: BoxShape.circle,
                border: isCurrent ? Border.all(color: Colors.white, width: 4) : null,
              ),
              child: isCurrent ? null : (isPast ? const Icon(Icons.check, size: 12, color: AppTheme.primary) : null),
            ),
            Container(width: 2.w, height: 40.h, color: isPast ? AppTheme.primary.withOpacity(0.2) : Colors.black12),
          ],
        ),
        SizedBox(width: 20.w),
        Expanded(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(title, style: TextStyle(fontWeight: FontWeight.black, fontSize: 14.sp, color: isPast ? Colors.black87 : Colors.black26)),
              Text(time, style: TextStyle(fontSize: 10.sp, color: Colors.black38, fontWeight: FontWeight.bold)),
              SizedBox(height: 25.h),
            ],
          ),
        ),
      ],
    );
  }
}
