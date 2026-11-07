# Feature State: Feat-12 Custom domain `realtimebasecamp.com`

## Upstream Prerequisites
* **Depends On:** Feat-02 live
* **Downstream Blocked Items:** Feat-13 short sign-up link, Feat-14 blog URLs

## Feature Objective
* Serve the site at `https://www.realtimebasecamp.com/` (root redirects to www). Domain registered at Infomaniak (owner Robert Fraser, individual), expires 2027-11-01.

## Implementation Checklist
* [ ] `public/CNAME` = `www.realtimebasecamp.com`
* [ ] `site` -> `https://www.realtimebasecamp.com` in [astro.config.mjs](../../../../astro.config.mjs) here and in the EMSP repo; check `EMSP_URL` and other absolute links in [links.ts](../../../../src/data/links.ts)
* [ ] User: github.io repo > Settings > Pages > Custom domain `www.realtimebasecamp.com`
* [ ] User: Infomaniak DNS zone: CNAME `www` -> `realtimebasecamp.github.io`; A `@` -> `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`. Remove any Infomaniak parking A/www records. Leave existing beehiiv CNAMEs (`em2426`, `0ba._domainkey`, `0ba2._domainkey`), mail SRV and `_dmarc` untouched
* [ ] User: verify the domain in GitHub account/org Settings > Pages
* [ ] User: tick Enforce HTTPS once available
* [ ] `/`, `/emsp/`, `/ue5-editor-menu-shelf-pro/` load on the new domain; old `realtimebasecamp.github.io` URLs redirect
* [ ] User: Infomaniak web redirection `newsletter.realtimebasecamp.com` -> `https://the-sherpas-guide.beehiiv.com/subscribe` (short sign-up link for Discord, PDF, spreadsheet)
* [ ] User: change beehiiv tagline (still says "Weekly Newsletters")
* [ ] User: tighten `_dmarc` from `p=none` to `p=quarantine` after a beehiiv test send lands in the inbox
* [ ] Profile README "Website:" link -> new domain

---

# Bugs & Edge Cases
* Losing `public/CNAME` (e.g. when merging the EMSP repo in) disconnects the domain.
* beehiiv custom web domain needs a paid plan; beehiiv stays on email sending only.


# User Feedback


# Final review & Tests
