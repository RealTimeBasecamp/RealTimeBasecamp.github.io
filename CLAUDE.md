# Real Time Basecamp - personal site

Rob Fraser's personal site at `https://realtimebasecamp.github.io/` (Astro,
no Starlight). Not the GitHub profile README: that's the separate
`RealTimeBasecamp/realtimebasecamp` repo.

The Editor Menu Shelf Pro docs are a separate repo
(`ue5-editor-menu-shelf-pro`) served under this site at
`/ue5-editor-menu-shelf-pro/`. `/emsp/` redirects there (`astro.config.mjs`).

## Publishing
- Pushing to `main` deploys (`.github/workflows/deploy.yml`, Pages source
  "GitHub Actions"). Only finished pages go on `main`.
- Work in progress lives on the `dev` branch; each page is merged to `main`
  when it's finished. The masthead dropdown (`src/data/nav.ts`) lists a page
  publicly only once its `live` flag is set; the dev server shows them all.
- Content that must never go live (e.g. the Epic badge slot) renders only
  under `import.meta.env.DEV`.

## Tracking work
- All features and development follow the `token-saver` skill
  (`.claude/skills/token-saver/`). Progress lives in
  `.claude/chats/personal-site/`: read `orchestrator.md` first, update the
  active feature file as work lands, and keep its Handoff line current.
- Run the `conventional-code` skill (`.claude/skills/conventional-code/`) on
  all work before every commit.
- Both skills are copies from `D:\Portfolio\WebDev\best-practices-skills`.
  Change them there first, then re-copy.

## Code organisation
Same rules as the plugin docs site's homepage:
- **Pages stay thin.** A page is the running order of its components.
  Components live in `src/components/` and own their CSS in a scoped `<style>`.
- **Content lives in `src/data/`.** Words, links and repeated items (cards,
  social links) are typed arrays there, so updating content never touches
  layout code. Every URL goes through `src/data/links.ts`.
- **The styles are a copy.** `src/styles/` and the masthead, footer, lockup
  and newsletter embed come from the plugin docs site. Each file's header
  names its source. Change the look there first, then re-copy.
- **Icons are `.svg` files** in `src/assets/icons/`, imported as components
  and painted with `currentColor`.
- **Asset file names are lowercase** and imports match their case exactly:
  the Pages build runs on Linux.
- **Screenshots pass `format="png"`** to `<Image>` (lossy WebP looks soft at
  1920px). Photos stay on the default format.
- **Copy is the user's own words.** Bio facts come verbatim from LinkedIn or
  GitHub; never invent experience, skills or quotes. No em dashes.
- **Check 320px and 425px widths** (screenshot inside a fixed-width
  `<iframe>`, headless browsers won't go below ~500px). No sideways scroll.
- Commit messages: `type: Past-tense summary` (`feat:`, `fix:`, `style:`,
  `docs:`, `chore:`).
