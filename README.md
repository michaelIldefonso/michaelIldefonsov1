# Michael Ildefonso - Portfolio

A modern, responsive portfolio website built with Vue 3 and Vite. Showcasing my capstone project, open-source contributions, and full-stack development experience.

## About Me

Computer Science student in my final semester with a strong backend foundation and solid frontend skills. Passionate about scalable systems, security engineering, and bridging the gap between backend robustness and frontend user experience. Currently expanding my full-stack capabilities through hands-on project development.

## Contact

- **GitHub**: [michaelIldefonso](https://github.com/michaelIldefonso)
- **LinkedIn**: [michael-ildefonso-62ba77267](https://www.linkedin.com/in/michael-ildefonso-62ba77267)
- **Email**: michaelildefonso20@gmail.com

## Featured Projects

### Rekapo (Capstone Thesis)

Architected a specialized STT system for Taglish code-switching. Engineered a custom 20-hour bilingual dataset to fine-tune Whisper-small, outperforming the Whisper-Medium baseline. Developed a production-grade backend featuring Google OAuth 2.0, INT8 quantization, and complex media processing.

**Tech Stack**: Python, FastAPI, Fine-tuned Whisper, React Native, FFmpeg  
**Links**: [Backend](https://github.com/michaelIldefonso/Rekapo) | [Mobile](https://github.com/michaelIldefonso/RekapoApp) | [Admin](https://github.com/michaelIldefonso/Rekapo_admin)

### bisHash (PyPI Library)

A published Python security module for robust password orchestration. Implements Argon2id with server-side peppering, built-in IP-based rate limiting, and account lockout logic to mitigate brute-force attacks.

**Tech Stack**: Python, Argon2, Security Engineering  
**Links**: [Source](https://github.com/michaelIldefonso/Hashing-Algorithm) | [PyPI](https://pypi.org/project/bisHash/) | [Demo](https://github.com/michaelIldefonso/Hash_demo)

### Progresstify (Systems Project)

A cloud-native project management engine featuring single-tenant workspace architecture. Implemented multi-provider OAuth 2.0 and JWT for secure session management with serverless PostgreSQL.

**Tech Stack**: Node.js, Express, PostgreSQL, OAuth 2.0, JWT, Vite  
**Links**: [Backend](https://github.com/michaelIldefonso/Progresstify-BackEnd) | [Frontend](https://github.com/michaelIldefonso/Progresstify-FrontEnd)

## Project Structure

```
src/
├── components/
│   ├── AboutExpanded.vue      # Detailed about section
│   ├── AboutSection.vue       # About section
│   ├── ContactSection.vue     # Contact form
│   ├── FooterSection.vue      # Footer
│   ├── HeaderNavigation.vue   # Navigation bar
│   ├── HeroSection.vue        # Hero section
│   ├── ProjectCard.vue        # Project showcase cards
│   ├── ProjectSection.vue     # Projects grid
│   ├── SkillSection.vue       # Technical skills
│   └── icons/                 # Icon components
├── views/
│   ├── HomeView.vue           # Home page
│   └── AboutView.vue          # About page
└── router/                    # Vue Router config
```

## Technology Stack

**Frontend**: Vue 3, Vite, JavaScript, CSS  
**Build & Dev**: ESLint, npm

## Getting Started

Clone the repository and install dependencies:

```sh
npm install
```

### Development Server

```sh
npm run dev
```

Starts the dev server with hot-reload at `http://localhost:5173`.

### Production Build

```sh
npm run build
```

Creates an optimized build in the `dist` folder for deployment.

### Code Linting

```sh
npm run lint
```

Runs ESLint to check code quality and maintain standards.
