# Portfolio — Milagros Pedrasa

Portfolio premium construido con React, TypeScript, Vite, Tailwind CSS y Framer Motion.

## Stack

- React + TypeScript
- Vite
- Tailwind CSS v4
- Framer Motion
- Lucide React

## Desarrollo

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy en Vercel

1. Subí el repositorio a GitHub
2. Importá el proyecto en [vercel.com](https://vercel.com)
3. Vercel detectará Vite automáticamente
4. Deploy sin configuración adicional

El archivo `vercel.json` ya está incluido para SPA routing.

## Personalización

- **Perfil y links:** `src/data/profile.ts`
- **Proyectos:** `src/data/projects.ts`
- **Experiencia:** `src/data/experience.ts`
- **Tecnologías:** `src/data/technologies.ts`
- **CV:** Colocá tu PDF en `public/cv-milagros-pedrasa.pdf`

## Estructura

```
src/
├── components/   # UI reutilizable
├── sections/     # Secciones de la landing
├── layout/       # Navbar y Footer
├── pages/        # Páginas
├── data/         # Contenido editable
├── hooks/        # Custom hooks
├── lib/          # Utilidades
└── types/        # TypeScript types
```
