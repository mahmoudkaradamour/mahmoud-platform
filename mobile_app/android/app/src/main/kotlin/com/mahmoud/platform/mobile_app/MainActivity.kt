package com.mahmoud.platform.mobile_app

import androidx.annotation.NonNull
import io.flutter.embedding.android.FlutterActivity
import io.flutter.embedding.engine.FlutterEngine
import io.flutter.plugin.common.MethodChannel
import android.content.pm.PackageManager
import android.os.Build
import java.io.File

/**
 * Enterprise Android Main Activity - Elite Security Edition.
 * Handles Root detection, Tampering detection, and Installer Verification.
 */
class MainActivity: FlutterActivity() {
    private val SECURITY_CHANNEL = "com.mahmoud.platform/security"
    private val HARDENER_CHANNEL = "com.mahmoud.platform/hardener"

    override fun configureFlutterEngine(@NonNull flutterEngine: FlutterEngine) {
        super.configureFlutterEngine(flutterEngine)
        
        // Channel 1: Platform Security
        MethodChannel(flutterEngine.dartExecutor.binaryMessenger, SECURITY_CHANNEL).setMethodCallHandler {
            call, result ->
            if (call.method == "checkIntegrity") {
                result.success(!isDeviceCompromised())
            } else {
                result.notImplemented()
            }
        }

        // Channel 2: App Hardener (Anti-Tamper)
        MethodChannel(flutterEngine.dartExecutor.binaryMessenger, HARDENER_CHANNEL).setMethodCallHandler {
            call, result ->
            when (call.method) {
                "getInstallerPackageName" -> {
                    val installer = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
                        packageManager.getInstallSourceInfo(packageName).installingPackageName
                    } else {
                        packageManager.getInstallerPackageName(packageName)
                    }
                    result.success(installer)
                }
                "checkTamperingTools" -> {
                    result.success(detectTamperingTools())
                }
                else -> result.notImplemented()
            }
        }
    }

    private fun isDeviceCompromised(): Boolean {
        val rootPaths = arrayOf("/system/app/Superuser.apk", "/sbin/su", "/system/bin/su", "/system/xbin/su", "/data/local/xbin/su", "/data/local/bin/su", "/system/sd/xbin/su")
        for (path in rootPaths) { if (File(path).exists()) return true }
        return Build.TAGS != null && Build.TAGS.contains("test-keys")
    }

    private fun detectTamperingTools(): Boolean {
        val tamperingApps = arrayOf("com.chelpus.lackypatch", "com.dimonvideo.luckypatcher", "com.android.vending.billing.InAppBillingService.LUCK")
        for (app in tamperingApps) {
            try {
                packageManager.getPackageInfo(app, 0)
                return true
            } catch (e: PackageManager.NameNotFoundException) { }
        }
        return false
    }
}
