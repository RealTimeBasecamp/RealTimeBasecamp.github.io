# Feature State: Feat-04 Products page `/products/`

## Upstream Prerequisites
* **Depends On:** Feat-02 live. The user supplies the cheat sheet thumbnail (and optionally a one-line description).
* **Downstream Blocked Items:** None

## Feature Objective
* `src/data/products.ts` with two products, rendered by one shared `ProductCard` that the homepage plugin card also uses. Built on `wip/pages`.

## Implementation Checklist
* [ ] Editor Menu Shelf Pro: docs link plus "Coming soon on Fab"
* [ ] UE5 Blueprint Variables Cheatsheet PDF (2025 Edition): "Get it on Gumroad" to `https://realtimebasecamp.gumroad.com/l/ue5variablescheatsheetpdfdownload2025`
* [ ] Move the homepage plugin card onto `ProductCard`
* [ ] Masthead link

---

# Bugs & Edge Cases
* The Gumroad page doesn't expose its thumbnail, description or price.


# User Feedback


# Final review & Tests
