import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:mobile_app/shared/theme/app_theme.dart';
import 'package:mobile_app/core/native_bridge/platform_channel.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  
  // Security Handshake at startup: Verify Native Integrity
  final isSecure = await PlatformChannel.isEnvironmentSecure();
  
  runApp(MahmoudPlatformApp(isSecure: isSecure));
}

class MahmoudPlatformApp extends StatelessWidget {
  final bool isSecure;
  
  const MahmoudPlatformApp({super.key, required this.isSecure});

  @override
  Widget build(BuildContext context) {
    return ScreenUtilInit(
      designSize: const Size(390, 844), // Optimized for modern iPhone/Android
      minTextAdapt: true,
      builder: (context, child) {
        return MaterialApp(
          title: 'Mahmoud Platform',
          debugShowCheckedModeBanner: false,
          theme: AppTheme.lightTheme,
          builder: (context, widget) {
            // Global Security Overlay for Compromised Devices
            if (!isSecure) {
              return const Scaffold(
                body: Center(
                  child: Text(
                    "بيئة التشغيل غير آمنة. تم إيقاف التطبيق لحماية بياناتك.",
                    textAlign: TextCenter,
                    style: TextStyle(fontWeight: FontWeight.bold, color: Colors.red),
                  ),
                ),
              );
            }
            return Directionality(
              textDirection: TextDirection.rtl,
              child: widget!,
            );
          },
          home: const SplashScreen(),
        );
      },
    );
  }
}

class SplashScreen extends StatelessWidget {
  const SplashScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        decoration: const BoxDecoration(
          gradient: LinearGradient(
            begin: Alignment.topRight,
            end: Alignment.bottomLeft,
            colors: [AppTheme.primary, AppTheme.secondary],
          ),
        ),
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              const Icon(Icons.shopping_bag_outlined, size: 100, color: Colors.white),
              SizedBox(height: 20.h),
              const Text(
                "MAHMOUD",
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 40,
                  fontWeight: FontWeight.w900,
                  fontStyle: FontStyle.italic,
                  letterSpacing: 4,
                ),
              ),
              SizedBox(height: 10.h),
              const Text(
                "SOVEREIGN COMMERCE",
                style: TextStyle(color: Colors.white70, fontWeight: FontWeight.bold, letterSpacing: 2),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
