# MAM System — User Microservice

A production-oriented **User Microservice** built with **NestJS**, **TypeScript**, **Clean Architecture**, **Prisma ORM**, and **PostgreSQL**.

The project focuses on applying Clean Architecture principles to a real-world microservice, with a strong separation between **Domain**, **Application**, and **Infrastructure** layers. NestJS Dependency Injection is used to connect abstractions with their concrete implementations while keeping business logic independent from infrastructure concerns.

### Main principles

* **Domain** — Contains business entities and repository abstractions.
* **Application** — Contains use cases and application-level orchestration.
* **Infrastructure** — Contains implementations for external concerns such as PostgreSQL, Prisma, and password hashing.
* **Dependency Inversion** — Application and Domain depend on abstractions rather than concrete infrastructure implementations.
* **Dependency Injection** — NestJS DI connects interfaces/tokens with their concrete implementations.

## Tech Stack

* **NestJS**
* **TypeScript**
* **Prisma ORM**
* **PostgreSQL**
* **Clean Architecture**
* **Dependency Injection**
* **Docker** *(planned / optional)*

## Architecture

The service follows a Clean Architecture structure:

```text
src/
├── users/
│   └── v1/
│       ├── domain/
│       ├── application/
│       └── infrastructure/
│
├── prisma/
│   └── ...
│
└── app.module.ts
```

## Database

The service uses **PostgreSQL** as its relational database and **Prisma ORM** as the persistence layer.

The Prisma schema defines the database models and constraints, while the Infrastructure layer is responsible for mapping between Prisma persistence models and Domain Entities.

## Getting Started

### Prerequisites

Make sure the following are installed:

* Node.js
* npm
* PostgreSQL

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file and configure the PostgreSQL connection:

```env
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/DATABASE_NAME"
```

### Generate Prisma Client

Generate the Prisma Client from the current schema:

```bash
npx prisma generate
```

### Setup Database

Run the initial database migration:

```bash
npx prisma migrate dev --name init
```

Seed the development database:

```bash
npx tsx prisma/seed.dev.ts
```

## Development

Start the application in development mode:

```bash
npm run start:dev
```

The service will start with NestJS in watch mode.

## Project Goals

This project is primarily focused on exploring production-oriented backend architecture and demonstrating how Clean Architecture can be applied to a NestJS microservice.

Key areas include:

* Clean Architecture
* Domain-driven design concepts
* Repository Pattern
* Dependency Inversion
* Dependency Injection
* Use Case Pattern
* Domain Entities
* DTOs
* Prisma ORM
* PostgreSQL
* Password hashing
* REST API design
* Microservice architecture
* Production-oriented backend development

## License

This project is for learning and experimentation purposes.
