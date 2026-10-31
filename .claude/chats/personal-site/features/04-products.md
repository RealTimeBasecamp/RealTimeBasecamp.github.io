# Feature State: Feat-04 Products page `/products/`

## Upstream Prerequisites
* **Depends On:** Feat-02 live. The user supplies the cheat sheet thumbnail (and optionally a one-line description).
* **Downstream Blocked Items:** None

## Feature Objective
* `src/data/products.ts` with two products, rendered by one shared `ProductCard` that the homepage plugin card also uses. Built on `wip/pages`.

## Implementation Checklist
* [ ] Editor Menu Shelf Pro: docs link plus "Coming soon on Fab"
* [ ] UE5 Blueprint Variables Cheatsheet PDF (2025 Edition): "Get it on Gumroad" to `https://realtimebasecamp.gumroad.com/l/ue5variablescheatsheetpdfdownload2025`
* [ ] Move the homepage plugin card onto `ProductCard`
* [ ] Masthead link
* [ ] HOLD (after the homepage is done): Free download funnel for the cheatsheet: replace "Get it on Gumroad" with a FREE DOWNLOAD that keeps visitors on the site. Name + email required (newsletter says "Hey <name>"), subscribers go to beehiiv.
    * [ ] First: research what beehiiv's free tier (Launch) offers: download / lead-magnet forms that deliver a PDF, a first-name field on signup forms, welcome-email automation. User already has the free-tier signup embed in the footer
    * [ ] Then pick: beehiiv-native form vs own form; instant download vs emailed link; consent wording (safe unticked newsletter checkbox vs bundled "PDF + newsletter")
    * [ ] Short privacy notice page linked from the form (UK GDPR: who, what, why, beehiiv as processor, unsubscribe, retention)
* [ ] HOLD: Product page media: banner (`cheatsheet-banner.png`, already wired via `banner`) plus the animated page preview `D:\RTBaseCamp\CourseContent\Bonuses\UE5VariablesCheatSheet\AnimatedCheatsheet.gif` (1240x1754 portrait, 7 frames, 2 MB; convert to a looping MP4/WebM, ~10x smaller)
* [ ] HOLD: Make an Editor Menu Shelf Pro logo. It currently uses the RT Basecamp logo, which is confusing. Then use it on the EMSP card/thumbnail and the plugin docs site
* [ ] LOWEST PRIORITY, HOLD: Cheatsheet PDF 2027 Edition (the PDF itself, not the site). Rewrite the node descriptions to demystify them: currently copied from Epic's docs, make them easier to understand and more casual while staying correct (AI-assisted drafting is fine). Fact-check every description against current UE5 behaviour. Then update the title/edition in [products.ts](../../../../src/data/products.ts) and the Gumroad link if it changes

---

# Bugs & Edge Cases
* The Gumroad page doesn't expose its thumbnail, description or price.


# User Feedback


# Final review & Tests
