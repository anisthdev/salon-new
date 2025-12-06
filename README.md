# Elegance Beauty Lounge - Salon Demo Website

A modern, fully-featured demo website for salons and beauty parlors built with React, Vite, and Tailwind CSS. This project showcases a premium beauty salon experience with smooth animations, dark mode, multi-language support, and mobile-first responsive design.

## Features

### ✨ Core Features
- **Header/Navigation**: Sticky header with mobile hamburger menu, language toggle (EN/HI), and dark mode toggle
- **Hero Section**: Full-viewport hero with animated entrance, CTA buttons, and scroll indicator
- **Services**: Responsive grid layout (1/2/3 columns) displaying 8 beauty services with icons and pricing
- **Gallery**: Masonry-style gallery with interactive lightbox for viewing high-quality images
- **Working Hours**: Clean card-based display of salon operating hours
- **Testimonials**: Auto-playing carousel slider with customer reviews and ratings
- **Location & Contact**: Embedded Google Maps, address, phone, email with WhatsApp integration
- **Footer**: Business info, quick links, social media connections
- **WhatsApp Button**: Floating action button in bottom-right corner with pulsing animation

### 🎨 Design Features
- **Custom Color Palette**: Rose gold, cream, sage green, and warm neutrals for luxury spa aesthetic
- **Elegant Typography**: Playfair Display (headings), Lora (body), Dancing Script (accents)
- **Smooth Animations**: Physics-based animations using Framer Motion with staggered effects
- **Dark Mode**: Toggle with localStorage persistence for user preference
- **Responsive Design**: Mobile-first approach with breakpoints for tablet and desktop
- **Accessibility**: Semantic HTML, keyboard navigation, ARIA labels, proper color contrast

### 🌍 Internationalization
- **English & Hindi Support**: Full translations for all content
- **Language Toggle**: Easy EN/HI switch with localStorage persistence
- **Proper Devanagari Script**: Hindi translations use correct script and formatting

## Tech Stack

- **Framework**: React 18+
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4 with custom color palette
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Internationalization**: i18next + react-i18next
- **Package Manager**: npm

## Quick Start

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
The app will be available at `http://localhost:5174`

### Production Build
```bash
npm run build
npm run preview
```

## Customization

All salon content is in **`src/config/salonConfig.js`**. Simply edit this file to customize:

- Business name, phone, email, address
- Services with descriptions, prices, and icons
- Customer testimonials and ratings
- Gallery images
- Working hours
- Social media links

## Project Structure

```
salon-new/
├── src/
│   ├── components/        # React components
│   ├── config/           # salonConfig.js
│   ├── hooks/            # useDarkMode, useLanguage
│   ├── i18n/             # Translations (en.json, hi.json)
│   ├── App.jsx
│   └── main.jsx
├── dist/                 # Built files (generated)
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## Key Features Explained

### Dark Mode
- Toggle sun/moon icon in header
- Automatically saved to localStorage
- All components support dark mode

### Language Support
- Toggle EN/HI in header
- Full translations in both English and Hindi
- Preference saved to localStorage

### Responsive Design
- Mobile: 320px - 640px (full-width, stacked)
- Tablet: 641px - 1024px (2-column layout)
- Desktop: 1025px+ (3-column layout)

### WhatsApp Integration
- Floating button in bottom-right
- Pre-filled messages with salon name
- Mobile and desktop support

### Animations
All animations powered by Framer Motion with:
- Smooth transitions
- Scroll-triggered effects
- Hover interactions
- Spring physics

## Customization Examples

### Change Salon Name
Edit `src/config/salonConfig.js`:
```javascript
businessInfo: {
  name: "Your Salon Name",
  tagline: "Your tagline",
  // ... rest of config
}
```

### Add a Service
Add to `services` array:
```javascript
{
  id: 9,
  name: { en: "New Service", hi: "नई सेवा" },
  description: { en: "Description", hi: "विवरण" },
  price: "From ₹XXX",
  icon: "IconName",  // Lucide icon
}
```

### Update Gallery
Edit `gallery` array with Unsplash URLs:
```javascript
{
  id: 1,
  url: "https://images.unsplash.com/...",
  alt: "Description",
  category: "Interior",
}
```

## Deployment

### Netlify
1. Connect GitHub repo
2. Build command: `npm run build`
3. Publish directory: `dist/`

### Vercel
1. Import project from GitHub
2. Vite is auto-detected
3. Deploy instantly

### GitHub Pages
```bash
npm run deploy
```
(After adding gh-pages to package.json)

## Browser Support

- Chrome, Firefox, Safari, Edge (latest versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- CSS: ~6KB (gzipped)
- Fast loading with Vite
- Optimized animations
- Image caching via CDN

## License

MIT License - Open source and free to use

## Made with ♥ in India

Perfect for beauty salons and wellness centers in India. Fully customizable for any business!
