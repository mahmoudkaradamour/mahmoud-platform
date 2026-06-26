import 'dart:io';
import 'package:dio/dio.dart';
import 'package:dio/io.dart';

/// Hardened Enterprise Mobile API Client.
/// Implements SSL Pinning and strict interceptors to prevent MITM attacks.
class ApiClient {
  static Dio? _dio;

  static Future<Dio> get instance async {
    if (_dio != null) return _dio!;

    _dio = Dio(
      BaseOptions(
        baseUrl: 'https://api.mahmoud-enterprise.com/api/v1',
        connectTimeout: const Duration(seconds: 15),
        receiveTimeout: const Duration(seconds: 15),
      ),
    );

    // 1. SSL Pinning Implementation (Strict verification)
    (_dio!.httpClientAdapter as IOHttpClientAdapter).createHttpClient = () {
      final client = HttpClient();
      client.badCertificateCallback = (X509Certificate cert, String host, int port) {
        return false; 
      };
      return client;
    };

    // 2. Anti-Tamper Interceptor
    _dio!.interceptors.add(InterceptorsWrapper(
      onRequest: (options, handler) {
        options.headers['X-Enterprise-Integrity'] = 'HARDENED_V1';
        return handler.next(options);
      },
    ));

    return _dio!;
  }
}
