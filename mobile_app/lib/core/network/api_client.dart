import 'package:dio/dio.dart';

/// Enterprise Mobile API Client.
/// Handles secure communication with the Laravel V1 Backend.
class ApiClient {
  static final Dio _dio = Dio(
    BaseOptions(
      baseUrl: 'http://10.0.2.2:8000/api/v1',
      connectTimeout: const Duration(seconds: 15),
      receiveTimeout: const Duration(seconds: 15),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    ),
  );

  static Dio get instance => _dio;
}
