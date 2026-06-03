# johnvercher.com

This is the public source for `johnvercher.com`, the static campaign website for John Vercher for Mason City Council in Mason, Michigan.

Official campaign website for John Vercher, candidate for Mason City Council. Built as a simple, transparent, and publicly accessible platform to share priorities, positions, community involvement, and campaign information.

## Overview

- Plain HTML, CSS, and minimal vanilla JavaScript.
- No framework, build step, package manager, or server-side runtime.
- Designed for deployment on Cloudflare Pages as a static site.
- Uses semantic HTML, mobile-first responsive CSS, visible focus states, and readable page structure.
- Intentionally uses real campaign, family, service, community, and Mason photos instead of AI-generated imagery, stock campaign backgrounds, fake crowds, or generic political visuals.

## File Structure

```text
/
├── index.html
├── about.html
├── priorities.html
├── community.html
├── contact.html
├── css/
│   ├── brand.css
│   └── base.css
├── js/
│   └── main.js
├── assets/
│   ├── images/
│   │   ├── hero/
│   │   ├── john/
│   │   ├── family/
│   │   ├── community/
│   │   ├── vfw/
│   │   ├── military/
│   │   └── mason/
│   └── icons/
└── README.md
```

## Images

The current Mason hero image is stored at:

```text
assets/images/hero/welcome-to-mason-hero.jpg
```

The site uses local campaign, family, military, VFW, community, and Mason photos from `assets/images/`. HEIC originals have browser-compatible JPG copies for web use.

Keep using authentic local photos from John's life, service, family, and Mason community involvement.

## Deployment

Cloudflare Pages can deploy this repository directly as a static site.

- Build command: none
- Output directory: `/`

## Items To Confirm

- Final campaign committee name for the footer disclaimer.
- Final volunteer or donation links.
- Whether the contact form should stay as `mailto:` or connect to a static-compatible form service or Cloudflare Worker.
- Final photo filenames and alt text once real image assets are added.
