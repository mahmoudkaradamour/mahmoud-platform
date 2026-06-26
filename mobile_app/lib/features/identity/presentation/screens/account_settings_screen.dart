import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:mobile_app/shared/theme/app_theme.dart';

/// Elite Account Management.
/// Controls institutional lifecycle, security, and global preferences.
class AccountSettingsScreen extends StatefulWidget {
  const AccountSettingsScreen({super.key});

  @override
  State<AccountSettingsScreen> createState() => _AccountSettingsScreenState();
}

class _AccountSettingsScreenState extends State<AccountSettingsScreen> {
  bool _mfaEnabled = true;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("Enterprise Account Hub")),
      body: ListView(
        padding: EdgeInsets.all(32.w),
        children: [
          _buildInstitutionalHeader("Cybersecurity & Identity"),
          _buildEliteSettingTile(
            title: "Multi-Factor Protocol (MFA)",
            subtitle: "Authorized TOTP / Institutional Email sync",
            trailing: Switch(
              value: _mfaEnabled,
              onChanged: (val) => setState(() => _mfaEnabled = val),
              activeTrackColor: AppTheme.primary,
            ),
          ),
          _buildEliteSettingTile(
            title: "Access Key Rotation",
            subtitle: "Update your institutional encryption keys",
            icon: Icons.vpn_key_outlined,
            onTap: () {},
          ),
          
          SizedBox(height: 56.h),
          _buildInstitutionalHeader("Localization & Hub Settings"),
          _buildEliteSettingTile(
            title: "Active Protocol Language",
            subtitle: "English (Global Standard v1.0)",
            icon: Icons.translate_outlined,
            onTap: () {},
          ),
          _buildEliteSettingTile(
            title: "System Surface (Theme)",
            subtitle: "Standard Enterprise Interface",
            icon: Icons.dark_mode_outlined,
            onTap: () {},
          ),

          SizedBox(height: 56.h),
          _buildInstitutionalHeader("Lifecycle Control"),
          _buildEliteSettingTile(
            title: "Account Suspension",
            subtitle: "Temporarily freeze all liquid asset activity",
            icon: Icons.pause_circle_filled_outlined,
            onTap: () => _confirmInstitutionalAction(context, "Suspension"),
          ),
          _buildEliteSettingTile(
            title: "Terminate Repository",
            subtitle: "Wipe instance data (Audit logs retained for compliance)",
            icon: Icons.delete_sweep_outlined,
            color: AppTheme.error,
            onTap: () => _confirmInstitutionalAction(context, "Termination"),
          ),
        ],
      ),
    );
  }

  Widget _buildInstitutionalHeader(String title) {
    return Padding(
      padding: EdgeInsets.only(bottom: 24.h, left: 4.w),
      child: Text(
        title, 
        style: TextStyle(
          fontSize: 14.sp, 
          fontWeight: FontWeight.w900, 
          color: AppTheme.primary, 
          letterSpacing: 2
        )
      ),
    );
  }

  Widget _buildEliteSettingTile({required String title, required String subtitle, Widget? trailing, IconData? icon, Color? color, VoidCallback? onTap}) {
    return Container(
      margin: EdgeInsets.only(bottom: 20.h),
      padding: EdgeInsets.all(24.w),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(32.r),
        boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.05), blurRadius: 20, offset: const Offset(0, 8))],
      ),
      child: ListTile(
        contentPadding: EdgeInsets.zero,
        onTap: onTap,
        leading: icon != null ? Icon(icon, color: color ?? Colors.blueGrey, size: 28) : null,
        title: Text(title, style: TextStyle(fontWeight: FontWeight.w900, color: color ?? Colors.blueGrey[900], fontSize: 16.sp)),
        subtitle: Padding(
          padding: EdgeInsets.only(top: 4.h),
          child: Text(subtitle, style: TextStyle(fontSize: 11.sp, color: Colors.blueGrey[400], fontWeight: FontWeight.w600)),
        ),
        trailing: trailing ?? const Icon(Icons.chevron_right, size: 18, color: Colors.blueGrey),
      ),
    );
  }

  void _confirmInstitutionalAction(BuildContext context, String action) {
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(32.r)),
        title: Text("Confirm Institutional $action", style: const TextStyle(fontWeight: FontWeight.w900)),
        content: Text("Execute the $action protocol? This action will be recorded in the forensic ledger."),
        actions: [
          TextButton(onPressed: () => Navigator.pop(context), child: const Text("ABORT", style: TextStyle(fontWeight: FontWeight.w900, color: Colors.blueGrey))),
          ElevatedButton(
            onPressed: () => Navigator.pop(context),
            style: ElevatedButton.styleFrom(
              backgroundColor: AppTheme.error, 
              foregroundColor: Colors.white, 
              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16.r))
            ),
            child: const Text("EXECUTE", style: TextStyle(fontWeight: FontWeight.w900)),
          ),
        ],
      ),
    );
  }
}
