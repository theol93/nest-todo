# DevPath — Full-Stack Learning Tracker

**Version:** 1.0  
**Stack:** Next.js (App Router), NestJS, PostgreSQL, Prisma, TypeScript  
**Type:** Learning / portfolio project

## 1. Overview

Build an extended Todo and learning-management application for developers preparing for a Full-Stack role. Users register, sign in, explore prefilled learning modules, read topic descriptions and practical exercises, check off completed topics, create custom tasks, and monitor progress.

### Goals

- Demonstrate production-oriented Full-Stack development, beyond basic CRUD.
- Provide an actionable, prefilled learning roadmap.
- Persist individual progress across sessions.
- Practice authentication, authorization, relational data modeling, testing, CI/CD and deployment.

## 2. Technology stack

| Layer | Technology |
|---|---|
| Frontend | Next.js App Router, TypeScript |
| UI | Tailwind CSS, shadcn/ui |
| Forms | React Hook Form + Zod |
| Data fetching | TanStack Query |
| Backend | NestJS, TypeScript |
| Database | PostgreSQL |
| ORM | Prisma |
| Authentication | Short-lived JWT access tokens + rotating refresh tokens |
| Authorization | NestJS Guards, resource ownership, optional RBAC |
| API docs | Swagger / OpenAPI |
| Tests | Jest, React Testing Library, Supertest, Playwright |
| Local infrastructure | Docker, Docker Compose |
| CI/CD | GitHub Actions |
| Hosting | Vercel (frontend), Render (backend), Neon (PostgreSQL) |

## 3. Screens and routes

| Route | Purpose |
|---|---|
| `/register` | Create account |
| `/login` | Authenticate |
| `/forgot-password` | Request password reset |
| `/reset-password` | Set new password with token |
| `/dashboard` | Overall progress, recent activity, next topic |
| `/modules` | Searchable/filterable learning module catalog |
| `/modules/[slug]` | Module details, topics, exercises, checkboxes |
| `/tasks` | Personal task list with filters, priorities and due dates |
| `/settings` | Profile and session settings |

## 4. Functional requirements

### 4.1 Registration and login

- Register with email, password and password confirmation.
- Validate input and enforce unique email addresses.
- Hash passwords with Argon2id or bcrypt; never store plaintext passwords.
- Issue short-lived access tokens and rotate refresh tokens.
- Store refresh tokens in Secure, HttpOnly cookies; persist hashed refresh token/session identifiers server-side.
- Protect private routes and API endpoints.
- Implement logout and refresh-token revocation.
- Apply rate limits to login and password-reset endpoints.
- Support password reset using single-use, expiring tokens.
- Optionally add email verification and session management.

### 4.2 Prefilled learning modules

- Seed all modules and topics into the database on setup.
- Each topic contains a title, description, learning objectives, practical exercise and completion state.
- Browse modules by category, difficulty and completion status.
- Mark topics completed or incomplete.
- Store progress separately for each user.
- Calculate per-module and overall completion percentages.
- Recommend the next incomplete topic.
- Preserve user progress when seed scripts are re-run.

### 4.3 Extended Todo

- Create, read, update and delete personal tasks.
- Task fields: title, description, status (`TODO`, `IN_PROGRESS`, `DONE`), priority (`LOW`, `MEDIUM`, `HIGH`), optional due date, optional linked module, timestamps.
- Support search, filtering, sorting and pagination.
- Enforce task ownership on every operation.
- Display completion history and recent activity.

### 4.4 Dashboard

- Overall topic completion percentage.
- Completed/total topics and module-by-module progress.
- Active modules and next suggested topic.
- Recent completed topics and pending personal tasks.
- Loading, empty and error states.

## 5. Prefilled curriculum

Each topic below must be seeded with its **description** and **practical exercise**. The UI displays a checkbox for the authenticated user's completion state.

### Module 1 — Advanced JavaScript & TypeScript (Core)

- [ ] **JavaScript Memory** — Learn stack vs heap, references, garbage collection and memory leaks. **Practice:** Explain object references and fix a memory leak.
- [ ] **Event Loop & Async** — Learn call stack, microtasks, macrotasks, promises and async/await. **Practice:** Predict execution order and implement concurrency handling.
- [ ] **Advanced TypeScript** — Learn generics, utility types, discriminated unions, mapped and conditional types. **Practice:** Create a type-safe API response and generic utilities.
- [ ] **Error Handling** — Learn custom errors, retries, error boundaries and exception propagation. **Practice:** Build consistent async error handling.

### Module 2 — Node.js & NestJS Fundamentals (Core)

- [ ] **Node.js Runtime** — Learn the event loop, streams, buffers and environment variables. **Practice:** Build a streaming file-processing endpoint.
- [ ] **NestJS Architecture** — Learn modules, controllers, providers and dependency injection. **Practice:** Create a modular Tasks API.
- [ ] **DTO & Validation** — Learn DTOs, `ValidationPipe`, `class-validator` and transformation. **Practice:** Validate task create/update requests.
- [ ] **Guards, Pipes & Interceptors** — Learn the request lifecycle, authorization and response transformation. **Practice:** Implement a guard and logging interceptor.
- [ ] **Configuration & Logging** — Learn `ConfigModule`, structured logs and secrets management. **Practice:** Configure development and production environments.
- [ ] **Swagger API Documentation** — Learn OpenAPI schemas and API contracts. **Practice:** Document all endpoints and response types.

### Module 3 — PostgreSQL & Prisma (Core)

- [ ] **SQL Fundamentals** — Learn `SELECT`, `JOIN`, `GROUP BY`, filtering and aggregation. **Practice:** Query users, modules and progress.
- [ ] **Relational Data Modeling** — Learn primary/foreign keys, constraints and cardinality. **Practice:** Design normalized tracker tables.
- [ ] **Indexes & Performance** — Learn B-tree indexes, `EXPLAIN ANALYZE` and query plans. **Practice:** Optimize a slow progress query.
- [ ] **Transactions** — Learn ACID and atomic operations. **Practice:** Update related records transactionally.
- [ ] **Prisma ORM** — Learn schema modeling, relations, migrations and seeding. **Practice:** Create the database schema and idempotent seeds.
- [ ] **Pagination** — Learn offset vs cursor pagination, sorting and filtering. **Practice:** Build a paginated tasks API.

### Module 4 — Authentication & Security (Core)

- [ ] **Registration & Login** — Learn password hashing, authentication flows and safe error messages. **Practice:** Implement registration and login.
- [ ] **JWT Authentication** — Learn access/refresh tokens, expiry and rotation. **Practice:** Implement secure refresh and logout.
- [ ] **Authorization & RBAC** — Learn ownership checks, roles and least privilege. **Practice:** Prevent cross-user task access.
- [ ] **Web Security** — Learn XSS, CSRF, CORS, SQL injection and rate limiting. **Practice:** Add rate limits and security headers.
- [ ] **Password Recovery** — Learn single-use reset tokens and expiration. **Practice:** Build forgot/reset password flows.

### Module 5 — Next.js Full-Stack Frontend (Core)

- [ ] **App Router** — Learn layouts, nested routes, dynamic routes and route groups. **Practice:** Build dashboard and module routes.
- [ ] **Server vs Client Components** — Learn rendering boundaries, data access and hydration. **Practice:** Choose appropriate component boundaries.
- [ ] **SSR, SSG & Caching** — Learn server rendering, static generation, revalidation and caching. **Practice:** Cache a public learning catalog.
- [ ] **Forms & Validation** — Learn React Hook Form, Zod and accessible form errors. **Practice:** Implement registration and task forms.
- [ ] **TanStack Query** — Learn caching, mutations, invalidation and optimistic updates. **Practice:** Add optimistic topic completion.
- [ ] **Error & Loading States** — Learn Suspense, loading UI, error boundaries and empty states. **Practice:** Handle loading and failed API requests.

### Module 6 — Testing & Code Quality (Core)

- [ ] **Unit Testing** — Learn Jest, mocking and isolated business logic. **Practice:** Test progress calculations and auth services.
- [ ] **Integration Testing** — Learn NestJS module testing and database isolation. **Practice:** Test task creation and progress persistence.
- [ ] **E2E Testing** — Learn Playwright, browser flows and fixtures. **Practice:** Test register → login → complete topic.
- [ ] **API Testing** — Learn Supertest, validation and unauthorized requests. **Practice:** Test protected endpoints.
- [ ] **Code Quality** — Learn ESLint, Prettier, strict TypeScript and code reviews. **Practice:** Configure CI quality checks.

### Module 7 — DevOps & Deployment (Core)

- [ ] **Docker** — Learn images, containers and multistage builds. **Practice:** Containerize NestJS.
- [ ] **Docker Compose** — Learn local orchestration, volumes and health checks. **Practice:** Run NestJS and PostgreSQL locally.
- [ ] **CI/CD** — Learn GitHub Actions and automated validation. **Practice:** Create build/test/deploy workflows.
- [ ] **Cloud Deployment** — Learn Vercel, Render, Neon and environment variables. **Practice:** Deploy the complete application.
- [ ] **Database Migrations** — Learn safe production migrations and rollback planning. **Practice:** Deploy schema changes without losing data.
- [ ] **Observability** — Learn health checks, structured logs and error monitoring. **Practice:** Diagnose an API failure from logs.

### Module 8 — Architecture & Advanced Backend (Advanced)

- [ ] **REST API Design** — Learn HTTP semantics, resources, versioning and pagination. **Practice:** Design consistent versioned APIs.
- [ ] **Caching** — Learn Redis concepts, TTL and invalidation. **Practice:** Cache public catalog data.
- [ ] **Queues & Background Jobs** — Learn async processing, retries and idempotency. **Practice:** Process reminder emails in a background job.
- [ ] **System Design** — Learn scalability, reliability, bottlenecks and tradeoffs. **Practice:** Draw an architecture for 10,000 users.
- [ ] **Real-time Communication** — Learn WebSockets and event-driven updates. **Practice:** Sync tasks across active sessions.
- [ ] **AI Tool Calling** — Learn structured tool schemas, validation and safe execution. **Practice:** Build a read-only learning recommendation tool.

## 6. Data model

### `User`

- `id` UUID PK
- `email` unique, required
- `passwordHash` required
- `createdAt`, `updatedAt`

### `Session`

- `id` UUID PK
- `userId` FK → User
- `refreshTokenHash` or hashed token identifier
- `expiresAt`, `revokedAt`, `createdAt`

### `Module`

- `id` UUID PK
- `slug` unique
- `title`, `description`, `difficulty`, `sortOrder`
- `isSystem` boolean
- `createdAt`, `updatedAt`

### `Topic`

- `id` UUID PK
- `moduleId` FK → Module
- `key` stable unique identifier within module
- `title`, `description`, `objectives`, `practicalExercise`, `sortOrder`
- Unique constraint: `(moduleId, key)`

### `UserTopicProgress`

- `id` UUID PK
- `userId` FK → User
- `topicId` FK → Topic
- `isCompleted` boolean
- `completedAt` nullable
- `updatedAt`
- Unique constraint: `(userId, topicId)`

### `Task`

- `id` UUID PK
- `userId` FK → User
- `moduleId` nullable FK → Module
- `title`, `description`
- `status`, `priority`, `dueDate`, `completedAt`
- `createdAt`, `updatedAt`
- Index common combinations such as `(userId, status)` and `(userId, dueDate)`.

### `PasswordResetToken`

- `id` UUID PK
- `userId` FK → User
- `tokenHash` unique
- `expiresAt`, `usedAt`, `createdAt`

**Seeding rule:** Upsert system modules/topics using stable keys. Never delete or reset existing user progress when re-running seeds. Progress records can be created lazily; no need to eagerly insert every topic for every user.

## 7. REST API contract

All routes except public auth endpoints require authentication.

| Method | Endpoint | Description |
|---|---|---|
| POST | `/auth/register` | Register user |
| POST | `/auth/login` | Authenticate user |
| POST | `/auth/refresh` | Rotate refresh session |
| POST | `/auth/logout` | Revoke session |
| POST | `/auth/forgot-password` | Request reset email |
| POST | `/auth/reset-password` | Reset password |
| GET | `/users/me` | Current user profile |
| GET | `/modules` | List modules with optional filters |
| GET | `/modules/:slug` | Module details |
| GET | `/modules/:id/topics` | Module topics |
| PATCH | `/topics/:id/progress` | Set completion state |
| GET | `/progress/summary` | Overall progress |
| GET | `/tasks` | Paginated tasks |
| POST | `/tasks` | Create task |
| PATCH | `/tasks/:id` | Update task |
| DELETE | `/tasks/:id` | Delete task |

**Example progress request:**

```json
PATCH /topics/{topicId}/progress
{
  "isCompleted": true
}
```

**Example task request:**

```json
POST /tasks
{
  "title": "Learn Prisma transactions",
  "description": "Implement an atomic update",
  "status": "TODO",
  "priority": "MEDIUM",
  "moduleId": null,
  "dueDate": null
}
```

Use consistent response/error envelopes, standard HTTP status codes, DTO validation and Swagger documentation.

## 8. Non-functional requirements

- **Security:** Validate inputs, enforce ownership, hash secrets, rotate/revoke refresh tokens, configure CSRF defenses where cookie authentication is used, set CORS allowlist and security headers.
- **Performance:** Paginate task lists, index frequent queries, avoid N+1 queries and apply caching deliberately.
- **Reliability:** Centralized exception handling, structured logs, health endpoint, graceful shutdown.
- **Accessibility:** Semantic controls, keyboard navigation, labels, focus indicators and readable contrast.
- **Responsive UI:** Support mobile, tablet and desktop.
- **Maintainability:** Strict TypeScript, modular boundaries, linting, formatting and API contracts.
- **Testing:** Unit, integration and E2E coverage of critical flows.

## 9. Suggested repository structure

```text
fullstack-learning-tracker/
├── frontend/
│   ├── src/app/
│   ├── src/components/
│   ├── src/features/
│   └── package.json
├── backend/
│   ├── src/auth/
│   ├── src/users/
│   ├── src/modules/
│   ├── src/topics/
│   ├── src/progress/
│   ├── src/tasks/
│   ├── prisma/
│   └── package.json
├── .github/workflows/
├── docker-compose.yml
└── README.md
```

## 10. Implementation checklist

### Phase 1 — Foundation

- [ ] Create repository with `frontend/` and `backend/`.
- [ ] Configure PostgreSQL, Prisma and Docker Compose.
- [ ] Define schema and run initial migrations.
- [ ] Configure ESLint, Prettier and environment validation.

### Phase 2 — Authentication

- [ ] Implement registration and login.
- [ ] Implement access and rotating refresh sessions.
- [ ] Protect private routes and enforce resource ownership.
- [ ] Implement logout and password reset.

### Phase 3 — Learning modules

- [ ] Write idempotent seed scripts for all eight modules.
- [ ] Implement module and topic APIs.
- [ ] Build catalog and module detail pages.
- [ ] Implement checkboxes and persistent user progress.

### Phase 4 — Extended Todo

- [ ] Implement task CRUD API.
- [ ] Build task management UI.
- [ ] Add search, filters, pagination and priorities.
- [ ] Add optional module association.

### Phase 5 — Dashboard

- [ ] Implement progress aggregation.
- [ ] Build dashboard cards and module progress indicators.
- [ ] Show recent activity and recommended next topic.
- [ ] Implement loading, error and empty states.

### Phase 6 — Production readiness

- [ ] Add unit, integration and E2E tests.
- [ ] Configure GitHub Actions CI.
- [ ] Deploy Next.js to Vercel, NestJS to Render and PostgreSQL to Neon.
- [ ] Add structured logging, health checks and deployment documentation.

## 11. Acceptance criteria / Definition of Done

- [ ] A new user can register and log in.
- [ ] Authenticated users can browse all prefilled modules and topic descriptions.
- [ ] Checking a topic persists completion after refresh and re-login.
- [ ] Progress percentages reflect the user's own completion state.
- [ ] Users can create, edit, complete, filter and delete their own tasks.
- [ ] Cross-user access to tasks and progress is rejected.
- [ ] Re-running seed scripts does not duplicate modules or erase user progress.
- [ ] Critical auth, task and progress flows have automated tests.
- [ ] The app runs locally through documented setup instructions.
- [ ] Frontend, backend and database are deployed with HTTPS.
- [ ] CI validates lint, types, tests and build before deployment.
- [ ] README explains architecture, configuration, migrations, seeds and deployment.

## 12. Future enhancements (out of MVP scope)

- Admin interface for editing learning modules.
- Custom learning paths and user-created modules.
- Email reminders and scheduled background jobs.
- Redis caching and queue processing.
- WebSocket task synchronization.
- AI-assisted learning recommendations using validated, read-only tool calling.
- Learning streaks, achievements and analytics.

## 13. Recommended learning order

1. NestJS modules, controllers, services, DTO validation and dependency injection.
2. PostgreSQL schema design, SQL, Prisma relations and migrations.
3. Authentication, refresh sessions, ownership authorization and security.
4. Next.js server/client boundaries, forms and API integration.
5. Automated tests and CI.
6. Docker and cloud deployment.
7. Advanced architecture, caching, queues, real-time features and AI tool calling.

**Scope guidance:** Complete the secure, persistent MVP before introducing Redis, queues, WebSockets or AI features.
