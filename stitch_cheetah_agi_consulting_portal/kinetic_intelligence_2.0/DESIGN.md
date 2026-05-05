---
name: Kinetic Intelligence 2.0
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
  on-surface-variant: '#dac2ae'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#a28d7a'
  outline-variant: '#544434'
  surface-tint: '#ffb86b'
  primary: '#ffc68b'
  on-primary: '#492900'
  primary-container: '#ff9f1c'
  on-primary-container: '#683c00'
  inverse-primary: '#895100'
  secondary: '#e6feff'
  on-secondary: '#003739'
  secondary-container: '#00f4fe'
  on-secondary-container: '#006c71'
  tertiary: '#f0c0ff'
  on-tertiary: '#520072'
  tertiary-container: '#e299ff'
  on-tertiary-container: '#74009f'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdcbc'
  primary-fixed-dim: '#ffb86b'
  on-primary-fixed: '#2c1700'
  on-primary-fixed-variant: '#683d00'
  secondary-fixed: '#63f7ff'
  secondary-fixed-dim: '#00dce5'
  on-secondary-fixed: '#002021'
  on-secondary-fixed-variant: '#004f53'
  tertiary-fixed: '#f8d8ff'
  tertiary-fixed-dim: '#ebb2ff'
  on-tertiary-fixed: '#320047'
  on-tertiary-fixed-variant: '#74009f'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  h1:
    fontFamily: Space Grotesk
    fontSize: 4rem
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: 0.05em
  h2:
    fontFamily: Space Grotesk
    fontSize: 2.5rem
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.02em
  h3:
    fontFamily: Space Grotesk
    fontSize: 1.5rem
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.02em
  body-lg:
    fontFamily: Space Grotesk
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Space Grotesk
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: '1.6'
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 0.875rem
    fontWeight: '500'
    lineHeight: '1.4'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 0.75rem
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.1em
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 64px
  gutter: 24px
  margin: 40px
---

## Brand & Style

This design system embodies the "Cheetah AGI" ethos: aggressive, high-performance, and precision-engineered. The aesthetic is hyper-futuristic and cyber-industrial, prioritizing speed of information processing and a sense of "active intelligence." 

The UI style leverages **Glassmorphism** and **Cyber-Industrialism**. Interfaces should feel like advanced tactical displays—HUD-inspired overlays that prioritize technical data over decorative fluff. High-contrast hierarchies ensure critical information is unmistakable, while subtle grid overlays provide a sense of mathematical structural integrity. The emotional response is one of absolute control, immense power, and zero-latency feedback.

## Colors

The palette is anchored in **Deep Obsidian (#0D0D0D)**, providing a void-like canvas that emphasizes the luminosity of the accent colors. 

- **Electric Amber** is reserved exclusively for critical CTAs and high-priority system alerts.
- **Neon Cyan** acts as the primary navigational and interactive signal.
- **Plasma Purple** and **Toxic Green** are utilized for multi-stream data visualization and differentiating parallel AGI processes.
- Surfaces should utilize varying degrees of transparency and blur rather than solid fills to maintain the glassmorphic depth.

## Typography

Typography transitions between two distinct voices: the authoritative, geometric **Space Grotesk** for structural communication and the technical, precise **JetBrains Mono** for low-level system data.

Headlines should utilize wide tracking and bold weights to command attention. Labels and technical readouts must remain mono-spaced to ensure alignment across data grids and to evoke the feeling of a real-time command terminal.

## Layout & Spacing

The design system utilizes a **Fixed Grid** model based on a 12-column structure for desktop, with a visible 8px sub-grid overlay used during active "editing" or "processing" states. 

Alignment is rigid and mathematical. Avoid soft padding; use spacing to create distinct blocks of information that feel like hardware components slotted into a chassis. Gutters are kept tight (24px) to maximize information density, reflecting the high-performance nature of the AGI.

## Elevation & Depth

Depth is achieved through **Glassmorphism** and tonal layering rather than traditional drop shadows. 

1.  **Backdrop Blurs:** Use `backdrop-filter: blur(20px)` on all floating panels.
2.  **Inner Glows:** Instead of outward shadows, use 1px inner borders (strokes) in low-opacity Cyan or White to define the edges of "glass" sheets.
3.  **Scanline Overlays:** High-elevation components (like modal dialogs) should feature a subtle horizontal scanline pattern or noise texture to reinforce the digital display aesthetic.
4.  **Z-Axis Logic:** Higher elevation is represented by increased transparency and brighter border strokes, making the element appear to "glow" closer to the user.

## Shapes

The shape language is strictly **Sharp (0px)**. Roundness is perceived as "soft" or "consumer-grade," which contradicts the precision-engineered brand persona. 

Use 45-degree clipped corners (chamfers) for buttons and card headers to reinforce the industrial, military-tech feel. All containers must have crisp, 90-degree or 45-degree angles. Decorative elements like bracket corners or crosshair markers should be used to frame important data blocks.

## Components

**Buttons**
- **Critical (Electric Amber):** Solid fill, black text, 0px radius. On hover, add a high-frequency flicker effect.
- **Secondary (Neon Cyan):** Ghost style with a 2px solid border. Fill on hover.

**Input Fields**
- Underline-only or fully enclosed glass panels. Use **JetBrains Mono** for input text. Ensure the "active" state triggers a glowing border effect in Neon Cyan.

**Cards & Containers**
- Use semi-transparent obsidian backgrounds (#0D0D0D at 80% opacity). Add a "header" area with a chamfered corner and a "System ID" label in JetBrains Mono.

**Data Visualization**
- Use "Glow-lines" for charts. Data points should be small, sharp squares.
- Integrate "Loading" states that show actual system logs or terminal output in Toxic Green.

**Micro-interactions**
- All transitions must be "Instant" (0-100ms) or use "Power-Out" easing to feel snappy and mechanical. No "bouncy" or organic animations.