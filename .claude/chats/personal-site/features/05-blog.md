# Feature State: Feat-05 Blog `/blog/`, `/blog/[slug]/`

## Upstream Prerequisites
* **Depends On:** Feat-02 live
* **Downstream Blocked Items:** None

## Feature Objective
* MDX posts in `src/content/blog/` (title, description, date, `draft`), an RSS feed at
  `/rss.xml` and the beehiiv signup under every post. Built on `wip/pages`.

## Implementation Checklist
* [ ] Add `@astrojs/mdx`, `@astrojs/rss`, `@astrojs/sitemap`
* [ ] Content collection with a `draft` flag kept out of the build
* [ ] Blog index and post layout, newsletter embed under each post
* [ ] `/rss.xml`
* [ ] Masthead link
* [ ] Workflow: write the post here, publish, then send it from beehiiv as full text or a summary linking back

---

# Bugs & Edge Cases


# User Feedback


# Final review & Tests
