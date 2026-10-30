# Feature State: Feat-03 Bio page `/about/`

## Upstream Prerequisites
* **Depends On:** Feat-02 live. The user supplies the LinkedIn "Save to PDF", the testimonials and any company logos.
* **Downstream Blocked Items:** None

## Feature Objective
* Photo, LinkedIn About (verbatim), showreel, Experience, Skills, Education, MentorCruise
  badge and testimonials, then links to ArtStation and MentorCruise. Built on `wip/pages`.

## Implementation Checklist
* [ ] `src/data/experience.ts` and `skills.ts`, word for word from the LinkedIn PDF
* [ ] `YouTubeEmbed.astro` facade for showreel `KcjBpfG7DbY` (thumbnail, `youtube-nocookie` iframe only on click)
* [ ] Company badges (PlayStation, Framestore, Foster + Partners) as one-colour `currentColor` SVGs from official brand assets or user files
* [ ] `src/data/testimonials.ts` (name, plan, date, quote) from reviews the user pastes in, rendered by an adapted `Testimonial.astro`
* [ ] `DevOnly.astro` placeholder for the Unreal Authorized Instructor badge (shows in `npm run dev`, absent from `dist/`)
* [ ] Masthead link

---

# Bugs & Edge Cases
* MentorCruise cuts reviews off on the public page, so testimonials must come from the user.


# User Feedback


# Final review & Tests
