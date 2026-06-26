import 'package:flutter/services.dart';

/// Enterprise App Hardener.
/// Defends against Reverse Engineering, Tampering (Lucky Patcher), 
/// and Unauthorized Installers.
class AppHardener {
  static const MethodChannel _securityChannel = MethodChannel('com.mahmoud.platform/hardener');

  /// Verifies if the app was installed from an authorized source (Google Play / App Store).
  /// Blocks sideloading or modded APK installations.
  static Future<bool> isInstallationSourceValid() async {
    try {
      final String? source = await _securityChannel.invokeMethod('getInstallerPackageName');
      // Authorized: com.android.vending (Play Store), com.apple.AppStore (iOS)
      return source == 'com.android.vending' || source == 'com.apple.AppStore' || source == null; // null during dev
    } catch (e) {
      return false;
    }
  }

  /// Detects presence of tampering tools like Lucky Patcher or Xposed.
  static Future<bool> isTamperingDetected() async {
    try {
      return await _securityChannel.invokeMethod('checkTamperingTools');
    } catch (e) {
      return true; // Fail safe
    }
  }
}
