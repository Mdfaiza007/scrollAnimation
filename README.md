# ITZ FIZZ // Kinetic Hypercar Scroll Experience

A premier, high-performance scroll-driven hero section animation built for a senior frontend engineering and motion design evaluation. Re-engineers the reference interaction concept into a production-grade, accessible, and mathematically smooth kinetic web experience.

---

## 🏎️ Live Demo & Overview

- **Concept**: Pinned scroll-driven acceleration where scrolling directly controls the physical translation, subtle yaw rotation, and kinetic energy trail of an aerodynamic hypercar across an illuminated race telemetry corridor.
- **Intro Choreography**: A 2.2-second timeline featuring letter-by-letter blurred reveal (`"WELCOME ITZ FIZZ"`), vehicle slide-in, staggered metric cards, and counting numbers from 0 to target metrics.
- **Scroll Kinematics**: ScrollTrigger pin with 1.2s scrub smoothing synchronized with Lenis inertia scrolling directly on the GSAP internal ticker.
- **Reference Inspiration**: Reimagined from [Paras Chaturvedi's demo](https://paraschaturvedi.github.io/car-scroll-animation) with an original SVG hypercar, responsive coordinate projection, zero layout reads in scroll loops, and a dark luxury automotive aesthetic.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, static export `output: 'export'`)
- **UI Library**: [React 19](https://react.dev/)
- **Animation Engine**: [GSAP 3](https://greensock.com/gsap/) + [ScrollTrigger](https://greensock.com/scrolltrigger/)
- **Smooth Inertia Scrolling**: [Lenis](https://lenis.darkroom.engineering/) (ticker-synced with GSAP)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + Custom clamp fluid typography
- **Icons**: [Lucide React](https://lucide.dev/)
- **CI/CD**: GitHub Actions automated GitHub Pages deployment

---

## 📁 Project Structure

```text
├── .github/
│   └── workflows/
│       └── deploy.yml            # Automated GitHub Pages CI/CD workflow
├── app/
│   ├── globals.css               # Global styles, Lenis rules, custom scrollbar & a11y
│   ├── layout.js                 # App root layout, viewport configuration & metadata
│   └── page.js                   # Unified page assembling SmoothScroll, Hero & Sections
├── components/
│   ├── CarVisual.jsx             # Precision-engineered top-view SVG hypercar with light beams
│   ├── Hero.jsx                  # 100vh pinned hero section, accessible headline, track & stats
│   ├── Navbar.jsx                # Glassmorphic top navigation with telemetry indicators
│   ├── NextSection.jsx           # Subsequent narrative section showcasing motion specs
│   ├── SmoothScroll.jsx          # Lenis smooth scroll wrapper integrated with GSAP ticker
│   └── StatCard.jsx              # Impact metric card with count-up data targets & neon themes
├── hooks/
│   └── useHeroAnimation.js       # GSAP context, intro timeline, matchMedia & scroll choreography
├── lib/
│   └── gsap.js                   # Centralized GSAP & ScrollTrigger plugin registration
├── next.config.js                # Static export configuration & GitHub Pages basePath detection
├── package.json
└── tailwind.config.js            # Custom dark automotive theme colors, glow filters, fonts
```

---

## 🎬 Animation Choreography & Motion Design

### 1. Initial Load Animation (GSAP Timeline)
- **Headline Stagger**: Letters of `"WELCOME ITZ FIZZ"` reveal sequentially with `opacity: 0 -> 1`, `y: 42 -> 0`, and `filter: blur(10px) -> blur(0px)` using `power3.out`.
- **Accessible Letter Splitting**: Screen-reader accessible using `aria-label="WELCOME ITZ FIZZ"` on the parent `<h1 />` while marking individual span letters with `aria-hidden="true"`.
- **Vehicle Entrance**: A gentle slide and scale entrance (`x: -90 -> 0`, `scale: 0.94 -> 1`) overlapping seamlessly with the headline reveal.
- **Metric Cards & Count-Up**: Four cards stagger in (`stagger: 0.15s`), while counters interpolate from `0` to `58%`, `23%`, `27%`, and `40%` using `power2.out`.

### 2. Pinned Scroll-Driven Kinematics (ScrollTrigger + Lenis)
- **Pinning & Scrub**: The hero section pins (`pin: true`) for `+=180%` scroll duration with `scrub: 1.2` interpolation.
- **Kinetic Travel**: The vehicle translates along `x` using a responsive coordinate function: `roadWidth - carWidth - padding`.
- **Dynamic Yaw & Scale**: Under forward acceleration, the car subtly scales (`scale: 1.08`) and pitches (`rotation: 1.2deg`), conveying physical inertia and tire grip.
- **Energy Trail**: An illuminated velocity trail behind the car expands using pure GPU `scaleX` transform (`transformOrigin: "left center"`).
- **Parallax Depth**: The background grid and velocity streaks translate at a slower rate (`x: -160px`), while the headline recedes with subtle parallax and opacity fade.
- **Bidirectional Smoothness**: 100% reversible when scrolling upwards.

---

## ⚡ Performance Architecture Decisions

1. **Strictly Compositor-Only Animations**:
   - Only `transform` (`translateX`, `scaleX`, `scale`, `rotate`) and `opacity` are animated.
   - Zero animation of `top`, `left`, `width`, or `height` to prevent layout thrashing and reflows.
2. **Eliminated Per-Scroll Event JavaScript Layout Reads**:
   - Unlike naive implementations that call `getBoundingClientRect()` or `offsetLeft` inside scroll loops, all distances are precomputed once via ScrollTrigger's responsive functional values (`invalidateOnRefresh: true`).
3. **Hardware Acceleration**:
   - Elements utilize `force3D: true` and `will-change: transform` sparingly to ensure GPU layer promotion.
4. **Ticker-Synchronized Smooth Scroll**:
   - Lenis RAF is piped directly into `gsap.ticker.add((time) => lenis.raf(time * 1000))` with `gsap.ticker.lagSmoothing(0)` to prevent frame judder.
5. **Strict React 19 / Strict Mode Lifecycle Cleanup**:
   - All GSAP animations are encapsulated in `gsap.context()` inside `useHeroAnimation.js` and reverted via `ctx.revert()` upon unmount.
6. **Accessibility (WCAG Reduced Motion)**:
   - Respects `prefers-reduced-motion: reduce`. When active, animations are bypassed, immediately showing static resting states with no motion sickness.
7. **Fluid Typography**:
   - Uses `clamp()` for headline and metric sizing (`clamp(2rem, 5.5vw, 6.5rem)`), ensuring proportion without layout jumps.

---

## 💻 Local Development

```bash
# 1. Clone repository
git clone https://github.com/<your-username>/scrollAnimation.git
cd scrollAnimation

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🚀 Building & Deploying to GitHub Pages

### 1. Test Static Export Locally
```bash
npm run build
```
The static export bundle is output to the `/out` directory.

### 2. GitHub Actions Automated Deployment
A ready-to-run GitHub Actions workflow is provided in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

### 3. Steps to Publish to GitHub Pages:
1. Initialize git and commit your files:
   ```bash
   git init
   git add .
   git commit -m "feat: complete premium scroll-driven hero animation"
   ```
2. Create a new GitHub repository (e.g., `scrollAnimation` or `car-scroll-animation`).
3. Push to GitHub:
   ```bash
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
4. Enable GitHub Pages in your repository:
   - Navigate to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.
5. The workflow will automatically trigger, build the static export with the correct `basePath`, and publish your site at:
   `https://<your-username>.github.io/<your-repo-name>/`
