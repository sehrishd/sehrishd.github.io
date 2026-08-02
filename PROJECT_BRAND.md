# Portfolio Brand

> Source of truth for all design, content, and implementation decisions on this site.
> When in doubt, refer to this document before making visual or structural changes.

## Mission

Designing technology that makes everyday life more intentional.

## Keywords

- Editorial
- Calm
- Warm
- Premium
- Timeless
- Intentional
- Thoughtful
- Welcoming
- Optimistic
- Handcrafted

## Color — Morning palette

Inspired by morning light and natural materials: cream linen, warm wood, soft sky, sage, paper, coffee, sunlight. The page is a continuous neutral canvas — warmth arrives through small accents, not large color blocks.

### Primary palette

| Token | Value | Use |
|---|---|---|
| Ivory | `#FAF7F2` | Continuous page background |
| Cream | `#F5F0E8` | Micro surfaces only — image frames, inputs |
| Sand | `#D4C9B8` | Strong borders, dividers |
| Warm charcoal | `#2E2A26` | Headlines, primary text |
| Coffee | `#4A4038` | Body text |
| Stone | `#6B635A` | Secondary labels, captions |
| Paper | `#958C82` | Muted, disabled text |

### Accents

| Token | Value | Use |
|---|---|---|
| Terracotta | `#A06E58` | Reading progress, decorative warmth |
| Terracotta deep | `#8B5E4A` | Links, hovers, section labels |
| Dusty peach | `#C4A090` | Quote rules, subtle warmth |
| Sage | `#728272` | Success states, occasional natural accent |
| Slate blue | `#6E8094` | Focus rings, keyboard navigation |

### Rules

- One continuous ivory canvas — no large cream, oatmeal, or sand section backgrounds
- Color lives in details: links, labels, hover states, dividers, quotes, imagery
- No bright pinks, purples, neons, gradients, or rainbow palettes
- Terracotta deep (`--color-accent-text`) for small text and links (WCAG AA)
- Terracotta (`--color-accent`) for decorative elements: progress bar
- Slate blue is reserved for focus — distinct from links
- Sage and peach appear rarely, never as large fills
- All colors live in `css/tokens.css` — never hardcode hex in components

## Avoid

- Startup aesthetic
- Bright gradients
- Glassmorphism
- Generic portfolio layouts
- Heavy shadows
- Colorful cards
- Flashy animations
- Large colored section backgrounds
- Blocky landing-page section fills

## Inspiration

- Apple
- Aesop
- MUJI
- Kinfolk Magazine
- Notion

## Motion

- Slow
- Purposeful
- Subtle
- Elegant

## Typography

- Editorial serif for display
- Modern sans-serif for body

## Goal

Every page should feel like reading a beautifully designed magazine, not browsing a portfolio template.
