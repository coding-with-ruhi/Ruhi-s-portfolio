# Ruhi Sharma — Personal Portfolio

A fast, editorial dark-mode personal portfolio website built with React, TypeScript, and plain CSS. Designed with an editorial typography aesthetic, film-grain texture, smooth loading reveals, and responsive project showcases.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm

### Running Locally
1. Clone or open the repository folder.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
To create an optimized production build:
```bash
npm run build
```
The compiled output will be generated in the `dist` directory. You can preview it with:
```bash
npm run preview
```

---

## ✏️ Editing Content

All visible text, links, projects, work experience, and profile details are centralized in one single configuration file:

```
src/data/profile.ts
```

You can update any content without touching layout components:
- **Hero & Bio**: Headline, wordmark text, and tagline.
- **About**: Paragraphs, education facts, and technical skill lists.
- **Projects**: Project title, tags, description, live links, and featured status.
- **Experience**: Internships, bullet points, dates, and technologies.
- **Contact & Socials**: Email address, GitHub, and LinkedIn links.

---

## 🌐 Deploying on Vercel

This project is pre-configured to deploy on [Vercel](https://vercel.com/) with default Vite settings.

### Option 1: Vercel Dashboard (GitHub Integration)
1. Push your repository to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import your repository.
3. Vercel will automatically detect **Vite** as the framework:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
4. Click **Deploy**.

### Option 2: Vercel CLI
```bash
npm i -g vercel
vercel
```
Follow the interactive prompts to deploy. For production releases, run:
```bash
vercel --prod
```
