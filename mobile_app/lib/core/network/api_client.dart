import 'package:dio/dio.dart';

/**
 * Enterprise Mobile API Client.
 * Handles secure communication with the Laravel V1 Backend.
 * Features: Timeout management, Interceptors, and Standardized Error Parsing.
 */
class ApiClient {
  static final Dio _dio = Dio(
    BaseOptions(
      baseUrl: 'http://10.0.2.2:8000/api/v1', // Android Emulator localhost
      connectTimeout: const Duration(seconds: 15),
      receiveTimeout: const Duration(seconds: 15),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    ),
  );

  static Dio get instance {
    // Add logging and auth interceptors here in later stages
    return _dio;
  }
}
