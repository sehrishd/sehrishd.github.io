# Case Study Template

Reusable React-based case study framework for this portfolio.

## Quick start

Open the template directly in your browser — no build step required:

```
project-pages/project-template.html
```

Or run a local server from the repo root:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080/project-pages/project-template.html`

### React workflow (optional)

For component-based editing with hot reload:

```bash
npm install
npm run dev:template
```

Build for production:

```bash
npm run build
```

Output: `dist/project-pages/project-template.html` + bundled assets.

## Creating a new project

1. **Copy the content file**
   ```bash
   cp src/data/placeholderCaseStudy.js src/data/minder.js
   ```

2. **Edit `src/data/minder.js`** — replace placeholder copy, images, and metadata. Omit sections you do not need (see below).

3. **Copy the HTML entry**
   ```bash
   cp project-pages/project-template.html project-pages/Minder.html
   ```

4. **Create a project entry point**
   ```bash
   cp src/main.jsx src/minder-main.jsx
   ```
   Update the import in `minder-main.jsx`:
   ```js
   import content from './data/minder.js';
   // ...
   <CaseStudyPage content={content} />
   ```

5. **Register in `vite.config.js`**
   ```js
   input: {
     caseStudyTemplate: resolve(__dirname, 'project-pages/project-template.html'),
     minder: resolve(__dirname, 'project-pages/Minder.html'),
   },
   ```

6. **Point `Minder.html` at the entry script**
   ```html
   <script type="module" src="/src/minder-main.jsx"></script>
   ```

7. **Link from homepage** — update the project row `href` in `index.html`.

## Architecture

| Layer | Purpose |
|---|---|
| `src/data/*.js` | Content only — one file per project |
| `src/components/case-study/*` | Reusable section components |
| `src/CaseStudyPage.jsx` | Composes all sections from content |
| `css/case-study.css` | Editorial layout shared across case studies |

## Narrative order

Case studies follow a UX/product design rhythm — **problem first, solution early**:

1. **Hero** — impact, title, metadata (typography only; visual payoff lives in The Solution)
2. **Story** — narrative / human problem
3. **The Solution** — hero visual + key highlights *(shown immediately after the problem)*
4. **Why It Mattered** — optional deeper context
5. **Research** — optional
6. **Design Process** — optional
7. **Reflection** — optional
8. **Next project** — optional

## Sections

All sections except `meta` and `hero` are **optional**. Set a section to `null` or remove it entirely — the layout reflows with no awkward gaps, and the table of contents updates automatically.

| Section | Include when… | Omit by… |
|---|---|---|
| **Hero** | Always (needs `impact` or `title`) | — |
| **Story Introduction** | You have a quote and/or opening narrative | `storyIntroduction: null` |
| **The Solution** | You have a hero visual and/or key highlights | `solution: null` |
| **Opportunity** | You want deeper context on why the problem mattered | `opportunity: null` |
| **Research** | You have research blocks to show | `research: null` |
| **Design Process** | You have process blocks (rows, figures, text) | `designProcess: null` |
| **Reflection** | You have lessons, improvements, growth, or credits | `reflection: null` |
| **Next Project** | You want a "continue reading" link at the end | Omit `navigation.next` |

### The Solution section

Placed **immediately after the story** — not at the end. Supports both product and space/experience work:

| `context` value | Default highlights label | Best for |
|---|---|---|
| `product` | Key features | Digital / physical product design |
| `space` | Experience moments | Physical space design |
| `experience` | What stands out | Service or experience design |

Override with `highlightsLabel: 'Your custom label'`.

```js
solution: {
  label: 'The Solution',
  context: 'product', // or 'space' | 'experience'
  intro: 'One line introducing what you designed.',
  heroImage: { src: '…', alt: '…', caption: '…' },
  highlights: [
    {
      title: 'Experience moment headline',
      description: 'Why this detail matters to people.',
      image: { src: '…', alt: '…', caption: '…' }, // optional
    },
  ],
  gallery: [], // optional extra visuals
  video: null, // optional { src, alt, caption, type }
},
```

For **space or experience design** projects, swap the hero image for environment photography and change the highlights label to "Experience moments". Describe spatial or behavioral moments rather than UI screens.

### Optional fields within sections

- **Hero:** `metadata.role`, `metadata.timeline`, `metadata.team` — no hero image (visual lives in Solution)
- **Story Introduction:** `quote`, `label`, either field alone is enough
- **The Solution:** `context`, `highlightsLabel`, `intro`, `heroImage`, `highlights[]`, `gallery`, `video`
- **Opportunity:** `heading`, `paragraphs`, `insight`, `visual` — any one qualifies
- **Research / Design Process:** `intro`, `label` — section requires `blocks` array with at least one item
- **Reflection:** any combination of `lessons`, `improvements`, `growth`, `credits`
- **Navigation:** `next` — back link lives in the hero; footer nav appears only when `next` is set

### Example: minimal case study

```js
export default {
  meta: { pageTitle: '…', description: '…' },
  hero: {
    impact: 'Helping students feel connected.',
    title: 'Minder',
    image: { src: '…', alt: '…' },
    metadata: { role: 'Lead Designer', timeline: '2024', team: '…' },
  },
  storyIntroduction: {
    label: 'The Moment',
    paragraphs: ['…'],
  },
  solution: {
    label: 'The Solution',
    context: 'product',
    intro: 'One line introducing what you designed.',
    heroImage: { src: '…', alt: '…' },
    highlights: [
      { title: '…', description: '…', image: { src: '…', alt: '…' } },
    ],
  },
  navigation: {
    backLabel: 'Selected Work',
    backHref: '../index.html',
  },
  // research: null  — omitted entirely
  // designProcess: null
  // reflection: null
};
```

The table of contents only appears when **two or more** optional sections are present.

## Content block types

### Research & process blocks

- `{ type: 'text', heading?, paragraphs[] }`
- `{ type: 'quote', text, attribution? }`
- `{ type: 'figure', src, alt, caption?, layout?: 'full' }`
- `{ type: 'figures', layout: 'pair', items: [...] }`
- `{ type: 'row', reverse?, heading, paragraphs[], image }` (process only)

### Solution gallery items

- `{ layout: 'full', src, alt, caption? }`
- `{ layout: 'pair', items: [...] }`

## Brand alignment

- Typography-first, whitespace-driven layout
- Warm neutrals, serif display + sans body
- Subtle scroll reveal and reading progress
- Sticky table of contents on desktop only (≥1100px)
- No cards, gradients, or heavy shadows

See `PROJECT_BRAND.md` for all design decisions.
