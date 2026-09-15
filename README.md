# PromptVideo

PromptVideo is a planned web service that turns text and images into MP4 presentation videos, offered through **annual subscription plans**. The browser renders and encodes video on the user's device; a service backend manages accounts, usage licenses, quotas, and payments.

This is a **Software Project Management coursework project** at the Posts and Telecommunications Institute of Technology, with Enticy Studios as the sponsoring organisation in a hypothetical business setting. Prices, revenue projections, and resource estimates are coursework assumptions, not a live commercial offer or measured results.

*[Tiếng Việt](./README.vi.md)*

## Current direction

The agreed direction is **a subscription service with local video processing and server-managed access**, based on the official Pre-project documents:

- [Business Case v2.1](./official-docs/00_Pre-project/01_Business_Case_v2.1.docx): business needs, selected approach, three business areas, subscription plans, and implementation conditions.
- [Benefit Management Plan v2.1](./official-docs/00_Pre-project/02_Benefit_Management_Plan_v2.1.docx): benefits, measurement, financial appraisal, and ownership after handover.

Both documents are **drafts awaiting approval**. This README reflects the agreed coursework direction; product targets still require implementation and acceptance testing.

## Users and intended value

Target users are small and medium businesses, teachers and lecturers, and content creators in Vietnam.

Key targets:

- Create a standard five-scene, 60-second video in under five minutes.
- Render Vietnamese text correctly, including diacritics and line breaks.
- Keep text, images, and video content on the user's device.
- Support long videos through streaming processing with controlled memory use.
- Offer local pricing and recurring revenue to sustain operations.

These are **targets to validate**, not completed features.

## Three business areas

| Area | Scope and output |
| ---- | ---------------- |
| **A. Video production** | Edit text and images, select templates, preview, render, and export MP4 locally. |
| **B. Registration, licensing, and payments** | Create accounts, manage subscriptions, check export access, count usage, process payments, expiry, and renewals. |
| **C. Service administration and operations** | Manage templates and graphics, monitor the backend, support customers, and track benefits after handover. |

## Planned architecture

```text
Browser
  Text + images → Scene JSON → Preview / frame-based rendering
                                         ↓
                           Check export access with backend
                                         ↓
                               WebCodecs → Local MP4

Service backend
  Accounts · Subscription plans · Usage licenses · Quotas · Payments
```

Effects are determined by frame number so that visual state does not depend on execution speed. Scene JSON is the shared data contract between the editor, renderer, and template library; its detailed format remains a design task.

**Export requires an Internet connection** to check usage licenses and quotas. Rendering and encoding take place in the browser; the backend handles account data, access rights, export counts, and payments. The design boundary is **zero bytes of user content uploaded to the server**.

## Proposed subscription plans

| Plan | Price | Entitlements in the Business Case |
| ---- | ----: | -------------------------------- |
| Free | VND 0 | 3 videos/month, watermark, up to 720p, all 5 templates. |
| Individual | VND 599,000/year | Unlimited video count, 1080p, no watermark. |
| Business | VND 4,900,000/year | Individual entitlements, 5 seats, VAT invoices, support response within 1 business day. |

Export access and quotas are managed by the backend and applied by the browser. The target of unrestricted video duration requires validation through a streaming prototype; it is separate from the Free plan's video-count quota.

## Coursework scope and constraints

- **Resources:** 3 team members, 450 total hours over 15 weeks, from 24 August to 6 December 2026.
- **Cash budget:** VND 3,500,000; labour is accounted for separately in economic appraisal.
- **Product scope:** editor, renderer/preview, MP4 export, 5 templates, project save/load, accounts, subscriptions, payments, and administration.
- **M2 conditions:** demonstrate the streaming prototype and submit the payment-provider application. If the prototype fails, the scope reduction is 3 templates and removal of project save/load, retaining the delivery date.
- **After handover:** the operating organisation takes over the service and tracks benefits for 3 years. Revenue and renewal rates must be measured after launch.

Cash-flow calculations, NPV, BCR, and payback currently reside in the Benefit Management Plan. Consult that source rather than duplicating financial figures across summaries.

## Repository status

The repository currently focuses on project management documents and coursework research. It has no application `package.json` or verified run commands, so software setup instructions are not yet available.

| Directory | Purpose |
| --------- | ------- |
| [official-docs/](./official-docs/) | Official submission documents; each file records its own approval status. |
| [md-docs/](./md-docs/) | Markdown documents, WBS, templates, and working notes; counterparts to the official set are incomplete. |
| [research/](./research/) | Internal summaries of lecture requirements and techniques for drafting and reviewing the coursework documents. |

## Using the documents

Use the Pre-project set in `official-docs/` as the reference for product direction and the business model. Use the [course requirements](./research/01_Quy_tac_bat_buoc.md) when editing the documents. Recheck older comparisons and working notes against the official files before relying on them; `_archive` material is historical.