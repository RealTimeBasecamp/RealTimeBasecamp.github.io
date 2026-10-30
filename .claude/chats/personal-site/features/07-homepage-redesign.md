# Feature State: Feat-07 Homepage redesign (bio on the homepage)

## Upstream Prerequisites
* **Depends On:** Feat-01 (committed `bf8d9e4`, not pushed). Supersedes its layout.
* **Downstream Blocked Items:** Feat-02 (go live) should push this design, not Feat-01's.
  Feat-03 to Feat-06 copy whatever look this page settles on.

## Feature Objective
* Turn the homepage into the bio page: clean portfolio feel in the flat EMSP landing
  page style, guiding the visitor down one column: showreel, portfolio, MentorCruise,
  stats, software, products, blog.

## Implementation Checklist
* [x] Hero in the EMSP layout (Hero.astro): Avatar + name, title line, "View my portfolio" (primary) + "Mentoring on MentorCruise" buttons, showreel facade (YouTubeEmbed.astro, 16px radius, iframe only on click)
* [x] Pill and gradients gone; BentoGrid, Card, homeCards.ts, menu-locations.png deleted
* [x] StatRings.astro (data: stats.ts): 14 years UE (UE logo), 10+ years professional, 30+ mentees; fill + count-up once on view, final values without JS / reduced motion; 3 across at all widths
* [x] Experience / Clients / Software as flat hairline panels (LogoGrid.astro, data: logos.ts)
* [x] Reviews carousel (TestimonialCarousel.astro, adapted from EMSP; data: testimonials.ts, 4 reviews from PDF p2)
* [x] Products panel (ProductList.astro, data: products.ts), Blog teaser section
* [x] Section.astro + scroll reveal copied from EMSP (base.css, BaseLayout script)
* [x] Masthead: GitHub footer-only (`inMasthead`), email icon far right, hidden while `EMAIL_URL` is ''
* [x] `@astrojs/sitemap` 3.7.4, `/emsp/` filtered out, `<link rel="sitemap">`
* [x] Stubs: products.astro, blog/index.astro, contact.astro (about folded into homepage). **Must go on `wip/pages`, not main.**
* [x] Checked 320 / 425 / 1440px with headless Edge: no sideways scroll
* [ ] User review of the look and the new copy (see Open questions)

### Round 2 to-do (user feedback 2026-10-30, not started)
* [ ] Render a nicer custom thumbnail for the showreel preview (replace YouTube's maxresdefault frame)
* [ ] Hero: one button only, "View my portfolio". Drop "Mentoring on MentorCruise"
* [ ] Tagline: "UE5 Technical Artist | Pipeline Developer | Mentor @ MentorCruise"
* [ ] Infographics: make each stat different (they are boring and all the same)
* [ ] Infographics: the count-up had already finished before scrolling to it. Fix the trigger so it plays when seen (StatRings.astro observer)
* [ ] Experience and Clients: remove the bordered box, let them float on the page (Global notes)
* [ ] All logos and icons much larger (Global notes)
* [ ] Experience must be a timeline (see the career timeline item below)
* [ ] Remove the full stop from every section heading (Global notes)
* [ ] Career timeline (line fills on scroll, finite, not annoying): needs LinkedIn PDF for roles + dates; could replace the Experience panel
* [ ] Official SVG logos for: Substance Painter, Substance Designer, ZBrush, Microsoft, Amazon, JP Morgan, NEOM, Magic Leap, Royal Navy, UCL, Foster + Partners, Framestore
* [ ] conventional-code, then commit (homepage to main, stubs to wip/pages) on user approval

## Open questions for the user
* New copy to approve: "Mentoring on MentorCruise", section titles (Experience. / Clients. / Software. / What my mentees say. / Products. / Blog.), mentoring intro "Reviews from mentoring sessions on MentorCruise.", blog intro "Posts are on the way. Join the newsletter below to get them first."
* Tagline still "UE5 Technical Artist | Pipeline | Mentor @ MentorCruise"; the PDF says "Senior 3D Generalist | Trainer". Which?
* HBO kept, WB dropped (assumed WB = Harry Potter). Confirm.
* Two em dashes in reviews changed to commas.
* Software list beyond the user's: JavaScript, Django (from PDF p9). Keep?

---

# Bugs & Edge Cases
* [x] 2026-10-30: Hero photo ring was crispy with a seam because it was a `border` on the round `<img>`
  (a regression of a fix already made in EMSP `Quote.astro`). Fixed with a shared
  [Avatar.astro](../../../../src/components/Avatar.astro): ring = padded wrapper background.
  Every round photo on the site must use Avatar.


# User Feedback
* 2026-10-30: The blue "Coming soon to Fab" pill and gradient card backgrounds look "VERY AI". Prefer the flat sections of the EMSP landing page. No shiny gradients.
* 2026-10-30: Coloured pills are fine only where they are real buttons (like the EMSP feature section). Don't add pills for decoration.
* 2026-10-30: The bento grid at the top is odd and hard to read. The whole site should not be grids; they belong only inside a featured section. Wants clean, like a portfolio site.
* 2026-10-30: The homepage is the bio. The user will provide a CV to extract facts from.
* 2026-10-30: The user asked for suggestions for other infographics.
* 2026-10-30: 14 years Unreal, 10+ years professional. Email: needs a spam-safe redirector, blank for now.
  Timeline wanted, but finite and not annoying. 500+ Gumroad downloads (shown as product status line).
  Experience: PlayStation, UCL, Foster + Partners, Framestore. Clients: all from the PDF plus NEOM, JP Morgan,
  Amazon, Microsoft, Apple, Volkswagen; never Steven Spielberg or Harry Potter. Never use PDF page 7 (Jurassic World).
  Reviews in a carousel. Source: [context/Rob_Fraser_portfolio_2026.pdf](../context/Rob_Fraser_portfolio_2026.pdf).
* Showreel is `Gpq8IIuzLFc` (2026, from the PDF). The old `KcjBpfG7DbY` can't be embedded.
* 2026-10-30 (notes only, not started; navigation (Feat-09) comes first):
  * Testimonials: round DP image per mentee (Avatar), link some mentees to their portfolio/LinkedIn
    (user to supply which and the URLs), five stars above every testimonial (all are 5 stars).
  * Products: preview image from each product page as the block's visual; drop the eyebrow
    ("FREE PDF", "UNREAL ENGINE 5 PLUGIN"), it hurts readability; drop "Coming soon on Fab" (and
    probably the status line); tag pills under the image (PLUGIN, PDF) that a products page can
    filter by later; no filters yet.
  * One CTA per item. "See the plugin" + "Read the docs" side by side is the duplicated-CTA problem.
  * Clients and Experience: logo only, no name. Get the real logos for the missing ones.
  * Run an AI-bloat review (humanizer skill) over all site copy and report it. Example of bloat:
    "Posts are on the way. Join the newsletter below to get them first."


# Final review & Tests
