# Design Brief

## Direction

Industrial Professional — A dark, utilitarian e-commerce interface for heavy machinery spare parts that prioritizes clarity, technical authority, and trust through constraint.

## Tone

Brutalist minimalism with zero decoration — sharp corners, high contrast, monochromatic greys with safety orange accents. Inspired by industrial machinery dashboards and technical specification sheets.

## Differentiation

Orange-on-dark industrial aesthetic with no rounded corners creates instant visual distinction from generic e-commerce templates while reinforcing industrial/technical context.

## Color Palette

| Token              | OKLCH          | Role                         |
| ------------------ | -------------- | ---------------------------- |
| background         | 0.12 0.0 0     | Main canvas, darkest         |
| foreground         | 0.92 0.0 0     | Text, highest contrast       |
| card               | 0.16 0.0 0     | Elevated surfaces            |
| primary / accent   | 0.55 0.22 35   | Orange safety/action         |
| secondary          | 0.22 0.0 0     | Subtle surfaces              |
| destructive        | 0.5 0.22 25    | Red warnings, stock alerts   |
| border             | 0.22 0.0 0     | Dividers, structure          |
| muted              | 0.25 0.0 0     | Disabled, secondary text     |

## Typography

- Display: Space Grotesk — headlines, equipment category labels, part names
- Body: DM Sans — descriptions, specifications, UI copy
- Mono: Geist Mono — part numbers, SKUs, technical specs, pricing
- Scale: hero text 3xl–5xl bold, h2 2xl bold, labels sm semibold, body lg regular

## Elevation & Depth

Flat with minimal shadows; card surfaces use subtle drop shadows (0.1–0.2 opacity) only on interactive hovers. Depth through contrast and edge borders, not blur or glow.

## Structural Zones

| Zone      | Background      | Border        | Notes                                             |
| --------- | --------------- | ------------- | ------------------------------------------------- |
| Header    | card (0.16)     | orange accent | Horizontal line separator, logo + search + cart  |
| Sidebar   | bg/card (0.14)  | 0.22 grey     | Equipment categories, filters                    |
| Content   | background      | —             | Alternating card (0.16) / background (0.12)      |
| Product   | card (0.16)     | border        | Image + specs + CTA, part number in mono         |
| Footer    | secondary (0.22)| border-top    | Legal, company info, no decoration               |

## Spacing & Rhythm

Compact density (0.5rem–1.5rem gaps) between content blocks; 2rem section separators. Micro-spacing (0.25rem–0.5rem) between UI elements. No excessive whitespace—information-rich but not crowded.

## Component Patterns

- Buttons: Orange background, dark text, no radius, 2px hover shadow, uppercase labels (sm font-semibold)
- Cards: 0.16 background, 0.22 border, xs–sm shadow on hover, no radius
- Badges: Pill shape (full-rounded) for part status (in-stock/out-of-stock); destructive red for alerts
- Part numbers: Monospace, grey (0.55 muted-foreground), tight tracking
- Input fields: 0.22 background, orange ring on focus, no radius

## Motion

- Entrance: Subtle fade-in on page load (200ms ease-out), no bounce
- Hover: Button shadow increase + text glow (orange), 150ms ease
- Decorative: None — all motion serves functional purpose (state feedback)

## Constraints

- No rounded corners (border-radius: 0)
- No gradients, no decorative patterns, no shadow blur
- Orange (#e85d04 / 0.55 0.22 35) used only for: primary CTAs, active states, critical highlights
- Grey monochromatic palette (0.0 chroma) for all supporting surfaces
- All typography weights: 400 (regular), 600 (semibold), 700 (bold) only
- No images except product photos; no illustrations or ambient graphics

## Signature Detail

Horizontal orange accent line below header (2px, full width) signals industrial/technical authority and breaks the monotone grey baseline — memorable and functional.
