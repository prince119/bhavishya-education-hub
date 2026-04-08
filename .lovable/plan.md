## Plan: Hero Cleanup, CTA Images, Blog Style, FAQ Categories, Dedicated Pages, WhatsApp/Call Buttons

This is a large set of changes spanning the hero section, CTA banners, blog section, FAQ, form section, dedicated pages, and floating action buttons.

---

### 1. Hero Section Updates

**File:** `src/components/HeroSection.tsx`

- Remove "ISO Certified Since 2010" badge (top-right of image) and "5000+ Students Placed" badge (bottom-left of image)
- Change stat from "5000+" to "1500+ Students Trained"
- Change hero title to something like "Empowering Future-Ready Digital Leaders" or "Build Your Career with Future-Ready Skills"
- White background instead of gradient (`bg-white` or `bg-background`) & colour of content accordingly so it'll be visible
- Generate a single confident student image (like Amity reference — professional, confident pose) to replace current group photo
- Show the student image on mobile too (remove `hidden md:flex`, make it responsive — smaller on mobile, stacked layout)
- Link all scrolling course cards to `#apply` form

---

### 2. CTA Banners with Images

**Files:** `src/components/CTABanner.tsx`, `src/components/CTABanner2.tsx`

- Add a generated background image to both CTA sections (education/campus themed)
- Use dark overlay for text readability
- Keep existing text and buttons

---

### 3. Blog Section Styling

**File:** `src/components/BlogSection.tsx`

- Add a light pastel background color (e.g., `bg-blue-50` or light cream)
- Change the "Our Students Shine at Campus Placements" blog card image — generate a new one showing students at a placement event/celebration
- Section title: "Latest News & Blogs"

---

### 4. Apply Form Background

**File:** `src/components/ApplyForm.tsx`

- Generate a modern educational background image for the form section
- Apply with dark overlay so form remains readable

---

### 5. FAQ with Categories

**File:** `src/components/FAQSection.tsx`

- Add category filter tabs similar to courses section: "All", "Admissions", "Courses", "Placements", "General"
- Tag each FAQ with a category and filter with `useState`

---

### 6. Dedicated Pages + Routing

**New files + `src/App.tsx`:**

Create dedicated pages with Navbar and Footer:

- `/courses` — `src/pages/CoursesPage.tsx` (full course grid with search/filter, reuses CourseCarousel logic)
- `/about` — `src/pages/AboutPage.tsx` (about the institute, why choose us, affiliated partners)
- `/blog` — `src/pages/BlogPage.tsx` (all blog posts in grid)
- `/contact` — `src/pages/ContactPage.tsx` (apply form + map placeholder + contact info)
- `/faq` — `src/pages/FAQPage.tsx` (full FAQ with categories)

Update Navbar links to point to these pages. Update Footer links too. Add all routes in `App.tsx`.

---

### 7. Floating WhatsApp & Call Buttons

**New file:** `src/components/FloatingButtons.tsx`

- Fixed position on the right side, vertically centered (`fixed right-4 top-1/2 -translate-y-1/2`)
- Two circular buttons stacked: WhatsApp (green) and Phone Call (blue)
- WhatsApp links to `https://wa.me/91XXXXXXXXXX`
- Call links to `tel:+91XXXXXXXXXX`
- Add to `Index.tsx` layout (and all pages via a shared layout or directly)

---

### Technical Notes

- ~7 new images generated via AI gateway (hero student, 2 CTA backgrounds, 1 blog replacement, 1 form background)
- FAQ categories use same `useState` pattern as courses
- Dedicated pages reuse existing section components where possible
- Floating buttons use Lucide `Phone` and a WhatsApp SVG icon
- All course cards in hero strip get `<a href="#apply">` wrapper