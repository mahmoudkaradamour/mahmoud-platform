import 'package:dio/dio.dart';
import 'package:mocktail/mocktail.dart'; // Corrected import

/// Elite Mock Repository for Enterprise Unit Testing.
/// Isolates business logic from network latency and external failures.
class MockDio extends Mock implements Dio {}

class MockResponse extends Mock implements Response<dynamic> {}
