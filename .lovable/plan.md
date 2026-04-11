## Plan: Mobile Layout Like Amity Reference, Footer Fix, Form Section, Contact Page with Maps, Text Contrast Fixes add gallary section social icons at hamburger in mobile view instagram link [https://www.instagram.com/bhavishyacomputereducation.hq/](https://www.instagram.com/bhavishyacomputereducation.hq/)

---

### 1. Navbar Mobile Redesign (Like Amity Reference)

**File:** `src/components/Navbar.tsx`

- Reorder mobile layout: Hamburger on LEFT next to logo, "Apply Now" button + Call icon on RIGHT
- Search bar always visible below navbar on mobile (not collapsible) with animated placeholder
- Remove search icon from mobile top bar, keep it in the always-visible search row below

---

### 2. Hero Section Mobile Fix

**File:** `src/components/HeroSection.tsx`

- On mobile: hero image/banner on TOP (full width), text content below — smaller text sizes (`text-xl` heading, `text-xs` paragraph)
- Or convert to a hero slider (image as background with overlay text) on mobile
- Course scrolling cards visible below CTA buttons
- Reduce all text sizes for mobile readability

---

### 3. Floating Buttons — Move to Bottom Right

**File:** `src/components/FloatingButtons.tsx`

- Move WhatsApp + scroll-to-top to `fixed bottom-4 right-4` (bottom-right corner)
- Remove call button from floating (it's in navbar now)
- Link call button in navbar to `tel:+919171278014`

---

### 4. Footer Fixes

**File:** `src/components/Footer.tsx`

- Fix logo: remove `h-12 w-12` constraint, use `h-14 w-auto` so it's not compressed
- Change all footer text to white: replace `text-secondary-foreground/70` with `text-white/80`
- Footer headings: `text-white` instead of `text-primary`
- Copyright: `text-white/50`
- Generate a real background image for footer (dark campus/education themed)

---

### 5. "Start Your Journey" (ApplyForm) Section Fix

**File:** `src/components/ApplyForm.tsx`

- Fix text color: heading and body text use `text-white` for visibility on dark background
- Fix icon circles: use visible colors like `bg-primary/30` with white emoji or Lucide icons in white
- Generate and add a proper background image for this section

---

### 6. Contact Page with Google Maps

**File:** `src/pages/ContactPage.tsx`

- Replace map placeholder with actual Google Maps iframe embed for "Kusmi, Chhattisgarh 497224"
- Keep contact cards and apply form

---

### 7. Text Contrast Audit — All Dark Background Sections

**Files:** `CTABanner.tsx`, `CTABanner2.tsx`, `ApplyForm.tsx`, `Footer.tsx`

- Audit every section with dark `bg-secondary` or overlay background
- Replace `text-secondary-foreground/70` with `text-white/80` or `text-white/70`
- Replace `text-secondary-foreground` with `text-white`
- Ensure all headings on dark backgrounds use `text-white`

---

### Technical Notes

- ~1 new footer background image generated
- Navbar call button uses `tel:+919171278014`
- Google Maps iframe with actual coordinates for Kusmi location
- All color fixes use explicit `text-white` instead of CSS variable-based foreground colors for reliability on dark backgrounds