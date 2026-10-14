# typerutil.app

The website for Typer Util, built with [Astro](https://astro.build) and Tailwind, and hosted on GitHub Pages
behind Cloudflare. Bug reports for the app go in this repo's [issues](https://github.com/CMNLabs/typerutil-site/issues).

## Development

Needs Node 24 (see `.nvmrc`).

```sh
npm ci            # install exactly what's in package-lock.json
npm run dev       # dev server at http://localhost:4321
npm run build     # build to dist/
npm run preview   # serve dist/
```

Pushing to `main` builds and deploys the site (`.github/workflows/deploy.yml`).

## Layout

| Path | What's there |
| --- | --- |
| `src/pages/` | One file per page: `index.astro`, `changelog.astro`, `404.astro` |
| `src/layouts/Layout.astro` | Shared `<head>`, header and footer |
| `src/content/changelog/` | One Markdown file per release, with `version` and `date` front matter. Written by the app repo's Publish workflow |
| `src/consts.ts` | Bug report links |
| `src/styles/global.css` | Tailwind setup and brand colours |
| `public/` | Files served as-is (icons) |
| `public/appcast.xml` | Sparkle update feed, written by the app repo's Publish workflow. Don't edit it by hand |

## Adding a release to the changelog

The app repo's Publish workflow writes `src/content/changelog/<version>.md` for each published release, from
the app's `CHANGELOG.md` and the release notes. Fix wording there rather than here: hand edits are
overwritten if the release is published again. An entry looks like:

```md
---
version: 1.0.0
date: 2026-11-01
---

- What changed
```

## Dependencies

Versions are pinned exactly in `package.json` to keep builds reproducible. Upgrade deliberately, not by
default: `npx @astrojs/upgrade` for Astro, then check `npm run build` and the pages before pushing.
