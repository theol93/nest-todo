export const curriculum = [
  {
    slug: 'advanced-javascript-typescript',
    title: 'Advanced JavaScript & TypeScript',
    description:
      'Advanced JavaScript & TypeScript: concepts and practical exercises.',
    category: 'Languages',
    difficulty: 'CORE',
    sortOrder: 1,
    topics: [
      {
        key: 'javascript-memory',
        title: 'JavaScript Memory',
        description:
          'Learn stack vs heap, references, garbage collection and memory leaks.',
        objectives: [
          'Learn stack vs heap, references, garbage collection and memory leaks.',
          'Explain object references and fix a memory leak.',
        ],
        practicalExercise: 'Explain object references and fix a memory leak.',
        sortOrder: 1,
      },
      {
        key: 'event-loop-async',
        title: 'Event Loop & Async',
        description:
          'Learn call stack, microtasks, macrotasks, promises and async/await.',
        objectives: [
          'Learn call stack, microtasks, macrotasks, promises and async/await.',
          'Predict execution order and implement concurrency handling.',
        ],
        practicalExercise:
          'Predict execution order and implement concurrency handling.',
        sortOrder: 2,
      },
      {
        key: 'advanced-typescript',
        title: 'Advanced TypeScript',
        description:
          'Learn generics, utility types, discriminated unions, mapped and conditional types.',
        objectives: [
          'Learn generics, utility types, discriminated unions, mapped and conditional types.',
          'Create a type-safe API response and generic utilities.',
        ],
        practicalExercise:
          'Create a type-safe API response and generic utilities.',
        sortOrder: 3,
      },
      {
        key: 'error-handling',
        title: 'Error Handling',
        description:
          'Learn custom errors, retries, error boundaries and exception propagation.',
        objectives: [
          'Learn custom errors, retries, error boundaries and exception propagation.',
          'Build consistent async error handling.',
        ],
        practicalExercise: 'Build consistent async error handling.',
        sortOrder: 4,
      },
    ],
  },
  {
    slug: 'node-js-nestjs-fundamentals',
    title: 'Node.js & NestJS Fundamentals',
    description:
      'Node.js & NestJS Fundamentals: concepts and practical exercises.',
    category: 'Backend',
    difficulty: 'CORE',
    sortOrder: 2,
    topics: [
      {
        key: 'node-js-runtime',
        title: 'Node.js Runtime',
        description:
          'Learn the event loop, streams, buffers and environment variables.',
        objectives: [
          'Learn the event loop, streams, buffers and environment variables.',
          'Build a streaming file-processing endpoint.',
        ],
        practicalExercise: 'Build a streaming file-processing endpoint.',
        sortOrder: 1,
      },
      {
        key: 'nestjs-architecture',
        title: 'NestJS Architecture',
        description:
          'Learn modules, controllers, providers and dependency injection.',
        objectives: [
          'Learn modules, controllers, providers and dependency injection.',
          'Create a modular Tasks API.',
        ],
        practicalExercise: 'Create a modular Tasks API.',
        sortOrder: 2,
      },
      {
        key: 'dto-validation',
        title: 'DTO & Validation',
        description:
          'Learn DTOs, `ValidationPipe`, `class-validator` and transformation.',
        objectives: [
          'Learn DTOs, `ValidationPipe`, `class-validator` and transformation.',
          'Validate task create/update requests.',
        ],
        practicalExercise: 'Validate task create/update requests.',
        sortOrder: 3,
      },
      {
        key: 'guards-pipes-interceptors',
        title: 'Guards, Pipes & Interceptors',
        description:
          'Learn the request lifecycle, authorization and response transformation.',
        objectives: [
          'Learn the request lifecycle, authorization and response transformation.',
          'Implement a guard and logging interceptor.',
        ],
        practicalExercise: 'Implement a guard and logging interceptor.',
        sortOrder: 4,
      },
      {
        key: 'configuration-logging',
        title: 'Configuration & Logging',
        description:
          'Learn `ConfigModule`, structured logs and secrets management.',
        objectives: [
          'Learn `ConfigModule`, structured logs and secrets management.',
          'Configure development and production environments.',
        ],
        practicalExercise: 'Configure development and production environments.',
        sortOrder: 5,
      },
      {
        key: 'swagger-api-documentation',
        title: 'Swagger API Documentation',
        description: 'Learn OpenAPI schemas and API contracts.',
        objectives: [
          'Learn OpenAPI schemas and API contracts.',
          'Document all endpoints and response types.',
        ],
        practicalExercise: 'Document all endpoints and response types.',
        sortOrder: 6,
      },
    ],
  },
  {
    slug: 'postgresql-prisma',
    title: 'PostgreSQL & Prisma',
    description: 'PostgreSQL & Prisma: concepts and practical exercises.',
    category: 'Database',
    difficulty: 'CORE',
    sortOrder: 3,
    topics: [
      {
        key: 'sql-fundamentals',
        title: 'SQL Fundamentals',
        description:
          'Learn `SELECT`, `JOIN`, `GROUP BY`, filtering and aggregation.',
        objectives: [
          'Learn `SELECT`, `JOIN`, `GROUP BY`, filtering and aggregation.',
          'Query users, modules and progress.',
        ],
        practicalExercise: 'Query users, modules and progress.',
        sortOrder: 1,
      },
      {
        key: 'relational-data-modeling',
        title: 'Relational Data Modeling',
        description: 'Learn primary/foreign keys, constraints and cardinality.',
        objectives: [
          'Learn primary/foreign keys, constraints and cardinality.',
          'Design normalized tracker tables.',
        ],
        practicalExercise: 'Design normalized tracker tables.',
        sortOrder: 2,
      },
      {
        key: 'indexes-performance',
        title: 'Indexes & Performance',
        description: 'Learn B-tree indexes, `EXPLAIN ANALYZE` and query plans.',
        objectives: [
          'Learn B-tree indexes, `EXPLAIN ANALYZE` and query plans.',
          'Optimize a slow progress query.',
        ],
        practicalExercise: 'Optimize a slow progress query.',
        sortOrder: 3,
      },
      {
        key: 'transactions',
        title: 'Transactions',
        description: 'Learn ACID and atomic operations.',
        objectives: [
          'Learn ACID and atomic operations.',
          'Update related records transactionally.',
        ],
        practicalExercise: 'Update related records transactionally.',
        sortOrder: 4,
      },
      {
        key: 'prisma-orm',
        title: 'Prisma ORM',
        description:
          'Learn schema modeling, relations, migrations and seeding.',
        objectives: [
          'Learn schema modeling, relations, migrations and seeding.',
          'Create the database schema and idempotent seeds.',
        ],
        practicalExercise: 'Create the database schema and idempotent seeds.',
        sortOrder: 5,
      },
      {
        key: 'pagination',
        title: 'Pagination',
        description:
          'Learn offset vs cursor pagination, sorting and filtering.',
        objectives: [
          'Learn offset vs cursor pagination, sorting and filtering.',
          'Build a paginated tasks API.',
        ],
        practicalExercise: 'Build a paginated tasks API.',
        sortOrder: 6,
      },
    ],
  },
  {
    slug: 'authentication-security',
    title: 'Authentication & Security',
    description: 'Authentication & Security: concepts and practical exercises.',
    category: 'Security',
    difficulty: 'CORE',
    sortOrder: 4,
    topics: [
      {
        key: 'registration-login',
        title: 'Registration & Login',
        description:
          'Learn password hashing, authentication flows and safe error messages.',
        objectives: [
          'Learn password hashing, authentication flows and safe error messages.',
          'Implement registration and login.',
        ],
        practicalExercise: 'Implement registration and login.',
        sortOrder: 1,
      },
      {
        key: 'jwt-authentication',
        title: 'JWT Authentication',
        description: 'Learn access/refresh tokens, expiry and rotation.',
        objectives: [
          'Learn access/refresh tokens, expiry and rotation.',
          'Implement secure refresh and logout.',
        ],
        practicalExercise: 'Implement secure refresh and logout.',
        sortOrder: 2,
      },
      {
        key: 'authorization-rbac',
        title: 'Authorization & RBAC',
        description: 'Learn ownership checks, roles and least privilege.',
        objectives: [
          'Learn ownership checks, roles and least privilege.',
          'Prevent cross-user task access.',
        ],
        practicalExercise: 'Prevent cross-user task access.',
        sortOrder: 3,
      },
      {
        key: 'web-security',
        title: 'Web Security',
        description: 'Learn XSS, CSRF, CORS, SQL injection and rate limiting.',
        objectives: [
          'Learn XSS, CSRF, CORS, SQL injection and rate limiting.',
          'Add rate limits and security headers.',
        ],
        practicalExercise: 'Add rate limits and security headers.',
        sortOrder: 4,
      },
      {
        key: 'password-recovery',
        title: 'Password Recovery',
        description: 'Learn single-use reset tokens and expiration.',
        objectives: [
          'Learn single-use reset tokens and expiration.',
          'Build forgot/reset password flows.',
        ],
        practicalExercise: 'Build forgot/reset password flows.',
        sortOrder: 5,
      },
    ],
  },
  {
    slug: 'next-js-full-stack-frontend',
    title: 'Next.js Full-Stack Frontend',
    description:
      'Next.js Full-Stack Frontend: concepts and practical exercises.',
    category: 'Frontend',
    difficulty: 'CORE',
    sortOrder: 5,
    topics: [
      {
        key: 'app-router',
        title: 'App Router',
        description:
          'Learn layouts, nested routes, dynamic routes and route groups.',
        objectives: [
          'Learn layouts, nested routes, dynamic routes and route groups.',
          'Build dashboard and module routes.',
        ],
        practicalExercise: 'Build dashboard and module routes.',
        sortOrder: 1,
      },
      {
        key: 'server-vs-client-components',
        title: 'Server vs Client Components',
        description: 'Learn rendering boundaries, data access and hydration.',
        objectives: [
          'Learn rendering boundaries, data access and hydration.',
          'Choose appropriate component boundaries.',
        ],
        practicalExercise: 'Choose appropriate component boundaries.',
        sortOrder: 2,
      },
      {
        key: 'ssr-ssg-caching',
        title: 'SSR, SSG & Caching',
        description:
          'Learn server rendering, static generation, revalidation and caching.',
        objectives: [
          'Learn server rendering, static generation, revalidation and caching.',
          'Cache a public learning catalog.',
        ],
        practicalExercise: 'Cache a public learning catalog.',
        sortOrder: 3,
      },
      {
        key: 'forms-validation',
        title: 'Forms & Validation',
        description: 'Learn React Hook Form, Zod and accessible form errors.',
        objectives: [
          'Learn React Hook Form, Zod and accessible form errors.',
          'Implement registration and task forms.',
        ],
        practicalExercise: 'Implement registration and task forms.',
        sortOrder: 4,
      },
      {
        key: 'tanstack-query',
        title: 'TanStack Query',
        description:
          'Learn caching, mutations, invalidation and optimistic updates.',
        objectives: [
          'Learn caching, mutations, invalidation and optimistic updates.',
          'Add optimistic topic completion.',
        ],
        practicalExercise: 'Add optimistic topic completion.',
        sortOrder: 5,
      },
      {
        key: 'error-loading-states',
        title: 'Error & Loading States',
        description:
          'Learn Suspense, loading UI, error boundaries and empty states.',
        objectives: [
          'Learn Suspense, loading UI, error boundaries and empty states.',
          'Handle loading and failed API requests.',
        ],
        practicalExercise: 'Handle loading and failed API requests.',
        sortOrder: 6,
      },
    ],
  },
  {
    slug: 'testing-code-quality',
    title: 'Testing & Code Quality',
    description: 'Testing & Code Quality: concepts and practical exercises.',
    category: 'Testing',
    difficulty: 'CORE',
    sortOrder: 6,
    topics: [
      {
        key: 'unit-testing',
        title: 'Unit Testing',
        description: 'Learn Jest, mocking and isolated business logic.',
        objectives: [
          'Learn Jest, mocking and isolated business logic.',
          'Test progress calculations and auth services.',
        ],
        practicalExercise: 'Test progress calculations and auth services.',
        sortOrder: 1,
      },
      {
        key: 'integration-testing',
        title: 'Integration Testing',
        description: 'Learn NestJS module testing and database isolation.',
        objectives: [
          'Learn NestJS module testing and database isolation.',
          'Test task creation and progress persistence.',
        ],
        practicalExercise: 'Test task creation and progress persistence.',
        sortOrder: 2,
      },
      {
        key: 'e2e-testing',
        title: 'E2E Testing',
        description: 'Learn Playwright, browser flows and fixtures.',
        objectives: [
          'Learn Playwright, browser flows and fixtures.',
          'Test register \u2192 login \u2192 complete topic.',
        ],
        practicalExercise: 'Test register \u2192 login \u2192 complete topic.',
        sortOrder: 3,
      },
      {
        key: 'api-testing',
        title: 'API Testing',
        description: 'Learn Supertest, validation and unauthorized requests.',
        objectives: [
          'Learn Supertest, validation and unauthorized requests.',
          'Test protected endpoints.',
        ],
        practicalExercise: 'Test protected endpoints.',
        sortOrder: 4,
      },
      {
        key: 'code-quality',
        title: 'Code Quality',
        description:
          'Learn ESLint, Prettier, strict TypeScript and code reviews.',
        objectives: [
          'Learn ESLint, Prettier, strict TypeScript and code reviews.',
          'Configure CI quality checks.',
        ],
        practicalExercise: 'Configure CI quality checks.',
        sortOrder: 5,
      },
    ],
  },
  {
    slug: 'devops-deployment',
    title: 'DevOps & Deployment',
    description: 'DevOps & Deployment: concepts and practical exercises.',
    category: 'DevOps',
    difficulty: 'CORE',
    sortOrder: 7,
    topics: [
      {
        key: 'docker',
        title: 'Docker',
        description: 'Learn images, containers and multistage builds.',
        objectives: [
          'Learn images, containers and multistage builds.',
          'Containerize NestJS.',
        ],
        practicalExercise: 'Containerize NestJS.',
        sortOrder: 1,
      },
      {
        key: 'docker-compose',
        title: 'Docker Compose',
        description: 'Learn local orchestration, volumes and health checks.',
        objectives: [
          'Learn local orchestration, volumes and health checks.',
          'Run NestJS and PostgreSQL locally.',
        ],
        practicalExercise: 'Run NestJS and PostgreSQL locally.',
        sortOrder: 2,
      },
      {
        key: 'ci-cd',
        title: 'CI/CD',
        description: 'Learn GitHub Actions and automated validation.',
        objectives: [
          'Learn GitHub Actions and automated validation.',
          'Create build/test/deploy workflows.',
        ],
        practicalExercise: 'Create build/test/deploy workflows.',
        sortOrder: 3,
      },
      {
        key: 'cloud-deployment',
        title: 'Cloud Deployment',
        description: 'Learn Vercel, Render, Neon and environment variables.',
        objectives: [
          'Learn Vercel, Render, Neon and environment variables.',
          'Deploy the complete application.',
        ],
        practicalExercise: 'Deploy the complete application.',
        sortOrder: 4,
      },
      {
        key: 'database-migrations',
        title: 'Database Migrations',
        description: 'Learn safe production migrations and rollback planning.',
        objectives: [
          'Learn safe production migrations and rollback planning.',
          'Deploy schema changes without losing data.',
        ],
        practicalExercise: 'Deploy schema changes without losing data.',
        sortOrder: 5,
      },
      {
        key: 'observability',
        title: 'Observability',
        description:
          'Learn health checks, structured logs and error monitoring.',
        objectives: [
          'Learn health checks, structured logs and error monitoring.',
          'Diagnose an API failure from logs.',
        ],
        practicalExercise: 'Diagnose an API failure from logs.',
        sortOrder: 6,
      },
    ],
  },
  {
    slug: 'architecture-advanced-backend',
    title: 'Architecture & Advanced Backend',
    description:
      'Architecture & Advanced Backend: concepts and practical exercises.',
    category: 'Architecture',
    difficulty: 'ADVANCED',
    sortOrder: 8,
    topics: [
      {
        key: 'rest-api-design',
        title: 'REST API Design',
        description:
          'Learn HTTP semantics, resources, versioning and pagination.',
        objectives: [
          'Learn HTTP semantics, resources, versioning and pagination.',
          'Design consistent versioned APIs.',
        ],
        practicalExercise: 'Design consistent versioned APIs.',
        sortOrder: 1,
      },
      {
        key: 'caching',
        title: 'Caching',
        description: 'Learn Redis concepts, TTL and invalidation.',
        objectives: [
          'Learn Redis concepts, TTL and invalidation.',
          'Cache public catalog data.',
        ],
        practicalExercise: 'Cache public catalog data.',
        sortOrder: 2,
      },
      {
        key: 'queues-background-jobs',
        title: 'Queues & Background Jobs',
        description: 'Learn async processing, retries and idempotency.',
        objectives: [
          'Learn async processing, retries and idempotency.',
          'Process reminder emails in a background job.',
        ],
        practicalExercise: 'Process reminder emails in a background job.',
        sortOrder: 3,
      },
      {
        key: 'system-design',
        title: 'System Design',
        description:
          'Learn scalability, reliability, bottlenecks and tradeoffs.',
        objectives: [
          'Learn scalability, reliability, bottlenecks and tradeoffs.',
          'Draw an architecture for 10,000 users.',
        ],
        practicalExercise: 'Draw an architecture for 10,000 users.',
        sortOrder: 4,
      },
      {
        key: 'real-time-communication',
        title: 'Real-time Communication',
        description: 'Learn WebSockets and event-driven updates.',
        objectives: [
          'Learn WebSockets and event-driven updates.',
          'Sync tasks across active sessions.',
        ],
        practicalExercise: 'Sync tasks across active sessions.',
        sortOrder: 5,
      },
      {
        key: 'ai-tool-calling',
        title: 'AI Tool Calling',
        description:
          'Learn structured tool schemas, validation and safe execution.',
        objectives: [
          'Learn structured tool schemas, validation and safe execution.',
          'Build a read-only learning recommendation tool.',
        ],
        practicalExercise: 'Build a read-only learning recommendation tool.',
        sortOrder: 6,
      },
    ],
  },
] as const;
