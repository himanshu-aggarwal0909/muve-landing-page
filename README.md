# MUVE landing page

*Automatically synced with your [v0.app](https://v0.app) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/healthtransparent-8894s-projects/v0-muve-landing-page)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/kSPMr89vOYw)

## Overview

This repository will stay in sync with your deployed chats on [v0.app](https://v0.app).
Any changes you make to your deployed app will be automatically pushed to this repository from [v0.app](https://v0.app).

## Deployment

### Option 1: GitHub Pages (Free Static Hosting)

Your project is configured for GitHub Pages deployment. Follow these steps:

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Configure for GitHub Pages"
   git push origin main
   ```

2. **Enable GitHub Pages in your repository:**
   - Go to your repository on GitHub
   - Click on **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - Save the settings

3. **Automatic Deployment:**
   - The GitHub Actions workflow will automatically build and deploy your site
   - Every push to the `main` branch will trigger a new deployment
   - Your site will be available at: `https://YOUR_USERNAME.github.io/muve-landing-page`

4. **Custom Domain (Optional):**
   - In GitHub Pages settings, you can add a custom domain
   - Add a `CNAME` file in the `public` folder with your domain name

### Option 2: Vercel (Recommended for Next.js)

Your project is also configured for Vercel deployment:

**[https://vercel.com/healthtransparent-8894s-projects/v0-muve-landing-page](https://vercel.com/healthtransparent-8894s-projects/v0-muve-landing-page)**

To deploy on Vercel:
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Vercel will automatically detect Next.js and deploy

## Local Development

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **pnpm** package manager

If you don't have pnpm installed, you can install it globally:
```bash
npm install -g pnpm
```

### Setup Instructions

1. **Install dependencies:**
   ```bash
   pnpm install
   ```

2. **Run the development server:**
   ```bash
   pnpm dev
   ```

   The app will be available at [http://localhost:3000](http://localhost:3000)

3. **Build for production:**
   ```bash
   pnpm build
   ```

4. **Start production server:**
   ```bash
   pnpm start
   ```

5. **Run linter:**
   ```bash
   pnpm lint
   ```

### Available Scripts

- `pnpm dev` - Start development server with hot reload
- `pnpm build` - Create optimized production build
- `pnpm start` - Start production server (requires build first)
- `pnpm lint` - Run ESLint to check code quality

## Build your app

Continue building your app on:

**[https://v0.app/chat/kSPMr89vOYw](https://v0.app/chat/kSPMr89vOYw)**

## How It Works

1. Create and modify your project using [v0.app](https://v0.app)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository
