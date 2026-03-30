

## Plan: Enhance Bhavishya Computer Education Website

Based on the Amity Online reference screenshots, here are the additions and changes:

---

### 1. Add "Existing Student Login" button to Navbar

Add a third CTA button in the navbar (desktop and mobile) with a person icon and "Student Login" label, styled as an outlined button similar to the Amity reference. This links to a simple login page.

**Files:** `src/components/Navbar.tsx`

---

### 2. Create Student Login Page

A simple `/student-login` page with email/password fields and a login button. For now, this will be a static UI (no backend auth). Add the route in `App.tsx`.

**Files:** `src/pages/StudentLogin.tsx`, `src/App.tsx`

---

### 3. Redesign Course Section with Categories and Search

Replace the auto-scrolling carousel with an Amity-style course explorer:
- Section heading "Explore Our Programs"
- Category filter tabs: All Courses, PG Courses, UG Courses, Certificates
- Sub-category pills: Trending, IT Courses, Arts & Humanities, Commerce
- Search bar with search icon
- Grid of course cards (4 per row on desktop) with gradient header, course name, duration, type, and "Explore More" CTA

**Files:** `src/components/CourseCarousel.tsx` (rewrite)

---

### 4. Add Affiliated Universities / Partners Logo Section

A new section showing affiliated university logos in a horizontal scrolling strip, with heading "Trusted & Affiliated With Leading Universities". Will use placeholder text-based logos since we don't have actual images.

**Files:** `src/components/AffiliatedPartners.tsx` (new)

---

### 5. Add CTA Banner Section

A full-width navy/gold banner section similar to the Amity reference: "Are You Ready To Take The Next Step In Your Career?" with an "Apply Now" button. Placed between WhyChooseUs and FAQ.

**Files:** `src/components/CTABanner.tsx` (new)

---

### 6. Add Student Reviews / Testimonials Section

A carousel/grid of student testimonial cards similar to the Amity reference:
- Student avatar (placeholder initials), name, course, batch year
- Star rating
- Review text
- "Read More" button
- "See All Success Stories" CTA at bottom

**Files:** `src/components/TestimonialsSection.tsx` (new)

---

### 7. Update Page Layout

Add the new sections to `Index.tsx` in order:
Navbar > Hero > Courses (redesigned) > Affiliated Partners > WhyChooseUs > CTA Banner > Testimonials > FAQ > Apply Form > Footer

**Files:** `src/pages/Index.tsx`

---

### Technical Notes

- All new components use existing Tailwind config, color tokens (primary/gold, secondary/navy, charcoal), and font families
- Category filtering uses React `useState` for tab selection
- Search filters courses by name client-side
- Student login page is a static form placeholder (can be connected to Supabase later)
- Testimonials use hardcoded sample data with Indian student names relevant to the coaching center context

