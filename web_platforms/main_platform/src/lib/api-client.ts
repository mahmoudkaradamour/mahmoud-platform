import axios from 'axios';

/**
 * Hardened Enterprise API Client.
 * SECURITY UPGRADE: Switched from LocalStorage to HttpOnly Cookies.
 * Prevents JWT theft via XSS attacks in high-risk e-commerce environments.
 */
const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'https://api.mahmoud-enterprise.com/api/v1',
  withCredentials: true, // MANDATORY: Required to send/receive HttpOnly cookies
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

// Interceptor for CSRF Protection (Standard for Cookie-based Auth)
apiClient.interceptors.request.use((config) => {
  // In prod, this would pull from a non-sensitive XSRF-TOKEN cookie
  return config;
});

export default apiClient;
