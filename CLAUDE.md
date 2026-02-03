# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Svelte 5 + TypeScript + Vite application with:
- **Svelte 5 runes** enabled for reactive state management
- **Biome** for linting and formatting (replaces ESLint + Prettier)
- **mise** for Node 22 version management
- **pnpm** as package manager

## Common Commands

### Development
```bash
pnpm dev                    # Start dev server (http://localhost:5173)
pnpm build                  # Build for production
pnpm preview                # Preview production build locally
```

### Code Quality
```bash
pnpm check                  # Type-check Svelte components
pnpm check:watch            # Type-check in watch mode
pnpm lint                   # Lint and auto-fix with Biome
pnpm format                 # Format code with Biome
```

### Environment
```bash
mise install                # Install Node 22 (defined in mise.toml)
```

## Architecture

### Path Aliases
- `@/` resolves to `src/` directory (configured in vite.config.ts)

### Application Entry Point
- `src/main.ts` creates the Svelte app and mounts it to `#app`

### Svelte 5 Features
- Runes enabled in `svelte.config.js` for modern reactive syntax
- Single-file components with `<script>`, `<template>`, and `<style>` sections
- TypeScript support via `lang="ts"` in script blocks

### Project Structure
```
src/
├── assets/         # Static assets (CSS, images)
├── components/     # Reusable Svelte components
└── views/          # Page-level components
```
