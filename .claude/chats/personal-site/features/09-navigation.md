# Feature State: Feat-09 Site navigation and page structure

## Upstream Prerequisites
* **Depends On:** Feat-07 homepage (uncommitted on main). Pages it links to are built on `wip/pages`.
* **Downstream Blocked Items:** Feat-04 (Products), Feat-05 (Blog), Feat-06 (Contact), Feat-10 (Portfolio),
  Feat-11 (Mentoring). Their priority is set here.

## Feature Objective
* A masthead dropdown listing every master page, so the homepage leads to the rest of the site.
  Pages are prioritised before they're built.

## Pages requested (user, 2026-10-30)
| Page | Children | Notes |
|---|---|---|
| Products `/products/` | one page per product | Filter pills (PLUGIN, PDF) later, once there are enough products |
| Mentoring `/mentoring/` | none | Testimonials, mentee map (Feat-08) could move here |
| Contact `/contact/` | none | Option still to pick (see 06-contact.md) |
| Portfolio `/portfolio/` | one page per project | 12 projects in the portfolio PDF (p7 Jurassic World excluded) |
| Blog `/blog/` | one page per post | Overview layout; no posts yet |

## Implementation Checklist
* [x] Priority: Portfolio (homepage `/`), Products, Mentoring, Blog, Contact me. Button shows the current page's name
* [x] `dev` branch created; all WIP lives there (replaces `wip/pages`)
* [x] `src/data/nav.ts`: `live` flag; non-live pages only in the dev server. Dropdown hidden while one page is listed (production now)
* [x] Masthead dropdown: aria-expanded, closes on Escape, outside click and focus leaving. Profile icons hide below 25rem (footer has them). Checked 320/425/1440, no sideways scroll
* [x] Mentoring stub; stub headings lose their full stops
* [x] Round 2 (user: dropdown looked cheap): replaced by SiteMenu.astro. Desktop: centred card under the
  masthead, opens on hover, groups "Work with me" (Portfolio, Contact me) / "Mentoring" (Mentoring,
  Book on MentorCruise) / "Products" (each product), strip: Blog, Newsletter (`#newsletter` on the footer
  signup). Below 50rem the card spans the masthead and groups stack. Current page highlighted, not removed.
* [x] Products in the menu: all while <= 3; past that EMSP (`pinned`) + newest, then "All products"
  (`MENU_PRODUCT_LIMIT`, products.ts is newest first). EMSP links to its docs site; cheatsheet gets
  `/products/<slug>/` (stub, `pages/products/[slug].astro`)
* [x] Page URLs moved into links.ts
* [x] Round 3 (Linear-style, user 2026-10-30): masthead icons removed (footer has them). Desktop
  SiteNav.astro: Portfolio, Products, Mentoring, Blog inline; Products and Mentoring open hover
  panels (CSS only, hover + focus-within, 150ms close delay) with placeholder description lines
  (nav.ts, products.ts `menuText`; user will rewrite). Divider + "Contact me" btn--primary (the only
  blue button; hero and product buttons now btn--ghost). Below 50rem PageMenu.astro: the one-piece
  dropdown of master pages; Contact me button hides below 25rem and moves into the dropdown.
  SiteMenu.astro deleted. Contact page = title only, form later.
* [x] Panels centre under their own trigger (user, 2026-10-30, after trying left and right alignment);
  nudged sideways only if they'd run off the window. Checked 1440/1024/900/820.
* [x] Panel items all one size (Linear sizing): 15rem x 6rem, one-line label, two-line clamped
  description. Cheatsheet uses `menuLabel` "Blueprint Variables Cheatsheet". No single-line link
  column until there are more options (user).
* [x] Panel card in two layers like Linear: outer frame (--ground-lift) + darker inner section
  (--ground, hairline border), vertical hairlines between items.
* [ ] Production today: Portfolio + Products/Mentoring panels (EMSP, MentorCruise); no Contact button
  or phone dropdown until those pages are live. User to confirm when merging.
* [ ] Commit on dev (user approval)
* [ ] Hero "View my portfolio" goes to `/portfolio/` once it exists (currently ArtStation)

---

# Bugs & Edge Cases
* `main` deploys, so the dropdown on main can only list finished pages; otherwise visitors hit stubs.


# User Feedback
* 2026-10-30: "Why do we not have multiple pages accessible from the homepage?" Answer: they were deliberately
  sequenced after the homepage look was signed off (Feat-04 to 06 depend on Feat-02 go-live), and the
  stubs live only in the working tree, unlinked.
* 2026-10-30: Navigation first, so pages can be prioritised. Don't start other items until asked.


# Final review & Tests
