

## Plan: Hero Section Mobile Layout Like Amity Reference

Based on the Amity Online reference screenshot, the mobile hero should show:
- Student image on the RIGHT side next to text (side-by-side layout even on mobile), not in a frame/border — just the raw image
- Text on the LEFT, smaller and compact
- No rounded border or shadow frame around the image

### Changes to `src/components/HeroSection.tsx`

1. **Remove image frame on mobile**: Remove `rounded-2xl`, `shadow-2xl`, `border-4 border-primary/20` wrapper on mobile — show raw image. Keep frame on desktop only.

2. **Side-by-side layout on mobile**: Instead of stacking (image on top, text below), use a 2-column layout on mobile too — text left, image right, like the Amity reference. Use `grid grid-cols-2` on mobile with the image taking less space.

3. **Mobile layout**: 
   - Badge + heading + subtitle on left column
   - Student image on right column (no frame, just `object-cover` with transparent/cutout look)
   - Buttons, course strip, and stats span full width below

4. **Text sizing**: Keep heading at `text-xl` on mobile, paragraph at `text-xs` — compact like reference

5. **Generate new hero image**: Generate a confident student image with transparent/clean background (like the Amity reference where the student appears without a frame, just placed on the light background)

### Technical Approach

- Restructure the grid: on mobile, top section is 2-col (text + image side by side), bottom section is full-width (buttons, course strip, stats)
- Remove all border/shadow/rounded from image container on mobile using responsive classes
- Image uses `object-cover` with no container styling on mobile

