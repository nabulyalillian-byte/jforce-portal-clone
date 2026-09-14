# JForce portal replica

## Goal
Recreate the supplied Jumia JForce portal as a polished, responsive single-page experience at `/`, preserving its content order, orange and deep-teal styling, imagery, and interactive elements.

## Build
- Replace the blank page with the full JForce experience: hero, partner marquee, benefits, eligible-agent categories, four-step process, twelve-step ordering timeline, commission information, levels, FAQs, testimonial, managers, and footer.
- Build the earnings calculator with city and bucket selectors, Naira sales input, correct direct commission rates, estimated payout, and indirect commission guidance.
- Add the interactive FAQ accordion, continuous brand marquee, working external links, email links, and embedded testimonial video.
- Reproduce the reference’s typography, spacing, cards, gradients, shadows, responsive behavior, and restrained motion using reusable data-driven sections.
- Use the supplied Jumia hero image and reference-hosted brand/manager imagery where available, with clear fallbacks for any inaccessible assets.

## Technical details
- Keep the implementation within the existing TanStack Start page and Tailwind v4 design system.
- Define JForce colors and other visual roles as semantic tokens in the global stylesheet.
- Add page-specific title, description, Open Graph, and Twitter metadata.
- Preserve accessibility with semantic headings, useful alt text, keyboard-operable controls, visible focus states, and reduced-motion handling.

## Validation
- Verify the page builds cleanly.
- Check the live page at desktop and mobile widths for layout, overflow, interactions, calculator math, accordion behavior, external links, image loading, and video framing.
