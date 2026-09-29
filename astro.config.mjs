import { defineConfig } from 'astro/config';
// The organization-level repository `auryveth.github.io` serves at `/`.
// Set PUBLIC_SITE_URL to the verified custom domain *only after* purchasing/configuring it.
export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || 'https://auryveth.github.io',
  output: 'static',
  trailingSlash: 'always'
});
