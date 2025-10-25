## Docker guide for this project

This app is a Next.js project running on Node.js 24 with a Dockerfile and a Compose file for development. Below are common dev and prod workflows, plus tips to avoid typical pitfalls.

## Prerequisites

- Docker Desktop or Docker Engine (Compose V2)
- For live-reload via Compose watch: Docker Desktop 4.20+ or compose v2.22+

## Quick start (dev)

Start the app using Compose:

```bash
docker compose up --build
```

Then open http://localhost:3000.

The dev server runs inside the container using the Dockerfile's `CMD ["npm","run","dev"]`.

### Live reload with Compose watch

This repo includes a `develop.watch` section in `compose.yaml` which:
- syncs source changes from your host into the container
- rebuilds the image if `package.json` or `package-lock.json` changes

To enable this behavior, run:

```bash
docker compose watch
```

Notes:
- `docker compose up` does not apply the watch rules. Use `watch` during active dev.
- If you edit dependencies and don’t see them applied, rebuild or run an install inside the container (see next section).

## Handling dependency changes

If you add or upgrade packages, choose one of these approaches:

1) Let Compose watch rebuild the image automatically (recommended):
	 - `docker compose watch` is configured to rebuild on `package.json` / `package-lock.json` changes.

2) Manually rebuild the image and recreate containers:
```bash
docker compose build web
docker compose up -d
```

3) Install inside the running container (quick, not persistent across rebuilds):
```bash
docker compose exec web npm i <package>
```

4) Start clean (ensures fresh node_modules inside the container):
```bash
docker compose down -v
docker compose build --no-cache web
docker compose up
```

## Environment variables

- `compose.yaml` sets `NODE_ENV=development` for the `web` service.
- To add your own env vars, create a `.env` file in this folder and reference via `environment:` or `env_file:`. Compose will also automatically load `.env` at the project root.

## Useful commands

```bash
# View logs
docker compose logs -f web

# Open a shell in the container
docker compose exec web sh

# Stop and remove containers
docker compose down

# Remove containers + named/anonymous volumes
docker compose down -v
```

## Production build (optional)

The current Dockerfile is optimized for development (`npm run dev`). For production, you generally want a multi-stage build that compiles the Next.js app and runs `next start` with only production dependencies. Example outline:

```Dockerfile
# syntax=docker/dockerfile:1
ARG NODE_VERSION=24
FROM node:${NODE_VERSION}-slim AS deps
WORKDIR /app
COPY package*.json ./
RUN --mount=type=cache,target=/root/.npm npm ci --ignore-scripts

FROM deps AS build
COPY . .
RUN npm run build

FROM node:${NODE_VERSION}-slim AS runner
ENV NODE_ENV=production
WORKDIR /app
COPY package*.json ./
RUN --mount=type=cache,target=/root/.npm npm ci --omit=dev --ignore-scripts && npm cache clean --force
COPY --from=build /app/.next /app/.next
COPY --from=build /app/public /app/public
EXPOSE 3000
CMD ["npm", "run", "start"]
```

Use this as a separate Dockerfile (e.g., `Dockerfile.prod`) and build with:

```bash
docker build -f Dockerfile.prod -t myapp:prod .
```

## Troubleshooting

- Invalid volume spec or mount path must be absolute:
	- Ensure volume entries use absolute container paths like `- .:/app` (not `.:app`).

- Dependency not found after adding a package:
	- Rebuild the image or run `docker compose exec web npm i <package>`.
	- If volumes persisted older node_modules, run `docker compose down -v` then rebuild.

- Live reload not working:
	- Use `docker compose watch` (not just `up`).
	- Confirm your Docker Desktop or compose version supports the `develop.watch` feature.

## References

- Docker’s Node.js guide: https://docs.docker.com/language/nodejs/
- Compose watch: https://docs.docker.com/compose/file-watch/