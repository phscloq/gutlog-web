# GutLog Landing Page

A beautiful, responsive landing page for the GutLog iOS app - a comprehensive gut health tracking application.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations and transitions
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Performance Optimized**: Built with Next.js 15 and Tailwind CSS v4
- **Accessibility**: WCAG compliant with proper focus states and semantic HTML
- **SEO Ready**: Meta tags, structured data, and optimized content
- **Privacy Policy**: Comprehensive privacy policy page
- **Support Integration**: Direct mailto links to support@gutlog.app

## 🎨 Design System

### Colors
- **Primary Blue**: `#0d78f2` - Main brand color for CTAs and accents
- **Secondary Blue**: `#49709c` - Muted blue for secondary elements
- **Text Colors**: Dark slate (`#0d141c`) for primary text, muted blue for secondary
- **Background**: Light slate (`#f8fafc`) with subtle gradients
- **Success/Error**: Green (`#07883b`) and red-orange (`#e73908`) for status indicators

### Typography
- **Font**: Manrope (Google Fonts) - Modern, readable, and professional
- **Hierarchy**: Clear typography scale from h1 to body text
- **Responsive**: Font sizes that adapt to different screen sizes

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Fonts**: Google Fonts (Manrope)
- **Icons**: Custom SVG icons and Heroicons
- **Deployment**: Ready for Vercel, Netlify, or any static hosting

## 📱 Sections

### 1. Navigation
- Sticky navigation with backdrop blur effect
- Mobile-responsive hamburger menu
- Smooth scrolling to sections
- Links to privacy policy and support

### 2. Hero Section
- Compelling headline with app icon
- Clear value proposition
- Call-to-action buttons
- App screenshot showcase

### 3. Features
- Three key feature highlights
- Interactive hover effects
- Icon-based visual communication
- Responsive grid layout

### 4. App Screenshots
- Grid of 5 app store images
- Hover animations and effects
- Download CTA button
- Responsive image grid

### 5. Footer
- Company information
- Navigation links
- Support contact
- Copyright notice

## 🔒 Privacy & Security

- **Privacy Policy**: Comprehensive legal document covering data collection, usage, and user rights
- **GDPR Compliant**: User rights, data retention, and international transfer policies
- **Health Data Focus**: Special attention to health information privacy
- **Contact Information**: Clear support channels for privacy concerns

## 📱 Mobile Experience

- **Touch-Friendly**: Proper touch targets and spacing
- **Responsive Images**: Optimized image loading and display
- **Mobile Navigation**: Collapsible hamburger menu
- **Performance**: Optimized for mobile networks

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd gutlog-web

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Environment Variables
No environment variables required for basic functionality.

### Customization
1. **Colors**: Update CSS variables in `app/globals.css`
2. **Content**: Modify text content in `app/page.tsx` and `app/privacy/page.tsx`
3. **Images**: Replace images in `public/images/` directory
4. **Branding**: Update app icon and colors to match your brand

## 📁 Project Structure

```
gutlog-web/
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Main landing page
│   └── privacy/
│       └── page.tsx         # Privacy policy page
├── public/
│   ├── icon.png             # App icon (white background)
│   ├── icon-tp.png          # App icon (transparent)
│   └── images/              # App store screenshots
│       ├── 1.png
│       ├── 2.png
│       ├── 3.png
│       ├── 4.png
│       └── 5.png
├── package.json
├── tsconfig.json
└── README.md
```

## 🎯 Best Practices Implemented

### Performance
- **Image Optimization**: Next.js Image component with proper sizing
- **Font Loading**: Font display swap for better performance
- **Code Splitting**: Automatic code splitting with Next.js
- **Lazy Loading**: Images load as needed

### Accessibility
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Focus Management**: Visible focus indicators
- **ARIA Labels**: Screen reader friendly navigation
- **Color Contrast**: WCAG AA compliant color combinations

### SEO
- **Meta Tags**: Comprehensive meta information
- **Structured Data**: Proper HTML semantics
- **Performance**: Core Web Vitals optimization
- **Mobile-First**: Mobile-optimized design

### Security
- **Content Security**: No inline scripts or unsafe content
- **Privacy First**: Clear data handling policies
- **HTTPS Ready**: Secure by default

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Deploy the 'out' directory
```

### Static Hosting
```bash
npm run build
# Deploy the 'out' directory to any static hosting service
```

## 📞 Support

For technical support or questions about the landing page:
- **Email**: support@gutlog.app
- **Issues**: Create an issue in the repository

## 📄 License

This project is proprietary software. All rights reserved.

## 🔄 Updates

- **v1.0.0**: Initial release with landing page and privacy policy
- **Features**: Responsive design, mobile navigation, app screenshots
- **Next**: Potential additions include analytics, A/B testing, and more interactive elements

---

Built with ❤️ for GutLog - Track Your Gut Health
