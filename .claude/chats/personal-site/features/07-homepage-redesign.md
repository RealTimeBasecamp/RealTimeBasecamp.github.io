# Feat-07: Homepage redesign
Goal: homepage = bio, one column: hero + showreel, stats, experience, clients, software, reviews, products, blog · Deps: Feat-01 · Blocks: Feat-02 (push this design), Feat-04 to 06 (copy its look)

## Open Questions
* Q1: UE stat redesign, which option? User suggested: drop the ring, Unreal logo fills bottom to top so it gets coloured in. Open to other ideas, agent to offer options before building ([Stats.astro](../../../../src/components/Stats.astro))

## Checklist
* Round 1 done (`9e7275d`)
* Round 2 done (`dae2fae`): one-button hero, varied stats ([Stats.astro](../../../../src/components/Stats.astro)), career [Timeline.astro](../../../../src/components/Timeline.astro), no panels, larger logos, no heading full stops, review stars, product tags + one CTA, logo-only clients, Warner Bros. logo, Education timeline
* [ ] LATER: Timeline detail per role: achievement bullets from the [CV](../context/Rob_Fraser_Senior_Generalist_Artist_2026_CV.pdf) + icons, shown in an expandable panel on hover/tap to keep it clean ([experience.ts](../../../../src/data/experience.ts))
* [ ] LATER: Split Software into groups by area (e.g. 3D, engine, code) ([logos.ts](../../../../src/data/logos.ts))
* [ ] Custom showreel thumbnail (needs a still from you)
* [ ] LATER: Missing logos from press kits / Wikimedia, redrawn in one colour: Microsoft, Amazon, JP Morgan, NEOM, Magic Leap, Royal Navy, UCL, Foster + Partners, Framestore, Cosmic Stag Games, ZBrush, Substance Painter, Substance Designer
* [ ] HOLD (don't action yet): "14 years" UE stat is misaligned with the other two stats and its inner text looks off. Fix with the Q1 redesign ([Stats.astro](../../../../src/components/Stats.astro))
* [ ] Find all MentorCruise reviews and add every one as a testimonial (verbatim). Public page cuts reviews off (see Feat-03), so may need them from you
* [ ] Mentee photos ([Avatar.astro](../../../../src/components/Avatar.astro)) and profile links (needs photos, which mentees, URLs)
* [ ] Product preview images, tags under the image ([ProductList.astro](../../../../src/components/ProductList.astro))
* [ ] Humanizer review of all site copy, report findings (e.g. blog intro in [index.astro](../../../../src/pages/index.astro))
* [ ] conventional-code, then commit on approval (next round)

## Decisions
* Facts from user only: [CV](../context/Rob_Fraser_Senior_Generalist_Artist_2026_CV.pdf), [portfolio PDF](../context/Rob_Fraser_portfolio_2026.pdf). Never PDF p7 (Jurassic World), never Spielberg/Harry Potter.
* Tagline "UE5 Technical Artist | Pipeline Developer | Mentor @ MentorCruise". Hero 1 CTA "View my portfolio" -> ArtStation.
* Stats: UE 14y ring+UE logo; 10+y pro bars; 30+ mentees dots (30+ current; CV's 20+ is old). `kind` in stats.ts. Play per stat at 75% visible, rootMargin bottom -15% (was 35% -> finished before seen).
* Experience = CV timeline, newest first; rail fills on scroll, only grows, listener off when full. Education = 2nd Timeline below it (`EDUCATION` in experience.ts).
* Software keeps JavaScript + Django.
* Clients: PDF list + NEOM, JP Morgan, Amazon, Microsoft, Apple, Volkswagen, Warner Bros. (WB was the client; Harry Potter IP name never shown). Logo only (`names={false}`); no logo -> name. Simple Icons v15 has none of the missing ones.
* Reviews: carousel, verbatim PDF p2 (2 em dashes -> commas), 5 stars each (`rating`). No heading, intro or MentorCruise button; no panel and no hairlines (user disliked both).
* Products: `tags` (PLUGIN, PDF; outlined, for later filtering), one `cta`, no eyebrow, no status/"Coming soon on Fab", "500+ downloads" dropped for good.
* Showreel `Gpq8IIuzLFc` (`KcjBpfG7DbY` not embeddable).
* Email blank until spam-safe redirector.
* Round photo seam fix: ring = Avatar padded bg (see orchestrator Design).

## Verify
* 1440x900 load: all `.stat` still `is-pending`, timeline `--progress` 0.
* 320 / 425 / 1440: no sideways scroll.

---

# User Feedback
<!-- Your notes for this feature. The agent files them, ticks when done, deletes after commit. -->
