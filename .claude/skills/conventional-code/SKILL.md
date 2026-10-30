---
name: conventional-code
description: Reviews new or changed code for bugs, maintainability and fit with the existing codebase. Catches hard-coded values and colours, duplicated logic or UI that should be a shared module or component, hacks, unconventional structure, missing docstrings, unclear comments, inline CSS or JS that belongs in its own file, non-semantic markup, missing SEO basics, weak dependency choices and long-term risks. Fixes critical issues and reports the rest briefly. Use after finishing any code change, when reviewing pending git changes or a PR, and always before committing.
license: MIT
metadata:
  version: "1.1.0"
---

# Conventional code

Check that new code works, fits the codebase and will still be easy to change in a year. Report real problems only: if a senior engineer would not raise it, skip it.

## Scope

1. Review `git diff HEAD` plus untracked files, `git diff --cached` before a commit, or the files or PR the user names. Read surrounding code only where needed to judge fit.
2. Learn the house style first, quickly: lint and format config (eslint, prettier, biome, ruff, pyproject, editorconfig, tsconfig), CLAUDE.md, AGENTS.md or CONTRIBUTING, and one or two neighbouring files of the same kind. Existing conventions beat this checklist and your preferences.
3. Run the project's own fast checks if they exist: lint, typecheck, tests for touched modules. Do not install new tooling.

## Checklist, in priority order

1. Correctness and security. Logic errors, unhandled errors or nulls, missing `await`, race conditions, leaks, broken imports, unchecked input at boundaries, secrets in code, injection, unsafe `eval`.
2. Fit. Naming, file location, folder structure, patterns, idioms and libraries match the codebase. New code reuses existing helpers, components, constants and API clients instead of adding parallel ones.
3. No magic values. URLs, keys, colours, sizes, timeouts, limits and user-facing strings live in config, env vars, theme tokens or named constants. Secrets stay in env and out of git.
4. No duplication. Logic repeated three or more times, or a near copy of existing code, becomes a function, module, hook or service. UI built more than once (buttons, inputs, cards) becomes one component with props or variants. Do not abstract two lines used twice.
5. Separation. Styles live in stylesheets, theme tokens or `StyleSheet` objects, not repeated inline. Colours come from theme variables, defined once per scheme with matching names in light and dark. No inline scripts in HTML. One component per file. Config apart from logic. Split files that do several unrelated jobs.
6. Semantics and SEO (web UI). Native elements over `div` soup (`button` for actions, `a` for navigation, `nav`, `main`, lists, `label` on inputs, `alt` on images), one `h1` and ordered headings per page, and for new or changed pages a unique title, meta description, canonical and social tags, a sitemap entry, and the page's keyword in the title, `h1`, slug and first paragraph without stuffing. Apps: roles and labels on controls.
7. No hacks. No silenced errors or lint rules without a reason in a comment, no `any` or casts to quiet the compiler, no timeouts to paper over races, no dead code, commented-out blocks, debug logs or TODOs without a ticket.
8. Docstrings and comments. Every new or changed function, method and class has a docstring in the codebase's format; one line is enough for obvious ones. Comments explain why, not what. Formats per language: `references/docstrings.md`. If comments read like AI prose, fix the obvious ones and suggest running the `ai-text-debloater` skill.
9. Dependencies. Each new package is needed (not a few lines of code, not already covered by the platform or an existing dependency), actively maintained, widely used, licence-compatible, and the ecosystem's standard choice. Flag two packages doing one job. Check only newly added packages.
10. Long-term risk. Tight coupling, global mutable state, missing loading, empty and error states, untested tricky logic, unpinned or abandoned packages, unguarded platform-specific code, N+1 queries, re-render loops, unbounded lists, and UI without labels, focus states or adequate contrast.

## Severity

- Critical: bug, security hole, data loss, broken build. Fix now.
- Important: checklist items 2 to 10 that will cost time soon. Fix now if small and inside the change; otherwise list it.
- Minor: anything else. Do not report or touch unless asked.

Report only issues you are at least 80% sure are real. Skip pre-existing issues outside the change unless they block it. Skip what a linter or formatter already enforces.

## Fixing

- Fix critical and small important issues directly, in the house style. Stay inside the change; no drive-by refactors.
- Describe larger refactors and ask first.
- Re-run the project checks after fixing.

## Output

```
Reviewed: <files or diff range>    Checks: <lint, types, tests run, or none>
Fixed
- path:line  what changed and why, one line
Needs a decision
- path:line  issue and suggested fix
```

Nothing else. No praise, no summary essay. If there is nothing to report, say "No issues found" and list the checks run.

## Sources

[Google engineering practices: what to look for in a code review](https://google.github.io/eng-practices/review/reviewer/looking-for.html), Anthropic's [code-review](https://github.com/anthropics/claude-code/tree/main/plugins/code-review) plugin and [pr-review-toolkit](https://github.com/anthropics/claude-code/tree/main/plugins/pr-review-toolkit) (high-signal filtering, confidence threshold), and [Best practices for writing code comments](https://stackoverflow.blog/2021/12/23/best-practices-for-writing-code-comments/).
