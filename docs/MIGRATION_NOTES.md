# Visual-preservation migration notes

Source baseline: Auryveth Website v0.4.2.

- Shared Header and Footer extracted from baseline; relative links rewritten as absolute clean Astro routes.
- Site styles and script copied byte-for-byte into `public/` to avoid altering the proven motion behavior.
- Main content is kept in small `src/content/pages/*.html` fragments imported with `?raw` and injected at build time via Astro `Fragment set:html`. The fragments are first-party authored source, not user-supplied content.
- One Astro page component per public route; shared layout provides all SEO tags and structured data.
- Website remains static, no Node runtime on host, no React, no external font or paid API dependency.
- The external 3 MB Brand Guidelines PDF was not published because no webpage linked it; constitution PDF remains public.
