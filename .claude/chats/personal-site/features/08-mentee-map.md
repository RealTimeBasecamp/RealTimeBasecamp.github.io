# Feature State: Feat-08 Mentee world map

## Upstream Prerequisites
* **Depends On:** Feat-07 (lives in the homepage's mentoring section, `#mentoring`, beside the reviews carousel)
* **Downstream Blocked Items:** None

## Feature Objective
* A world map showing where mentees are, with a simple heatmap-style overlay: one marker per
  location now, sized and glowing by mentee count later. Nice and modern, not AI-looking.

## Implementation Checklist
* [x] `src/data/menteeLocations.ts`: `{ place, lat, lon, count }[]` from the list below (user will update it)
* [x] Dotted land grid `src/assets/world-dots.svg` (33 KB, 3790 dots, 2-degree grid) generated once from Natural Earth 110m land (world-atlas, public domain) with a scratchpad script (d3-geo + topojson-client, not project deps). Equirectangular, lat 78 to -58
* [x] [MenteeMap.astro](../../../../src/components/MenteeMap.astro): markers on the same projection, accent radial glow + feTurbulence grain, white centre dot
* [x] Hidden list of places and counts (figcaption, sr-only)
* [x] Fades in largest first at 50% visible; reduced motion = static
* [x] Scaled by count (radius 3 + sqrt(count) x 3.2): UK dominates
* [x] Lives on the Mentoring page (dev only), not the homepage
* [x] Check 320 / 425 widths: fits, no sideways scroll; map is small on phones (could crop to the populated longitudes later)

## Locations (rough list from the user, 2026-10-30; will be replaced by a full list)
| Place | Count |
|---|---|
| New York City, USA | 1 |
| Los Angeles, California, USA | 2 |
| San Francisco, USA | 1 |
| Minnesota, USA | 1 |
| Oman | 1 |
| Dubai, UAE | 1 |
| Malaysia | 2 |
| Australia, west coast (Perth) | 1 |
| United Kingdom | 10 |
| Germany | 1 |
| Italy | 2 |
| Japan | 1 |
| Brazil | 2 |

Total 27 (the site says 30+; the list is rough). Country-level entries get the capital or main city as the marker point unless the user says otherwise.

---

# Bugs & Edge Cases


# User Feedback
* 2026-10-30: "Mentoring page": there isn't one. Mentoring is the "What my mentees say" section on the homepage (`/#mentoring`). The map goes there unless the user wants a separate page.


# Final review & Tests
