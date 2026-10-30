# Epic Architecture: personal-site

## Technical Context
* Rob Fraser's personal site at `https://realtimebasecamp.github.io/`: homepage, bio,
  products, blog and contact, to promote full-time, freelance and mentoring work.
* Plain Astro 5.13 (no Starlight), built and deployed by `.github/workflows/deploy.yml`
  on every push to `main`. Pages Source must be "GitHub Actions" (it was Jekyll).
* Look is copied from the plugin docs site (`ue5-editor-menu-shelf-pro`, EMSP). Those
  docs stay in their own repo and are served at `/ue5-editor-menu-shelf-pro/`;
  `/emsp/` redirects there.
* The GitHub profile README is the separate `D:\Portfolio\WebDev\realtimebasecamp` repo.

## Master Feature Tree & Routing Matrix
* [x] [Feat-01: Homepage (Phase 1)](./features/01-homepage.md)
* [ ] [Feat-02: Go live](./features/02-go-live.md) (waits for Feat-07; don't push `bf8d9e4` alone)
* [-] [Feat-03: Bio page](./features/03-bio.md) (superseded: the homepage is the bio, see Feat-07)
* [ ] [Feat-09: Site navigation and page structure](./features/09-navigation.md) (active: sets page priority)
* [ ] [Feat-07: Homepage redesign](./features/07-homepage-redesign.md) (round 2 + 2026-10-30 notes waiting)
* [ ] [Feat-08: Mentee world map](./features/08-mentee-map.md) (after Feat-07 round 2)
* [ ] [Feat-04: Products page](./features/04-products.md)
* [ ] [Feat-05: Blog](./features/05-blog.md)
* [ ] [Feat-06: Contact page](./features/06-contact.md)

## Global File-Lock Registry
<!-- Mapping to avoid multi-feature collision -->
* `./src/pages/index.astro`, `./src/components/{Hero,StatRings,LogoGrid,TestimonialCarousel,ProductList}.astro`, `./src/data/*` -> Feat-07 (Status: Active)
* `./src/components/Masthead.astro` -> Feat-07 (Status: Active). Feat-04 to Feat-06 each add a page link when they go live.
* `./astro.config.mjs` -> Feat-07 (sitemap added). Feat-05 adds `@astrojs/mdx` and `@astrojs/rss`.

## Macro Architectural Constraints & Decisions
* Rules are in [CLAUDE.md](../../../CLAUDE.md): thin pages, content in `src/data/`,
  every URL in `src/data/links.ts`, copied styles name their source, lowercase asset
  names, PNG screenshots, 320px and 425px checks, no em dashes, user's own words only.
* `main` deploys, so only finished pages go there. All WIP lives on `dev` (user, 2026-10-30;
  replaces `wip/pages`). Nav order: Portfolio (= homepage), Products, Mentoring, Blog, Contact me.
* Portfolio content is planned by the user. Don't pull projects from the portfolio PDF.
* Dev-only content (the Epic badge slot) renders only under `import.meta.env.DEV`.
* Run `conventional-code` on all work before every commit. Commit only when the user
  says so, and ask before every push (pushing publishes the site).
* Sitemap added on main with the redesign (user, 2026-10-30).
* Look: flat EMSP sections. No gradients, no decorative pills. Every round photo uses
  `Avatar.astro` (ring = padded background, never a border). See Global notes below.
* Logos: one-colour currentColor SVGs from Simple Icons (CC0); missing brands show their name.
* git isn't on PATH on this machine (`F:\Git\cmd` missing). Use GitHub Desktop's
  `%LOCALAPPDATA%\GitHubDesktop\app-3.6.10\resources\app\git\cmd\git.exe`.

## Global notes (apply to every feature in ./features/)
<!-- User: add notes here. Each one applies to all pages and features, current and future.
     Agent: read this before starting any feature, and check every feature against it before it is marked done. -->
* **No boxed sections.** Content floats on the page background. No bordered panels, cards or
  divs around a section's content (logos, experience, clients, etc.).
* **Logos and icons must be large.** The current sizes are far too small.
* **No full stops in section headings** ("Experience", not "Experience.").
* **Infographics must vary.** Each stat gets its own treatment; not a row of identical rings.
* **Scroll animations must play when seen.** If something has already finished animating by
  the time it's scrolled to, that's a bug: trigger on visibility, not page load.
* **Don't duplicate calls to action.** One clear button where one will do.

## Parked extras (add only if the user says so)
* An "Open to: full-time / freelance / mentoring" line in the hero.
* A CV PDF download on Bio (`public/cv.pdf`).
* Short case studies (6x Labs, Safe Weather, EMSP) from the GitHub README.
* An OG share image for LinkedIn and Discord link previews.
* Custom domain later: `public/CNAME` (`realtimebasecamp.com`), set it in Settings >
  Pages, change `site` in both repos' `astro.config.mjs`.

---

# Active Handoff Buffer
```json
{
  "active_feature_id": "09",
  "note_2026_10_30": "Site menu built on dev (src/data/nav.ts, SiteMenu.astro, stubs incl. products/[slug]), uncommitted. Feat-07 notes logged, not started. Don't use portfolio PDF projects; the user plans portfolio content.",
  "current_git_branch": "dev",
  "last_known_ast_modification": "Homepage redesign built and uncommitted on top of bf8d9e4 (not pushed). Builds clean; 320/425/1440 checked. Stub pages products/blog/contact are in the working tree but belong on wip/pages. Tracking files and .claude/skills also uncommitted.",
  "immediate_next_step": "Wait for the user's go-ahead, then work the 'Round 2 to-do' list in features/07-homepage-redesign.md against the Global notes here. Then get answers to its 'Open questions', apply them, run conventional-code, then commit on approval: redesign + tracking to main, stubs to a new wip/pages branch. git: %LOCALAPPDATA%\\GitHubDesktop\\app-3.6.10\\resources\\app\\git\\cmd\\git.exe"
}
```
