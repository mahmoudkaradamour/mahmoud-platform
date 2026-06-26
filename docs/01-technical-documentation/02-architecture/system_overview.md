# System Overview

## 1. High-Level Architecture Diagram

```mermaid
graph TB
    subgraph Clients ["Clients"]
        F[Flutter App - Mobile]
        W[Seller Dashboard - Web]
        A[Admin Dashboard - Web]
    end

    subgraph Gateway_Layer ["Gateway Layer"]
        AG[API Gateway / Nginx]
    end

    subgraph Microservices ["Microservices"]
        Identity[Identity Service - Auth]
        Catalog[Catalog Service - Products]
        Order[Order Service - Transactions]
        Payment[Payment Service - Gateway]
        Live[Live Service - Streaming]
    end

    subgraph Messaging ["Messaging Layer (Event Bus)"]
        Kafka((Apache Kafka))
    end

    subgraph Data_Layer ["Data Layer"]
        Postgres[(PostgreSQL)]
        Mongo[(MongoDB)]
        Redis[(Redis Cache)]
        ES[(ElasticSearch)]
    end

    %% Connections
    F --> AG
    W --> AG
    A --> AG
    
    AG --> Identity
    AG --> Catalog
    AG --> Order
    AG --> Payment
    AG --> Live

    Identity <--> Kafka
    Catalog <--> Kafka
    Order <--> Kafka
    Payment <--> Kafka
    
    Identity --> Postgres
    Order --> Postgres
    Payment --> Postgres
    
    Catalog --> Mongo
    Catalog --> ES
    
    Live --> Redis
```

## 2. Basic Data Flow
1. **Client** sends a request through the Gateway.
2. **Gateway** validates identity and routes the request to the target service.
3. **Services** communicate synchronously via gRPC or asynchronously via Kafka.
4. Financial data is stored in **PostgreSQL**, while product data resides in **MongoDB**.
5. **ElasticSearch** is updated in real-time via the event system whenever product data changes.
