FROM node:24-bookworm-slim AS build
WORKDIR /app
COPY package.json package-lock.json ./
COPY frontend/package.json frontend/package.json
COPY backend/package.json backend/package.json
RUN npm ci
COPY tsconfig.base.json ./
COPY backend backend
RUN npm run build -w backend

FROM node:24-bookworm-slim AS runtime
ENV NODE_ENV=production
WORKDIR /app
# Keep Prisma CLI and tsx available for explicit migration/seed release commands.
COPY --from=build --chown=node:node /app /app
USER node
EXPOSE 4000
CMD ["npm", "run", "start", "-w", "backend"]
