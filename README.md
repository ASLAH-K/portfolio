# 🛡️ Digital Engineering Workspace — Muhammed Aslah K

A high-performance, Markdown-driven engineering workspace designed for cybersecurity research, OSINT workflows, and technical documentation. Built with React, Vite, MDX, and a strict "2026 Cyber-Space" design system.

**Live Deployment:** [https://portfolio-smoky-five-55.vercel.app/](https://portfolio-smoky-five-55.vercel.app/)

---

## 📌 Core Architecture & Features

- ⚡ **Digital Engineering Hub:** A dynamic, centralized workspace for documenting real-time threat research, custom automation tools, and security lab logs.
- 📝 **Headless MDX Engine:** Markdown-driven content generation with React component injection for highly technical write-ups, featuring custom `CodeBlock` components with click-to-copy functionality.
- 🎨 **2026 Cyber-Space Aesthetic:** Strict dark-mode UI (deep space navy `#070b14`) utilizing space-separated RGB CSS design tokens, glowing cyan accents, and mathematically locked UI elements.
- 🚦 **Advanced SPA Routing:** Client-side routing managed by `react-router-dom` with a custom `vercel.json` rewrite configuration to eliminate 404s on direct navigation.
- 🧠 **Performance & UX:** Memory-hoisted components, seamless scroll restoration, an interactive `EngineeringDock` toast system, and tactile clipboard feedback for bulletproof email handling.
- ♿ **Accessible & SEO Ready:** Fully tagged with ARIA roles, semantic HTML, and custom Open Graph (`og-default.jpg`) fallback banners for optimized social sharing on LinkedIn, Twitter, and Discord.

---

## 🛠 Tech Stack

### Frontend Core
- React 18
- Vite (Single Page Application)
- React Router v6

### Content & Styling
- MDX (Markdown + JSX)
- Tailwind CSS (Semantic Variable System)
- Framer Motion (Smooth layout transitions)

### Deployment & Infrastructure
- Vercel (Production Hosting & Edge Caching)
- GitHub (CI/CD Pipeline)

---

## 📁 Project Structure

```text
📦 digital-engineering-workspace
┣ 📂 content                  # Markdown (MDX) lab logs & write-ups
┃ ┣ 📂 projects               # Major security implementations
┃ ┣ 📂 journal                # Research & OSINT findings
┃ ┗ 📂 scripts                # Automation & PowerShell tools
┣ 📂 public                   # Static assets
┃ ┣ profile.jpg               # Mathematically locked hero asset
┃ ┣ resume.pdf                # Downloadable CV
┃ ┗ og-default.jpg            # Open Graph social fallback banner
┣ 📂 src
┃ ┣ 📂 components
┃ ┃ ┣ SEO.jsx                 # Dynamic meta tags & Open Graph logic
┃ ┃ ┣ EngineeringDock.jsx     # Interactive a11y toast notifications
┃ ┃ ┗ layout/Layout.jsx       # Core wrapper & navigation
┃ ┣ App.jsx                   # Router & Suspense config (Terminal Boot)
┃ ┣ Portfolio.jsx             # Main interactive hub & timeline
┃ ┗ main.jsx                  # React DOM entry point
┣ vercel.json                 # Critical SPA routing rewrite rules
┣ tailwind.config.cjs         # Custom Cyber-Space theme definitions
┣ index.html                  # Core HTML with FOUC prevention styles
┗ package.json
```

---

## 🚀 Local Development

To run this workspace locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ASLAH-K/portfolio.git
   ```

2. **Navigate to the directory:**
   ```bash
   cd portfolio
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the Vite development server:**
   ```bash
   npm run dev
   ```

---
*© 2026 Muhammed Aslah K. Digital Engineering Workspace.*