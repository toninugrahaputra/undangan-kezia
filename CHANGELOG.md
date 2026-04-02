# Changelog

All notable changes to this project will be documented in this file.

## [2.0.0] - 2026-04-01

### Added 🎉
- **Confetti Animation** - Celebratory confetti effect saat klik "Buka Undangan"
- **Text Reveal Animations** - Letter-by-letter text reveal di Hero section
- **Parallax Background Effects** - Multi-layer floating elements dengan depth
- **Couple Story Section** - Baru! Section personal untuk groom & bride dengan:
  - Scroll-triggered photo animations (slide from left/right)
  - Personal bio cards
  - Interactive hobby badges
  - Our story card dengan floating decorations
- **Animation Utilities** - Reusable animation variants di `src/utils/animationVariants.jsx`
- **Accessibility Support** - Reduced motion media query untuk user preferences

### Changed 🔄
- Updated data structure untuk mendukung bio, hobbies, dan story fields
- Enhanced Hero section dengan parallax layers (hearts, circles, sparkles)
- Improved scroll animations dengan stagger effects

### Dependencies 📦
- Added `canvas-confetti` untuk confetti animations

### Technical 🛠️
- Created `CoupleSection` component dengan advanced Framer Motion animations
- Implemented scroll-triggered transitions menggunakan `useScroll` dan `useTransform`
- Added viewport-based animations dengan `once: true` untuk performance
- Optimized untuk 60fps pada mobile devices

## [1.0.0] - Initial Release

### Features
- Modern minimalist wedding invitation design
- Animated cover dengan open button
- Hero section dengan couple names
- Countdown timer
- Quote section
- Event details (pemberkatan & resepsi)
- Photo gallery dengan lightbox
- RSVP form dengan WhatsApp integration
- Google Maps integration
- Music player
- Responsive design
- Framer Motion basic animations
