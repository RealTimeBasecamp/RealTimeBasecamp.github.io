# Feature State: Feat-01 Homepage (Phase 1)

## Upstream Prerequisites
* **Depends On:** None
* **Downstream Blocked Items:** Feat-02 (go live) pushes this commit.

## Feature Objective
* Replace the blank Jekyll stub with an Astro homepage in the EMSP look: a short intro,
  a large plugin card, cards for ArtStation, MentorCruise and GitHub, a newsletter footer,
  and `/emsp/` as a short link to the plugin docs.

## Implementation Checklist
* [x] Astro 5.13 scaffold, `deploy.yml` from the EMSP repo, Jekyll `_config.yml` deleted
* [x] Styles copied from EMSP `src/styles/home/` (tokens, base, ui)
* [x] BaseLayout with Open Graph tags and Person JSON-LD
* [x] Masthead, Lockup, SiteFooter, NewsletterEmbed copied and adapted
* [x] Hero, BentoGrid and Card (new), cards in `src/data/homeCards.ts`
* [x] `/emsp/` redirect in `astro.config.mjs`
* [x] `conventional-code` review (Card image style scoped again, docstring on `emsp()`)
* [x] Copy approved by the user (page description, footer note, card labels)
* [x] Logo SVGs renamed to lowercase (`icon-gradient-smooth.svg`, `lockup-colour-on-dark.svg`)
* [x] Committed locally: `bf8d9e4 feat: Replaced the Jekyll stub with the Astro homepage`

---

# Bugs & Edge Cases
* Pushing before Pages Source is "GitHub Actions" makes Pages run Jekyll on the Astro source.
* The MentorCruise badge is a remote image (`MENTORCRUISE_BADGE_URL`), cropped to its score in Card.astro, so the rating stays current.


# User Feedback


# Final review & Tests

### File Code diff & Quality Control
* [x] [./astro.config.mjs](../../../../astro.config.mjs)
    * **Feature / Edit List:**
        * [x] Lines 1-13: `site`, no `base`, `/emsp` redirect to the plugin docs
            1. **Verification Test 1:** `npm run build` writes `dist/emsp/index.html`, and opening `/emsp/` in `npm run preview` lands on the docs.
* [x] [./.github/workflows/deploy.yml](../../../../.github/workflows/deploy.yml)
    * **Feature / Edit List:**
        * [x] Lines 1-41: build with Astro and publish to Pages on push to `main`
            1. **Verification Test 1:** After the push in Feat-02, the Actions run is green and the site loads.
* [x] [./src/pages/index.astro](../../../../src/pages/index.astro)
    * **Feature / Edit List:**
        * [x] Lines 1-21: page order only (Hero, BentoGrid of HOME_CARDS)
            1. **Verification Test 1:** `dist/` holds only `index.html` and `emsp/index.html` (checked 2026-10-30).
* [x] [./src/data/homeCards.ts](../../../../src/data/homeCards.ts)
    * **Feature / Edit List:**
        * [x] Lines 39-77: plugin, ArtStation, MentorCruise and GitHub cards
            1. **Verification Test 1:** Every card button resolves in `npm run preview`.
* [x] [./src/components/Card.astro](../../../../src/components/Card.astro), [BentoGrid.astro](../../../../src/components/BentoGrid.astro), [Hero.astro](../../../../src/components/Hero.astro)
    * **Feature / Edit List:**
        * [x] Lines 1-188 / 1-24 / 1-71: new components, each owning scoped CSS
            1. **Verification Test 1:** At 320px, 425px and desktop (headless Edge in a fixed-width iframe), no horizontal scroll, and the grid is one column below 48rem.
* [x] [./src/components/Masthead.astro](../../../../src/components/Masthead.astro), [SiteFooter.astro](../../../../src/components/SiteFooter.astro), [Lockup.astro](../../../../src/components/Lockup.astro), [NewsletterEmbed.astro](../../../../src/components/NewsletterEmbed.astro), [./src/styles/](../../../../src/styles/)
    * **Feature / Edit List:**
        * [x] Whole files: copied from EMSP, headers name their source
            1. **Verification Test 1:** The beehiiv form loads in the footer, and the social icons link out.
