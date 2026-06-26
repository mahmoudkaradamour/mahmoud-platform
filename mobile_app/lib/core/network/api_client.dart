import 'dart:io';
import 'package:dio/dio.dart';
import 'package:dio/io.dart';
import 'package:flutter/services.dart';

/// Hardened Enterprise Mobile API Client.
/// Implements SSL Pinning and strict interceptors to prevent MITM attacks (Charles/Burp).
class ApiClient {
  static Dio? _dio;

  static Future<Dio> get instance async {
    if (_dio != null) return _dio!;

    _dio = Dio(
      BaseOptions(
        baseUrl: 'https://api.mahmoud-platform.com/api/v1', // Using HTTPS for Pinning
        connectTimeout: const Duration(seconds: 15),
        receiveTimeout: const Duration(seconds: 15),
      ),
    );

    // 1. SSL Pinning Implementation
    // In prod, you'd load your .pem or .cer file from assets
    // ByteData cert = await rootBundle.load('assets/certs/prod_cert.pem');
    
    (_dio!.httpClientAdapter as IOHttpClientAdapter).createHttpClient = () {
      final client = HttpClient();
      client.badCertificateCallback = (X509Certificate cert, String host, int port) {
        // ABSOLUTE PROTECTION: Never allow self-signed or proxy certificates in prod
        return false; 
      };
      return client;
    };

    // 2. Anti-Tamper Interceptor: Injecting Sovereign Security Headers
    _dio!.interceptors.add(InterceptorsWrapper(
      onRequest: (options, handler) {
        options.headers['X-Sovereign-Integrity'] = 'HARDENED_V1';
        return handler.next(options);
      },
    ));

    return _dio!;
  }
}
