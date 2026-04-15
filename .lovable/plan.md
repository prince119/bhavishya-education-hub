

## Plan: Gallery Section, Franchise Page, Hero Design Elements, Footer Image, Course Card Outline

---

### 1. Image Gallery & Event Carousel Section

**New file:** `src/components/GallerySection.tsx`

- Create a section with heading "Our Gallery" and subheading
- Generate 6-8 gallery images (campus, lab, events, classroom, certificate ceremony, annual day)
- Display as a carousel/slider with event title overlay on each image
- Cards show: image, event title, short description
- Responsive: 1 card mobile, 2 tablet, 3 desktop with horizontal scroll
- Add to `Index.tsx` between TestimonialsSection and CTABanner2

---

### 2. Franchise Verification & Information Page

**New files:** `src/pages/FranchisePage.tsx`, `src/components/FranchiseCard.tsx`

- Create a page listing authorized franchise centers
- Each franchise card shows: name, location, verified badge (green checkmark), authorization title
- Add a search/filter bar at the top so users can search by name or location
- Hardcoded franchise data (no backend needed) — sample 4-5 franchise entries
- Verified badge: green shield icon with "Authorized Center" label
- Add route `/franchise` in `App.tsx`
- Add "Franchise" link in Navbar menu

---

### 3. Hero Section Design Elements

**File:** `src/components/HeroSection.tsx`

- Show decorative elements on mobile too (currently `hidden md:block`)
- Add small colored dots, gradient circles, and subtle geometric shapes visible on all screen sizes
- Add a faint dotted grid pattern or radial gradient in the background for visual depth

---

### 4. Scrollable Course Cards — White Outline

**File:** `src/components/HeroSection.tsx`

- Add `border-2 border-white` or `ring-2 ring-white` to the scrolling course cards in the hero section
- This makes each card pop against the background

---

### 5. Footer Background Image

**File:** `src/components/Footer.tsx`

- Generate a new, higher-quality dark educational background image for the footer
- Ensure overlay keeps text readable (`bg-secondary/90`)

---

### 6. Mobile Search Bar

Already exists in `Navbar.tsx` (line 100-112) — confirmed working. No changes needed.

---

### Files Changed

| File | Action |
|------|--------|
| `src/components/GallerySection.tsx` | Create — gallery carousel with event titles |
| `src/pages/FranchisePage.tsx` | Create — franchise listing with verified badges |
| `src/components/HeroSection.tsx` | Edit — add design elements on mobile, white outline on course cards |
| `src/components/Footer.tsx` | Edit — new background image |
| `src/pages/Index.tsx` | Edit — add GallerySection |
| `src/App.tsx` | Edit — add `/franchise` route |
| `src/components/Navbar.tsx` | Edit — add "Franchise" link |
| ~8 gallery images | Generate via AI |
| 1 footer background image | Generate via AI |

