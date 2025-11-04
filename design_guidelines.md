# Maple Sugar Studio - Premium eCommerce Landing Page Design Guidelines

## Design Approach

**Reference-Based Approach**: Drawing inspiration from premium art gallery websites and high-end eCommerce platforms like Etsy's curated collections and Shopify's luxury themes. The design emphasizes visual storytelling, generous whitespace, and elegant product presentation that honors handmade artistry.

**Color Palette** (User-Specified):
- Primary: Cream/off-white backgrounds (#FAF7F2)
- Accent: Forest green (#2D5016, #4A7C3B)
- Metallic: Gold accents (#D4AF37, #C9A961)
- Supporting: Soft sage, warm beige tones

---

## Typography Hierarchy

**Font Selection**: 
- Headlines: Playfair Display or Cormorant Garamond (serif, elegant)
- Body: Poppins or Inter (clean, readable)
- Accents: Italicized serif for artistic quotes

**Scale**:
- Hero Title: text-6xl to text-7xl (desktop), text-4xl (mobile)
- Section Headers: text-4xl to text-5xl
- Product Names: text-2xl
- Body Text: text-lg for readability
- Form Labels: text-sm uppercase tracking-wide

---

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 8, 12, 16, 20, 24, and 32 for consistent rhythm
- Section padding: py-24 (desktop), py-16 (mobile)
- Container max-width: max-w-7xl with px-6
- Component spacing: gap-8 for grids, space-y-12 for vertical stacks

**Grid Structure**:
- Hero: Full-width with centered content overlay
- Products: 3-column grid (lg), 2-column (md), 1-column (mobile)
- About/Bio: Asymmetric 40/60 split with image and text
- Contact: 2-column layout (form + information)

---

## Section-Specific Guidelines

### Hero Section
**Layout**: Full-viewport height (min-h-screen) with background image showcasing featured artwork
- Layered composition: Background image (60% opacity overlay) + centered content
- Animated product slider positioned in lower third (3-5 artwork thumbnails)
- CTA buttons with blurred backdrop (backdrop-blur-md bg-white/20)

**Image Requirements**: 
- Primary hero background: High-resolution nature-inspired artwork (1920x1080+)
- Slider thumbnails: Square format (600x600px) of Hummingbird Garden, Sunny Poppies, and 3 other featured pieces

### About Section
**Layout**: Full-width container with max-w-4xl centered content
- Large decorative quote mark or flourish element
- Philosophy text in larger body copy (text-xl)
- Staggered fade-in animation for text blocks

### Featured Products Carousel
**Layout**: Horizontal scrolling cards with peek of next/previous items
- Card design: Artwork image (aspect-ratio-square), product name, price tag, "Shop Now" button
- Hover effect: Subtle scale (scale-105) and shadow elevation
- Navigation: Elegant arrow buttons + dot indicators

**Image Requirements**: 
- Product images: Square format (800x800px minimum)
- Include 8-12 featured artworks with consistent lighting and backgrounds

### Biography Section
**Layout**: Split layout with Megan's portrait and bio text
- Portrait: Rounded or organic shape (rounded-2xl), positioned left with shadow
- Text: Right-aligned with generous line-height (leading-relaxed)
- Include subtle parallax scroll effect on portrait

**Image Requirements**:
- Portrait photo: Professional headshot or artist-at-work (600x800px, vertical orientation)
- Background: Soft gradient or subtle texture

### Contact Section
**Layout**: Two-column with form (60%) and contact info/social links (40%)
- Form inputs: Elegant borders, ample padding (p-4), focus states with gold accent
- Submit button: Full-width, primary gold color with hover state
- Footer: Social icons, copyright, navigation links in footer bar

---

## Component Library

### Buttons
- Primary: Gold background, cream text, px-8 py-4, rounded-full
- Secondary: Transparent with gold border, backdrop-blur on images
- Icon buttons: Circular, minimal design for carousel navigation

### Cards (Product)
- Shadow: shadow-lg on hover, shadow-md default
- Padding: p-6 for content area
- Border: Optional subtle gold border (border border-gold/20)
- Image container: Aspect ratio maintained, overflow-hidden

### Form Elements
- Inputs: border-2, rounded-lg, px-4 py-3
- Focus state: border-green with ring-2 ring-green/20
- Labels: Uppercase, tracking-wide, text-sm

### Navigation
- Fixed header on scroll with backdrop-blur
- Logo left, minimal menu items right
- Mobile: Hamburger menu with smooth slide-in drawer

---

## Animation Strategy

**Framer Motion Implementation** (Use Sparingly):
1. **Hero**: Staggered text reveal (fade + slide up), delayed slider entrance
2. **Scroll Triggers**: Fade-in on viewport entry for each section (once only)
3. **Product Carousel**: Smooth drag interaction, spring physics for snap
4. **Biography**: Gentle parallax on portrait (10-15% movement)
5. **Contact**: Input focus animations, success state for form submission

**Timing**: Keep animations under 0.6s duration, use easing curves (ease-out)

---

## Images Specification

### Required Images (12 total):
1. **Hero Background**: Large nature-inspired artwork landscape
2. **Product Slider** (5): Hummingbird Garden, Sunny Poppies, + 3 additional artworks
3. **Featured Carousel** (5-6): Additional artwork pieces in square format
4. **Biography**: Professional portrait of Megan Reiniger

### Image Treatment:
- Consistent aspect ratios within each section
- Soft vignette or subtle overlay on hero background
- High-quality, well-lit product photography
- Organic, natural backgrounds that complement the art

---

## Responsive Behavior

**Breakpoints**:
- Mobile: Single column, stacked sections, full-width cards
- Tablet (md): 2-column grids, reduce spacing slightly
- Desktop (lg+): Full multi-column layouts, maximum spacing

**Mobile Optimizations**:
- Hero: Reduce text size, stack slider vertically if needed
- Products: Single column carousel with swipe gestures
- Biography: Stack portrait above bio text
- Contact: Stack form and info vertically

This design creates a museum-quality digital experience that honors the artistry of Maple Sugar Studio while providing an elegant, conversion-focused eCommerce foundation.