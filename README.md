# Sehrish Daud — Portfolio

Personal portfolio site for UX and product design work.

**Live site:** [sehrishd.github.io](https://sehrishd.github.io)

---

## About

Designing technology that makes everyday life more intentional.

This site showcases my selected case studies and creative work. It is built as a calm, editorial experience rather than a generic portfolio template. Case studies are written for clarity and scanability.

**Contact:** [daudsehrish@gmail.com](mailto:daudsehrish@gmail.com)

---

## Featured work


| Project                                                           | Description                                                           |
| ----------------------------------------------------------------- | --------------------------------------------------------------------- |
| [Minder](https://sehrishd.github.io/project-pages/Minder.html)    | Mobile app helping UW STEM students find study partners               |
| [Glow Tap](https://sehrishd.github.io/project-pages/GlowTap.html) | Physical faucet attachment that makes water use visible through light |
| Studio                                                            | Creative work archive showcasing what I do in my free time :)         |


---

## Project structure

```
├── index.html              Homepage
├── studio.html             Creative work archive
├── project-pages/          Case study pages (HTML)
├── css/                    Styles — tokens, layout, components, case-study
├── js/                     Site scripts
├── assets/                 Images, icons
├── PROJECT_BRAND.md        Design system & content guidelines (source of truth)
└── CASE_STUDY.md           Case study template documentation
```

Case studies use a shared editorial template (`project-pages/project-template.html`) with section-based navigation, scroll reveals, and constrained media embeds. Brand colors, typography, and tone are defined in `PROJECT_BRAND.md`.

A React + Vite mirror of the case study components also lives in `src/` for future use. The live site is served as static HTML via GitHub Pages.

---

## Local development

No build step is required for the static site. Clone the repo and open `index.html` in a browser, or use a local server:

```bash
# Optional — live reload while editing
npx serve .
```

To run the React development path:

```bash
npm install
npm run dev
```

---

## Deployment

Hosted on **GitHub Pages** from the `main` branch. Push to `main` and changes publish automatically after a short delay.

---

## License

See [LICENSE](./LICENSE).