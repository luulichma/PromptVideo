---
name: pm-course-methodology
description: Where the PromptVideo team's PM course rules/tools live, and how to use them when advising on the project's PM documentation
metadata:
  type: reference
---

Course reference decks: `design-note/research/PM - NDQ/PM01_Introduction.pdf` through `PM11_Quality Management & Close Project.pdf` (11 decks, one per PM knowledge area/process group, lecturer Nguyễn Đình Quảng).

The team already distilled these into two working documents — read these first instead of re-reading the raw PDFs:
- `design-note/research/01_Quy_tac_bat_buoc.md` — mandatory rules extracted from the decks, with slide citations (e.g. `PM03:26`). Covers Business Case, Benefit Management Plan, Project Charter (12-section structure), Assumption Log (5-column format), Stakeholder Register, Scope/WBS rules (100% rule, 8/80 rule), RTM columns, Schedule/CPM formulas, Cost/reserve rules, Risk, RACI, Communication, Quality/Close.
- `design-note/research/02_Kien_thuc_su_dung.md` — optional tools/techniques with guidance on when to use which (feasibility tools, requirements-gathering techniques, stakeholder models, estimation techniques, etc.).
- `design-note/research/03_Doi_chieu_voi_tai_lieu_hien_co.md` — a **dated snapshot** (gap analysis of the v2.1 docs against the rules above, from before Stakeholder Register existed). Per the team's own later note in `ke-hoach-hoan-thien-2-tuan.md`, this file is "lịch sử nhận xét, không áp dụng máy móc" — treat it as historical context, not a current to-do list; verify each item against the current official-docs before acting on it.

Key structural fact (confirmed directly from PM04_Project Planning.pdf, slides 10-11 and 15): the Project Management Plan has two distinct kinds of components that are easy to conflate:
- **Subsidiary management plans** (Scope, **Requirements**, Schedule, Cost, Quality, Resource, **Communications**, Risk, Procurement, Stakeholder Engagement management plans) — short documents describing *how* that area will be managed/handled during the project.
- **Project documents** (Requirements documentation, Requirements Traceability Matrix, Risk Register, Stakeholder Register, etc.) — the actual detailed content produced by applying those plans.
So "Requirements Management Plan" (how we'll gather/manage requirements) and "Requirements Documentation" (the actual RQ/NF specs per business area + RTM) are two different artifacts; both belong in Planning, but the detailed A/B/C specs the team writes are the latter, not the former.

See [[promptvideo-team-planning]] for how the team has operationalized this.
