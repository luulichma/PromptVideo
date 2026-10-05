---
type: project
created: 2026-09-15
updated: 2026-09-15
---

# Project Conventions

## PromptVideo Documentation Baseline
- Official PromptVideo documents are currently at version v2.1.
- Markdown documents are treated as archived history/reference; the authoritative project direction comes from official DOCX files.

## Docs pipeline (repo root, since 2026-10-05)
Three-stage pipeline for course deliverables, confirmed by the user 2026-09-22:
- `md-docs/<phase>/` — Markdown drafts (working/editing stage).
- Generated .docx/.xlsx live directly in `official-docs/<phase>/` (the old `design-note/outputs/` folder was dissolved on 2026-10-05); course rules live in `knowledge/rules/`.
- `official-docs/<phase>/` — the approved, official version of the document for that PM phase (currently .docx/.xlsx).
Phase folders follow PMBOK process groups: 00_Pre-project, 01_Initiating, 02_Planning, 03_Executing, 04_Monitoring_and_Controlling, 05_Closing.
See [[pm-course-methodology]] and [[promptvideo-team-planning]].
