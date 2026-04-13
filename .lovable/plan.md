

## Plan: Fix Hero Section Mobile Responsiveness

**File:** `src/components/HeroSection.tsx`

### Changes

1. **Image placement on mobile** — Move image div to `order-2` on mobile (below text) instead of `order-1`. Text becomes `order-1` on mobile. This ensures text is at top and image is visible below without being cut off.
   - Text div: `order-1` (mobile) / `md:order-1` (desktop) — no change needed
   - Image div: `order-2` (mobile) / `md:order-2` (desktop) — change from `order-1` to `order-2`

2. **Text alignment on mobile** — Add `text-center md:text-left` to the text container so content is centered on mobile. Center the badge, buttons, and stats accordingly.

3. **Button sizing** — Increase mobile button padding from `py-2.5` to `py-3` and text from `text-sm` to `text-base` for better touch targets. Keep `w-full` on mobile, `sm:w-auto` on desktop.

4. **Hero image visibility** — Increase mobile image height from `h-44` to `h-52` and remove `max-w-xs` constraint on mobile (use `max-w-full` on mobile, `sm:max-w-sm`).

### Specific edits

- Line 44: `order-1 md:order-1` + `text-center md:text-left`
- Line 45: Center the badge with `mx-auto md:mx-0`
- Line 50-55: Keep text sizes as-is (already responsive)
- Line 57: Add `mx-auto md:mx-0` to paragraph for centered alignment
- Line 62-67: Buttons — increase to `py-3 text-base`
- Line 85: Stats — add `justify-center md:justify-start`
- Line 100: Change from `order-1 md:order-2` to `order-2 md:order-2` so image goes below text on mobile
- Line 101: Change `max-w-xs` to `max-w-full sm:max-w-sm`
- Line 106: Change `h-44` to `h-52`

