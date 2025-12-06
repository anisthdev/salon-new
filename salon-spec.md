# Salon/Parlor Demo Website - Technical Specification

## Project Overview
A modern, aesthetically pleasing demo website for salons and beauty parlors in India. The website will be used as a pitch tool to acquire clients by showcasing what their online presence could look like.

## Technology Stack
- **Framework**: React 18+
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Internationalization**: i18next or similar
- **Animations**: Framer Motion or React Spring (for physics-based animations)
- **Icons**: Lucide React or Heroicons

## Design Philosophy

### Visual Aesthetic
- **NO generic Bootstrap look** - create a custom, premium salon aesthetic
- **Avoid**: Inter, Roboto, or other overused tech fonts
- **Typography Approach**:
  - Elegant serif or sophisticated sans-serif for headings (e.g., Playfair Display, Cormorant, Crimson Text)
  - Cursive/script fonts for accents and special elements (e.g., Dancing Script, Allura, Great Vibes)
  - Clean, readable font for body text (e.g., Lora, Merriweather, Source Sans 3)
  - Modern typographic scale with proper hierarchy

### Color Palette
Create a sophisticated, spa-like palette suitable for beauty/wellness:
- Soft, muted tones (rose gold, champagne, soft lavender, sage green, warm beige)
- Avoid harsh, saturated colors
- Ensure good contrast for accessibility
- Define separate palettes for light and dark modes
- Suggested: Warm neutrals with one accent color (dusty rose or soft gold)

### Animations
- Subtle, physics-based animations using Framer Motion
- Scroll-triggered fade-ins and slide-ins
- Smooth parallax effects for hero section
- Hover effects on cards and buttons with spring animations
- Page transitions
- Gallery image hover effects
- Keep animations smooth (60fps target) and non-intrusive

## Core Features & Components

### 1. Configuration File
Create a `salonConfig.js` (or JSON) file containing ALL customizable content:

```javascript
{
  "businessInfo": {
    "name": "Elegance Beauty Lounge",
    "tagline": "Where Beauty Meets Artistry",
    "phone": "+91 98765 43210",
    "whatsappNumber": "919876543210",
    "email": "hello@elegancebeauty.com",
    "address": "123 Park Street, Kolkata, West Bengal 700016"
  },
  "location": {
    "lat": 22.5726,
    "lng": 88.3639,
    "googleMapsUrl": "https://maps.google.com/..."
  },
  "workingHours": [
    { "days": "Monday - Saturday", "hours": "10:00 AM - 8:00 PM" },
    { "days": "Sunday", "hours": "11:00 AM - 6:00 PM" }
  ],
  "services": [...],
  "testimonials": [...],
  "gallery": [...],
  "socialLinks": {...}
}
```

### 2. Header/Navigation
- Sticky header with smooth scroll behavior
- Logo (text-based or placeholder SVG)
- Navigation links: Home, Services, Gallery, Contact
- Language toggle (EN/HI)
- Dark mode toggle (sun/moon icon)
- Mobile hamburger menu with smooth slide-in animation
- WhatsApp floating action button (bottom-right, mobile-first)

### 3. Hero Section
- Full viewport height on desktop, optimized for mobile
- High-quality hero image with overlay
- Salon name in elegant typography
- Tagline in cursive font
- Two prominent CTAs:
  - "Book on WhatsApp" (primary)
  - "View Services" (secondary)
- Subtle parallax effect on scroll (desktop only)
- Animated entrance (fade + slide up)

### 4. Services Section
- Grid layout (1 col mobile, 2-3 cols desktop)
- Display 6-8 key services:
  - Haircut & Styling
  - Hair Coloring
  - Bridal Makeup
  - Facial Treatments
  - Manicure & Pedicure
  - Hair Spa & Treatment
  - Threading & Waxing
  - Skin Care
- Each service card:
  - Icon or small image
  - Service name
  - Brief description (1-2 lines)
  - Starting price or "From ₹XXX"
  - Hover animation (lift + shadow)
- "View All Services & Pricing" link/button → Links to `/services` page (NOT implemented, just show coming soon or link to WhatsApp)

### 5. Gallery Section
- Masonry or grid layout (responsive)
- 6-8 high-quality images showing:
  - Salon interior
  - Styling work
  - Makeup results
  - Happy customers (stock images)
- Lightbox functionality on click
- Smooth loading animations (stagger effect)
- Images should be from Unsplash or similar (salon/beauty themed)

### 6. Working Hours
- Clean, card-based display
- Visual calendar icon
- Clear day/time breakdown
- Highlight current day (optional)
- Mobile-friendly layout

### 7. Testimonials
- Carousel or slider (3-4 testimonials)
- Each testimonial:
  - Customer photo (placeholder avatar)
  - Customer name
  - Star rating (5 stars)
  - Quote/review text
  - Service taken (optional)
- Auto-play with pause on hover
- Navigation dots/arrows
- Smooth transitions

### 8. Location & Contact
- Embedded Google Maps (iframe or Google Maps Embed API)
- Address display
- "Get Directions" CTA button (opens Google Maps app/website)
- WhatsApp CTA: "Message Us on WhatsApp"
- Phone number (click to call on mobile)
- Email address
- Social media icons (Instagram, Facebook - configurable)

### 9. Footer
- Business name and brief description
- Quick links (Home, Services, Gallery)
- Contact information
- Social media links
- Copyright notice
- "Made with ♥ in India" or similar

### 10. WhatsApp Integration
- Pre-filled message template:
  - "Hi! I would like to book an appointment at [Salon Name]. Can you help me with the availability?"
- Two prominent CTAs:
  - Hero section button
  - Contact section button
- Floating WhatsApp button (mobile-first, bottom-right)
- Use WhatsApp deep link format: `https://wa.me/919876543210?text=Your+message`

### 11. Dark Mode
- Toggle in header (smooth transition)
- Persist preference in localStorage
- Adjust color palette for dark mode:
  - Darker backgrounds (not pure black - use #0f0f0f or similar)
  - Lighter text
  - Adjust accent colors for visibility
  - Ensure images have proper contrast

### 12. Internationalization (i18n)
- Support English and Hindi
- Language switcher in header (EN | HI)
- Persist language preference
- Translate all UI text, service names, testimonials
- Use proper Hindi script (Devanagari)
- RTL not needed (Hindi is LTR)
- Numbers and currency (₹) remain the same

## Content Requirements

### Sample Services Data
```javascript
services: [
  {
    id: 1,
    name: { en: "Haircut & Styling", hi: "हेयरकट और स्टाइलिंग" },
    description: { 
      en: "Professional cuts and styling for all hair types",
      hi: "सभी प्रकार के बालों के लिए पेशेवर कटिंग और स्टाइलिंग"
    },
    price: "₹500",
    icon: "scissors"
  },
  // ... more services
]
```

### Sample Testimonials
```javascript
testimonials: [
  {
    id: 1,
    name: "Priya Sharma",
    rating: 5,
    text: {
      en: "Absolutely loved my bridal makeup! The team was professional and made me feel like a princess.",
      hi: "मेरा ब्राइडल मेकअप बहुत पसंद आया! टीम पेशेवर थी और मुझे राजकुमारी की तरह महसूस कराया।"
    },
    service: { en: "Bridal Makeup", hi: "ब्राइडल मेकअप" },
    avatar: "https://i.pravatar.cc/150?img=1"
  },
  // ... more testimonials
]
```

### Image Sources
Use Unsplash API or direct URLs for:
- Hero background (salon interior/beauty themed)
- Gallery images (6-8 images):
  - Salon interior shots
  - Hair styling results
  - Makeup applications
  - Nail art
  - Spa/relaxation scenes
- Ensure high resolution (1920px+ width for hero)

## Technical Requirements

### Performance
- Lazy load images (especially gallery)
- Optimize images (use WebP with fallbacks)
- Code splitting where appropriate
- Lighthouse score: 90+ on all metrics

### Responsiveness
- **Mobile-first approach**
- Breakpoints:
  - Mobile: 320px - 640px
  - Tablet: 641px - 1024px
  - Desktop: 1025px+
- Touch-friendly (44px minimum touch targets)
- Test on various devices

### Accessibility
- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- Focus indicators
- Alt text for all images
- Color contrast compliance (WCAG AA)

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- No IE11 support needed

## Project Structure
```
salon-demo/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── Gallery.jsx
│   │   ├── WorkingHours.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Location.jsx
│   │   ├── Footer.jsx
│   │   └── WhatsAppButton.jsx
│   ├── config/
│   │   └── salonConfig.js
│   ├── i18n/
│   │   ├── en.json
│   │   └── hi.json
│   ├── hooks/
│   │   ├── useDarkMode.js
│   │   └── useLanguage.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
│   └── logo.svg (placeholder)
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## Animation Guidelines
- **Hero**: Fade in + slide up (0.8s ease-out)
- **Services Cards**: Stagger animation on scroll (0.1s delay between cards)
- **Gallery**: Masonry layout with stagger (0.15s delay)
- **Testimonial Carousel**: Smooth slide with spring physics
- **Hover Effects**: Lift + shadow with spring bounce
- **WhatsApp Button**: Subtle pulse animation
- **Page Load**: Progressive reveal of sections

## Deployment Notes
- Build command: `npm run build`
- Output: `dist/` folder
- Can be deployed to: Netlify, Vercel, GitHub Pages
- Environment variables (if needed) for API keys

## Future Enhancements (Not in MVP)
- Services detail page with full pricing
- Online booking system
- Admin panel for content management
- Blog section
- Before/After gallery slider
- Customer reviews integration (Google Reviews)

## Success Metrics
- Fast load time (<3s on 3G)
- High Lighthouse scores
- Mobile-friendly test pass
- Smooth 60fps animations
- Easy to customize for different salons
- Professional, non-generic appearance

## Deliverables
1. Fully functional React app
2. salonConfig.js with all customizable content
3. README with:
   - Setup instructions
   - How to customize for different salons
   - Deployment guide
4. Dark mode working
5. English and Hindi translations complete
6. Responsive on all devices
7. WhatsApp integration working

## Design Inspiration Keywords
- Luxury spa aesthetic
- Modern minimalist salon
- Soft, feminine elegance
- Professional beauty services
- Warm, welcoming atmosphere
- Premium beauty experience

## Final Notes
- Prioritize polish over feature creep
- Every animation should serve a purpose
- Keep the codebase clean and well-commented
- Make customization as simple as editing one config file
- The demo should make salon owners say "I want this!"
