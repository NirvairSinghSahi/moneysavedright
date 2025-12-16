# MSR Tax and Insurance - React Website

A premium React website for MSR Tax and Insurance built with React, React Router, and Vite.

## Features

- **React 18** with modern hooks
- **React Router** for navigation
- **Vite** for fast development and building
- All original functionality preserved
- Component-based architecture
- Responsive design
- Mobile-first approach

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
msr-tax-insurance-react/
├── src/
│   ├── components/      # Reusable components
│   │   ├── Layout.jsx
│   │   ├── Navigation.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── ServiceTicker.jsx
│   │   └── MobileActionBar.jsx
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── TaxServices.jsx
│   │   ├── BusinessServices.jsx
│   │   ├── CRAAudits.jsx
│   │   ├── InsuranceServices.jsx
│   │   ├── Contact.jsx
│   │   ├── About.jsx
│   │   ├── Resources.jsx
│   │   ├── PrivacyPolicy.jsx
│   │   ├── TermsOfService.jsx
│   │   └── Disclaimers.jsx
│   ├── hooks/          # Custom React hooks
│   │   └── useReveal.js
│   ├── utils/          # Utility functions
│   │   └── vcard.js
│   ├── config.js       # Configuration
│   ├── App.jsx         # Main app component
│   └── main.jsx        # Entry point
├── public/
│   └── assets/         # Static assets (images, etc.)
└── package.json
```

## Assets

Copy your assets from the original project:
- `logo.jpeg` → `public/assets/images/logo.jpeg`
- `hero_section.webp` → `public/assets/images/hero_section.webp`
- CSS files → `src/assets/css/`

## Features Preserved

- ✅ Phone integration (`tel:` links)
- ✅ vCard download functionality
- ✅ Scroll reveal animations
- ✅ Service ticker
- ✅ Mobile action bar
- ✅ Form validation
- ✅ All original styling
- ✅ Responsive design

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)

