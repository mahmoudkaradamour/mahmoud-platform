import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:mobile_app/shared/theme/app_theme.dart';
import 'package:mobile_app/core/native_bridge/platform_channel.dart';
import 'package:mobile_app/features/catalog/presentation/screens/catalog_screen.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  
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
          title: 'Mahmoud Sovereign Platform',
          debugShowCheckedModeBanner: false,
          theme: AppTheme.lightTheme,
          builder: (context, widget) {
            if (!isSecure) {
              return const Scaffold(
                body: Center(
                  child: Text(
                    "Security Compromised: Native Integrity Failure.",
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
    
    // System Boot & Sync Logic
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
      body: Container(
        decoration: const BoxDecoration(
          color: Color(0xFF000000), // Elite Black Background for Splash
        ),
        child: Center(
          child: FadeTransition(
            opacity: _opacity,
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                // Unified Shield Icon Representation
                Container(
                   padding: const EdgeInsets.all(30),
                   decoration: BoxDecoration(
                      shape: BoxShape.circle,
                      border: Border.all(color: AppTheme.primary.withOpacity(0.5), width: 2),
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
                  "SOVEREIGN ECOSYSTEM",
                  style: TextStyle(
                    color: AppTheme.primary,
                    fontSize: 12,
                    fontWeight: FontWeight.black,
                    letterSpacing: 2,
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
