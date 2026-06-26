import 'package:flutter/material.dart';

/// Dynamic Sovereign Translation Engine.
/// Allows the Admin to push real-time UI string updates to all users 
/// without app store re-submissions.
class DynamicTranslator extends ChangeNotifier {
  Map<String, String> _translations = {};
  String _currentLocale = 'ar';

  String translate(String key, {String? defaultValue}) {
    return _translations[key] ?? defaultValue ?? key;
  }

  /// Syncs new translations from the Platform Settings API.
  Future<void> syncTranslations(Map<String, dynamic> remoteData) async {
    _translations = remoteData.map((key, value) => MapEntry(key, value.toString()));
    notifyListeners();
  }

  void setLocale(String locale) {
    _currentLocale = locale;
    notifyListeners();
  }

  String get currentLocale => _currentLocale;
}
