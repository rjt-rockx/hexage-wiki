# CLAUDE.md

This file provides guidance to AI coding assistants (Claude Code, Cursor, and other agents) when working with code in this repository.

## Project Overview

This is a VitePress-based wiki documenting games by Hexage. The site uses Vue 3 components, UnoCSS for styling, and supports both local and Algolia search.

## Development Commands

- `pnpm install` - Install dependencies
- `pnpm dev` - Start development server on <http://localhost:5173>
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm format` - Format code with Prettier

## Architecture

### VitePress Configuration

- Main config: `.vitepress/config.mts`
- Source directory: `wiki/` (configured via `srcDir`)
- Uses UnoCSS plugin with custom theme integration
- Dynamic canonical URL generation via `transformPageData`

### Dynamic Route Generation

The wiki uses VitePress's dynamic routing system with `.paths.ts` files:

- Pattern: `[param].paths.ts` files generate routes from JSON data
- Example: `wiki/flyingtank/bombs/[bomb].paths.ts` generates bomb detail pages
- Uses `utils/resolveDescription.ts` to process templated descriptions with upgrade values
- Navigation between items handled via prev/next links in frontmatter

### Content Structure

- Each game has its own directory under `wiki/`
- Game sections (weapons, bombs, etc.) use dynamic routing
- JSON files contain data, `.paths.ts` files generate pages
- Markdown files use Vue SFC syntax with custom components

### Theme Customization

- Custom Vue components in `.vitepress/theme/components/`
- UnoCSS configuration in `uno.config.ts` with VitePress CSS variable integration
- Component aliases: `$components` → `.vitepress/theme/components`

### Search Configuration

Supports both local and Algolia search based on environment variables:

- `ALGOLIA_APP_ID`, `ALGOLIA_SEARCH_API_KEY`, `ALGOLIA_INDEX_NAME`
- Falls back to local search if Algolia variables not set

## Key Files

- `.vitepress/config.mts` - Main VitePress configuration
- `utils/resolveDescription.ts` - Template processing for game data
- `uno.config.ts` - UnoCSS styling configuration
- `wiki/*/[*].paths.ts` - Dynamic route generation
- `.vitepress/theme/` - Custom theme components and styling

## Development Notes

- Use pnpm as package manager
- Game data stored in JSON files alongside `.paths.ts` generators
- Custom description templating system supports upgrade levels with `{{$n}}` placeholders
- JSON data structure includes upgrade costs and values (e.g., `upgrade_1_cost`, `upgrade_1_values`)
- Site deployed to <https://hexage.wiki> with sitemap generation

## Data Structure Pattern

Each game item (weapon, bomb, etc.) in JSON files follows this pattern:

- `name` - Display name
- `description` - Markdown description with `{{$n}}` template placeholders
- `upgrade_N_values` - Pipe-separated values for template substitution (N = 1,2,3)
- `upgrade_N_cost` - Upgrade costs for each level
