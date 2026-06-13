# 3D Portfolio Website

A stunning, interactive 3D portfolio built with [Three.js](https://threejs.org/). Dark theme, glassmorphism, scroll-driven reveals, mouse-reactive 3D hero scene, and 3D tilt project cards. No build step required.

## Customize

All content lives in **`js/config.js`** — edit your name, tagline, about text, skills, projects, email, and social links there. No other files need changes.

Colors and fonts can be tweaked via CSS variables at the top of `css/style.css`.

## Run locally

Serve the folder with any static server (ES modules require http, not file://):

```sh
python3 -m http.server 8000
# or
npx serve .
```

Then open http://localhost:8000.

## Deploy

Pushing to the default branch automatically deploys to **GitLab Pages** via `.gitlab-ci.yml`. Find your site URL under **Deploy → Pages** in the project settings.

## Accessibility & performance

- Respects `prefers-reduced-motion` (static scene, no animations)
- Graceful fallback when WebGL is unavailable
- Capped pixel ratio for smooth performance on high-DPI displays
