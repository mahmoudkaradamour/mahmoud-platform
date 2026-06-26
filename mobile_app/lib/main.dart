import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:mobile_app/shared/theme/app_theme.dart';
import 'package:mobile_app/core/native_bridge/platform_channel.dart';
import 'package:mobile_app/features/identity/presentation/screens/login_screen.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  
  // Security Handshake at startup: Verify Native Integrity
  // In dynamic production environments, this would use hardware-backed checks.
  bool isSecure = true; 
  try {
    isSecure = await PlatformChannel.isEnvironmentSecure();
  } catch (e) {
    isSecure = false;
  }
  
  runApp(MahmoudPlatformApp(isSecure: isSecure));
}

class MahmoudPlatformApp extends StatelessWidget {
  final bool isSecure;
  
  const MahmoudPlatformApp({super.key, required this.isSecure});

  @override
  Widget build(BuildContext context) {
    return ScreenUtilInit(
      designSize: const Size(390, 844),
      minTextAdapt: true,
      builder: (context, child) {
        return MaterialApp(
          title: 'Mahmoud Platform',
          debugShowCheckedModeBanner: false,
          theme: AppTheme.lightTheme,
          builder: (context, widget) {
            if (!isSecure) {
              return const Scaffold(
                body: Center(
                  child: Text(
                    "Security Compromised: Device is Rooted or Unsafe.",
                    textAlign: TextAlign.center,
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
          home: const LoginScreen(), // Directly routing to Login for Stage 2
        );
      },
    );
  }
}
