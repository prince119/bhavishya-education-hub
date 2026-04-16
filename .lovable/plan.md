

## Plan: Franchise Inquiry Form/Page, Gallery Background, Hero & Programs Visual Separation

---

### 1. Franchise Inquiry Page & Form

**New file:** `src/pages/FranchiseInquiry.tsx`

- New page: "Become a Bhavishya Franchise Partner" with a hero banner and inquiry form
- Form fields: Name, Phone, Email, City/Location, Investment Budget (dropdown), Message
- Heading: "Become Part of Growing Bhavishya Computer Education"
- Benefits section above form (3-4 cards): Brand Support, Training Material, Marketing Help, Low Investment
- Add route `/franchise-inquiry` in `App.tsx`
- Add "Become a Franchise" CTA button on existing `FranchisePage.tsx` linking to this page
- Add link in Navbar menu under Franchise dropdown or as separate item

---

### 2. Gallery Section — Add Background Image

**File:** `src/components/GallerySection.tsx`

- Replace plain `bg-muted/30` with a subtle dark/educational background image + overlay
- Generate a gallery background image (dark campus/pattern)
- Use `bg-cover bg-center` with a semi-transparent overlay (`bg-black/80`)
- Change heading and text colors to `text-white` for contrast

---

### 3. Hero Section & Our Programs — Visual Separation

**File:** `src/components/HeroSection.tsx`

- Keep the current gradient background for hero
- Add a visible bottom border or wave/divider between hero and programs section

**File:** `src/components/CourseCarousel.tsx`

- Redesign course cards with modern styling: add subtle gradient borders, glassmorphism effect (`backdrop-blur`, `bg-white/80`), rounded-2xl, hover scale + shadow animation
- Change section background to a distinct color (e.g., `bg-secondary` dark or a colored gradient) so it's clearly different from the hero's light background
- Card style: white cards with colored left border accent, or gradient overlay on image, modern badge chips
- Add section divider (subtle gradient line or wave SVG) at the top

---

### 4. Files Changed

| File | Action |
|------|--------|
| `src/pages/FranchiseInquiry.tsx` | Create — franchise inquiry form page |
| `src/components/GallerySection.tsx` | Edit — add background image, white text |
| `src/components/CourseCarousel.tsx` | Edit — modern card style, distinct section background |
| `src/components/HeroSection.tsx` | Edit — add bottom divider/wave |
| `src/pages/FranchisePage.tsx` | Edit — add CTA to franchise inquiry |
| `src/App.tsx` | Edit — add `/franchise-inquiry` route |
| `src/components/Navbar.tsx` | Edit — add franchise inquiry link |
| 1 gallery background image | Generate |

