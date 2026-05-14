# ✈️ CredPilot — Borrow with Absolute Confidence

[![Deployment Status](https://img.shields.io/badge/Deployment-Live-accent?style=for-the-badge)](https://credpilot.vercel.app)
[![Tech Stack](https://img.shields.io/badge/Stack-React%20%7C%20Vite%20%7C%20Tailwind-blue?style=for-the-badge)](https://github.com/NerajRuwali/CredPilot)

**CredPilot** is a premium, high-stakes fintech dashboard designed to bridge the gap between complex financial data and human decision-making. Built with a "Precision Systems" aesthetic, it provides a clinical, data-rich interface for loan eligibility analysis, market rate arbitrage, and financial health optimization.

---

## 💎 Design Philosophy: "Precision Systems"
CredPilot moves away from the generic SaaS templates. It utilizes:
- **Asymmetric Composition**: Handcrafted layouts inspired by high-end design firms (Linear, Stripe).
- **Tactile UI**: Interactive cursor-follow glows, spring-animated transitions, and depth layering.
- **Storytelling UX**: Conversational copy that guides users through their financial journey.
- **Glassmorphism 2.0**: Sophisticated noise-textured cards with ambient lighting.

## 🚀 Core Features
- **Verdict Engine**: A multi-step, 60-second eligibility analysis with real-time risk profiling.
- **Smart Actions**: AI-driven recommendations for loan consolidation and rate optimization.
- **Market Arbitrage**: Live side-by-side comparison of premium lending partners.
- **Repayment Simulator**: High-fidelity EMI planning with principal-vs-interest breakdown charts.
- **Govt Gateway**: Searchable database of government-backed financial support schemes.
- **Fully Responsive**: Fluid layout scaling from mobile to ultrawide monitors.

## 🛠️ Tech Stack
- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (Modern `@theme` architecture)
- **Motion**: [Framer Motion](https://www.framer.com/motion/) (Layout animations, 60fps transitions)
- **Charts**: [Recharts](https://recharts.org/) (Responsive financial data visualization)
- **Icons**: [Lucide React](https://lucide.dev/) (Clean, modern iconography)
- **Forms**: [React Hook Form](https://react-hook-form.com/) (Performant state management)

## 📂 Folder Structure
```text
src/
├── components/     # Reusable UI (Navbar, Footer, CursorGlow)
├── pages/          # Full page views (Dashboard, Eligibility, Calculator)
├── sections/       # Modular landing page blocks (Hero, Features, FAQ)
├── assets/         # Static media and brand elements
├── index.css       # Design system and Tailwind v4 themes
└── App.jsx         # Routing and layout orchestration
```

## 💻 Local Setup & Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/NerajRuwali/CredPilot.git
   cd CredPilot
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 🌐 Deployment
This project is optimized for deployment on **Vercel** or **Netlify**.
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **SPA Routing**: Ensure `index.html` is served for all routes (Vercel handles this automatically via `vercel.json`).

## 🔮 Future Enhancements
- [ ] **Real-time API Integration**: Connect to actual credit bureau APIs.
- [ ] **Auth Systems**: Implement secure user accounts with financial data persistence.
- [ ] **Multi-currency Support**: Adapt for global debt markets.
- [ ] **PDF Export**: Generate professional financial reports for bank submission.

---

## 👨‍💻 Author
**Neeraj Ruwali**  
*Senior Frontend Engineer & UI Designer*

---
© 2026 CredPilot Precision Systems. All rights reserved.
