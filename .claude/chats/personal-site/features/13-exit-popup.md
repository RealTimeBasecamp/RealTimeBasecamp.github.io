# Feature State: Feat-13 Newsletter exit popup with free PDF

## Upstream Prerequisites
* **Depends On:** Feat-04 free download funnel research (same beehiiv lead-magnet and consent choices); Feat-12 live
* **Downstream Blocked Items:** None

## Feature Objective
* An email sign-up popup that appears when a visitor is about to leave the page; signing up delivers a free PDF and adds them to beehiiv (The Sherpa's Guide).

## Implementation Checklist
* [ ] User: say when ready to start (not ready yet, 2026-11-02)
* [ ] [Feat-02a: welcome email](./02a-welcome-email.md) rewritten and re-enabled
* [ ] Sign-up form: beehiiv Grow > Subscribe forms embed (reuse [NewsletterEmbed.astro](../../../../src/components/NewsletterEmbed.astro) / `NEWSLETTER_EMBED_URL` if the same form fits)
* [ ] Trigger: desktop = mouse leaves the top of the viewport; mobile = scroll-depth or fast scroll-up fallback
* [ ] Show once per visitor (localStorage, try/catch); never for existing subscribers or on first paint
* [ ] Close on Escape, outside click and close button; focus trapped while open; respects reduced motion
* [ ] PDF delivered on sign-up (Q1)
* [ ] Consent wording and privacy notice link shared with Feat-04
* [ ] Check 320/425/1440; no sideways scroll

## Open Questions
* Q1: Which PDF is the free download: the UE5 Variables Cheat Sheet or a new one?

---

# Bugs & Edge Cases


# User Feedback


# Final review & Tests
