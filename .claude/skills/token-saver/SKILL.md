---
name: token-saver
description: Tracks every feature, bug or task in .claude/chats/<task-slug>/ (an orchestrator.md plus one file per feature) so work survives a cleared context. Keeps the user's feedback inbox clean, files their notes as decisions, tasks or questions, and never loses an open question. Use at the start of any development work, when resuming a task, before committing, and when the chat grows long.
license: MIT
metadata:
  version: "2.0.0"
---

<!-- Copied from best-practices-skills/skills/token-saver/SKILL.md. Change it there first, then re-copy. -->

# token-saver

Small tracking files so any fresh chat can resume work cheaply, and the user can see at a glance what's open and what needs them.

## Files
* `.claude/chats/<task-slug>/orchestrator.md`: feature list, project rules, handoff.
* `.claude/chats/<task-slug>/features/<NN>-<slug>.md`: one per feature, bug or task.
* `.claude/chats/<task-slug>/context/`: files the user supplies (PDFs, screenshots). Never chat logs.

## Writing rules
* **Human sections** (Open Questions, Checklist, User Feedback): short plain lines. Link every file, section or asset mentioned with a clickable relative link, e.g. `[Hero.astro](../../../../src/components/Hero.astro)`.
* **Agent sections** (everything else): only the agent reads them. Write as tersely as you like: fragments, `->`, `;`, abbreviations. Keep every fact needed to resume; drop everything else. No prose, no history (git has it). Overwrite stale lines; never append dated notes.
* No line cap. Concise means no repetition and no prose, never dropping a fact to save lines.
* Split instead of trimming: when part of a feature grows big or separable (a sub-feature, a long reference list), move it to its own file (`<NN>a-<slug>.md`), link it from the parent's Checklist and the orchestrator's Features list, and read it only when working on it.
* A file in an older layout is migrated to the templates below the first time it's touched.

## Session start
1. Read the orchestrator, then the active feature file.
2. Process the inboxes (below).
3. If any open question would change the work you're about to do, ask all of those first, in one go. Don't ask unrelated ones.

## User Feedback inbox
* Last section of every file, so the user can jump to it. User's words only: the agent never writes notes there.
* File each unticked note, rewritten tersely: site-wide -> orchestrator `## Design`; feature choice -> `## Decisions`; work -> `## Checklist`; unclear -> `## Open Questions`. One note can go to several.
* Append a pointer to the note (`-> Checklist`, `-> Q2`). Never reword it.
* Tick `[x]` only when its work is **done** (filed is not done). Delete ticked notes after the commit that lands them.

## Open Questions
* Every question for the user lives in the feature it affects (global ones: the active feature). Never only in chat: chat is lost on `/clear`.
* Number them `Q1`, `Q2`. Tasks blocked by one say so: `[ ] Missing logos (Q6)`.
* Answered: delete the question, record the answer in Decisions, the Checklist or the code, and drop its `(Qn)` tags.
* End every reply that leaves questions open with `N open questions in [file](link)`, plus the questions if there are five or fewer.

## Checklist
* Open work only, plus one line per landed batch: `* Round 2 done (a1b2c3d)`. Fold ticked items into that line after each commit.
* Bugs are tasks: `[ ] bug: stats finish before seen`. A fix that teaches a lasting rule also becomes a Decision.
* `[-]` = dropped or superseded (say by what).

## Decisions
* One line per user choice. A newer choice replaces any older one it contradicts.

## Long chats
When the chat grows long, before a `/clear`, and after each commit: update the feature file and `## Handoff`, then print:
```
🚀 Fresh chat? Paste: "Read ./.claude/chats/<task-slug>/orchestrator.md and resume the active feature task."
```

## Commit
1. Run the `conventional-code` skill on the changed files.
2. Wait for the user's approval. Split unrelated changes into separate commits.
3. After the commit: fold the Checklist, delete ticked inbox notes, update `## Handoff`.
4. Epic finished: ask before deleting the task folder.

## Template: orchestrator.md
```markdown
# <task-slug>
Ctx: <stack; deploy; related repos>

## Features
* [ ] [Feat-01: <name>](./features/01-<slug>.md) <status, terse>

## Constraints
* <hard rules, tooling quirks, where rules live>

## Design
* <user's site-wide choices; check every feature against these before done>

## Parked
* <ideas to add only if the user asks>

## Handoff
feat 01 · branch <b> · state <uncommitted work / last commit> · next <step>

---

# User Feedback (global)
<!-- Your notes for the whole project. The agent files them, ticks when done, deletes after commit. -->
```

## Template: features/<NN>-<slug>.md
```markdown
# Feat-NN: <name>
Goal: <one line> · Deps: <Feat-xx> · Blocks: <Feat-yy>

## Open Questions
* Q1: <question> ([file](link))

## Checklist
* [ ] <task> ([file](link))

## Decisions
* <choice>

## Verify
* <optional: how to check by hand, e.g. "320px: no sideways scroll">

---

# User Feedback
<!-- Your notes for this feature. The agent files them, ticks when done, deletes after commit. -->
```
