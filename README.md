# hexage-wiki

A wiki for Hexage games

## Setup

1. Install [Node.js](https://nodejs.org/)
2. Install [pnpm](https://pnpm.io/)
3. Clone this repository
4. Run `pnpm install`
5. Run `pnpm dev`
6. Open `http://localhost:5173` in your browser

## Environment Variables

### Algolia DocSearch

To enable Algolia DocSearch, you need to set the following environment variables in `.env` file:

- `ALGOLIA_APP_ID` - Algolia App ID
- `ALGOLIA_SEARCH_API_KEY` - Algolia Public Search API Key
- `ALGOLIA_INDEX_NAME` - Algolia Index Name

Without these variables, it will fallback to the default search which may not work as expected.
