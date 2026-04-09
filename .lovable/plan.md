

## Plan: Mobile Fix, Navbar Scroll Behavior, Search, Scroll-to-Top, and Section Improvements

### Summary
Fix hero mobile responsiveness (image visibility, text sizing, course card styling), make navbar hide on scroll with site search, slow down scroll animation, improve CTA/form backgrounds, show all courses on programs page, add header images to all pages, add scroll-to-top button, and add animated search placeholder.

---

### 1. Fix Hero Section Mobile Responsiveness
**File:** `src/components/HeroSection.tsx`

- Ensure hero image is always visible — set a fixed height on mobile (e.g., `h-48 sm:h-64`) instead of relying on `max-w-[200px]`
- Increase mobile text size by 1 step (e.g., `text-4xl` base instead of `text-3xl`)
- Course scrolling cards: add dark navy/black background overlay on the card title area with white text so course names are always readable
- Slow down scroll animation from `30s` to `45s` in CSS

---

### 2. Navbar: Hide on Scroll + Site Search Bar
**File:** `src/components/Navbar.tsx`

- Add scroll detection with `useState`/`useEffect` — hide navbar when scrolling down, show when scrolling up (transform translateY approach)
- Add a search icon/bar in the navbar (collapsible) for site-wide search with placeholder suggestions
- Keep sticky behavior but toggle visibility based on scroll direction

---

### 3. Search Bar Animated Placeholders
**File:** `src/components/CourseCarousel.tsx`

- Add rotating placeholder text in the course search input using `useEffect` + `setInterval`
- Cycle through: "Search DCA...", "Search BCA...", "Search Tally Prime...", "Search Python..." etc.

---

### 4. CTA Banners — Replace Building Images
**Files:** `src/components/CTABanner.tsx`, `src/components/CTABanner2.tsx`

- Generate new CTA background images (abstract educational patterns, no buildings) using AI image gateway
- Keep dark overlays for readability

---

### 5. Form Section Background Image
**File:** `src/components/ApplyForm.tsx`

- Generate a modern abstract/educational background image (no buildings)
- Apply as section background with dark overlay

---

### 6. Blog Section Light Background Fix
**File:** `src/components/BlogSection.tsx`

- Already has light gradient — keep as is, just ensure contrast is good

---

### 7. Courses Page — Show All, Remove "View All" Button
**File:** `src/pages/CoursesPage.tsx`

- Instead of reusing `CourseCarousel` (which has slider + "View All" toggle), create a variant or pass a prop to always show grid view with all courses visible per category, no "View All Courses" button

---

### 8. Header Images on All Dedicated Pages
**Files:** `src/pages/AboutPage.tsx`, `src/pages/BlogPage.tsx`, `src/pages/CoursesPage.tsx`, `src/pages/FAQPage.tsx`, `src/pages/ContactPage.tsx`

- Replace plain `bg-secondary` header banners with generated background images + dark overlay for each page
- Each page gets a contextually relevant header image

---

### 9. Scroll-to-Top Button
**File:** `src/components/FloatingButtons.tsx`

- Add a "scroll to top" arrow button below WhatsApp and Call buttons
- Shows only when user has scrolled down past 400px
- Smooth scroll to top on click

---

### 10. CSS Animation Speed
**File:** `src/index.css`

- Slow `animate-scroll-left` from `30s` to `45s`

---

### Technical Notes
- Navbar scroll hide uses `useEffect` with `scroll` event listener and `lastScrollY` ref
- Animated placeholder uses `useState` + `setInterval` cycling through course names
- ~7 new images generated via AI gateway (CTA x2, form bg, 5 page headers)
- CoursesPage will get a `showAll` prop or inline the grid directly instead of using carousel
- Scroll-to-top uses `window.scrollTo({ top: 0, behavior: 'smooth' })`

