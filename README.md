# Yahav Ler – Portfolio

Personal portfolio website built to present my background, technical experience, and selected software projects in a clean and professional format.

## Live Website
- Portfolio: https://my-portfolio-yahav-lers-projects.vercel.app
- GitHub profile: https://github.com/yahavLer
- LinkedIn: https://www.linkedin.com/in/yahav-ler-5899b826b/

## Overview
This portfolio highlights:
- My background as a Software Engineering graduate
- Professional experience in production/NOC environments
- End-to-end projects across backend, mobile, web, microservices, and AI-assisted workflows
- Skills, tools, and technologies I work with
- Contact links for recruiters and hiring teams

The site content is managed in a structured way through `src/content.ts`, making it easy to update profile details, experience, skills, and projects without changing the page layout.

## Tech Stack
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint
- Vercel

## Main Sections
- **Hero / Intro** – concise professional summary and technology highlights
- **About** – background, work style, and current role
- **Experience** – production support and leadership experience
- **Skills** – languages, backend, mobile, databases, DevOps, and monitoring tools
- **Projects** – selected academic and personal projects with stack, highlights, and links
- **Contact** – GitHub, LinkedIn, and email

## Project Content Highlighted in the Portfolio
The portfolio currently showcases projects such as:
- AI/ML-based dating app with Android + Spring Boot microservices
- Rail Safe / Safe Box risk and safety management platform
- Benefit management system with Spring Boot + Android
- Benefit Finder Android app
- C++ OOP restaurant project

## Repository Structure
```text
src/
├── app/            # Next.js app router pages and UI
└── content.ts      # Portfolio content: profile, skills, experience, projects

public/             # Static assets such as images, logos, and media
```

## Getting Started
### Prerequisites
- Node.js 18+
- npm

### Installation
```bash
git clone https://github.com/yahavLer/my-portfolio.git
cd my-portfolio
npm install
```

### Run Locally
```bash
npm run dev
```
Then open:
```text
http://localhost:3000
```

### Production Build
```bash
npm run build
npm run start
```

## Scripts
```bash
npm run dev     # Start development server
npm run build   # Create production build
npm run start   # Start production server
npm run lint    # Run ESLint
```

## Customization
Most of the content can be updated from:
- `src/content.ts` – text, skills, experience, projects, links
- `public/` – images, logos, demo videos, and media assets

This makes the portfolio easy to maintain as new projects and experience are added.

## Why This Project Matters
This portfolio is more than a personal website — it is also a structured presentation layer for my engineering work. It helps communicate:
- technical depth
- ownership across full projects
- ability to ship end-to-end systems
- clarity in presenting architecture, impact, and tools

## Future Improvements
Planned or possible next improvements:
- Add screenshots/GIF previews for each project card
- Improve SEO/Open Graph metadata further
- Add a downloadable resume section
- Add project filtering by category or tech stack
- Add bilingual support (English / Hebrew)

## Contact
- Email: YahavLer.1@gmail.com
- GitHub: https://github.com/yahavLer
- LinkedIn: https://www.linkedin.com/in/yahav-ler-5899b826b/
