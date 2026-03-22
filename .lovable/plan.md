

## Plan: Add Multi-Page Routing with All Original Site Pages

Currently the app is a single-page site. The original site has 7+ separate pages that need to be created as individual routes with their own content, plus navigation updates.

### Pages to Create

1. **`/` (Home)** -- Already exists, keep as-is
2. **`/quem-sou`** -- "Quem sou" bio page with hero image, bio text, FAQ accordion, and CTA
3. **`/psicoterapia-individual`** -- Service detail page with hero, description, benefits list, testimonials, CTA
4. **`/psicoterapia-grupo`** -- "Despertar do Movimento" group therapy page with hero, description, benefits, CTA
5. **`/terapia-corporal-bioenergetica`** -- Bioenergetics therapy page with hero, description, quote, CTA
6. **`/bioescalada`** -- Bioescalada experience page with hero, description, manifesto, benefits, CTA
7. **`/regenera`** -- "Regenera Masculinidades" men's group page with hero, description, CTA
8. **`/sahaj-landell`** -- Extended bio page (photo + text side-by-side layout)

### Shared Components

- **`ServicePageLayout`** -- Reusable layout for service pages: hero banner image, subtitle, title, description text, optional benefits list, optional quote, WhatsApp CTA button, testimonials section, and footer
- **`PageHeroBanner`** -- Full-width hero image with breadcrumb overlay (page title)

### File Changes

| File | Action |
|------|--------|
| `src/components/ServicePageLayout.tsx` | Create -- shared layout for all service/detail pages |
| `src/pages/QuemSou.tsx` | Create -- bio page with FAQ accordion |
| `src/pages/PsicoterapiaIndividual.tsx` | Create -- individual therapy detail |
| `src/pages/PsicoterapiaGrupo.tsx` | Create -- group therapy detail |
| `src/pages/TerapiaCorporal.tsx` | Create -- bioenergetics detail |
| `src/pages/Bioescalada.tsx` | Create -- bioescalada detail |
| `src/pages/Regenera.tsx` | Create -- men's group detail |
| `src/pages/SahajLandell.tsx` | Create -- extended about page |
| `src/App.tsx` | Edit -- add all new routes |
| `src/components/Navbar.tsx` | Edit -- update nav links to use React Router links, add dropdown for services |
| `src/components/ServicesSection.tsx` | Edit -- make service cards link to their respective routes |
| `src/components/FooterSection.tsx` | Edit -- add service page links in footer |

### Technical Details

- Each service page follows the same pattern from the original: large hero image at top, subtitle label, main title, colored subtitle, body text, optional benefits, CTA WhatsApp button, about section, testimonials, footer
- Use `react-router-dom` `Link` for internal navigation; scroll to top on route change
- Generate AI images for new page heroes (or reuse existing service images)
- The `ServicePageLayout` component accepts props: `heroImage`, `subtitle`, `title`, `coloredSubtitle`, `description`, `benefits[]`, `quote`, `whatsappText`, and renders them consistently
- Navbar will use `Link` for internal pages and keep anchor links for homepage sections
- Add a `ScrollToTop` component to handle scroll reset on navigation

