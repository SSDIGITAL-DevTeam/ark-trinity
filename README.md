# ARK Trinity

ARK Trinity is the region's first integrated AI holding company, uniting Digital, Capital, and AI into a single scalable engine. This project is the official corporate website built with modern web technologies, designed to reflect the company's vision of institutionalizing intelligence.

## 🚀 Technical Architecture

This application is built on a robust, SEO-optimized stack designed for performance and scalability.

- **Framework**: [Next.js 16+](https://nextjs.org/) (App Router, Server Components)
- **Language**: [TypeScript](https://www.typescriptlang.org/) for type safety
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4 with [DaisyUI](https://daisyui.com/) plugin
- **Icons**: [Lucide React](https://lucide.dev/) and custom SVG components
- **Deployment Target**: Vercel / Docker Container

## 🛠️ Getting Started

### Prerequisites

Make sure you have the following installed:
- Minimun Node.js 20.9 or later
- npm (or pnpm/yarn)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/organization/ark-trinity.git
   cd ark-trinity
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment:**
   Create a `.env.local` file in the root directory. You can use `.env.example` as a reference.
   ```bash
   cp .env.example .env.local
   ```
   
   **Key Variables:**
   - `NEXT_PUBLIC_BASE_URL`: The authoritative domain of the site (used for SEO/Sitemap). Defaults to `http://localhost:3000` locally.
     ```env
     NEXT_PUBLIC_BASE_URL=https://arktrinity.com
     ```

4. **Run Development Server:**
   ```bash
   npm run dev
   ```
   Visit [http://localhost:3000](http://localhost:3000) to see the application.

## Deployment Guide

### Option 1: Vercel (Recommended)

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new).

1. Push your code to a Git repository (GitHub/GitLab/Bitbucket).
2. Import the project into Vercel.
3. In the "Configure Project" screen, add the Environment Variable:
   - `NEXT_PUBLIC_BASE_URL`: Your production domain (e.g., `https://arktrinity.com`)
4. Click **Deploy**. Vercel will automatically detect Next.js and build your site.

### Option 2: Docker (Self-Hosted)

For deploying on your own server (DigitalOcean, AWS, etc.), you can use the provided Docker support.

1. **Build the image:**
   ```bash
   docker build -t ark-trinity .
   ```

2. **Run the container:**
   ```bash
   docker run -p 3000:3000 -e NEXT_PUBLIC_BASE_URL=https://your-domain.com ark-trinity
   ```

### Option 3: Manual Node.js Server

1. **Build the application:**
   ```bash
   npm run build
   ```

2. **Start the production server:**
   ```bash
   # Linux/Mac
   export NEXT_PUBLIC_BASE_URL=https://arktrinity.com
   npm start
   
   # Windows (PowerShell)
   $env:NEXT_PUBLIC_BASE_URL="https://arktrinity.com"
   npm start
   ```

## 📂 Project Structure

We follow a domain-driven and atomic design hybrid structure for better maintainability:

```text
├── app/                  # Application Routes & Pages
│   ├── about/            # 'About Us' page & metadata
│   ├── contact/          # 'Contact' page & metadata
│   ├── foundings/        # 'Founding' page & metadata
│   ├── mif/              # 'MIF' page & metadata
│   ├── layout.tsx        # Root layout (Metadata, Fonts, Providers)
│   ├── page.tsx          # Homepage
│   ├── robots.ts         # Dynamic Robots.txt generation
│   └── sitemap.ts        # Dynamic Sitemap.xml generation
│
├── components/           # Component Library
│   ├── icons/            # Custom SVG icons set (MIF specific, etc.)
│   ├── layout/           # Global layout blocks (Navbar, Footer)
│   ├── sections/         # Feature-specific page sections
│   └── ui/               # Reusable atomic UI elements (Buttons, Hero, Logo)
│
├── public/               # Static Assets
│   └── images/           # Optimized images for Hero and content
```

## 🔍 SEO & Performance Features

- **Technical SEO**: Auto-generated `sitemap.xml` and `robots.txt` that adapt to the environment URL.
- **Dynamic Metadata**: Every route includes specific Title, Description, and OpenGraph (OG) tags for social sharing visibility.
- **LCP Optimization**: Critical "Above the Fold" images (Hero sections) utilize `priority` loading and optimized `sizes`.
- **Clean Code**: Codebase is stripped of unnecessary comments and formatted for readability (`prettier` compatible).

## 🎨 Design System

The UI is built using **Tailwind CSS** with **DaisyUI** semantics.
- **Colors**: Primary Red (`#FF4D4D`) is aliased as `error` in DaisyUI/Tailwind config to leverage semantic naming while maintaining brand identity.
- **Typography**: Uses `Plus Jakarta Sans` and `Montserrat` optimized via `next/font`.

---

© 2026 ARK Trinity Holdings Pte. Ltd. All Rights Reserved.
