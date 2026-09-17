# ML Brand — Project Context & SEO Implementation Rules

> **Purpose:** This file is the source of truth for AI coding assistants working on the ML e-commerce website.
> Read it before changing layout, copy, routing, metadata, components, product pages, images, or SEO-related code.
>
> **Primary goal:** build a premium, conversion-focused Next.js storefront that is technically excellent for search engines **without keyword stuffing, spam, fake reviews, doorway pages, or other manipulative SEO tactics**.
>
> SEO cannot guarantee rankings. The goal is to maximize crawlability, indexability, relevance, page quality, UX, performance, structured data quality, and organic-search potential.

## Design source of truth

Landing **layout** (section order, spacing, hero composition, control placement, visual hierarchy) comes from the in-repo mockup:

- [`docs/design/ml-daily-landing-desktop.png`](design/ml-daily-landing-desktop.png)

Read that PNG before changing homepage or landing UI. Do not put mockups in `public/` and do not serve them.

**Precedence:** typed config in `src/lib/` (prices, SKUs, color IDs, wordmark) → this document (copy, SEO, unlocked facts) → the PNG (layout). If the mockup and config disagree on a commercial fact, config wins — flag it; do not OCR prices from the image.

Figma remains the designer’s source file: [ML Daily Klatch](https://www.figma.com/design/GpU9pIhsIUvGO5DFEyfYb9/ML?node-id=159-30&p=f). Agents must match the PNG, not the URL.

---

## 1. BRAND CONTEXT

### Brand
- Primary visual brand mark: **ML**
- Brand direction: premium men's leather accessories.
- Current naming direction for the hero product: **ML Daily**
- Secondary/full wordmark is not fully locked yet. Do not hard-code a long brand name everywhere unless it already exists in the project config.
- Prefer a central brand config constant so the final naming can be changed once.

### Positioning
ML is **not a cheap leather-goods store**.

The brand sells:
- stylish organization for men;
- everyday carry made cleaner and more intentional;
- premium-looking functional accessories;
- objects that make daily life feel organized, composed and refined.

Core brand idea:

> Everyday essentials should have their place.

Alternative internal positioning statements:
- "Я продаю щоденні аксесуари, які прибирають хаос у чоловічих речах і роблять це естетично."
- "Я продаю чоловікам можливість носити необхідні речі організовано і стильно."
- "Я продаю відчуття, що твоє життя виглядає зібрано і дорого в дрібницях."

### Visual language
The site should feel:
- premium;
- restrained;
- editorial;
- timeless;
- masculine;
- warm;
- tactile;
- confident, not loud.

Aesthetic inspiration:
- quiet luxury;
- old-money aesthetic used as a visual influence, **not as cheesy marketing language**;
- subtle Ancient Greek / classical references;
- warm stone, columns, sculptural forms, Mediterranean light;
- cream / ivory backgrounds;
- cognac leather;
- deep espresso / dark brown;
- restrained black;
- antique brass / warm metal accents.

Important:
- Ancient Greece is an **influence**, not a theme park.
- Avoid excessive columns, statues, meanders, laurels and decorative symbols on every block.
- The strongest direction is modern luxury with *subtle* classical references.
- Avoid a default white Shopify-fashion-store look.
- Avoid looking like a historical museum website.

---

## 2. HERO PRODUCT — ML DAILY

### Product type
A premium men's leather pouch / organizer designed for everyday carry.

The product should not be described only as a "bag".
Its value is the combination of:
- compact carry;
- organization;
- fast access;
- premium appearance.

### Key physical characteristics
- rectangular slim pouch;
- rounded corners;
- natural leather;
- zipper closure;
- external integrated phone pocket;
- the phone pocket spans much of the front and has a shaped/notched access area toward the **right side**;
- the phone sits **vertically / portrait orientation**, not horizontally;
- horizontal leather hand strap across the lower front;
- hand slides underneath the strap so the pouch can be securely held;
- detachable wrist strap;
- optional shoulder strap is being explored but must match the premium appearance;
- internal organization should keep essentials separated and easy to access;
- a magnetic quick-release key dock is being explored so keys always have a fixed location.

### Product philosophy
Features are not decoration. Every element should solve a small daily annoyance.

Examples:
- external phone pocket → fast access without opening the pouch;
- hand strap → secure carry without squeezing the pouch;
- internal layout → no digging through a pile of objects;
- key dock → keys always live in the same place.

### Current colors
At minimum:
- **Cognac / warm caramel brown**
- **Dark brown / espresso**

Do not invent additional colors in product UI unless they exist in product data.

### Important product-image rule
When using product photos:
- preserve the actual product geometry;
- do not visually redesign the phone pocket;
- do not place the phone horizontally;
- do not invent additional pockets, seams, straps or hardware.

---

## 3. TARGET CUSTOMER

Primary audience:
- men who care about how they look;
- men who carry phone, keys, wallet/cards, earbuds and small daily items;
- customers who dislike stuffed trouser/jacket pockets;
- customers who value order, design, quality and tactile materials;
- buyers willing to pay more for a thoughtful, polished product.

The website must not speak down to price-sensitive customers or use classist language.

Customer motivation:
1. "I want my essentials in one place."
2. "I want quick access to my phone and keys."
3. "I don't want bulky pockets ruining my silhouette."
4. "I want an accessory that looks intentional rather than utilitarian."
5. "I want something that feels premium enough to carry every day."

---

## 4. SITE GOALS

Priority order:
1. Explain the product instantly.
2. Make the product desirable.
3. Make the product feel trustworthy and premium.
4. Remove purchase friction.
5. Build strong technical SEO foundations.
6. Create pages that can earn organic traffic over time.
7. Make all important content accessible to both users and crawlers.

Never sacrifice conversion or visual quality just to insert more keywords.

---

## 5. LANGUAGE & CONTENT

### Primary language
Initial market: **Ukraine**
Primary storefront language: **Ukrainian**

All customer-facing copy should default to natural Ukrainian.

Use English only when it is genuinely part of the brand/product naming:
- ML
- ML Daily
- product/model names where intentionally branded.

### Tone
- concise;
- refined;
- confident;
- human;
- specific;
- not corporate;
- not hype-heavy.

Avoid:
- "революційний";
- "найкращий у світі";
- fake scarcity;
- fake social proof;
- meaningless luxury clichés;
- repeated "premium" in every paragraph;
- keyword-stuffed copy.

Prefer concrete value:
- "Телефон — у швидкому доступі."
- "Ключі мають своє місце."
- "Менше речей у кишенях."
- "Продумано для щоденного використання."

---

# 6. SEO PRINCIPLE: SEARCH-FIRST ARCHITECTURE, HUMAN-FIRST COPY

Every public page must have a clear search intent.

Before implementing a new public page, identify:
- primary intent;
- primary topic;
- target query family;
- unique value of the page;
- canonical URL;
- whether it deserves indexing.

Do **not** create pages only because a keyword exists.

Do not:
- create hundreds of near-duplicate landing pages;
- produce city doorway pages;
- generate low-value AI blog posts;
- repeat exact-match keywords unnaturally;
- create fake FAQ content solely for schema;
- add structured data for content users cannot see.

---

## 7. SEARCH INTENT / INITIAL KEYWORD THEMES

These are **topic directions**, not instructions to stuff exact phrases.

### Product / transactional themes
Ukrainian:
- чоловіча шкіряна сумка
- чоловіча сумка з натуральної шкіри
- чоловічий шкіряний клатч
- чоловічий органайзер
- шкіряний органайзер чоловічий
- чоловіча сумка для телефону і ключів
- сумка для телефону документів ключів
- чоловічий pouch
- шкіряний pouch
- компактна чоловіча сумка
- чоловіча сумка на руку
- чоловічий аксесуар з натуральної шкіри

### Problem-aware themes
- куди класти телефон і ключі чоловіку
- як носити телефон ключі гаманець без набитих кишень
- чоловічий органайзер для щоденних речей
- аксесуар для everyday carry
- організація EDC для чоловіків

### Informational themes for future editorial content
Only create when genuinely useful:
- як вибрати чоловічу шкіряну сумку
- натуральна шкіра vs екошкіра
- як доглядати за шкіряною сумкою
- що носити в чоловічому органайзері
- як організувати everyday carry
- як зберігати вироби з натуральної шкіри

Before finalizing SEO copy, use actual keyword data from Google Search Console / Keyword Planner / Semrush / Ahrefs if available. Do not pretend these seed phrases are validated volume data.

---

# 8. NEXT.JS IMPLEMENTATION RULES

Assume **Next.js App Router** unless the existing codebase proves otherwise.

Prefer:
- Server Components by default;
- static generation / ISR where suitable;
- minimal client-side JavaScript;
- semantic HTML;
- progressive enhancement;
- crawlable server-rendered content.

Do not convert entire pages to `"use client"` because one small interactive component needs state.

Split interactive components into the smallest practical client islands.

---

## 9. METADATA — REQUIRED FOR EVERY INDEXABLE PAGE

Use Next.js Metadata API.

Every indexable page must have:
- unique `<title>`;
- unique meta description;
- canonical URL;
- Open Graph title;
- Open Graph description;
- Open Graph image;
- Twitter metadata where appropriate;
- correct robots directives.

Use `metadataBase` centrally.

Recommended title approach:
- specific topic/product first;
- brand second.

Example:
`ML Daily — чоловіча шкіряна сумка-органайзер | ML`

Do not use the exact same title/description across multiple pages.

### Metadata pattern
Prefer typed Next.js metadata:

```ts
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "...",
  description: "...",
  alternates: {
    canonical: "...",
  },
  openGraph: {
    title: "...",
    description: "...",
    url: "...",
    type: "website",
    images: [
      {
        url: "...",
        width: 1200,
        height: 630,
        alt: "...",
      },
    ],
  },
};
```

For dynamic product/editorial routes use `generateMetadata()`.

---

# 10. CANONICAL URLs

Every indexable page should resolve to one preferred URL.

Rules:
- enforce one hostname;
- enforce HTTPS in production;
- avoid duplicate trailing-slash variants;
- canonicalize query-parameter variants when they do not represent unique content;
- filters/sorts/search results should generally not become competing indexed pages.

Never canonicalize every page to the homepage.

---

# 11. ROBOTS

Create/maintain `app/robots.ts` or equivalent.

Allow crawling of public storefront content.

Block or noindex where appropriate:
- account/private user areas;
- cart where indexing adds no value;
- checkout;
- internal search result pages;
- preview/staging pages;
- admin routes;
- duplicate filter/sort URL variants when appropriate.

Important:
`robots.txt` controls crawling; use `noindex` where the goal is to prevent indexing.

Production must not accidentally ship with a global `noindex`.

---

# 12. XML SITEMAP

Create/maintain `app/sitemap.ts`.

Include only:
- canonical;
- indexable;
- valuable;
- 200-status URLs.

At minimum include:
- homepage;
- product pages;
- collection/category pages that have meaningful content;
- about/story page;
- useful editorial articles;
- important evergreen informational pages.

Do not include:
- cart;
- checkout;
- account;
- internal search;
- noindex pages;
- redirect URLs;
- parameter duplicates.

Use real `lastModified` data where available rather than changing every URL timestamp on every deployment.

---

# 13. STRUCTURED DATA / JSON-LD

Structured data must reflect visible page content.

### Site-wide
Consider:
- `Organization`
- `WebSite`
- `BreadcrumbList` where breadcrumbs exist.

### Product pages
Use valid `Product` structured data and, when data exists, include:
- name;
- description;
- images;
- brand;
- SKU;
- offers;
- price;
- priceCurrency;
- availability;
- itemCondition;
- URL.

Only include:
- `AggregateRating` when genuine visible reviews exist;
- reviews that are real and displayed to users.

Never fabricate ratings or reviews for rich results.

When variants are implemented, structure them consistently with Google's supported product/variant guidance.

### Implementation
Prefer server-rendered JSON-LD:

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
  }}
/>
```

Keep structured-data builders in reusable typed utilities.

---

# 14. PRODUCT PAGE SEO TEMPLATE

Every product page should contain meaningful visible content.

Suggested hierarchy:

```text
Breadcrumbs
H1: Product name
Short value proposition
Price / availability
Product gallery
Variant selector
Primary CTA
Core benefits
Product details
Materials
Dimensions
How it is used
Delivery / returns
Care information
FAQ if genuinely useful
Related editorial/internal links
Related products if applicable
```

### H1
Exactly one primary H1 in normal cases.

Do not make the logo the H1.

Example:
`ML Daily — чоловіча шкіряна сумка-органайзер`

### Product copy
Do not write 1,500 words just for SEO.

Search engines and people need:
- unique;
- useful;
- specific;
- trustworthy information.

Explain differentiators explicitly:
- external phone pocket;
- hand strap;
- internal organization;
- leather;
- dimensions;
- capacity;
- key-access feature if launched.

---

# 15. HOMEPAGE SEO + CONVERSION STRUCTURE

The homepage should not be a visual-only movie poster.

Hero may be highly editorial, but important textual meaning must be real HTML, not text baked into an image.

Visual composition and section order for the current landing: [`docs/design/ml-daily-landing-desktop.png`](design/ml-daily-landing-desktop.png). Do not invent extra blocks beyond that frame unless a spec is updated first.

Suggested SEO flow (map onto the mockup; do not replace it):

1. Hero:
   - product/brand;
   - concise promise;
   - CTA.

2. Core product value:
   - organization;
   - fast access;
   - carry comfort.

3. Hero product:
   - ML Daily;
   - real product imagery;
   - direct product link.

4. "Why it exists":
   - pockets full of phone/keys vs one organized carry.

5. Product details/features.

6. Craft/material story.

7. Brand philosophy.

8. Trust elements:
   - delivery;
   - returns;
   - payments;
   - production location if true.

9. Editorial/internal links when content exists.

Do not hide all indexable content behind sliders, tabs, hover-only UI or client-only interactions.

---

# 16. INFORMATION ARCHITECTURE

Keep URLs short, readable and stable.

Example architecture:

```text
/
├── /shop
├── /products/ml-daily
├── /collections/...
├── /about
├── /journal
│   └── /journal/[slug]
├── /delivery-and-returns
├── /care
├── /contact
└── /privacy / terms etc.
```

If the store initially has one hero product, do **not** invent dozens of empty categories.

Use Ukrainian or English slugs consistently; do not randomly mix styles.

Avoid changing URLs after indexing. If changed, add permanent redirects.

---

# 17. INTERNAL LINKING

Every important indexable page must be reachable through ordinary `<a>` / Next `<Link>` navigation.

Use descriptive anchors.

Good:
- `Детальніше про ML Daily`
- `Як доглядати за натуральною шкірою`

Weak:
- `читати`
- `тут`

Create natural contextual links:
- editorial → product;
- product → care guide;
- homepage → product/category;
- product → relevant brand/material information.

Do not create giant keyword-heavy footer link farms.

---

# 18. IMAGES — CRITICAL FOR THIS BRAND

This is a visual product. Image SEO and performance matter.

Use `next/image` when appropriate.

For every meaningful product image:
- descriptive filename;
- useful Ukrainian alt text;
- width/height known;
- correct `sizes`;
- responsive delivery;
- optimized format;
- avoid unnecessary giant original files.

Example alt:
`Коньячна чоловіча шкіряна сумка ML Daily з кишенею для телефона`

Do not:
- keyword-stuff alt;
- write `image123`;
- duplicate the same alt across every photo.

Decorative images should use empty alt where appropriate.

### LCP / hero images
- prioritize only the true above-the-fold LCP image;
- do not preload every gallery image;
- avoid layout shift;
- serve correct dimensions;
- avoid heavy video before meaningful content loads.

---

# 19. CORE WEB VITALS / PERFORMANCE

SEO implementation is incomplete if the site looks premium but loads poorly.

Optimize for strong real-world:
- LCP;
- INP;
- CLS.

Rules:
- Server Components by default;
- keep JS bundles lean;
- dynamically import heavy non-critical components;
- avoid animation libraries for trivial effects;
- avoid blocking third-party scripts;
- lazy-load below-fold media;
- reserve image dimensions;
- optimize fonts;
- self-host fonts when licensing/architecture permits;
- use `next/font`;
- avoid unnecessary font families/weights;
- cache static data/assets intelligently;
- do not fetch the same data repeatedly across components;
- minimize hydration.

Animation must never delay access to navigation, product information or CTA.

---

# 20. SEMANTIC HTML

Use semantic elements properly:
- `<header>`
- `<nav>`
- `<main>`
- `<section>`
- `<article>`
- `<footer>`
- `<button>` for actions
- `<a>` / `<Link>` for navigation.

Heading hierarchy must make sense.

Do not choose HTML tags based on appearance.
Style with CSS.

Do not build the storefront from dozens of anonymous `<div>` elements when semantic HTML applies.

---

# 21. ACCESSIBILITY

Accessibility supports UX and crawlable, maintainable markup.

Required:
- keyboard-accessible navigation;
- visible focus states;
- sensible color contrast;
- form labels;
- accessible error messages;
- alt text;
- accessible dialogs/drawers;
- proper buttons;
- no interaction that requires hover only;
- respect `prefers-reduced-motion`.

Do not remove focus outlines unless replaced by a clear accessible focus style.

---

# 22. MOBILE-FIRST

A large share of social-ad traffic will arrive on mobile.

Every new feature must be validated at:
- ~360 px;
- ~390 px;
- tablet;
- desktop.

The premium aesthetic must survive mobile.

Do not treat mobile as a compressed desktop page.

Important conversion content should appear early:
- product;
- promise;
- price;
- CTA;
- key differentiator.

---

# 23. E-COMMERCE TRUST

SEO traffic has little value if users do not trust the store.

Make important information easy to find:
- price;
- stock/availability;
- materials;
- dimensions;
- delivery;
- returns;
- contact;
- payment methods;
- business/legal information required for the market.

Do not hide delivery cost until the last possible step if it can be communicated earlier.

---

# 24. CONTENT / JOURNAL STRATEGY

Do not launch a blog just to "have a blog."

Create content only when it:
1. answers a real customer question;
2. supports product discovery;
3. demonstrates expertise;
4. gives the brand something unique to say.

High-value examples:
- how ML Daily was designed;
- why the external phone pocket exists;
- what fits inside ML Daily;
- leather care;
- everyday carry organization;
- choosing leather accessories;
- production/craft story.

Original product/process photography is preferred over generic stock imagery.

---

# 25. SEO FOR GENERATIVE / AI SEARCH

Do not build a separate spammy "GEO" strategy.

Apply the same strong foundations:
- clear entity/brand information;
- original content;
- concrete product specifications;
- structured data;
- crawlable pages;
- real images/video;
- clear authorship/company information where relevant;
- useful FAQs;
- consistent naming;
- trustworthy claims.

Provide information that is easy to quote because it is precise, not because it is stuffed with phrases.

---

# 26. PAGE QUALITY RULES FOR CURSOR

When asked to create or edit a public page, Cursor must check:

### Content
- What is this page's user/search intent?
- Is its copy unique?
- Does it answer the likely question quickly?
- Does it contain enough real information to deserve indexing?

### HTML
- One logical H1?
- Correct H2/H3 structure?
- Semantic elements?
- Crawlable links?
- Accessible controls?

### Metadata
- Unique title?
- Unique description?
- Canonical?
- OG image?
- Robots correct?

### Structured data
- Does a supported schema type genuinely apply?
- Does markup match visible content?
- Are price/stock/review values real?

### Performance
- Is this accidentally a Client Component?
- Can JS be removed?
- Are images correctly sized?
- Is the LCP asset prioritized?
- Is there layout shift?
- Are third-party scripts necessary?

### Internal linking
- What should link to this page?
- What useful pages should this page link to?

### Indexation
- Should this page be indexable at all?
- Could this route create duplicate URLs?

---

# 27. STRICT SEO ANTI-PATTERNS

Never implement any of the following without explicit, informed approval:
- hidden SEO text;
- white text on white background;
- keyword stuffing;
- fake review schema;
- fake ratings;
- autogenerated doorway pages;
- thousands of low-value programmatic pages;
- cloaking;
- serving materially different content to bots;
- buying/spamming links;
- meaningless city pages;
- copying manufacturer/competitor descriptions;
- duplicate pages targeting trivial keyword variants;
- indiscriminate `index,follow` on every route;
- blocking a URL in robots.txt and assuming that guarantees deindexing.

---

# 28. DESIGN RULES — DO NOT DESTROY THE BRAND FOR SEO

SEO content must be integrated elegantly.

Do not turn the homepage into:
- a wall of SEO text;
- a giant FAQ;
- a keyword directory;
- a generic marketplace.

Use:
- short editorial sections;
- expandable details where content remains accessible;
- dedicated high-quality informational pages;
- contextual internal links.

The desired response is:
> "This looks like an expensive brand."

Not:
> "This website was built for Google."

---

# 29. COMPONENT / DATA ARCHITECTURE

Prefer central reusable models/configs for:
- brand information;
- site URL;
- products;
- product variants;
- pricing;
- availability;
- SEO metadata;
- navigation;
- social profiles;
- organization details.

Avoid duplicating product name, price, description or availability across unrelated components.

A single product data source should feed:
- UI;
- metadata;
- JSON-LD;
- sitemap where applicable.

This prevents SEO/UI mismatches.

---

# 30. SUGGESTED SEO UTILITIES

Organize reusable helpers conceptually like:

```text
src/
  lib/
    seo/
      metadata.ts
      jsonld.ts
      canonical.ts
      constants.ts
```

Possible helpers:
- `buildPageMetadata()`
- `buildProductMetadata()`
- `buildProductJsonLd()`
- `buildBreadcrumbJsonLd()`

Do not over-engineer if the project is still small.

---

# 31. ENVIRONMENT / DOMAIN SAFETY

Use a production site URL env/config value, e.g.:

```env
NEXT_PUBLIC_SITE_URL=https://example.com
```

Never generate canonical/OG URLs from `localhost`.

Staging/preview deployments should be protected from indexing where appropriate.

Before launch verify:
- canonical domain;
- HTTPS;
- robots;
- sitemap;
- no accidental noindex;
- 404 behavior;
- redirects;
- metadata;
- JSON-LD;
- Search Console;
- analytics/consent implementation.

---

# 32. STATUS CODES

Use correct HTTP semantics.

- real page → `200`
- permanently moved → `301/308`
- missing page → real `404`
- removed with replacement → redirect appropriately

Do not render a "not found" screen with HTTP 200.

Use Next.js `notFound()` where appropriate.

---

# 33. FACETED NAVIGATION / FILTERS

If multiple products/variants later introduce filters:
- do not automatically index every filter combination;
- keep canonical strategy explicit;
- prevent infinite crawl spaces;
- only create indexable category/filter landing pages when they have distinct demand and substantial useful content.

---

# 34. INTERNATIONALIZATION — FUTURE SAFE

Ukraine is first.

Do not prematurely build a complex international SEO system, but avoid architecture that makes it impossible later.

If additional markets/languages launch:
- use stable locale URLs;
- implement correct `hreflang`;
- self-canonicalize localized pages;
- do not machine-translate thousands of thin pages;
- localize currency/shipping/content meaningfully.

Do not add `hreflang` before localized equivalents actually exist.

---

# 35. SEO MEASUREMENT

After production launch, decisions should be driven by data.

Integrate/prepare for:
- Google Search Console;
- analytics;
- Core Web Vitals / real-user monitoring;
- conversion events.

Track at minimum:
- product view;
- add to cart;
- checkout start;
- purchase.

SEO iteration should look at:
- impressions;
- clicks;
- CTR;
- average position;
- indexed pages;
- queries;
- landing pages;
- conversion rate from organic traffic.

Do not chase rankings without looking at conversions.

---

# 36. CURSOR WORKFLOW — MANDATORY

Whenever Cursor is asked to build a new public-facing page or materially change one:

1. Read this file.
2. Inspect the existing project architecture before creating new patterns.
3. Preserve the ML brand aesthetic.
4. Identify the page intent.
5. Implement semantic server-rendered content.
6. Add/verify metadata.
7. Add canonical handling.
8. Add only valid structured data.
9. Ensure inclusion/exclusion in sitemap is intentional.
10. Check robots/indexing behavior.
11. Optimize images and LCP.
12. Minimize client JS.
13. Verify mobile layout.
14. Verify accessibility.
15. Verify internal links.
16. Report any SEO assumptions/TODOs after implementation.

When the user asks for a design change, **do not use SEO as an excuse to redesign the page**.

When the user asks for SEO, **do not destroy the visual design with keyword-heavy copy**.

---

# 37. BEFORE MARKING A PAGE DONE

Cursor should mentally/explicitly verify:

- [ ] User immediately understands what the page is about.
- [ ] Page has one clear primary intent.
- [ ] Page has meaningful indexable text in HTML.
- [ ] Unique title exists.
- [ ] Unique meta description exists.
- [ ] Canonical is correct.
- [ ] H1 is useful and unique.
- [ ] Heading hierarchy is logical.
- [ ] Internal links are crawlable.
- [ ] Images have correct dimensions and alt strategy.
- [ ] LCP is not unnecessarily delayed.
- [ ] No large unnecessary client bundle was added.
- [ ] Product data matches metadata and JSON-LD.
- [ ] Structured data contains no fake information.
- [ ] Page is intentionally index/noindex.
- [ ] Sitemap behavior is intentional.
- [ ] Mobile experience is excellent.
- [ ] Page still feels like ML, not an SEO template.

---

# 38. CURRENT PRODUCT / BUSINESS ASSUMPTIONS

Treat these as provisional unless confirmed in project data:
- hero product: ML Daily;
- men's natural-leather pouch/organizer;
- initial market: Ukraine;
- initial colors: cognac and dark brown;
- external vertical phone access is a core differentiator;
- hand strap is a core differentiator;
- product is positioned above the cheap mass-market segment;
- production is being developed in Ukraine;
- final retail price is **not locked**;
- final full brand wordmark is **not locked**;
- shoulder strap design is still being refined;
- magnetic quick-release key organizer is exploratory until confirmed.

Never invent final values for unresolved items.

---

# 39. SOURCE-OF-TRUTH PRIORITY

When information conflicts, use this priority:

1. Current product/database/config in the repository.
2. Explicit latest user instruction.
3. This file.
4. Existing marketing copy.
5. Older implementation assumptions.

If the repository contains stale copy that conflicts with this file, flag it rather than silently multiplying inconsistencies.

---

# 40. CORE RULE IN ONE SENTENCE

> Build a fast, crawlable, semantically correct, trustworthy premium storefront whose SEO comes from excellent architecture and genuinely useful product content — never from making ML look like an SEO site.
