# Zem Beauty & More — Glory-style redesign

This version keeps the existing stack: Next.js + Tailwind CSS + static export + GitHub Pages.

## What changed

- Header is fixed/overlaid on the hero, transparent at the top and translucent/dark with blur after scrolling.
- Centered ZEM brand mark, with navigation split left/right like the reference layout.
- Full-screen hero slider with:
  - automatic rotation
  - previous/next arrows
  - pagination dots
  - crossfade
  - Ken Burns zoom animation
- Scroll-reveal animations using the native IntersectionObserver API; no animation package added.
- Services section follows the reference composition: image cards, white information panels, gold headings and a marble/cream background.
- Appointment section uses a large image background with a dark overlay and timetable.
- Gallery uses staggered masonry-like offsets and reveal animations.
- Inner pages use dark image headers and the same script/serif/gold visual system.

## Reference assets

Some initial image URLs point to public assets currently served by the Gold & Glory reference website, because the request was to reproduce the visual direction and use image URLs where available. They should be replaced with your own Zem studio photos before commercial launch if you do not have permission to reuse those assets.

Known public URLs used as initial references include:

- https://goldandglory.berlin/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2024-12-05-at-3.13.29-PM-qy1xkc18jhbmupb1a5jvfk7jzrzmwletgjoqy8ou9s.jpeg
- https://goldandglory.berlin/wp-content/uploads/2020/01/1-Shellac.jpg
- https://goldandglory.berlin/wp-content/uploads/2020/01/shellac2.jpg
- https://goldandglory.berlin/wp-content/uploads/2020/01/shellac.jpg
- https://goldandglory.berlin/wp-content/uploads/2020/01/GELN%C3%84GEL-1.jpg
- https://goldandglory.berlin/wp-content/uploads/2020/01/Microblading-1.jpg

## Where to edit content

Most text, prices, opening hours and image URLs are centralized in:

`src/data/content.ts`

The hero slider is configured in `heroSlides`.

## Important

The design is an original implementation inspired by the observed layout and interaction patterns of the reference website. It does not copy the reference site's source code.
