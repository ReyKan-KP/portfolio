# My Portfolio Website

A modern, responsive portfolio website built with cutting-edge web technologies. Features smooth animations, interactive elements, and a clean, professional design.

## 🎯 Project Overview

This portfolio website showcases my work, skills, and experience through:
- Interactive UI components
- Smooth page transitions
- Responsive design
- Performance optimized animations
- Type-safe development

## 🏗️ Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   ├── privacy/           # Privacy policy page
│   └── terms/             # Terms of service page
├── components/            # React components
│   ├── sections/         # Major page sections
│   │   ├── About.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Tape.tsx
│   │   └── WorkExperience.tsx
│   ├── ui/              # Reusable UI components
│   │   └── animated-gradient.tsx
│   └── SectionHeader.tsx
├── public/              # Static assets
└── styles/             # Global styles
```

## ✨ Features

- **Modern Stack**: Built with Next.js 14, React 18, and TypeScript
- **Styling**: Tailwind CSS for utility-first styling
- **Animations**: 
  - Framer Motion for React-based animations
  - GSAP for complex animation sequences
- **Performance**: Optimized for Core Web Vitals
- **Type Safety**: Full TypeScript implementation
- **Responsive Design**: Mobile-first approach
- **SEO Optimized**: Meta tags and semantic HTML

## 🌐 Live Preview

Visit the live website: [Portfolio Website](https://portfolio-kanishaka-pranjal.vercel.app/)

![Portfolio Website Preview](/public/images/preview.png)

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm 9.x or later

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ReyKan-KP/portfolio.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd portfolio
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` with your configuration

5. **Start the development server:**
   ```bash
   npm run dev
   ```
   Access the site at `http://localhost:3000`

## 🛠️ Development

### Scripts

- `npm run dev` - Start development server
- `npm run build` - Build production bundle
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checks

### Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: 
  - Framer Motion
  - GSAP
- **Linting**: ESLint
- **Formatting**: Prettier
- **Package Manager**: npm

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints:
  - Mobile: 320px+
  - Tablet: 768px+
  - Desktop: 1024px+
  - Large Desktop: 1440px+

## 🔧 Configuration

The project uses various configuration files:
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `next.config.js` - Next.js configuration
- `.eslintrc.js` - ESLint rules
- `.prettierrc` - Prettier formatting rules

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


