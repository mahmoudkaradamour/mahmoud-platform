import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';

/// Enterprise Test Helpers.
/// Provides standardized wrappers for UI and Logic verification.
Widget wrapWithScreenUtil(Widget child) {
  return ScreenUtilInit(
    designSize: const Size(390, 844),
    minTextAdapt: true,
    builder: (context, _) => MaterialApp(home: child),
  );
}
