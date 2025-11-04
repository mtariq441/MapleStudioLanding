# Maple Sugar Studio - Static Landing Page

## Overview

Maple Sugar Studio is a premium, dark-themed static landing page showcasing handmade nature-inspired artwork by artist Megan Reiniger. The application is built as a single-page React application using Vite, featuring an elegant design system inspired by high-end art gallery websites and premium eCommerce platforms. The site presents artwork collections, artist biography, and contact information through animated, visually rich components.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server, configured for fast HMR and optimized production builds
- **Single Page Application (SPA)** architecture with client-side routing via Wouter
- Output directory: `dist/public` for static deployment

**UI Component System**
- **Radix UI** primitives provide accessible, unstyled base components for dialogs, dropdowns, forms, and interactive elements
- **shadcn/ui** design system with customized "new-york" style variant
- **Tailwind CSS** for utility-first styling with custom design tokens
- **Framer Motion** for declarative animations and scroll-based effects

**Styling Strategy**
- Custom color palette emphasizing cream/off-white backgrounds (#FAF7F2), forest greens (#2D5016), and gold accents (#D4AF37)
- CSS variables for theming with light/dark mode support (currently enforced dark mode)
- Elevation system using opacity-based overlays (`--elevate-1`, `--elevate-2`)
- Typography hierarchy using serif fonts (Playfair Display, Cormorant Garamond) for headings and sans-serif (Poppins, Inter) for body text

**Component Architecture**
- Page components: Single `Home.tsx` page composing multiple feature sections
- Feature sections: Modular components (HeroSection, ProductSlider, AboutSection, BiographySection, ContactSection, FeaturedProducts)
- Reusable UI primitives in `components/ui/` directory
- Example components in `components/examples/` demonstrating usage patterns

**State Management**
- Local component state with React hooks (useState, useRef)
- Form state managed via React Hook Form with Zod validation (@hookform/resolvers)
- TanStack Query (@tanstack/react-query) included for future data fetching needs

**Animation & Interaction**
- Scroll-triggered animations using Framer Motion's `useInView` hook
- Parallax effects with `useScroll` and `useTransform`
- Entrance animations with configurable delays for staggered reveals
- Hover and active states using Tailwind utility classes

**Asset Management**
- Static images stored in `attached_assets/` directory
- Path alias `@assets` configured in Vite for clean imports
- Generated placeholder images for artwork showcases

### Deployment Architecture

**Static Hosting Configuration**
- Configured for Vercel deployment with auto-detection of Vite framework
- SPA routing handled via `vercel.json` rewrites (all routes → `/index.html`)
- Build command: `npm run build` (Vite build + server bundling with esbuild)
- Framework detection: Explicit `"framework": "vite"` in vercel.json

**Build Process**
- Client build: Vite bundles React application to `dist/public`
- Server build: esbuild bundles Express server to `dist/` (currently minimal server setup)
- Production optimization: Tree-shaking, minification, code-splitting enabled by Vite

### Development Environment

**TypeScript Configuration**
- Strict mode enabled for type safety
- Path aliases: `@/` → `client/src/`, `@shared/` → `shared/`, `@assets/` → `attached_assets/`
- Module resolution: "bundler" for Vite compatibility
- Build output suppressed (noEmit: true) as Vite handles transpilation

**Development Tooling**
- Replit-specific plugins: Runtime error overlay, Cartographer, dev banner (dev only)
- Hot module replacement (HMR) for instant feedback
- PostCSS with Tailwind and Autoprefixer for CSS processing

**File Structure**
- `client/` - Frontend application code
  - `src/components/` - React components (feature sections, UI primitives, examples)
  - `src/pages/` - Page components and routing
  - `src/hooks/` - Custom React hooks
  - `src/lib/` - Utility functions
- `attached_assets/` - Static assets (images, fonts)
- `shared/` - Shared types/utilities between client and server
- `server/` - Express backend (minimal implementation)

## External Dependencies

### UI & Component Libraries
- **@radix-ui/*** - Comprehensive suite of accessible UI primitives (accordion, dialog, dropdown, select, tabs, tooltip, etc.)
- **shadcn/ui** - Opinionated component library built on Radix UI
- **class-variance-authority** - Type-safe variant APIs for component styling
- **clsx** + **tailwind-merge** - Conditional className utilities

### Animation & Interaction
- **framer-motion** - Declarative animation library for React
- **embla-carousel-react** - Carousel/slider functionality

### Form Management
- **react-hook-form** - Performant form state management
- **@hookform/resolvers** - Validation resolver integrations
- **zod** - Schema validation (via drizzle-zod)

### Data Management (Prepared but Unused)
- **@tanstack/react-query** - Async state management for data fetching
- **drizzle-orm** + **drizzle-zod** - Type-safe ORM with schema validation
- **@neondatabase/serverless** - Serverless Postgres driver (Note: Database not currently implemented but infrastructure present)

### Development Tools
- **@replit/vite-plugin-*** - Replit IDE integration plugins
- **wouter** - Minimalist client-side router (1.2kB alternative to React Router)
- **lucide-react** - Icon library
- **react-icons** - Additional icon sets (social media icons)

### Build & Type Safety
- **TypeScript** - Static type checking
- **Vite** - Modern build tool and dev server
- **esbuild** - Fast JavaScript bundler for server code
- **PostCSS** + **Tailwind CSS** - CSS processing and utility framework

### Backend Dependencies (Minimal Usage)
- **express** - Web server framework (basic setup, no API routes implemented)
- **connect-pg-simple** - PostgreSQL session store (prepared but unused)
- **date-fns** - Date manipulation utilities

### Design System Configuration
- Custom Tailwind theme extends with design tokens for colors, border radius, shadows
- CSS custom properties for theme-aware styling
- Component-specific styling via CVA (class-variance-authority)