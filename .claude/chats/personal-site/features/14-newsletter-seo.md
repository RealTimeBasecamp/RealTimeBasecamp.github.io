# Feature State: Feat-14 Research: newsletter posts on the site for SEO

## Upstream Prerequisites
* **Depends On:** Feat-05 Blog, Feat-12 custom domain
* **Downstream Blocked Items:** None

## Feature Objective
* Find how to host beehiiv newsletter content on `realtimebasecamp.com` so each send builds search traffic on the site, not on `the-sherpas-guide.beehiiv.com`.

## Implementation Checklist
* [ ] Research on beehiiv free plan: RSS feed of posts, API/MCP read of post HTML, embedding posts, hiding posts from the beehiiv web feed or noindex
* [ ] Research canonical URLs: site post = canonical; can beehiiv web copy point a canonical at it or be hidden
* [ ] Compare: (a) write on site, send summary/full text from beehiiv linking back (current Feat-05 plan); (b) write in beehiiv, import to `src/content/blog/` at build (RSS/API); (c) beehiiv custom web domain on paid plan
* [ ] User picks one; fold the result into Feat-05
* [ ] [Feat-14a: newsletter name](./14a-newsletter-naming.md) (feeds this SEO research)

---

# Bugs & Edge Cases
* Same post on beehiiv web and the site without a canonical = duplicate content.


# User Feedback


# Final review & Tests
