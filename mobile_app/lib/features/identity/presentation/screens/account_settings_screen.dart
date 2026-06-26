import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:mobile_app/shared/theme/app_theme.dart';

/// Elite Account Management Interface.
/// Handles high-security lifecycle actions: MFA, Deletion, and Language.
class AccountSettingsScreen extends StatefulWidget {
  const AccountSettingsScreen({super.key});

  @override
  State<AccountSettingsScreen> createState() => _AccountSettingsScreenState();
}

class _AccountSettingsScreenState extends State<AccountSettingsScreen> {
  bool _mfaEnabled = false;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("إعدادات الحساب السيادي")),
      body: ListView(
        padding: EdgeInsets.all(24.w),
        children: [
          _buildSectionHeader("الأمان والمصادقة"),
          _buildSettingTile(
            title: "المصادقة الثنائية (2FA)",
            subtitle: "تأمين الدخول عبر رمز بريدي أو تطبيق مصادقة",
            trailing: Switch(
              value: _mfaEnabled,
              onChanged: (val) => setState(() => _mfaEnabled = val),
              activeColor: AppTheme.primary,
            ),
          ),
          _buildSettingTile(
            title: "تغيير كلمة المرور",
            subtitle: "تحديث مفاتيح الوصول الخاصة بك",
            onTap: () {},
          ),
          
          SizedBox(height: 40.h),
          _buildSectionHeader("التفضيلات واللغة"),
          _buildSettingTile(
            title: "لغة التطبيق",
            subtitle: "العربية (الافتراضية)",
            onTap: () {},
          ),
          _buildSettingTile(
            title: "المظهر (Theme)",
            subtitle: "النظام السيادي الموحد",
            onTap: () {},
          ),

          SizedBox(height: 40.h),
          _buildSectionHeader("إدارة الهوية"),
          _buildSettingTile(
            title: "إيقاف الحساب مؤقتاً",
            subtitle: "تجميد النشاط التجاري والمالي لفترة محددة",
            icon: Icons.pause_circle_outline,
            onTap: () => _confirmAction(context, "إيقاف مؤقت"),
          ),
          _buildSettingTile(
            title: "حذف الحساب نهائياً",
            subtitle: "مسح كافة البيانات (سيتم الاحتفاظ بالسجلات الجنائية)",
            icon: Icons.delete_forever_outlined,
            color: AppTheme.error,
            onTap: () => _confirmAction(context, "حذف نهائي"),
          ),
        ],
      ),
    );
  }

  Widget _buildSectionHeader(String title) {
    return Padding(
      padding: EdgeInsets.only(bottom: 20.h, top: 10.h),
      child: Text(title, style: TextStyle(fontSize: 18.sp, fontWeight: FontWeight.w900, color: AppTheme.primary)),
    );
  }

  Widget _buildSettingTile({required String title, required String subtitle, Widget? trailing, IconData? icon, Color? color, VoidCallback? onTap}) {
    return Container(
      margin: EdgeInsets.only(bottom: 15.h),
      padding: EdgeInsets.all(20.w),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(25.r),
        boxShadow: [BoxShadow(color: Colors.black.withAlpha(5), blurRadius: 10)],
      ),
      child: ListTile(
        contentPadding: EdgeInsets.zero,
        onTap: onTap,
        leading: icon != null ? Icon(icon, color: color ?? Colors.black45) : null,
        title: Text(title, style: TextStyle(fontWeight: FontWeight.w900, color: color ?? Colors.black87)),
        subtitle: Text(subtitle, style: TextStyle(fontSize: 10.sp, color: Colors.black38, fontWeight: FontWeight.bold)),
        trailing: trailing ?? const Icon(Icons.arrow_back_ios_new, size: 14, color: Colors.black12),
      ),
    );
  }

  void _confirmAction(BuildContext context, String action) {
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: Text("تأكيد $action"),
        content: Text("هل أنت متأكد من القيام بعملية $action؟ لا يمكن التراجع عن بعض هذه الإجراءات."),
        actions: [
          TextButton(onPressed: () => Navigator.pop(context), child: const Text("إلغاء")),
          ElevatedButton(
            onPressed: () => Navigator.pop(context),
            style: ElevatedButton.styleFrom(backgroundColor: AppTheme.error, foregroundColor: Colors.white),
            child: const Text("تأكيد"),
          ),
        ],
      ),
    );
  }
}
