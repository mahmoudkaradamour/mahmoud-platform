# Observability & Monitoring

## 1. The Three Pillars
*   **Logs**: Structured JSON logs (Logstash/Fluentd) aggregated in ELK Stack or Datadog.
*   **Metrics**: Real-time health metrics (CPU, Memory, Request Rate, Error Rate) via Prometheus/Grafana.
*   **Traces**: Distributed tracing (Jaeger/OpenTelemetry) to track a request across microservices.

## 2. Business Dashboards
*   **Sales Velocity**: Orders per minute.
*   **Payment Success Rate**: Monitoring for bank-side failures.
*   **Live Stream Health**: Latency and drop-off rates for viewers.

## 3. Alerting Rules
*   **P0 (Critical)**: Site down, Payment gateway failing - Trigger PagerDuty/Phone call.
*   **P1 (High)**: High latency, 5xx errors > 1% - Notify Slack/WhatsApp group.
*   **P2 (Medium)**: Slow background jobs - Daily report/Email.
