# personal-site
Ctx: Rob Fraser's site https://realtimebasecamp.github.io/ (promote full-time/freelance/mentoring). Astro 5.13, no Starlight. Push `main` -> `.github/workflows/deploy.yml` (Pages source = GitHub Actions, was Jekyll). Look copied from EMSP repo `ue5-editor-menu-shelf-pro` (served at `/ue5-editor-menu-shelf-pro/`, `/emsp/` redirects). Profile README = separate repo `D:\Portfolio\WebDev\realtimebasecamp`.

## Features
* [x] [Feat-01: Homepage phase 1](./features/01-homepage.md) `bf8d9e4`
* [ ] [Feat-02: Go live](./features/02-go-live.md) waits Feat-07; never push `bf8d9e4` alone
* [ ] [Feat-02a: Welcome email](./features/02a-welcome-email.md) user, before go-live; template ready
* [-] [Feat-03: Bio page](./features/03-bio.md) superseded by Feat-07 (homepage = bio)
* [ ] [Feat-04: Products page](./features/04-products.md)
* [ ] [Feat-05: Blog](./features/05-blog.md) adds `@astrojs/mdx`, `@astrojs/rss`
* [ ] [Feat-06: Contact page](./features/06-contact.md)
* [ ] [Feat-07: Homepage redesign](./features/07-homepage-redesign.md) ACTIVE
* [ ] [Feat-08: Mentee world map](./features/08-mentee-map.md) after Feat-07
* [x] [Feat-09: Navigation](./features/09-navigation.md) `521d47b`; prod go-live call pending
* [ ] [Feat-12: Custom domain](./features/12-custom-domain.md) domain bought (Infomaniak); after Feat-02
* [ ] [Feat-13: Newsletter exit popup + free PDF](./features/13-exit-popup.md) HOLD, user not ready; after Feat-04 funnel research
* [ ] [Feat-14: Research newsletter posts on site for SEO](./features/14-newsletter-seo.md) HOLD; after Feat-05
* [ ] [Feat-14a: Research newsletter name](./features/14a-newsletter-naming.md) NEXT; research only, run from VS Code

## Constraints
* House rules: [CLAUDE.md](../../../CLAUDE.md) (thin pages, content in src/data, URLs in links.ts, copied styles name source, lowercase assets, PNG screenshots, 320/425 checks, no em dashes, user's words only).
* `main` deploys -> finished pages only. WIP on `dev` (replaced `wip/pages`). Page shows in nav only when its `live` flag is set ([nav.ts](../../../src/data/nav.ts)).
* Nav order: Portfolio (= homepage), Products, Mentoring, Blog, Contact me.
* Portfolio content: user plans it; never pull projects from the portfolio PDF.
* Dev-only content (Epic badge slot) only under `import.meta.env.DEV`.
* conventional-code before every commit; commit only on user say-so; ask before every push.
* Logos: one-colour currentColor SVG, Simple Icons (CC0) else official kit; no logo -> show name.
* git not on PATH: `%LOCALAPPDATA%\GitHubDesktop\app-3.6.10\resources\app\git\cmd\git.exe`.
* Screenshots: puppeteer-core + Edge (`C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe`) installed in the session scratchpad (not durable); <500px widths via fixed-width iframe; `npx astro preview --port 4398`.

## Design
* Flat EMSP sections, clean portfolio feel. No gradients.
* Pills only for real buttons or filter tags.
* No page-level grids; grids only inside a featured section.
* No boxed sections (no bordered panels/cards around section content).
* Logos and icons large.
* No full stops in section headings.
* Infographics vary per stat.
* Scroll animations trigger on visibility, never page load.
* One CTA per item.
* Round photos use [Avatar.astro](../../../src/components/Avatar.astro) (ring = padded bg, never border).

## Parked
* Hero line "Open to: full-time / freelance / mentoring".
* CV PDF download (`public/cv.pdf`).
* Case studies (6x Labs, Safe Weather, EMSP) from the GitHub README.
* OG share image (LinkedIn, Discord).

## Handoff
feat 07 · branch dev · state: Feat-07 round 3 committed (`dadd902` homepage, `7c2e090` masthead + 90.5% scale), none pushed. Plugin docs repo (`E:\HDDBackups\Portfolio\WebDev\ue5-editor-menu-shelf-pro`, branch `docs`) has the matching scale.css commit · rough outlines of Products, product page, Mentoring, Blog, Contact built (uncommitted, dev only; `Placeholder.astro` boxes mark undecided content, `ContactLinks.astro` new) · Homepage and Mentoring both open with the shared [ProfileHero.astro](../../../src/components/ProfileHero.astro) (square headshot, optional badge, h1, job title from [profile.ts](../../../src/data/profile.ts), primary/secondary buttons, unframed LinkedIn; homepage = Hire me + View my portfolio + showreel slot; Mentoring = Top Mentor + Book on MentorCruise + intro). Hero.astro, MentorHero.astro, rob-fraser.png deleted; Avatar.astro now unused (kept for mentee photos). "Top Mentor" badge on both cards (`PROFILE.badge`). Mentoring card also shows 8 core skills pills (`MENTOR_SKILLS`; the grouped Skills section was too bloated, removed). Mentoring then: stats, zigzag [SplitSection.astro](../../../src/components/SplitSection.astro) sections (Why learn + HighlightCards right; Teaching approach + StepsGraphic left), then the user's MentorCruise bio ([mentoring.ts](../../../src/data/mentoring.ts)), stats, reviews, map, freelance CTA · next: user picks a stat colour at /dev/stat-colours/, reviews the outlines, then commit; then Feat-07 waiting-on-user items. LATER items wait for the user.

---

# User Feedback (global)
<!-- Your notes for the whole project. The agent files them, ticks when done, deletes after commit. -->
