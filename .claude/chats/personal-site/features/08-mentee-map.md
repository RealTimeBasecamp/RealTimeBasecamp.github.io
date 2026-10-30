# Feature State: Feat-08 Mentee world map

## Upstream Prerequisites
* **Depends On:** Feat-07 (lives in the homepage's mentoring section, `#mentoring`, beside the reviews carousel)
* **Downstream Blocked Items:** None

## Feature Objective
* A world map showing where mentees are, with a simple heatmap-style overlay: one marker per
  location now, sized and glowing by mentee count later. Nice and modern, not AI-looking.

## Implementation Checklist
* [ ] `src/data/menteeLocations.ts`: `{ place, country, lat, lon, count }[]` from the list below (user will update it)
* [ ] World map SVG from a public-domain source (e.g. Natural Earth); keep it light: a simplified outline or a dotted land grid
* [ ] Plot markers by lat/lon (equirectangular or a projection that matches the chosen map)
* [ ] Markers: soft circles with a noisy gradient (SVG `feTurbulence` grain over a radial gradient). Style freedom granted: may break the flat conventions if it looks good and not AI
* [ ] Accessible: a visually hidden list of places and counts for screen readers
* [ ] Respect reduced motion if anything pulses or fades in; play on view, not on load (Global notes)
* [ ] Check 320 / 425 / desktop widths
* [ ] **Later:** scale markers by count: bigger circles and glowing areas where there are more mentees (UK = 10 should clearly dominate)

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
