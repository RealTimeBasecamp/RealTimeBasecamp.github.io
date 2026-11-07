# Feat-07: Homepage redesign
Goal: homepage = bio, one column: hero + showreel, stats, experience, clients, software, reviews, products, blog · Deps: Feat-01 · Blocks: Feat-02 (push this design), Feat-04 to 06 (copy its look)

## Open Questions
* Q2: Code Institute bootcamp (2025 - 2026) dropped from the page per "just keep the bit about my degree". Confirm, or add it back to the timeline? ([experience.ts](../../../../src/data/experience.ts))

## Checklist
* Round 1 done (`9e7275d`)
* Round 2 done (`dae2fae`): one-button hero, varied stats ([Stats.astro](../../../../src/components/Stats.astro)), career [Timeline.astro](../../../../src/components/Timeline.astro), no panels, larger logos, no heading full stops, review stars, product tags + one CTA, logo-only clients, Warner Bros. logo, Education timeline
Round 3, in order (all HOLD until the user says go):
1. [x] Structure ([index.astro](../../../../src/pages/index.astro)): remove Blog section; no Education section, degree joins the Experience timeline; new order Hero/showreel, Experience, Clients, Stats (moved down to break it up), Software, Reviews, Products
2. [x] Even out spacing between all sections. Measured at 1440: all 100-116px except Reviews (was 188 above / 112 below, now 152 / 90). Fix: carousel lost its 1rem top padding, quote 64ch on desktop, nav closer. Remaining gap is short quotes centred in the longest quote's height; user to judge ([Section.astro](../../../../src/components/Section.astro))
3. [x] Products rework: cards after flippednormals.com Featured row (`--surface` card, 16:9 image flush on top, tags, title, text, outlined button bottom right). One standard card size (auto-fill grid, min 19rem). Cheatsheet card = user's `cheatsheet-thumbnail.png` (1600x900), its product page banner = `cheatsheet-banner.png` (`banner` field, shown on the [slug] stub; Feat-04 to place it properly). EMSP text shortened to "Build custom toolbar menus and workspaces in Unreal Engine 5."; EMSP is a grey box (user rejected the ExampleMenu screenshot). Filled buttons only if the user still finds them hard to see
   * [x] More room around Stats (between Clients and Software); image corners 6px (cards, showreel) ([ProductList.astro](../../../../src/components/ProductList.astro))
4. [x] UE stat: option 1 "logo fill" chosen. `kind: 'fill'`: UE logo in `--line` with an accent copy revealed bottom to top (clip-path), number + label below like the other two
   * [x] Site-wide scale 90.5% (user's pick) in [scale.css](../../../../src/styles/scale.css)
   * [x] Scale applied to the plugin docs repo homepage: `src/styles/home/scale.css` + import in `HomeLayout.astro` (uncommitted there; repo at `E:\HDDBackups\Portfolio\WebDev\ue5-editor-menu-shelf-pro`, branch `docs`). This site's scale.css is now a copy of it. Starlight docs pages unchanged
   * [x] Masthead: full window width on desktop (no page gutter), icon only (no "RT Basecamp" wordmark, `Lockup iconOnly`), links centred, white Contact me far right ([Masthead.astro](../../../../src/components/Masthead.astro)). Plugin docs navbar stays as it is (user's call); merging the two sites is a later decision
   * [x] Hero photo ring: subtle grey (`--line`, 2px) instead of blue ([Avatar.astro](../../../../src/components/Avatar.astro))
   * [x] Spacing system (user: "padding terrible, review site wide"): `--section-gap` clamp(3.5rem, 10vw, 8.25rem) (desktop raised 50% at the user's request; phones unchanged) for Section, SplitSection, ProfileHero and before the footer; `--block-gap` for a CallToAction under other content; Stats and CallToAction have no outer margins. Measured 1440: section gaps 80-115px on home and mentoring. tokens.css marked TRIAL (port to plugin docs if kept)
   * [ ] USER CHECKING (uncommitted): teal trial. `--accent` = logo teal #00bbbf site-wide, periwinkle kept as `--accent-blue` (tokens.css, marked TRIAL). User wants to mix teal + blue across the site; pick where each goes. If kept, port tokens to the plugin docs repo first (tokens.css is a copy)
   * [x] Stats round 5: marks 4.5rem (middle of 11rem and 2.75rem), number up to 2.5rem. `colour` prop; dev-only comparison at /dev/stat-colours/ (`src/pages/dev/[preview].astro`, absent from prod builds): accent vs logo teal #00bbbf / aqua #00ffe2 / deep teal #006880. Awaiting the user's pick. Homepage stats moved between Experience and Clients. Mentoring adds "A few hours" response time (`kind: 'clock'`, `text`)
   * [x] Stats round 4 (user: "big and ugly, not subtle"): small 2.75rem marks, number + muted label carry it. Split data: `HOME_STATS` (14 UE fill, 10+ bars, 15 five-star reviews as stars) and `MENTORING_STATS` (30+ mentees dots, 4.9 rating stars filled to 98%). `Stats items={...}`. Map grain removed (user: looked bad). Uncommitted
   * [x] UE fill logo white (Epic brand guidelines: no recolouring). Reduced motion already shows the final frame (script never sets `is-pending`)
   * [x] Reviews: no "Read full review"; text 76ch on desktop; Dylan + Uli cut to whole sentences (verbatim, no rewording); every name/role links to the MentorCruise profile
   * [x] Product images encoded at quality 100 (shadow banding) ([Stats.astro](../../../../src/components/Stats.astro))
5. [x] Humanizer review of all site copy, reported (findings in chat 2026-10-31): footer note + Mentoring menu line are rule-of-three, menu lines are agent placeholders needing the user's words, meta description capitalisation mismatch with tagline, job title differs across tagline/schema/showreel. User's wording applied: footer "Unreal tutorials and content. No spam.", MentorCruise menu line "Read my reviews.", meta description "...mentor with 14 years of experience in Unreal Engine.", job title = Technical Artist. Other menu lines kept. Clients section ends with a centred hire CTA ([CallToAction.astro](../../../../src/components/CallToAction.astro), words in [cta.ts](../../../../src/data/cta.ts)): "Building something in 3D?" / "I'm available for freelance work." / big white "Let's talk" button to /contact/. Shows only once the contact page is live (like the masthead button)
6. [x] conventional-code (removed dead masthead divider, moved product banner CSS into ProductBanner.astro), committed `dadd902`, `7c2e090`. Final order: Hero/showreel, Experience, Clients + hire CTA, Software, Stats, Reviews, Products

Waiting on the user (slot in whenever it arrives):
* [ ] Logo beside every Experience timeline entry (degree included). Have: MentorCruise, PlayStation. Missing, add manually as one-colour SVGs in src/assets/logos/ (Simple Icons has none): Cosmic Stag Games, University College London, Foster + Partners, Framestore, Milk Visual Effects, Royal Navy, University of Portsmouth ([experience.ts](../../../../src/data/experience.ts))
* [ ] EMSP card image, 16:9 (`image` in [products.ts](../../../../src/data/products.ts); set `screenshot: true` for UI captures)

LATER (products page, its own feature):
* [ ] Products page cards in preset sizes (e.g. large featured / standard). Everywhere else (homepage, links) uses the one standard card
* [x] All MentorCruise reviews: 8 in [testimonials.ts](../../../../src/data/testimonials.ts), verbatim from the user's list (Fabricio = the shorter PDF version, at the user's request)
* [ ] HOLD: Mentee LinkedIn photos ([Avatar.astro](../../../../src/components/Avatar.astro)) and profile links for selected mentees. Ask each mentee for permission first (photo + link); user to say which mentees and send URLs/photos once agreed
* [ ] Custom showreel thumbnail (a still)
* [ ] Rename the showreel video on YouTube to a better title (lead with "Technical Artist", the chosen job title). Then update the embed's `title` in [Hero.astro](../../../../src/components/Hero.astro) (currently "Rob Fraser UE5 Generalist Showreel 2026")

LATER:
* [ ] Timeline detail per role: achievement bullets from the [CV](../context/Rob_Fraser_Senior_Generalist_Artist_2026_CV.pdf) + icons, in an expandable panel on hover/tap ([experience.ts](../../../../src/data/experience.ts)). `details` field exists; Milk Visual Effects + Royal Navy already filled from the user's text, other roles still to fill
* [ ] Split Software into groups by area (e.g. 3D, engine, code) ([logos.ts](../../../../src/data/logos.ts))
* [ ] Missing logos from press kits / Wikimedia, redrawn in one colour: Microsoft, Amazon, JP Morgan, NEOM, Magic Leap, Royal Navy, UCL, Foster + Partners, Framestore, Cosmic Stag Games, ZBrush, Substance Painter, Substance Designer

## Decisions
* Facts from user only: [CV](../context/Rob_Fraser_Senior_Generalist_Artist_2026_CV.pdf), [portfolio PDF](../context/Rob_Fraser_portfolio_2026.pdf). Never PDF p7 (Jurassic World), never Spielberg/Harry Potter.
* Tagline "UE5 Technical Artist | Pipeline Developer | Mentor @ MentorCruise". Hero 1 CTA "View my portfolio" -> ArtStation.
* Stats: UE 14y ring+UE logo; 10+y pro bars; 30+ mentees dots (30+ current; CV's 20+ is old). `kind` in stats.ts. Play per stat at 75% visible, rootMargin bottom -15% (was 35% -> finished before seen).
* Experience = CV timeline, newest first; rail fills on scroll, only grows, listener off when full. No Education heading or separate timeline (round 3): the Portsmouth degree sits in the Experience timeline. Timeline logos all fit one 2rem square so wide marks (MentorCruise) match compact ones (PlayStation).
* Software keeps JavaScript + Django.
* Clients: PDF list + NEOM, JP Morgan, Amazon, Microsoft, Apple, Volkswagen, Warner Bros. (WB was the client; Harry Potter IP name never shown). Logo only (`names={false}`); no logo -> name. Simple Icons v15 has none of the missing ones.
* Reviews: carousel, verbatim PDF p2 (2 em dashes -> commas), 5 stars each (`rating`). No heading, intro or MentorCruise button; no panel and no hairlines (user disliked both).
* Products: `tags` (PLUGIN, PDF; outlined, for later filtering), one `cta`, no eyebrow, no status/"Coming soon on Fab", "500+ downloads" dropped for good.
* Showreel `Gpq8IIuzLFc` (`KcjBpfG7DbY` not embeddable).
* Email blank until spam-safe redirector.
* Round photo ring is subtle grey (`--line`), not blue; still the padded-bg technique (no seam).

## Verify
* 1440x900 load: all `.stat` still `is-pending`, timeline `--progress` 0.
* 320 / 425 / 1440: no sideways scroll.

---

# User Feedback
<!-- Your notes for this feature. The agent files them, ticks when done, deletes after commit. -->
