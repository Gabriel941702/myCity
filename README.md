# Turismo Buenos Aires — React Landing

A single-page React landing site for Buenos Aires tourism, plus a styled
**Coming Soon** page that matches the same look & feel.

## Tech stack

- React 18
- React Router 6
- Vite 5
- Plain CSS (one file per component)

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173).

## Routes

| Path           | Page                          |
| -------------- | ----------------------------- |
| `/`            | Landing page (matches design) |
| `/coming-soon` | Coming Soon page              |

All nav and "what to do" links route to `/coming-soon` since the rest of
the site isn't built yet.

## Build

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  App.jsx                 # Landing page composition
  main.jsx                # Router entry
  components/             # Header, Hero, WhatToDo, Reasons, SocialFollow, Footer
  pages/
    ComingSoon.jsx        # Coming Soon page (same style)
  styles/global.css       # Global tokens + resets
```
