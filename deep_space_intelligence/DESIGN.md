---
name: Deep Space Intelligence
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#b9caca'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#849495'
  outline-variant: '#3a494a'
  surface-tint: '#00dce5'
  primary: '#e9feff'
  on-primary: '#003739'
  primary-container: '#00f5ff'
  on-primary-container: '#006c71'
  inverse-primary: '#00696e'
  secondary: '#ebb2ff'
  on-secondary: '#520072'
  secondary-container: '#b600f8'
  on-secondary-container: '#fff6fc'
  tertiary: '#f6ffd3'
  on-tertiary: '#283500'
  tertiary-container: '#bfef00'
  on-tertiary-container: '#536900'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#63f7ff'
  primary-fixed-dim: '#00dce5'
  on-primary-fixed: '#002021'
  on-primary-fixed-variant: '#004f53'
  secondary-fixed: '#f8d8ff'
  secondary-fixed-dim: '#ebb2ff'
  on-secondary-fixed: '#320047'
  on-secondary-fixed-variant: '#74009f'
  tertiary-fixed: '#c3f400'
  tertiary-fixed-dim: '#abd600'
  on-tertiary-fixed: '#161e00'
  on-tertiary-fixed-variant: '#3c4d00'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  h1:
    fontFamily: Space Grotesk
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h2:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  h3:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
    letterSpacing: 0em
  body-lg:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  body-md:
    fontFamily: Space Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  technical-data:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.15em
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  xxl: 80px
  container-max: 1440px
  gutter: 24px
---

## Brand & Style

This design system establishes an atmosphere of high-performance intelligence and cosmic scale. It is tailored for an elite AI consultancy where technical precision meets visionary strategy. The aesthetic is rooted in **Ultra-Futuristic Glassmorphism**, utilizing deep obsidian voids contrasted against hyper-luminescent accents.

The UI should evoke a sense of looking through the viewport of a high-tech spacecraft—advanced, calm, and immensely powerful. Key attributes include:
- **Atmospheric Depth:** Multi-layered transparency and background blurs create a sophisticated sense of hierarchy.
- **Luminous Precision:** "Light-leaks" and subtle outer glows simulate energy-efficient displays.
- **Technical Rigor:** Monospaced data visualizations and geometric typography emphasize accuracy and billion-dollar reliability.

## Colors

The palette is anchored in a near-total blackout to maximize the impact of the vibrant neon accents. 

- **The Void:** Use `#080808` for the absolute base background and `#121212` for elevated containers and surfaces.
- **Electric Cyan:** Reserved for primary calls to action, active navigation states, and critical interactive paths.
- **Vivid Violet:** Used for secondary highlights, AI-driven insights, and subtle decorative gradients.
- **Lime Green:** Strictly dedicated to success states, positive delta indicators, and "system online" status signals.
- **Contrast:** Typography must maintain high contrast against the dark background, primarily using pure white or high-silver gray for secondary text.

## Typography

The typographic system utilizes a dual-font approach to balance editorial impact with technical utility.

- **Space Grotesk** handles all prose and structural headings. Its geometric construction feels engineered yet modern. For H1 and H2 levels, use tighter letter spacing to create a high-impact, "dense" visual feel.
- **JetBrains Mono** is the workhorse for all data-heavy environments, labels, and system status indicators. It communicates the "under-the-hood" power of the AI brand.
- **Readability:** Ensure that all JetBrains Mono instances use high-contrast white or Electric Cyan to ensure technical data is never obscured by the deep background.

## Layout & Spacing

This design system utilizes a **12-column fixed grid** for desktop, centered within the viewport. The layout rhythm is strictly based on a 4px modular scale to ensure alignment of technical elements and hairline borders.

- **Margins:** Use generous `xxl` (80px) vertical spacing between major sections to mimic the "vastness" of space.
- **Density:** While section spacing is loose, internal component spacing (padding within cards or data tables) should be compact (`sm` to `md`) to maintain a "cockpit" feel.
- **Gutter:** A consistent 24px gutter ensures that even with neon glows and borders, elements remain distinct and legible.

## Elevation & Depth

Hierarchy is established through **Glassmorphism** and luminosity rather than traditional drop shadows.

- **Surface 0 (Base):** Deep Obsidian (#080808).
- **Surface 1 (Cards/Panels):** Charcoal (#121212) with a 60% opacity backdrop blur (20px).
- **Surface 2 (Overlays/Modals):** Charcoal (#181818) with an 80% opacity blur and a 1px hairline border.
- **The Glow:** Elevated elements should feature a subtle outer glow (0px 0px 15px) using a low-opacity version of the Primary Cyan or Secondary Violet, suggesting the element is "powered on."
- **Borders:** Every container must have a 0.5px or 1px border. Use linear gradients for these borders (e.g., Cyan to Transparent) to suggest directional lighting.

## Shapes

The design system adopts a **Sharp (0px)** corner philosophy to reinforce the "cutting-edge" and "high-precision" nature of the brand.

- **Geometric Purity:** Every button, input field, and card should have 90-degree angles.
- **Internal Accents:** Use 45-degree clipped corners (chamfers) for decorative elements or specific "Action" buttons to further the futuristic aesthetic.
- **Consistency:** Rounding is strictly prohibited, even for selection indicators or chips, to maintain the architectural rigor of the layout.

## Components

- **Buttons:** 
  - *Primary:* Solid Electric Cyan background with black text. No rounding. Subtle cyan outer glow on hover.
  - *Secondary:* Ghost style with a 1px Vivid Violet border and violet text.
- **Input Fields:** Obsidian background with a bottom-only 1px white border. When focused, the border transitions to a Cyan-to-Violet gradient. Labels use JetBrains Mono in uppercase.
- **Cards:** Use the Surface 1 glassmorphism specification. Header sections of cards should be separated by a hairline gradient divider.
- **Status Indicators:** Small, sharp squares (4px). Use Lime Green for 'Active', Vivid Violet for 'Processing', and Cyan for 'Ready'.
- **Data Visualizations:** Use thin strokes (1px) for all charts. Avoid fills; use neon line gradients and glowing data points to represent AI outputs.
- **Technical Readouts:** Use JetBrains Mono for all numerical data. Small "scanline" overlays (horizontal 1px patterns at 5% opacity) can be used on large hero images or background panels to enhance the futuristic theme.