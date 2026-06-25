# Disaster Recovery (DR) & Business Continuity

## 1. Objectives
*   **RPO (Recovery Point Objective)**: Maximum allowable data loss - Target < 5 mins.
*   **RTO (Recovery Time Objective)**: Maximum allowable downtime - Target < 30 mins.

## 2. Backup Strategy
*   **Database**: Point-in-time recovery (PITR) enabled for PostgreSQL. Daily snapshots for MongoDB.
*   **Storage**: Multi-region replication for user-uploaded media (S3/Object Storage).
*   **Configuration**: All environment secrets and K8s manifests backed up in secure, offline vaults.

## 3. Recovery Scenarios
*   **Database Corruption**: Revert to the last clean PITR snapshot.
*   **Regional Outage**: Failover to a secondary data center/region using Geo-DNS.
*   **Cyber Attack**: Isolated "immutable" backups that cannot be modified by compromised credentials.

## 4. Drills
*   Bi-annual "Fire Drills" where a service is intentionally taken down in Staging to verify recovery procedures.
