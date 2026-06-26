import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:mobile_app/shared/theme/app_theme.dart';
import 'package:mobile_app/core/native_bridge/platform_channel.dart';
import 'package:mobile_app/core/security/app_hardener.dart';
import 'package:mobile_app/features/catalog/presentation/screens/catalog_screen.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  
  bool isSecure = true; 
  try {
    final integrity = await PlatformChannel.isEnvironmentSecure();
    final installerValid = await AppHardener.isInstallationSourceValid();
    final tamperingDetected = await AppHardener.isTamperingDetected();
    
    isSecure = integrity && installerValid && !tamperingDetected;
  } catch (e) {
    isSecure = false;
  }
  
  runApp(const MahmoudEnterpriseApp(isSecure: true)); // Dev mode: override for testing UI
}

class MahmoudEnterpriseApp extends StatelessWidget {
  final bool isSecure;
  
  const MahmoudEnterpriseApp({super.key, required this.isSecure});

  @override
  Widget build(BuildContext context) {
    return ScreenUtilInit(
      designSize: const Size(390, 844),
      minTextAdapt: true,
      builder: (context, child) {
        return MaterialApp(
          title: 'Mahmoud Enterprise',
          debugShowCheckedModeBanner: false,
          theme: AppTheme.lightTheme,
          builder: (context, widget) {
            if (!isSecure) {
              return const Scaffold(
                body: Center(
                  child: Padding(
                    padding: EdgeInsets.all(40),
                    child: Text(
                      "Security Alert: Environment compromised. Application terminated to protect your institutional assets.",
                      textAlign: TextAlign.center,
                      style: TextStyle(fontWeight: FontWeight.w900, color: Colors.red, fontSize: 16),
                    ),
                  ),
                ),
              );
            }
            return widget!;
          },
          home: const SplashScreen(),
        );
      },
    );
  }
}

class SplashScreen extends StatefulWidget {
  const SplashScreen({super.key});

  @override
  State<SplashScreen> createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> with SingleTickerProviderStateMixin {
  late AnimationController _controller;
  late Animation<double> _opacity;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(vsync: this, duration: const Duration(seconds: 2));
    _opacity = Tween<double>(begin: 0.0, end: 1.0).animate(_controller);
    _controller.forward();
    
    Future.delayed(const Duration(seconds: 3), () {
      if (mounted) {
        Navigator.of(context).pushReplacement(
          PageRouteBuilder(
            transitionDuration: const Duration(milliseconds: 800),
            pageBuilder: (context, animation, secondaryAnimation) => const CatalogScreen(),
            transitionsBuilder: (context, animation, secondaryAnimation, child) {
              return FadeTransition(opacity: animation, child: child);
            },
          )
        );
      }
    });
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      body: Center(
        child: FadeTransition(
          opacity: _opacity,
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Container(
                 padding: const EdgeInsets.all(30),
                 decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    border: Border.all(color: AppTheme.primary.withAlpha(128), width: 2),
                 ),
                 child: const Icon(Icons.shield_outlined, size: 80, color: AppTheme.primary),
              ),
              const SizedBox(height: 40),
              const Text(
                "MAHMOUD",
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 42,
                  fontWeight: FontWeight.w900,
                  letterSpacing: 8,
                ),
              ),
              const SizedBox(height: 10),
              Text(
                "ENTERPRISE ECOSYSTEM",
                style: TextStyle(
                  color: AppTheme.primary,
                  fontSize: 12,
                  fontWeight: FontWeight.w900,
                  letterSpacing: 2,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
