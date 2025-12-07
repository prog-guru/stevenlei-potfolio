# Steven Lei - Portfolio Website

A modern, professional portfolio website built with Next.js 14, TypeScript, TailwindCSS, and Framer Motion.

## 🚀 Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **TailwindCSS** for styling
- **Framer Motion** for smooth animations
- **Dark Mode** support with system preference detection
- **Fully Responsive** design (mobile, tablet, desktop)
- **SEO Optimized** with metadata and semantic HTML
- **Modern UI/UX** inspired by Vercel, Linear, and Raycast

## 📋 Pages

- **Home** - Hero section, stats, featured projects preview
- **Experience** - Timeline of professional experience
- **Projects** - Portfolio of projects with filtering
- **Skills** - Categorized technical skills and expertise
- **About** - Personal narrative and strengths
- **Contact** - Contact form and social links

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd StevenLei
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization

### Update Personal Information

Edit `data/personal.ts` to update:
- Name, title, email, location
- Social media links (GitHub, LinkedIn)
- Summary and about text
- Stats (years of experience, etc.)

### Add Experience

Edit `data/experience.ts` to add or modify work experience entries.

### Add Projects

Edit `data/projects.ts` to add or modify project entries.

### Update Skills

Edit `data/skills.ts` to customize skill categories and technologies.

### Styling

- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Color scheme: Update CSS variables in `globals.css`

## 🚢 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Build for Production

```bash
npm run build
npm start
```

## 📝 Notes

- The contact form is UI-only. To add backend functionality, integrate with a service like:
  - Formspree
  - SendGrid
  - AWS SES
  - Or your own API endpoint

- Update the placeholder content in data files with your actual resume information

- All animations use Framer Motion with viewport-based triggers for performance

## 📄 License

This project is open source and available under the MIT License.

---

Built with ❤️ by Steven Lei

