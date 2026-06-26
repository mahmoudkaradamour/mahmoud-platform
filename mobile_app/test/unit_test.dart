import 'package:flutter_test/flutter_test.dart';
import 'package:mobile_app/core/localization/dynamic_translator.dart';

void main() {
  group('Sovereign Mobile Unit Tests', () {
    test('Dynamic Translator properly merges remote data', () async {
      final translator = DynamicTranslator();
      await translator.syncTranslations({'welcome': 'مرحباً'});
      
      expect(translator.translate('welcome'), 'مرحباً');
      expect(translator.translate('missing'), 'missing');
    });

    test('Locale switching notifies listeners', () {
      final translator = DynamicTranslator();
      var listenerCalled = false;
      translator.addListener(() => listenerCalled = true);
      
      translator.setLocale('en');
      expect(translator.currentLocale, 'en');
      expect(listenerCalled, isTrue);
    });
  });
}
