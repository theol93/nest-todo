# DevPath

An npm-workspaces monorepo foundation for the Full-Stack Learning Tracker in [specs.md](specs.md).

**Status: scaffold, not the finished MVP.** Includes a Next.js starter page, NestJS health endpoints and Swagger, complete Prisma schema, initial migration, all eight curriculum modules (44 topics), idempotent seeds, quality tooling and CI. Authentication, feature endpoints, private screens, task management, progress tracking and password-reset delivery are not implemented yet. No cloud services have been deployed.

## Requirements

- Node.js 24 LTS (`nvm use`) and npm 11
- Docker with Compose, or an existing PostgreSQL database

## Local setup

Run from the repository root:

```sh
npm install
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env.local

docker compose up -d db
npm run db:generate
npm run db:deploy
npm run db:seed
npm run dev
```

Frontend: <http://localhost:3000>. API liveness: <http://localhost:4000/health>. Database readiness: <http://localhost:4000/health/ready>. Swagger: <http://localhost:4000/docs>.

The database credentials in Compose are for local development. If port 5432 is already used, change the port mapping and the backend DATABASE_URL together. Environment files are ignored by Git. Copying the examples is only needed on first setup; do not overwrite existing local configuration.

To run the API in Docker (frontend still runs on the host):

```sh
docker compose --profile app up -d --build
npm run dev -w frontend
```

The Compose API command applies migrations and seeds before starting. For normal host development, use `docker compose up -d db` and `npm run dev`. Do not run the host and container API on port 4000 simultaneously. `docker compose down` retains database data; adding `-v` deletes it.

## Structure

```text
frontend/                 Next.js App Router, Tailwind CSS, Query provider
  src/app/                Layout, foundation page and UI smoke test
  src/features/           Future feature UI and hooks
  src/lib/                Shared frontend helpers
  components.json         shadcn/ui configuration
backend/                  NestJS API
  src/config/             Validated environment
  src/health/             Liveness and database readiness endpoints
  src/prisma/             Prisma dependency injection
  src/{auth,users,modules,topics,progress,tasks}/  Feature boundaries
  prisma/                 Schema, migrations, curriculum, seed
.github/workflows/        Install, migration, lint, types, tests and builds
```

Frontend and backend are independent workspaces sharing root tooling and a single lockfile. No database code or credentials are imported by the frontend. React Hook Form, Zod, TanStack Query and shadcn/ui dependencies/configuration are ready for feature development. The API uses Prisma 7's PostgreSQL driver adapter, global DTO validation, security headers, a specific CORS origin, JSON logs and shutdown hooks.

## Commands

| Command                                               | Purpose                                                            |
| ----------------------------------------------------- | ------------------------------------------------------------------ |
| `npm run dev`                                         | Run both apps with watch mode                                      |
| `npm run build`                                       | Build both apps; generates Prisma client                           |
| `npm run lint`                                        | ESLint across workspaces                                           |
| `npm run typecheck`                                   | Typecheck both apps                                                |
| `npm test`                                            | Jest UI, config, curriculum and HTTP health tests                  |
| `npm run test:integration -w backend`                 | Verify repeated seeds preserve IDs and user progress (requires DB) |
| `npm run format`                                      | Format source and configuration                                    |
| `npm run format:check`                                | Check formatting                                                   |
| `npm run db:generate`                                 | Generate Prisma client after schema changes                        |
| `npm run db:migrate -w backend -- --name change_name` | Create/apply a development migration                               |
| `npm run db:deploy`                                   | Apply committed migrations                                         |
| `npm run db:seed`                                     | Upsert the curriculum                                              |
| `npm run db:studio`                                   | Inspect local data                                                 |

For development migration arguments, use `npm run db:migrate -w backend -- --name change_name` to pass them directly to Prisma. Commit generated migrations; never use schema push as a production migration strategy.

## Data and seed behavior

All seven spec entities are modeled, including task ownership, completion timestamps, hashed-session/reset-token fields and query indexes. Category is an additional module field to support the specified catalog filter. UUIDs and unique compound keys prevent duplicate progress records. Database constraints are not a substitute for ownership checks in future feature services.

`backend/prisma/curriculum.ts` contains the exact topic descriptions and practical exercises from the spec, with learning objectives derived from those descriptions/exercises. Slugs and topic keys are permanent seed identities; edit display titles without changing existing keys. The seed upserts modules/topics in per-module transactions and does not write users, tasks or progress. Re-running it updates curriculum content while retaining IDs and completion records.

## Configuration

| Variable              | Workspace | Purpose                                                  |
| --------------------- | --------- | -------------------------------------------------------- |
| `DATABASE_URL`        | backend   | Required PostgreSQL connection string                    |
| `PORT`                | backend   | API port, default 4000                                   |
| `FRONTEND_URL`        | backend   | Allowed frontend origin, default http://localhost:3000   |
| `NODE_ENV`            | backend   | development, test or production                          |
| `NEXT_PUBLIC_API_URL` | frontend  | Reserved public API base URL for future feature requests |

Generation and builds do not connect to PostgreSQL. Migration and seed commands do. The liveness route only verifies the process; readiness runs a database query and returns 503 if it fails. The only implemented API endpoints are health endpoints. Swagger describes those endpoints; it does not claim the full REST contract is implemented.

## Implementation roadmap

Follow phases 2–6 in specs.md: authentication and rotating sessions first; then protected modules/progress, tasks, dashboard and production readiness. Add ownership integration tests and Playwright account/progress flows alongside those features. Before exposing cookie-based auth, implement origin/CSRF protections, secure HttpOnly refresh cookies, rate limiting, password hashing and session revocation.

## Deployment preparation

- **Vercel:** import this repository with root directory `frontend`, Node 24, and the public API URL. Use the root workspace lockfile. Keep installation access to files outside the project root enabled.
- **Render:** build the backend Dockerfile using the repository root as context. Set DATABASE_URL to the Neon connection string, FRONTEND_URL to the deployed frontend origin and PORT to the service port. Use `/health/ready` as the health check. Run `npm run db:deploy -w backend` and `npm run db:seed -w backend` as release commands before starting the app.
- **Neon:** create the PostgreSQL database and set its TLS-enabled connection string as a server-only secret. Use a direct connection for migrations when required by the provider.

These are deployment instructions, not completed deployments. The scaffold is not an authenticated production application. The Docker runtime retains development tooling for Prisma migrations/seeding; split release tooling from a smaller runtime image when production deployment is implemented.
