# Third-Party Notices

PromptVideo is distributed under the terms in [LICENSE](./LICENSE). It
incorporates the third-party components listed below, which remain under
their own licences. Nothing in `LICENSE` limits the rights those licences
grant you in those components.

## Runtime dependencies

| Component | Licence | Notes |
| --------- | ------- | ----- |
| [mediabunny](https://github.com/Vanilagy/mediabunny) | MPL-2.0 | File-level copyleft. See the note below. |
| [react](https://github.com/facebook/react), [react-dom](https://github.com/facebook/react) | MIT | Copyright (c) Meta Platforms, Inc. and affiliates. |
| [zod](https://github.com/colinhacks/zod) | MIT | Copyright (c) Colin McDonnell. |
| [@fontsource-variable/noto-sans](https://github.com/fontsource/font-files) | OFL-1.1 | Noto Sans font files; the packaging is MIT. |

Build and test tooling (Vite, TypeScript, Vitest, Playwright, oxlint, and
their transitive dependencies) is MIT or Apache-2.0 licensed and is not
redistributed as part of the product.

## MPL-2.0 obligation (mediabunny)

The Mozilla Public License 2.0 is copyleft per file, not per project.
Bundling mediabunny into a proprietary application is permitted. The
obligations that apply here are:

- Keep mediabunny's copyright and licence notices intact in the source
  tree and in distributed bundles.
- If a file of mediabunny's own source is modified, the source of **that
  file** must be made available to recipients under MPL-2.0. Calling its
  API, wrapping it, or extending it from separate files in this repository
  does not trigger this.

As of this writing, no mediabunny source file has been modified in this
repository.

## Updating this file

Regenerate the list whenever a runtime dependency is added, removed, or
replaced in [src/frontend/package.json](./src/frontend/package.json).
