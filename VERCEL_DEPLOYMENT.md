# Vercel Deployment Guide

## Overview
This portfolio is a **static single-page application** built with:
- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js with React Three Fiber
- **Animations**: Framer Motion
- **Backend**: Express.js (Node.js) - only used in development

## Deployment Steps

### 1. Prerequisites
- Vercel account
- GitHub repository (recommended) or Vercel CLI

### 2. Deploy to Vercel

#### Option A: Via GitHub Integration (Recommended)
1. Push your code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect settings from `vercel.json`
6. Click "Deploy"
7. Done! Your site will be live at `https://your-project.vercel.app`

#### Option B: Via Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy (first time - will prompt for configuration)
vercel

# Deploy to production
vercel --prod
```

### 3. Custom Domain (Optional)
1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Update DNS records as instructed by Vercel

## Project Structure

```
/
├── client/           # Frontend React app
│   ├── public/       # Static assets
│   └── src/
│       ├── components/ui/  # Shadcn UI components
│       ├── pages/
│       │   └── Home.tsx    # Main portfolio page
│       └── main.tsx
├── server/           # Backend (dev only, not deployed)
│   ├── index.ts
│   └── routes.ts
├── dist/             # Build output (auto-generated)
│   └── public/       # Frontend build (deployed to Vercel)
└── vercel.json       # Vercel configuration
```

## Features

### 3D & Animations ✨
- ✅ **Three.js Particle Background**: Interactive 3D rotating sphere with 5000 particles in the hero section
- ✅ **3D Tilt Effects**: All project cards have mouse-reactive 3D tilt using Framer Motion transforms
- ✅ **Scroll Animations**: Cards slide up smoothly as you scroll with staggered reveals
- ✅ **Smooth Transitions**: Page elements animate in with spring physics
- ✅ **Hover Effects**: Cards scale and elevate on hover with backdrop blur

### Content 📄
- ✅ **Hero Section**: Animated introduction with call-to-action
- ✅ **42 Curriculum Projects** (7 projects):
  - Libft
  - ft_printf  
  - Get_Next_Line
  - Minitalk
  - Minishell
  - Philosophers
  - Cub3D
- ✅ **Commercial Web Apps** (2 projects):
  - TamudaStay  
  - Parapharmacy
- ✅ **Social Media Links**:
  - GitHub: [github.com/albelaiz](https://github.com/albelaiz)
  - LinkedIn: [linkedin.com/in/alae-belaizi](https://www.linkedin.com/in/alae-belaizi/)
  - Facebook: [facebook.com/alae.bilaizi.5](https://www.facebook.com/alae.bilaizi.5)
  - Instagram: [@alaebilaizi](https://www.instagram.com/alaebilaizi/)
  - Discord: 0x4L43
- ✅ **Contact Section**: Email contact with animated button

### Design Features 🎨
- Glassmorphism UI with backdrop blur
- Terminal-style project cards with Mac window chrome
- Floating abstract background gradients
- Scroll progress indicator
- Responsive design (mobile-first)
- Dark mode optimized

## Build Configuration

The build process:
1. Runs `npm install` to install dependencies
2. Executes `npm run build` which:
   - Uses Vite to build the React app
   - Uses ESBuild to bundle the server (not deployed)
   - Outputs static files to `dist/public/`
3. Vercel serves the static files from `dist/public/`

## Local Development

```bash
# Install dependencies
npm install

# Run development server (with hot reload)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm start
```

The dev server runs at `http://localhost:5000`

## Troubleshooting

### Build Fails on Vercel
**Solution 1**: Check Node.js version
- Vercel uses Node.js 18.x by default
- If you need a different version, add to `package.json`:
  ```json
  "engines": {
    "node": "18.x"
  }
  ```

**Solution 2**: Clear build cache
```bash
vercel --force
```

**Solution 3**: Check build logs
- Go to Vercel Dashboard → Your Project → Deployments
- Click on the failed deployment
- Review the build logs for errors

### Static Files Not Loading
- Ensure `dist/public` contains `index.html` and `assets/` folder
- Check browser console for 404 errors
- Verify `outputDirectory` in `vercel.json` is set to `dist/public`

### 3D Animations Not Working
- Check browser console for WebGL errors
- Ensure Three.js packages are in `dependencies` (not `devDependencies`)
- Some browsers/devices may not support WebGL

### Routing Issues (404 on Refresh)
- The `vercel.json` configuration handles SPA routing
- All routes redirect to `/index.html` for client-side routing
- If issues persist, check the `routes` section in `vercel.json`

## Performance Optimization

Vercel automatically provides:
- ✅ Global CDN distribution
- ✅ Automatic HTTPS
- ✅ Gzip/Brotli compression
- ✅ Asset caching (31536000s for `/assets/*`)
- ✅ Smart preloading

## Environment-Specific Settings

The app automatically detects the environment:
- **Development** (`npm run dev`): Uses Vite dev server with HMR
- **Production** (`vercel --prod`): Serves optimized static build

## Need API Routes?

If you need to add API functionality in the future:

1. Create `api/` directory in project root
2. Add serverless functions (e.g., `api/contact.ts`)
3. Update `vercel.json` to include API routes
4. Restart deployment

Example serverless function:
```typescript
// api/contact.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  res.status(200).json({ message: 'API endpoint' });
}
```

## Support & Resources

- 📚 [Vercel Documentation](https://vercel.com/docs)
- 🎨 [Three.js Documentation](https://threejs.org/docs/)
- ⚡ [Vite Documentation](https://vitejs.dev/)
- 🎭 [Framer Motion Documentation](https://www.framer.com/motion/)

## Deployment Checklist

Before deploying, ensure:
- [ ] All dependencies are in `package.json`
- [ ] `npm run build` succeeds locally
- [ ] Social media links are correct
- [ ] Project URLs are updated
- [ ] Email contact is correct
- [ ] Custom domain DNS is configured (if applicable)

---

**Current Status**: ✅ Ready for deployment to Vercel
