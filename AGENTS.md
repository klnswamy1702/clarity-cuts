# Role & Objective
You are an elite Creative Technologist and Lead Frontend Engineer specializing in award-winning agency and creator portfolios (Awwwards-style). Your objective is to build a high-converting, dark-mode showcase portfolio website for **"Clarity Cuts"** (Main Title) with the subtitle **"by Charan"**—an AI Video Editor and AI Photo Manipulation Specialist. 

The primary goal of this website is client conversion: wowing visitors with interactive visual proof (before/after sliders, hover-to-play reels) and funneling them smoothly into booking a project.

# Brand Identity & Aesthetic
- **Brand Name:** Clarity Cuts
- **Subtitle / Creator:** by Charan
- **Design Language:** Ultra-sleek, cinematic dark-mode studio aesthetic (`#09090B` background, `#18181B` glassmorphic cards, subtle 1px borders `rgba(255,255,255,0.08)`).
- **Accent Colors:** Electric Cyan (`#06B6D4`) and Neon Violet (`#8B5CF6`) subtle gradients to signal "AI precision + cinematic creativity."
- **Typography:** Bold, high-contrast display font for headings (e.g., `Syne`, `Clash Display`, or `Space Grotesk`) paired with clean `Inter` for body text and `JetBrains Mono` for timecodes/technical tags.

# Tech Stack
- **Framework:** Next.js (App Router), React, TypeScript
- **Styling:** Tailwind CSS + Lucide Icons
- **Animations:** Framer Motion (for smooth scroll reveals, magnetic buttons, layout transitions, and interactive modals)
- **Media Handling:** Optimized HTML5 `<video>` with lazy-loading/hover-to-play, and a custom touch/mouse-friendly Before/After image comparison slider.

# Core Sections & Interactive Features to Build

## 1. Sticky Glassmorphic Navbar
- Left: **CLARITY CUTS** logo mark with a glowing recording-dot indicator and subtle `by Charan` badge.
- Center: Smooth-scroll links (`Showreel`, `Video Edits`, `AI Photo Lab`, `Workflow`, `Services`).
- Right: High-contrast CTA button (`Book a Cut` / `Let's Talk`) with a subtle pulse/glow effect.

## 2. Cinematic Hero Section
- **Badge:** `[ AVAILABLE FOR FREELANCE & RETAINERS ]` with a live green pulsing dot.
- **Headline:** "CLARITY CUTS" in massive display typography, with "by Charan — AI Video & Photo Architecture" underneath.
- **Value Prop Subheadline:** "Transforming raw footage and static concepts into scroll-stopping visual cinema using next-gen AI workflows and precision cutting."
- **Interactive Showreel Container:** A faux-video-timeline frame (with timecode `00:00:24:12`, aspect ratio badges `9:16` / `16:9`, and sound toggle) playing a high-impact looping showreel preview, with a "Watch Full Showreel" modal trigger.
- **Client/Tool Marquee:** Infinite scrolling ticker showing AI & editing tools mastered (Premiere Pro, After Effects, DaVinci Resolve, Runway Gen-3, Midjourney, ComfyUI, Kling AI, Magnific, Photoshop).

## 3. Dual-Mode Portfolio Showcase (Video & Photo Filter)
Build an interactive bento-grid gallery with category tabs: `All Work`, `AI Video & VFX`, `Short-Form Reels (9:16)`, `AI Photo Retouching`, and `Commercial Ads`.
- **Video Cards:** Support both `16:9` horizontal and `9:16` vertical formats. Videos auto-play muted on hover, display duration and AI tools used as tags (e.g., `Runway + After Effects`), and open in a sleek lightbox player with sound when clicked.
- **Interactive "Before / After" AI Photo Lab Section:** Dedicated interactive split-screen slider components where potential clients can drag a handle left and right to compare:
  1. *Raw Photo vs. AI Color Grade & Relighting*
  2. *Product Shot on Table vs. AI Generative Studio Background*
  3. *Low-Res Frame vs. 4K AI Upscale & Inpainting*

## 4. "The Clarity Pipeline" (How Charan Works)
A 3-step visual timeline showing clients why AI + Human editing beats traditional editing:
- **01. Concept & Raw Ingest:** Storyboarding, raw footage audit, or AI prompt engineering.
- **02. AI Synthesis & Precision Cut:** Generative B-roll, voice/audio enhancement, rotoscoping, inpainting, and rhythm-based cutting.
- **03. High-Clarity Delivery:** 4K color-graded masters formatted for YouTube, Instagram Reels, TikTok, or Commercial Broadcast in half the traditional turnaround time.

## 5. Services & Client Packages
Clean pricing/service cards tailored for clients:
- **Viral Short-Form Engine:** High-retention Reels/Shorts with AI B-roll, dynamic captions, and sound design.
- **Commercial AI Video & VFX:** Brand commercials, product visualizations, and generative video sequences.
- **AI Photo & Thumbnail Studio:** High-CTR YouTube thumbnails, product manipulation, generative shoots, and retouching.

## 6. High-Converting "Start a Project" Contact Section
- Interactive project inquiry form where clients can click pill-tags to select what they need (`AI Video Edit`, `Reels Package`, `AI Photo Retouch`, `Custom Project`), select their budget/timeline, and either submit the form or click a direct **"Chat on WhatsApp / Email Charan"** button.

# Implementation Rules for the Agent
1. **Rich Demo Data:** Populate a clean `/data/portfolioData.ts` file with realistic, high-quality placeholder videos (use reliable public MP4 CDNs like Pexels/Mixkit) and high-contrast Unsplash images for the Before/After sliders so the site looks 100% live and functional out of the box—and so Charan can swap his own files in easily.
2. **Custom Before/After Component:** Write a rock-solid, reusable `<BeforeAfterSlider />` React component supporting both mouse drag and mobile touch events without layout shift.
3. **Responsive Excellence:** Ensure vertical `9:16` reels and interactive sliders look native and effortless on mobile screens.
4. **Complete Code:** Do not leave `// TODO` placeholders. Build all components cleanly and modularly.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
