# ilya

Svelte 5 + TypeScript + Vite application with Biome for linting and formatting.

## Environment Setup

This project uses [mise](https://mise.jdx.dev/) for Node version management.

```sh
# Install mise (if not already installed)
curl https://mise.run | sh

# Install Node 22
mise install

# The project will automatically use Node 22 when in this directory
```

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)

## Project Setup

```sh
pnpm install
```

## Development

```sh
# Start dev server (http://localhost:5173)
pnpm dev

# Type-check Svelte components
pnpm check

# Type-check in watch mode
pnpm check:watch

# Lint and format code with Biome
pnpm lint
pnpm format

# Build for production
pnpm build

# Preview production build
pnpm preview
```
