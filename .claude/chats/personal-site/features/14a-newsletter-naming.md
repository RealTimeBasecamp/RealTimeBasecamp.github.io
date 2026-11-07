# Feature State: Feat-14a Research: newsletter name (The Sherpa's Guide vs Real Time Basecamp)

## Upstream Prerequisites
* **Depends On:** None
* **Downstream Blocked Items:** Feat-02a welcome email, Feat-13 popup copy, Feat-14 SEO, footer signup copy

## Feature Objective
* Decide: keep "The Sherpa's Guide" as a separately branded, mountain-themed newsletter, or drop it and run the newsletter as Real Time Basecamp. Then list every change needed to apply the decision.

## How to run
* Fresh chat: `Read .claude/chats/personal-site/features/14a-newsletter-naming.md and run the research.`
* Research only. Change nothing in beehiiv or the site until the user picks an option.

## Current state (2026-11-03)
* beehiiv publication name: "The Sherpa's Guide". Free plan, 2,500 sub limit.
* Publication description/tagline: "Master Unreal Blueprints with Weekly Newsletters and Blogs, Exclusive Free Downloads, and Expert Career Tips" (stale: no cadence decided).
* Web address: `the-sherpas-guide.beehiiv.com` (Settings > Domains > "Your free beehiiv address", editable).
* Sending: `rob@realtimebasecamp.com`, sender name "Real Time Basecamp". Custom domain live for email only; custom web domain needs a paid plan.
* Email header: large "The Sherpa's Guide" logo with "by RT Basecamp" underneath, then the post title.
* Email footer: `Signature004.png`, large neon "The Sherpa's Guide / Created for creators, by creators" under a small RTB logo.
* Old copy used "Unreal Sherpa", "Trailblazers", expedition wording; removed from the first send.
* Email section icons: Mountain256, White256, Snowflake (mountain theme).
* Site: footer signup ([SiteFooter.astro](../../../../src/components/SiteFooter.astro)) titled "Newsletter"; embed title "Subscribe to the Real Time Basecamp newsletter" ([NewsletterEmbed.astro](../../../../src/components/NewsletterEmbed.astro)); nav strip "Newsletter".
* Other RTB-named channels: Real Time Basecamp Discord, LinkedIn company page, Gumroad store (`realtimebasecamp.gumroad.com`), domain `realtimebasecamp.com`.
* List: ~500 Gumroad cheat sheet downloaders, never emailed; first send ("Thanks for grabbing the Blueprint cheat sheet") drafted and ready.

## User's pros and cons (2026-11-03)
Keep The Sherpa's Guide:
* Mountain themed
* Additional branding on top of RT Basecamp
* Comes across as a newsletter, not just the standard Unreal website

Drop it:
* Logo is massive in the email
* A mouthful
* Confusing next to Real Time Basecamp as a newsletter/email source
* Confusing to the brand
* People lose track of Real Time Basecamp
* SEO: TSG vs RTBC

## Also evaluate
* Real Time Basecamp is already mountain themed ("basecamp", mountain logo): the theme can stay without a second name.
* Inbox "From" already says Real Time Basecamp; header says The Sherpa's Guide.
* Rename cost grows with the list; ~500 subscribers now.
* Middle options: RTB newsletter with a mountain-themed section/issue naming; a short sub-name under RTB (e.g. "Real Time Basecamp Newsletter").
* Whether a distinct newsletter name helps in beehiiv Recommendations/directories.
* Changing the beehiiv free address: do old `the-sherpas-guide.beehiiv.com` links redirect? Check beehiiv docs.
* SEO interplay with Feat-14 (where posts live, canonical URLs, brand search).

## Implementation Checklist
* [ ] Interim (first send): user decides whether to swap the email header logo for the RT Basecamp logo before sending (Q1)
* [ ] Research the points above; give the user 2-3 options with a recommendation, in chat
* [ ] User picks; record in Decisions
* [ ] List and apply every change: beehiiv publication name, description, header logo, footer signature image, free web address, welcome email (Feat-02a), footer/embed/nav copy, Feat-13 popup copy, repo notes

## Open Questions
* Q1: For the first send, replace The Sherpa's Guide header with the RT Basecamp logo (or no logo), or send as is?

---

# Bugs & Edge Cases


# User Feedback


# Final review & Tests
