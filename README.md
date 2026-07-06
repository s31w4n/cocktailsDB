# Cocktails DB

A modern React application for browsing and searching cocktail recipes. Search by name, filter by category, and view full ingredient lists and instructions — powered by [TheCocktailDB](https://www.thecocktaildb.com/) API.

## Features

- **Search** — Debounced search with instant results as you type
- **Category filters** — Narrow results by Cocktail, Ordinary Drink, or Other / Unknown
- **Detail pages** — Full recipe view with ingredients, glass type, and preparation instructions
- **Dark / light mode** — Theme toggle with preference saved to `localStorage`
- **Loading & error states** — Route-level loaders and retryable error messages
- **Accessible UI** — Semantic markup, ARIA labels, and keyboard-friendly filter dropdown

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | [React 19](https://react.dev/) |
| Build tool | [Vite 8](https://vite.dev/) |
| Routing | [React Router 7](https://reactrouter.com/) |
| Icons | [React Icons](https://react-icons.github.io/react-icons/) |
| Data | [TheCocktailDB API](https://www.thecocktaildb.com/api.php) |
| Styling | Custom CSS with CSS variables |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- npm (or another compatible package manager)

### Installation

```bash
git clone https://github.com/s31w4n/cocktailsDB.git
cd cocktailsDB
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build
npm run preview
```

`npm run preview` serves the production build locally for smoke testing.

### Lint

```bash
npm run lint
```

## Usage

1. **Browse** — On first load, cocktails starting with the letter "a" are shown by default.
2. **Search** — Type a cocktail name in the search field; results update after a short debounce delay.
3. **Filter** — Use the category dropdown to filter the current results.
4. **View details** — Click **details** on any card to open the full recipe page.
5. **Toggle theme** — Use the navbar control to switch between light and dark mode.

## Project Structure

```
src/
├── api/              # API client and fetch helpers
├── components/       # Reusable UI (Navbar, SearchForm, Cocktail, etc.)
├── constants/        # API base URLs and endpoints
├── hooks/            # Custom hooks (debounce, global context)
├── layouts/          # Root layout with navigation and loading state
├── loaders/          # React Router data loaders
├── pages/            # Route-level page components
├── styles/           # Component and theme stylesheets
└── utils/            # Data mappers for API responses
```

## API

This app uses the free [TheCocktailDB](https://www.thecocktaildb.com/) public API:

| Endpoint | Purpose |
| --- | --- |
| `search.php?s=` | Search cocktails by name |
| `lookup.php?i=` | Fetch a single cocktail by ID |

No API key is required. Response data is normalized in `src/utils/mapCocktail.js` before being used in the UI.

## Deployment

The `public/_redirects` file is included for SPA hosting (e.g. Netlify), routing all paths to `index.html` so client-side routes work in production.

```bash
npm run build
```

Deploy the contents of the `dist/` directory to your static host of choice.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

## License

This project is open source. Cocktail data is provided by [TheCocktailDB](https://www.thecocktaildb.com/) and remains subject to their terms of use.
