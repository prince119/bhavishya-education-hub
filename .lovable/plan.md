

## Plan: Contact Info, Mobile Responsiveness, Footer Background, Course Image Fix, and UI Polish

This is a comprehensive update covering contact details, global mobile responsiveness, and multiple UI fixes.

---

### 1. Update Contact Details Everywhere

**Files:** `FloatingButtons.tsx`, `ApplyForm.tsx`, `ContactPage.tsx`, `Footer.tsx`

- WhatsApp: `https://wa.me/919171278014`
- Call: `tel:+919171278014`
- Email: `Office@bhavishyaedu.in`
- Address: `Balrampur - Samri - Kusmi Rd, Kusmi, Chhattisgarh 497224, India`
- Update all placeholder `XXXXXXXXXX` values across the site

---

### 2. Footer Background Image

**File:** `Footer.tsx`

- Generate a subtle dark educational background image
- Apply with dark overlay (`bg-secondary/95`) so text stays readable
- Keep existing footer layout

---

### 3. Fix Course Card Image Blinking

**File:** `CourseCarousel.tsx`

- The blinking is caused by images re-rendering on state changes (placeholder cycling triggers re-renders)
- Add `loading="lazy"` and ensure images aren't re-mounted by stabilizing keys
- Memoize `CourseCard` component with `React.memo`

---

### 4. Hero Section Mobile Responsiveness

**File:** `HeroSection.tsx`

- Image on top of content on mobile (already `order-1`/`order-2` — ensure it works)
- Reduce heading to `text-2xl` on mobile, `text-4xl md:text-5xl lg:text-6xl`
- Reduce paragraph text to `text-sm` on mobile
- Buttons stack vertically on mobile: `flex-col sm:flex-row`
- Stats: smaller text on mobile
- Scrolling course strip: narrower cards on mobile (`w-28`)
- Remove `max-w-none` from hero image, use `w-full h-auto object-cover`

---

### 5. Global Mobile Responsiveness (index.css + All Components)

**File:** `src/index.css`

Add global overflow protection:
```css
html, body { overflow-x: hidden; }
* { box-sizing: border-box; }
img { max-width: 100%; height: auto; }
```

**All section components** — apply these patterns:
- `overflow-hidden` on all section/container elements
- `max-w-full` where needed
- `px-4` padding on all containers
- Replace any fixed `w-[XXXpx]` with responsive alternatives on mobile
- Text: `break-words` where needed

**Specific fixes per component:**

- **Navbar:** Already has hamburger. Ensure `w-full px-4` on header. Logo + hamburger on one line.
- **AffiliatedPartners:** Add `overflow-hidden` to section wrapper
- **WhyChooseUs:** Cards `w-[280px] sm:w-[300px]`
- **TestimonialsSection:** Cards `w-[280px] sm:w-[320px]`
- **BlogSection:** Cards `w-[300px] sm:w-[340px]`, section `overflow-hidden`
- **CTABanner/CTABanner2:** Add `overflow-hidden`, text responsive sizes
- **ApplyForm:** Grid single column on mobile (already `md:grid-cols-2`)
- **FAQSection:** Category buttons wrap properly, accordion full width
- **Footer:** Already `sm:grid-cols-2 lg:grid-cols-4`, add `text-center sm:text-left` on mobile
- **FloatingButtons:** Reduce button size on mobile `w-10 h-10 sm:w-12 sm:h-12`

**Page headers:** All dedicated pages — heading `text-2xl sm:text-4xl`, subtext `text-sm`

---

### 6. Slider Arrow Buttons — Mobile Fix

All slider sections (Courses, WhyChooseUs, Testimonials, Blog):
- Hide arrow buttons on mobile (`hidden sm:flex`) since users can swipe
- Or make them smaller and position them within bounds (not `-left-4` which overflows)

---

### Technical Notes

- ~1 new image generated (footer background)
- `React.memo` on CourseCard to prevent image blinking
- Global CSS rules prevent any horizontal overflow
- All responsive changes use Tailwind mobile-first breakpoints
- Touch targets minimum 44px maintained on mobile buttons

