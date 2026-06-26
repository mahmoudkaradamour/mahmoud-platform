import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:mobile_app/shared/theme/app_theme.dart';

/// Mobile Login Interface - ZCL Architecture.
/// Designed to meet Apple/Google premium store standards.
class LoginScreen extends StatefulWidget {
  const LoginScreen({super.key});

  @override
  State<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  final _emailController = TextEditingController();
  final _passwordController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        width: double.infinity,
        decoration: BoxDecoration(
          gradient: LinearGradient(
            begin: Alignment.topCenter,
            end: Alignment.bottomCenter,
            colors: [
              AppTheme.background,
              Colors.white.withAlpha(230),
            ],
          ),
        ),
        child: SafeArea(
          child: SingleChildScrollView(
            padding: EdgeInsets.symmetric(horizontal: 24.w),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                SizedBox(height: 60.h),
                Center(
                  child: Container(
                    padding: EdgeInsets.all(20.w),
                    decoration: BoxDecoration(
                      color: Colors.white,
                      borderRadius: BorderRadius.circular(30.r),
                      boxShadow: [
                        BoxShadow(
                          color: AppTheme.primary.withAlpha(26),
                          blurRadius: 20,
                          offset: const Offset(0, 10),
                        ),
                      ],
                    ),
                    child: const Icon(Icons.shield_outlined, size: 60, color: AppTheme.primary),
                  ),
                ),
                SizedBox(height: 40.h),
                Text(
                  "مرحباً بك مجدداً",
                  style: Theme.of(context).textTheme.displayLarge?.copyWith(fontSize: 32.sp),
                ),
                Text(
                  "سجل دخولك للوصول إلى محفظتك وعروضك",
                  style: Theme.of(context).textTheme.bodyMedium,
                ),
                SizedBox(height: 40.h),
                _buildTextField(
                  controller: _emailController,
                  label: "البريد الإلكتروني",
                  icon: Icons.alternate_email,
                ),
                SizedBox(height: 20.h),
                _buildTextField(
                  controller: _passwordController,
                  label: "كلمة المرور",
                  icon: Icons.lock_outline,
                  isPassword: true,
                ),
                SizedBox(height: 12.h),
                Align(
                  alignment: Alignment.centerLeft,
                  child: TextButton(
                    onPressed: () {},
                    child: const Text("نسيت كلمة المرور؟", style: TextStyle(fontWeight: FontWeight.bold)),
                  ),
                ),
                SizedBox(height: 30.h),
                ElevatedButton(
                  onPressed: () {},
                  style: ElevatedButton.styleFrom(
                    backgroundColor: AppTheme.primary,
                    foregroundColor: Colors.white,
                    minimumSize: Size(double.infinity, 65.h),
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(24.r)),
                    elevation: 10,
                    shadowColor: AppTheme.primary.withAlpha(102),
                  ),
                  child: Text(
                    "تسجيل الدخول",
                    style: TextStyle(fontSize: 18.sp, fontWeight: FontWeight.w900),
                  ),
                ),
                SizedBox(height: 40.h),
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    const Text("ليس لديك حساب؟"),
                    TextButton(
                      onPressed: () {},
                      child: const Text("انضم الآن", style: TextStyle(fontWeight: FontWeight.w900, color: AppTheme.primary)),
                    ),
                  ],
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }

  Widget _buildTextField({
    required TextEditingController controller,
    required String label,
    required IconData icon,
    bool isPassword = false,
  }) {
    return Container(
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(24.r),
        boxShadow: [
          BoxShadow(color: Colors.black.withAlpha(5), blurRadius: 10, offset: const Offset(0, 4)),
        ],
      ),
      child: TextField(
        controller: controller,
        obscureText: isPassword,
        decoration: InputDecoration(
          labelText: label,
          prefixIcon: Icon(icon, color: AppTheme.primary, size: 22),
          border: OutlineInputBorder(borderRadius: BorderRadius.circular(24.r), borderSide: BorderSide.none),
          filled: true,
          fillColor: Colors.transparent,
          contentPadding: EdgeInsets.symmetric(vertical: 20.h, horizontal: 20.w),
        ),
      ),
    );
  }
}
