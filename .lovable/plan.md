## Plan: Hero Image + Course Images + Blog Section + Why Choose Us Background + CTA Banner

### Summary

Add images to hero and course cards using AI-generated relevant educational images. Restructure hero to place course cards below CTA buttons (3-card scrolling strip like the Amity reference). Add a background image/pattern to "Why Choose Us". Create a new scrollable blog section with modern cards. Add another CTA banner.

---

### 1. Generate Educational Images

Use the Lovable AI image gateway to generate:

- **Hero image**: A professional student/education visual (student at computer, campus feel)
- **Course card images**: 10 unique images for each course (DCA, BCA, PGDCA, MA, BA, B.Com, Tally, MS Office, Web Design, Python) — small, relevant thumbnails showing the subject matter
- **Why Choose Us background**: A subtle educational pattern/campus background
- **Blog post thumbnails**: 6 blog card images

All images saved to `src/assets/` and imported in components.

---

### 2. Redesign Hero Section

**File:** `src/components/HeroSection.tsx`

- Update headline to be more future/learning-oriented: "Shape Your Future with **bhavishya education**"
- Right side: Replace GraduationCap icon with a generated student/education image
- Move the scrolling course strip directly below the "Apply Now" and "Explore Courses" buttons (not at the bottom of the section)
- Course strip shows 3 cards at a time with images, auto-scrolling like the Amity reference
- Mobile responsive: stack layout, strip shows 1-2 cards

---

### 3. Add Images to Course Cards

**File:** `src/components/CourseCarousel.tsx`

- Replace the gradient header area in each course card with an actual image (generated per-course)
- Course name overlaid on the image or shown below
- Keep the existing slider + grid + search + category functionality

---

### 4. Add Background to "Why Choose Us"

**File:** `src/components/WhyChooseUs.tsx`

- Add a subtle educational background image or pattern behind the section
- Use a dark overlay so text remains readable
- Cards stay as-is with slight opacity adjustments for contrast

---

### 5. Add Second CTA Banner

**File:** `src/components/CTABanner2.tsx` (new)

- Different messaging: "Start Your Journey Today — Admissions Open for 2026"
- Place between Testimonials and FAQ sections
- Different visual style from existing CTA (e.g., gold background with navy text, or image-backed)

---

### 6. Create Scrollable Blog Section

**File:** `src/components/BlogSection.tsx` (new)

- Modern card design: image thumbnail, category tag, title, excerpt, date, "Read More" link
- Horizontal scrollable slider with arrow navigation (same pattern as other sliders)
- 6 sample blog posts about computer education, career tips, course updates
- Section heading: "Latest from Our Blog"

---

### 7. Update Page Layout

**File:** `src/pages/Index.tsx`

Add BlogSection and CTABanner2:
Hero → Courses → Affiliates → Why Choose Us → CTA Banner → Testimonials → **CTA Banner 2** → **Blog Section** → FAQ → Apply → Footer

---

### Technical Notes

- Images generated via AI gateway, saved as base64 PNGs in `src/assets/generated/`
- Hero course strip uses CSS `animate-scroll-left` with 3 visible cards
- Blog slider uses same `useRef` + `scrollBy` pattern as other sliders
- Background image on Why Choose Us uses `bg-cover bg-center` with a dark overlay div