---
name: token-saver
description: Tracks every feature, bug or task in .claude/chats/<task-slug>/ (an orchestrator.md plus one file per feature) so work survives a cleared context. Use at the start of any development work, when resuming a task, before committing, and when the chat grows long.
---

<!-- Copied from best-practices-skills/skills/token-saver/SKILL.md. Change it there first, then re-copy. -->

# Skill: token-saver

A rolling Chat State & Task Context Manager skill to stop wasting tokens on long chats by using isolated feature sub-states, preventing context rot, and strictly executing "Plan, Commit, and Clear" cycles.

## 1. Directory Structure & Namespacing
Automatically detect the repository root. For every distinct feature, bug, or task, create an isolated workspace using a kebab-case slug of the task name:
`./.claude/chats/<task-slug>/orchestrator.md`
`./.claude/chats/<task-slug>/features/<feature-id>-<feature-slug>.md`
`./.claude/chats/<task-slug>/context/`

### Directory Rules:
* **orchestrator.md**: Placed in the root of the task folder. Tracks the macro engine architecture, global file-lock registries, feature roadmaps, and the active session token handoff anchor.
* **features/**: Contains hyper-focused markdown tracking files for individual trackable sub-tasks. Each file isolatedly tracks its own prerequisites, implementations, bugs, feedback, and line-level final reviews.
* **context/**: Reserved strictly for external reference assets (e.g., screenshots, architecture diagrams, user-supplied sample data files). **Banned:** Do not spam chat history transcripts or rolling conversation logs into this folder.

---

## 2. Token Tracking, Context Threshold & Dynamic Re-creation
* **Token Tracking Instruction**: The agent must inspect the total session token usage (input + output context) at the conclusion of every single turn using available CLI metadata or internal metrics.
* **Threshold**: Monitor context size. If the active chat conversation approaches or exceeds **120,000 tokens**, immediately halt normal processing and execute the following automated reset sequence before responding further.
* **Execution (Plan, Commit, and Clear)**: 
  1. **Freeze**: Freeze the conversational stream and notify the user that a memory management cycle has triggered.
  2. **Update**: Update the active feature file in `./features/` with all structural code changes, edge-case discoveries, and completed checkmarks.
  3. **Handoff**: Write a concise, machine-readable continuation payload under the `# Active Handoff Buffer` inside `orchestrator.md`, detailing the exact working Git branch and last uncommitted state.
  4. **Nuke**: Issue the `/clear` command or call the environment's context reset tool to instantly purge the active chat history.
  5. **Resume**: The initial prompt of the fresh conversation must exclusively be: *"Read ./.claude/chats/<task-slug>/orchestrator.md and resume the active feature task."*

---

## 3. Session End, Quality Gate & Commit Workflow
When a specific feature or the entire task is flagged as complete:
1. **Linting & Best Practices**: Automatically execute the `conventional-code` skill (`./.claude/skills/conventional-code/`) against all modified files tracked in the target feature state.
2. **Review Generation**: Populate the `# Final review & Tests` block inside the specific feature file. Line numbers must be exact and extracted directly from `git diff` boundaries.
3. **Commit Phase**: Wait explicitly for user authorization. Once approved, split unrelated modifications into separate Git hunks/commits matching the isolated feature.
4. **Lifecycle Cleanup**: After commit as the user if they want to delete the entire task subfolder (`./.claude/chats/<task-slug>/`) completely upon complete epic wrap-up, unless the user explicitly commands to preserve it.
5. **New Chat Transition**: After the commit or when token limit has reached, output a standalone, copy-pasteable block for the user to easily transition to a fresh chat if they choose:
   ```
   🚀 Ready for a fresh context window? Open a new chat and paste:
   "Read ./.claude/chats/<task-slug>/orchestrator.md and resume the active feature task."
   ```

---

## 4. Template: orchestrator.md Layout
```markdown
# Epic Architecture: [Insert Task Slug Here]

## Technical Context
* [High-level summary of the macro engine/architecture being modified]

## Master Feature Tree & Routing Matrix
* [ ] [Feat-01: Feature Name](./features/01-feature-name.md)
* [ ] [Feat-02: Feature Name](./features/02-feature-name.md)

## Global File-Lock Registry
<!-- Mapping to avoid multi-feature collision -->
* `./src/components/Signup.tsx` -> Locked by `Feat-01` (Status: Active)
* `./src/styles/global.css` -> Locked by `Feat-02` (Status: Pending)

## Macro Architectural Constraints & Decisions
* [List global rules, structural paradigms, or hard constraints]

---

# Active Handoff Buffer
```json
{
  "active_feature_id": "01",
  "current_git_branch": "feature/auth-layer",
  "last_known_ast_modification": "Exported validation hooks on line 42 of Signup.tsx",
  "immediate_next_step": "Implement the blank string edge case inside features/01-feature-name.md"
}
```
```

---

## 5. Template: `./features/<id>-<slug>.md` Layout
```markdown
# Feature State: [Insert Feature ID and Name]

## Upstream Prerequisites
* **Depends On:** [e.g., Feat-01 Architecture must be marked Complete]
* **Downstream Blocked Items:** [e.g., Feat-03 cannot begin until this file passes QC]

## Feature Objective
* [Granular goal of this specific isolated feature tracking file]

## Implementation Checklist
* [ ] Task 1
* [ ] Task 2

---

# Bugs & Edge Cases
<!-- User or Agent: Append discovered bugs, breaking changes, or unexpected system quirks specific to this feature branch here -->


# User Feedback
<!-- User: Scroll to the bottom of this specific feature file and paste text feedback, code change requests, or design iterations here -->


# Final review & Tests
<!-- AI: Populate this section ONLY when this specific feature is flagged complete. Derive line ranges from the active git diff. Ensure relative file paths are fully clickable links using the format [./path/to/file](./path/to/file). -->

### File Code diff & Quality Control
* [ ] [./src/components/TargetFile.tsx](./src/components/TargetFile.tsx)
    * **Feature / Edit List:**
        * [ ] Lines 45-62: Summary of implementation/modifications made
            1. **Verification Test 1:** [Step-by-step test condition for manual or automated run]
            2. **Verification Test 2:** [Step-by-step test condition for manual or automated run]
```
