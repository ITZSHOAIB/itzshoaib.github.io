# itzshoaib.github.io

This repository used to host the old Sohab Sk portfolio on GitHub Pages.

The active portfolio now lives at:

**https://sohab.dev**

This repo is intentionally reduced to a small static redirect page. Both `index.html`
and `404.html` send visitors to `https://sohab.dev/`, so old homepage and deep-link
traffic lands on the current portfolio.

## Deployment

GitHub Pages deploys the static files through `.github/workflows/deploy.yml`.
There is no build step, package manager, or framework dependency.
