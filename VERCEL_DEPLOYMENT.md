# Deploying to Vercel

This is a static React application built with Vite, ready for Vercel deployment.

## Quick Deploy

### Option 1: Deploy from GitHub

1. Push this code to your GitHub repository
2. Go to [Vercel](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Vercel will auto-detect the Vite configuration
6. Click "Deploy"

### Option 2: Deploy with Vercel CLI

```bash
# Install Vercel CLI (if not already installed)
npm i -g vercel

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

## Configuration

The project is already configured for Vercel with:

- **Build Command**: `npm run build`
- **Output Directory**: `dist/public`
- **Framework**: Vite
- **SPA Routing**: Configured in `vercel.json`

## Local Development

```bash
# Install dependencies
npm install

# Run development server
cd client && npx vite --host 0.0.0.0 --port 5000

# Build for production
npm run build

# Preview production build
cd client && npx vite preview
```

## Project Structure

```
├── client/               # React application source
│   ├── public/          # Static assets
│   └── src/             # React components and pages
├── attached_assets/      # Images and media
├── dist/                # Build output (gitignored)
│   └── public/          # Vercel deployment folder
├── vercel.json          # Vercel configuration
└── vite.config.ts       # Vite configuration
```

## Features

- ✨ Premium dark theme with purple/blue gradients
- 🎨 Framer Motion animations throughout
- 📱 Fully responsive design
- ⚡ Optimized Vite build
- 🖼️ Beautiful product showcase
- 🎯 Static site (no backend required)

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Shadcn UI Components
- Wouter (routing)

## Build Output

The production build creates optimized assets in `dist/public/`:
- Minified JavaScript and CSS
- Optimized images
- HTML with proper meta tags

## Environment Variables

No environment variables are required for this static site.

## Performance

- Fast build times with Vite
- Tree-shaking for optimal bundle size
- Code splitting for efficient loading
- Optimized images and assets

## Support

For issues or questions about deployment:
1. Check Vercel documentation: https://vercel.com/docs
2. Review Vite deployment guide: https://vitejs.dev/guide/static-deploy.html
