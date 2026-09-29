# AURYVETH SEO / GEO release strategy — v0.6

**Scope:** official static website at https://auryveth.github.io/. The first-party material describes the actual founding record, planned operating model and research direction. It is not evidence of a deployed generalized autonomous organism.

## 1. What this upgrade actually does

- Gives every indexable prerendered page an individual title, meta description, self-canonical URL and consistent social-preview metadata.
- Uses a coherent JSON-LD `@graph` with stable IDs for the organization, founder, site and page. A relevant page may describe an actual on-page DefinedTerm, DefinedTermSet or versioned PDF document. Structured data is not a guarantee of a rich result or an AI citation.
- Adds first-party, human-readable explanations of the organism/agent distinction, the proposed authority stages, and the planned internal proving ground; links them from the visible knowledge hub, organisms, research and roadmap pages.
- Maintains one sitemap containing all and only the public generated indexable pages. 404 and diagnostics are excluded. The robots file points to the same deployed origin.
- Validates URL resolution, titles, descriptions, H1, structured-data JSON, canonical URLs, internal links, sitemap coverage and built assets at build time.
- Keeps content rendered into the HTML by Astro, not waiting for the organism animation JavaScript. No third-party tracker or new contact form has been added.

## 2. Entity vocabulary and truth boundaries

AURYVETH is a technology and research company developing governed digital business organisms. A business organism is AURYVETH's term for a persistent digital system designed to learn an organization's approved operating context, prepare work, coordinate activity and progressively earn bounded autonomy.

Use clear distinctions throughout: *definition*, *proposed architecture*, *planned validation*, *published founding record*, and *observed experimental result*. A proposal must never be represented as measured production capability. Avoid claims about clients, trials, incorporation/registration, funding, performance, pricing, independent recognition, private dataset results, autonomous agency or press coverage unless documented and approved.

The founder's public name is Jeremiah Wong Zhi Qi. The first-party founding record is the versioned Founder Constitution PDF. The verified AURYVETH GitHub organization is the only repository identity used as `sameAs`; do not populate fabricated social profiles, addresses, registration data or email addresses.

## 3. AI search and conventional search

Google's own guidance: foundational SEO, original useful content, accessibility, indexable text and coherent internal links are the basis for AI features in Search; extra AI-specific schema or `llms.txt` is not required. We do not claim that a particular crawler rule, schema property, keyword pattern or text format guarantees an AI citation. Attribution depends on each external service's retrieval and ranking systems.

Reference documentation:
- https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- https://developers.google.com/search/docs/appearance/ai-features
- https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- https://developers.google.com/search/docs/monitor-debug/search-console-start

## 4. Owner-only launch tasks

1. Open https://search.google.com/search-console/ and verify ownership of the exact live URL (URL prefix is adequate for this GitHub Pages origin). If an HTML verification file is required, commit it to `public/`. Never copy another user's token or share account credentials. Submit `https://auryveth.github.io/sitemap.xml`.
2. Open https://www.bing.com/webmasters/ and verify the same website. Submit the sitemap there too. Search-engine verification is not performed just because the repository builds.
3. Use Google URL Inspection and Bing's URL tools to check indexability and canonical choices after deployment. New site indexing can take time; do not promise rankings or search appearances.
4. Monitor coverage, actual search terms, crawl errors, and AI-search appearances where reporting is available. Keep a dated record of changes and compare meaningful periods.
5. After a verified custom domain migration, update the GitHub Pages domain/DNS, `public/CNAME` and `PUBLIC_SITE_URL` together, ensure redirects and regenerate canonical metadata and sitemap. Do not set the custom origin speculatively.

## 5. Publishing evidence later

Real research articles should state author, version and *actual* publication/update dates, hypothesis, method, environment, baselines, metrics, results, limitations, contradictory findings and links to disclosed evidence. Add Article or TechArticle markup only after publishing a real article. Do not use FAQ markup or ratings to simulate search features.

Maintain the actual repository as source of truth. Use `npm run check:source`, `npm run build`, `node scripts/validate-built.mjs` as release gates. The GitHub Actions job runs these before deployment.
