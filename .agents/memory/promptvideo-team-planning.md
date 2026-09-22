---
name: promptvideo-team-planning
description: PromptVideo's 3-person team split, current PM phase, and where the live task tracker lives
metadata:
  type: project
---

Team of 3 students, split by business domain, confirmed 2026-09-22:
- **A — Chiến** (the user): video production/editor nghiệp vụ. Also the overall consolidator role in most planning deliverables (merges A/B/C into shared docs, owns final scope/WBS and the overall PM Plan/change-control).
- **B — Việt Quang**: accounts and subscription nghiệp vụ. Also consolidates schedule/CPM, budget/procurement, and risk across A/B/C.
- **C — Quang Anh**: admin and operations nghiệp vụ. Also consolidates quality plan, resource/RACI, communication plan, and stakeholder engagement across A/B/C.

**Why:** each Planning-phase deliverable follows the same pattern — each person drafts their own business-area content first, then one designated person (not necessarily Chiến) consolidates it into the single shared document/tab; the consolidator integrates and checks consistency, they don't rewrite the others' content.
**How to apply:** when discussing who should own a given Planning document, check the live tracker below for the current owner rather than assuming Chiến owns everything.

**Live task tracker**: `phan-cong-theo-giai-doan.xlsx` at the project root (gitignored — `*.xlsx`; a rendering also exists under `design-note/outputs/01a0a492-hop-nhom/`, but the ROOT copy is the one being actively edited). One row per task, columns: Giai đoạn (PM phase) · Người làm (owner) · Việc cụ thể (task) · Tài liệu/kết quả phải giao (deliverable) · Điều kiện hoàn thành (done criteria) · Kiểm tra/xác nhận nội bộ (review/confirm chain) · Trạng thái (status). Covers all 6 phases: Trước dự án, Khởi tạo, Lập kế hoạch, Thực hiện, Giám sát và kiểm soát, Kết thúc. This file's status column is ephemeral — re-read the file for current status rather than trusting a memory snapshot.

**Phase status as of 2026-09-22**: Pre-project and Initiating are essentially done (Business Case, Benefit Management Plan, Project Charter, Assumption Log, Stakeholder Register all exist in `design-note/official-docs/`). Planning is the current phase — the tracker already lists a full task breakdown for it (requirements per A/B/C → merge into Scope Statement + WBS/Dictionary; schedule/CPM; budget + procurement; quality plan; resource/RACI + communication + stakeholder engagement plan; risk plan/register; overall PM Plan + change control), but `design-note/md-docs/02_Planning/` and `design-note/official-docs/02_Planning/` are both still empty (only `.gitkeep`) — nothing has actually been written yet.

There is also an older day-by-day plan, `design-note/ke-hoach-hoan-thien-2-tuan.md` (proposed 2026-09-15, pending Chiến's approval, covering 16/09–29/09), which set a "Chốt bản Planning đầu" milestone for 21/09 — that date has passed with the Planning folders still empty, so the day-by-day schedule in that file is likely stale; the phase-based xlsx tracker is the more current source of truth.

See [[pm-course-methodology]] and [[docs-pipeline]] (in project-conventions.md).
