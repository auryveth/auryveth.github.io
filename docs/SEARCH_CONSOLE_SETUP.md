# Search Console / Bing Webmaster verification — owner action

These steps require the GitHub organization owner and cannot be completed by publishing source code alone.

## Google Search Console

1. Sign in to https://search.google.com/search-console/ with the account that will manage AURYVETH.
2. Add a URL-prefix property: `https://auryveth.github.io/` (including protocol and trailing slash).
3. Select an ownership method supported on GitHub Pages. For an HTML file method, download the **actual** verification file and commit it unmodified at `public/google<your-verification-value>.html`. Astro copies `public/` to the deployed root. The value is account-specific; this repository intentionally includes no fake verification token.
4. Wait for GitHub Actions deployment, open the verification URL, and finish verification in Search Console.
5. Submit `https://auryveth.github.io/sitemap.xml` under Sitemaps; inspect the home, knowledge hub and new pages with URL Inspection.

## Bing Webmaster Tools

Sign in at https://www.bing.com/webmasters/, add the same exact website, complete its own verification and submit `/sitemap.xml`. If provided a site-specific meta tag or XML file, use the exact generated value rather than a placeholder. Google verification alone does not imply Bing verification.

## Change of domain later

Until a company-owned domain is actually connected, the GitHub Pages URL is the canonical origin. Future domain migration is a separate release: coordinate GitHub Pages Settings, DNS, certificate, `CNAME`, `PUBLIC_SITE_URL`, sitemap and account properties. Retain the old property for transition monitoring.
