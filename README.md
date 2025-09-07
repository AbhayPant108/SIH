## Telemedicine Nabha — Frontend

React + Vite app styled with Tailwind CSS. This SPA consumes the backend APIs and provides routes for home, consult, medicines, symptoms, records, awareness, contact, auth, and about pages.

### Tech Stack
- React 18, React Router v6 (data router)
- Redux Toolkit (store in `src/reduxconfig`)
- Tailwind CSS (global styles in `src/styles/global.css`)
- Vite dev tooling

### Getting Started
1. Install dependencies:
```bash
npm install
```
2. Start the dev server:
```bash
npm run dev
```
3. Build for production:
```bash
npm run build
```
4. Preview the production build locally:
```bash
npm run preview
```

### Project Structure
```
frontend/
  src/
    components/        Reusable UI components (Header, Footer, Inputs, etc.)
    pages/             Route-level pages (Home, Consult, Medicines, About, ...)
    reduxconfig/       Redux store and slices
    shared/            Layout wrappers
    styles/            Global styles and Tailwind entry
    main.jsx           App entry, router configuration
  index.html           Vite HTML entry
```

### Routing
Routes are configured via `createBrowserRouter` in `src/main.jsx` with a shared `App` layout wrapper in `src/pages/App.jsx`.

Public routes:
- `/` → `Home`
- `/about` → `About`
- `/login`, `/signup` → Auth pages

Authenticated routes (wrapped in `Authenticated`):
- `/consult`, `/medicines`, `/symptoms`, `/records`, `/awareness`, `/contact`

### Styling
- Tailwind utility classes are used throughout components and pages.
- Theme CSS variables (e.g., `--surface`, `--text`, `--muted`, `--blue`, `--green`) are referenced in class names like `bg-[var(--surface)]`.
- Global styles live in `src/styles/global.css` and are imported in `src/main.jsx`.

### Environment Variables
If the frontend needs to talk to a non-default backend URL, configure a Vite env var (e.g., `VITE_API_BASE_URL`) and consume it via `import.meta.env.VITE_API_BASE_URL`.

Example `.env` (at project root or `frontend/` as appropriate):
```
VITE_API_BASE_URL=http://localhost:3000
```

### Development Notes
- Header navigation already includes an About link to `/about`.
- Scrolling is reset on route change in `App.jsx` via `useLocation` + `useEffect`.
- Keep component code readable and favor clear naming; avoid deep nesting.

### Scripts (from package.json)
- `dev`: Start Vite dev server
- `build`: Build production bundle
- `preview`: Preview build locally

### Contributing
- Follow existing code style and Tailwind conventions.
- Keep components small and composable.
- Place route-level views in `src/pages` and export from `src/pages/index.js`.


