

## Plan: Redesign Sections as Sliders + Hero Revamp

### Summary
Convert courses, testimonials, and "Why Choose Us" into horizontal sliders to reduce vertical space. Redesign the hero section to match the Amity-style layout with a student image area and scrolling course image strip. Add a "View All Courses" button.

---

### 1. Redesign Hero Section (Amity-style)

Rebuild `HeroSection.tsx` to match the reference:
- Left side: headline with highlighted text block (gold), subtitle with bold stats, CTA buttons
- Right side: decorative area with gradient/illustration placeholder (since we don't have a student photo)
- Bottom strip: horizontal auto-scrolling course cards (like the BCA/BBA cards in the reference) — small image-like cards with course name and specialization count, scrolling infinitely
- Add decorative gold diamond/plus shapes like the reference

**File:** `src/components/HeroSection.tsx`

---

### 2. Convert Courses Section to Horizontal Slider

Replace the full grid with a horizontally scrollable slider:
- Keep search bar and category tabs at top
- Show 4 cards visible at a time (desktop), with left/right arrow buttons to scroll
- Add "View All Courses" button at bottom that scrolls to show all courses (or links to `#courses` with all filters cleared)
- Reduce section vertical footprint significantly

**File:** `src/components/CourseCarousel.tsx`

---

### 3. Convert "Why Choose Us" to Slider

Replace the 6-card grid with a horizontal slider/carousel:
- Show 3 cards at a time on desktop, 1 on mobile
- Left/right navigation arrows
- Auto-slide with pause on hover
- Rename/keep as "Why Choose Bhavishya Education"

**File:** `src/components/WhyChooseUs.tsx`

---

### 4. Convert Testimonials to Slider

Replace the 6-card grid with a horizontal slider:
- Show 3 cards at a time on desktop, 1 on mobile
- Navigation arrows and/or dot indicators
- Smooth scroll behavior

**File:** `src/components/TestimonialsSection.tsx`

---

### 5. Add Scrolling Animation CSS

Add a reusable CSS-based scroll utility or use `useRef` + scroll logic for the arrow-based sliders. The hero course strip will use the existing `animate-scroll-left` keyframe.

**File:** `src/index.css` (minor additions if needed)

---

### Technical Approach
- Sliders use `useRef` + `scrollBy` with `scroll-smooth` for arrow navigation
- Hero bottom strip uses CSS animation (infinite marquee) like the existing affiliated partners section
- All sliders are responsive: fewer visible cards on mobile
- No external carousel library — native scroll with buttons

