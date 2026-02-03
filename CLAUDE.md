# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Vue 3 + TypeScript + Vite application with:
- **Pinia** for state management
- **Vue Router** for routing
- **pnpm** as package manager

## Common Commands

### Development
```bash
pnpm dev                    # Start dev server (http://localhost:5173)
pnpm build                  # Type-check and build for production
pnpm preview                # Preview production build locally
```

### Code Quality
```bash
pnpm lint                   # Lint and auto-fix with ESLint
pnpm format                 # Format code with Prettier
pnpm type-check             # Type-check without emitting files
```

## Architecture

### Path Aliases
- `@/` resolves to `src/` directory (configured in vite.config.ts)

### Application Entry Point
- `src/main.ts` initializes the Vue app, registers Pinia and Vue Router plugins, and mounts to `#app`

### Routing
- Routes defined in `src/router/index.ts`
- Uses `createWebHistory` for clean URLs

### State Management
- Pinia stores located in `src/stores/`
- Example: `src/stores/counter.ts`

### Project Structure
```
src/
├── assets/         # Static assets (CSS, images)
├── components/     # Reusable Vue components
├── router/         # Vue Router configuration
├── stores/         # Pinia store definitions
└── views/          # Route-level components
```
