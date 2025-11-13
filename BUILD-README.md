# Narasapur Lace Website - Build & Deployment Guide

## Project Overview

This is a modern, responsive 3-page website for narasapurlace.com built with React, TypeScript, Vite, and Tailwind CSS. The site showcases Narasapur's traditional crochet lace artistry and is designed to be WordPress-friendly for future integration.

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **React Router (HashRouter)** - Client-side routing
- **shadcn/ui** - UI components

## Pages Included

1. **Home (/)** - Hero, history, craft process, artisans section, gallery, CTAs
2. **Products (/products)** - Product catalog with filtering, sorting, and custom order form
3. **Contact (/contact)** - Contact form, business info, map placeholder, social links

## Installation & Development

### Prerequisites
- Node.js 18+ and npm (or use nvm: https://github.com/nvm-sh/nvm)

### Setup Steps

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# The site will be available at http://localhost:8080
```

## Building for Production

### Standard Build

```bash
# Build the project
npm run build

# Preview the built site locally
npm run preview
```

The built files will be in the `dist/` folder, ready for deployment.

### Build Output Structure

```
dist/
├── index.html          # Main HTML file
├── assets/             # Hashed CSS and JS files
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── ...
└── ...
```

## WordPress Integration

### Setting the Base Path

If deploying to a WordPress subfolder, update `vite.config.ts` before building:

```typescript
// vite.config.ts
export default defineConfig({
  base: '/wp-content/uploads/narasapurlace/',  // Change this path
  // ... rest of config
})
```

**Common base path options:**
- Root deployment: `base: '/'`
- WordPress subfolder: `base: '/wp-content/uploads/narasapurlace/'`
- Custom subdirectory: `base: '/lace/'`

After changing the base, rebuild:
```bash
npm run build
```

### WordPress-Friendly Features

1. **HashRouter** - Uses URL hash routing (e.g., `/#/products`) to avoid server configuration
2. **Semantic HTML** - Proper HTML5 elements (header, nav, main, section, footer)
3. **WP Comment Markers** - Header and Footer components have `/* WP-HEADER-START */` and `/* WP-FOOTER-END */` comments
4. **Extractable Sections** - Components are structured for easy extraction into WP theme files

### Converting to WordPress Theme

1. **Extract Header/Footer:**
   - Copy content from `src/components/Header.tsx` to `header.php`
   - Copy content from `src/components/Footer.tsx` to `footer.php`
   - Convert React/JSX to PHP/HTML

2. **Page Templates:**
   - Use the rendered HTML from `dist/index.html` as a reference
   - Create WP page templates using the same structure
   - Replace static content with WordPress functions (e.g., `<?php the_content(); ?>`)

3. **Assets:**
   - Upload built assets to WordPress theme directory
   - Enqueue scripts and styles in `functions.php`:
   ```php
   wp_enqueue_style('main-styles', get_template_directory_uri() . '/assets/index-[hash].css');
   wp_enqueue_script('main-scripts', get_template_directory_uri() . '/assets/index-[hash].js', array(), null, true);
   ```

4. **SEO Meta Tags:**
   - Add proper title tags using WordPress SEO functions
   - Include meta descriptions for each page
   - Consider using Yoast SEO or Rank Math plugins

### Handling Hashed Filenames

Option 1: **Use find/replace** to update asset paths in `functions.php` after each build

Option 2: **Disable hashing** (uncomment in `vite.config.ts`):
```typescript
build: {
  rollupOptions: {
    output: {
      entryFileNames: 'assets/[name].js',
      chunkFileNames: 'assets/[name].js',
      assetFileNames: 'assets/[name].[ext]'
    }
  }
}
```

## Deployment Options

### Static Hosting (Netlify, Vercel, etc.)

1. Build the project: `npm run build`
2. Upload the `dist/` folder
3. Configure redirects for HashRouter (usually not needed)

### WordPress Integration

1. Build with appropriate `base` path
2. Upload `dist/` contents to WordPress directory
3. Create WP template files referencing the built assets
4. Or embed the `dist/index.html` in a WordPress page template

### Traditional Server (Apache/Nginx)

1. Build the project
2. Upload `dist/` to server
3. No special server configuration needed (HashRouter handles routing)

## SEO Considerations

- All pages include semantic HTML (h1, h2, sections)
- Alt text placeholders for images
- Meta descriptions should be added to `index.html` or via WP SEO plugin
- Consider adding JSON-LD structured data for products and organization

## Customization

### Colors & Branding
Edit `src/index.css` to change the design system colors (all in HSL format):
```css
--primary: 28 40% 45%;        /* Main brand color */
--accent: 35 55% 55%;         /* Accent color */
--heritage-gold: 40 60% 50%;  /* Custom colors */
```

### Content
- Pages: `src/pages/Index.tsx`, `Products.tsx`, `Contact.tsx`
- Components: `src/components/Header.tsx`, `Footer.tsx`, `ProductCard.tsx`

## Support & Documentation

- [Vite Documentation](https://vitejs.dev/)
- [React Router Documentation](https://reactrouter.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [shadcn/ui Components](https://ui.shadcn.com/)

## License & Credits

© 2024 Narasapur Lace. Built with React, TypeScript, Vite, and Tailwind CSS.

**Cultural Heritage Note:** This website honors the traditional craft of Narasapur crochet lace and the skilled artisans who preserve this beautiful art form.
