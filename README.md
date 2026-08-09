<div align="center">

# 👨‍💻 Tushar Gavali — Cloud & DevOps Engineer Portfolio

**A luxury, interactive single-page portfolio built with React 18, Vite, and Tailwind CSS — deployed on Vercel.**

[![Live Demo](https://img.shields.io/badge/🌐%20Live%20Demo-https%3A%2F%2Ftushar-gavali.vercel.app-8b5cf6?style=for-the-badge)](https://tushar-gavali.vercel.app)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)
[![React](https://img.shields.io/badge/React-18.2-61dafb?style=for-the-badge&logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5.1-646cff?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-06b6d4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

</div>

---

## 📌 Table of Contents

- [About the Project](#-about-the-project)
- [✨ Features](#-features)
- [🛠️ Tech Stack](#-tech-stack)
- [📁 Project Structure](#-project-structure)
- [🚀 Getting Started](#-getting-started)
- [🎨 Customization](#-customization)
- [☁️ Deployment to Vercel](#-deployment-to-vercel)
- [📜 Available Scripts](#-available-scripts)
- [🤝 Contributing](#-contributing)
- [📬 Contact](#-contact)
- [📄 License](#-license)
- [🙏 Acknowledgments](#-acknowledgments)

---

## 📖 About the Project

This is the personal portfolio website of **Tushar Gavali**, an **Entry-Level DevOps Engineer & Cloud Specialist** based in Pune, Maharashtra, India.

The site is a fully responsive, single-page application that showcases Tushar's:

- **Professional experience** — including the Deloitte Australia Technology Virtual Internship
- **Skills** — DevOps/containers, AWS & IaC, Linux/automation, and full-stack development
- **Projects** — 4 featured projects across DevOps, cloud, containerization, and full-stack web
- **Certifications & education** — AWS training, Docker/Terraform mastery, and a BCA degree
- **Contact details** — email, phone, GitHub, LinkedIn, X (Twitter), and Discord

Designed with a dark **"luxury glassmorphism"** aesthetic — gold (amber) and purple accents, interactive particle background, custom glowing cursor, animated typewriter roles, and subtle sound effects.

> 🎯 **Current status:** *Available for Entry Level Cloud & DevOps Role.*

---

## ✨ Features

### Visual & Interactive Experience
- **🎇 Interactive Particle Network Background** — an animated canvas-based particle system with connecting lines and mouse interaction
- **🖱️ Custom Glowing Ring Cursor** — replaces the default cursor with a glowing gradient ring (toggleable from the navbar)
- **⌨️ Typewriter Rotating Roles** — animated cycling through roles like *DevOps Engineer*, *Cloud Support Engineer*, *Build & Release Engineer*, and more
- **🎴 3D Tilt Hero Card** — the hero profile card tilts in 3D with mouse movement, floating badges, and a live code-terminal snippet
- **🔊 Optional Sound FX** — subtle WebAudio click/hover sounds with a one-click toggle in the navbar

### Navigation & UX
- **📊 Scroll Progress Bar** — a gradient progress bar at the top of the viewport
- **🧭 Scroll-Spy Navigation** — the navbar automatically highlights the section currently in view
- **📱 Fully Responsive** — mobile hamburger drawer menu with all nav items and actions
- **🪟 Glassmorphism Cards** — frosted-glass cards with glowing hover effects and smooth micro-interactions

### Content Sections
| Section | Description |
|---|---|
| **Home / Hero** | Status badge, animated role typewriter, 3D tilt card, floating tech badges, key stats (BCA, 40% image reduction, 99.9% uptime, 30% cost savings) |
| **About** | Tabbed content: *My Journey*, *Engineering Philosophy*, *Tech Ecosystem* |
| **Experience** | Timeline of roles (Deloitte Australia virtual internship) |
| **Skills** | Animated progress rings, filterable by category (DevOps & Containers, Cloud & IaC, Automation & Linux, Full-Stack & Web) |
| **Projects** | Filterable project grid with detail modals (architecture, metrics, galleries) and confetti bursts |
| **Credentials** | Certifications with issuer, date, and credential links |
| **Contact** | Email/phone/socials with copy-to-clipboard and confetti celebration |
| **Resume / CV** | Full-screen modal to view and download the CV (accessible from navbar + hero) |

### Technical
- **SEO-ready** — semantic HTML, custom `<title>` and meta description
- **Custom favicon** — SVG favicon in `public/favicon.svg`
- **Optimized fonts** — Google Fonts: Inter, Outfit, Space Grotesk, Fira Code
- **Zero backend** — 100% static, deployable to any static host

---

## 🛠️ Tech Stack

| Layer | Technology | Version |
|---|---|---|
| **Framework** | [React](https://react.dev) | ^18.2.0 |
| **Build Tool** | [Vite](https://vitejs.dev) | ^5.1.4 |
| **Styling** | [Tailwind CSS](https://tailwindcss.com) | ^3.4.1 |
| **Icons** | [lucide-react](https://lucide.dev) | ^0.344.0 |
| **Effects** | [canvas-confetti](https://www.npmjs.com/package/canvas-confetti) | ^1.9.4 |
| **Fonts** | Inter · Outfit · Space Grotesk · Fira Code | via Google Fonts |
| **Platform** | [Vercel](https://vercel.com) | Hosting + CDN + SSL |

**Core languages:** JavaScript (ES2020+), JSX, CSS with Tailwind utilities.

---

## 📁 Project Structure

```text
Portfolio-of-Tushar/
├── .vercel/                      # Local Vercel project configuration
├── public/
│   └── favicon.svg               # Site favicon
├── src/
│   ├── components/               # UI components (one per section)
│   │   ├── About.jsx             # About section with tabs
│   │   ├── Certifications.jsx    # Credentials / certifications
│   │   ├── Contact.jsx           # Contact info + copy-to-clipboard
│   │   ├── CustomCursor.jsx      # Glowing ring cursor
│   │   ├── Experience.jsx        # Work experience timeline
│   │   ├── Footer.jsx            # Site footer
│   │   ├── Hero.jsx              # Hero / home section
│   │   ├── Navbar.jsx            # Floating navbar + mobile drawer
│   │   ├── ParticleCanvas.jsx    # Interactive particle background
│   │   ├── ProjectModal.jsx      # Detailed project view modal
│   │   ├── Projects.jsx          # Filterable project grid
│   │   ├── ResumeModal.jsx       # Resume / CV viewer modal
│   │   └── Skills.jsx            # Skills with progress rings & filters
│   ├── data/
│   │   └── portfolioData.js      # ⭐ ALL content lives here (edit this!)
│   ├── utils/
│   │   └── soundEffects.js       # WebAudio sound FX engine
│   ├── App.jsx                   # App root — composes all sections
│   ├── index.css                 # Tailwind + global styles & animations
│   └── main.jsx                  # React entry point
├── index.html                    # HTML shell (title, meta, fonts, favicon)
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js            # Custom colors, fonts, Tailwind setup
├── vite.config.js                # Vite config (dev port 3000)
└── .gitignore
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.x or later
- **npm** 9.x or later
- *(Optional)* [Vercel CLI](https://vercel.com/docs/cli) for CLI deployments

> You can verify with `node -v` and `npm -v`.

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/tushar-devops1/Portfolio-of-Tushar.git
cd Portfolio-of-Tushar

# 2. Install dependencies
npm install
```

### Run locally (development)

```bash
npm run dev
```

Vite will start the dev server at **http://localhost:3000** and open your browser automatically.

### Production build

```bash
npm run build        # outputs optimized static files to /dist
npm run preview      # serve the production build locally
```

---

## 🎨 Customization

All personal content is **centralized in one file** — no hunting through components:

### 1. Personal info & content — `src/data/portfolioData.js`

Edit this file to update your name, title, roles, bio, stats, experience, skills, projects, certifications, education, and testimonials:

```js
export const personalInfo = {
  name: "Tushar Gavali",
  title: "Entry-Level DevOps Engineer & Cloud Specialist",
  email: "133tushargavali@gmail.com",
  github: "https://github.com/tushar-devops1",
  linkedin: "https://linkedin.com/in/tushar-gavali-590662314",
  // ...
};
```

Each project entry supports `title`, `subtitle`, `description`, `tags`, `github`, `liveDemo`, `metrics`, and a full `details` block (`challenge`, `solution`, `architecture`, `gallery`).

### 2. Colors & fonts — `tailwind.config.js` + `src/index.css`

- Custom amber/purple color shades → `tailwind.config.js`
- Global CSS variables (`--gold`, `--purple`, `--bg-dark`, …) → top of `src/index.css`
- Font families: `Inter` (body), `Outfit` (headings), `Space Grotesk` (display), `Fira Code` (code)

### 3. Page title & SEO — `index.html`

```html
<title>Tushar — Cloud & DevOps Engineer</title>
<meta name="description" content="..." />
```

### 4. Favicon — `public/favicon.svg`

Replace with your own SVG logo for a personalized browser tab icon.

---

## ☁️ Deployment to Vercel

This project is deployed to Vercel at **[https://tushar-gavali.vercel.app](https://tushar-gavali.vercel.app)**.

### Option A — Vercel Dashboard (recommended)

1. Push this repository to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and **Import** the repository.
3. Vercel auto-detects Vite — **no build settings needed**:
   - Framework preset: `Vite`
   - Build command: `npm run build`
   - Output directory: `dist`
4. Click **Deploy**. Every push to the main branch triggers a new production deployment.

### Option B — Vercel CLI

```bash
# Install the CLI globally (once)
npm i -g vercel

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

### Notes
- The `vercel.app` URL is publicly accessible; other deployments (previews) may require login on the Hobby plan.
- To use a custom domain, add it under **Settings → Domains** (Vercel also sells domains directly).

---


## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the Vite dev server on **http://localhost:3000** with hot reload |
| `npm run build` | Builds the production bundle into the `dist/` folder |
| `npm run preview` | Serves the production build locally for final checks |

---

## 🤝 Contributing

This is a personal portfolio, so contributions are limited — but **feedback and suggestions are always welcome**!

If you'd like to contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-idea`)
3. Commit your changes (`git commit -m 'Add amazing idea'`)
4. Push to the branch (`git push origin feature/amazing-idea`)
5. Open a Pull Request

Alternatively, open an [issue](https://github.com/tushar-devops1/Portfolio-of-Tushar/issues) for bugs, improvements, or ideas.

---

## 📬 Contact

**Tushar Gavali** — Entry-Level DevOps Engineer & Cloud Specialist

| Channel | Details |
|---|---|
| 📧 **Email** | [133tushargavali@gmail.com](mailto:133tushargavali@gmail.com) |
| 📞 **Phone** | [+91 9022655575](tel:+919022655575) |
| 🐙 **GitHub** | [github.com/tushar-devops1](https://github.com/tushar-devops1) |
| 💼 **LinkedIn** | [linkedin.com/in/tushar-gavali-590662314](https://linkedin.com/in/tushar-gavali-590662314) |
| 🐦 **X (Twitter)** | [x.com](https://x.com) |
| 💬 **Discord** | `tushargavali#0001` |
| 🌐 **Portfolio** | [tushar-gavali.vercel.app](https://tushar-gavali.vercel.app) |

---

## 📄 License

Copyright © 2026 **Tushar Gavali**. All rights reserved.

This project is a personal portfolio and is not licensed for commercial redistribution or resale without written permission. Feel free to use it as inspiration for your own portfolio — but please replace all personal content and assets.

---

## 🙏 Acknowledgments

- **[React](https://react.dev)** & **[Vite](https://vitejs.dev)** — the modern frontend foundation
- **[Tailwind CSS](https://tailwindcss.com)** — the utility-first styling engine
- **[lucide-react](https://lucide.dev)** — beautiful, consistent icons
- **[canvas-confetti](https://www.npmjs.com/package/canvas-confetti)** — celebratory confetti effects
- **[Google Fonts](https://fonts.google.com)** — Inter, Outfit, Space Grotesk, and Fira Code
- **[Unsplash](https://unsplash.com)** — project gallery images
- **[Vercel](https://vercel.com)** — free, fast hosting with automatic SSL

---

<div align="center">

Made with ⚡ by **Tushar Gavali**

[🔝 Back to top](#-tushar-gavali--cloud--devops-engineer-portfolio)

</div>

