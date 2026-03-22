

## Plan: Replace All Images and Content with Original Site's Exact Assets

The current site uses AI-generated placeholder images. The user wants the exact same images and content from the original sahajlandell.com.br. The fix is to replace all local image imports with direct URLs from the original site.

### Image Mapping (Original URLs)

**Home Page:**
- Hero slide 1: `https://sahajlandell.com.br/wp-content/uploads/2024/09/DSC03129-2-scaled.jpg`
- Hero slide 2: `https://sahajlandell.com.br/wp-content/uploads/2024/09/DSC02541-1-scaled.jpg`
- About photo: `https://sahajlandell.com.br/wp-content/uploads/2024/07/DSC02578-scaled-e1720906908279.jpg`
- Transformations: `https://sahajlandell.com.br/wp-content/uploads/2024/12/DSC02760-2-scaled-1-1.webp`
- Service 1: `https://sahajlandell.com.br/wp-content/uploads/2024/12/servico-1.webp`
- Service 2: `https://sahajlandell.com.br/wp-content/uploads/2024/12/servico-2.webp`
- Service 3: `https://sahajlandell.com.br/wp-content/uploads/2024/12/servico-3.webp`
- Service 4: `https://sahajlandell.com.br/wp-content/uploads/2024/12/service-4.webp`
- Service 5 (Regenera): `https://sahajlandell.com.br/wp-content/uploads/2024/12/service-5.webp`

**Testimonial Photos:**
- Mariana Morais: `https://sahajlandell.com.br/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-13-at-22.21.24-e1726601251211.jpeg`
- Andreia: `https://sahajlandell.com.br/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-12-at-18.22.08.jpeg`
- Daniel Santiago: `https://sahajlandell.com.br/wp-content/uploads/2024/09/file-1-e1726602308204.jpg`
- Mariana (atriz): `https://sahajlandell.com.br/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-11-at-22.27.06-e1726598454558.jpeg`
- Arthur B Linhares: `https://sahajlandell.com.br/wp-content/uploads/2024/09/Screenshot-2024-07-08-at-10.50.15.png`
- Eduarda Azevedo: `https://sahajlandell.com.br/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-14-at-12.40.36-e1726601135461.jpeg`

**Footer:** `https://sahajlandell.com.br/wp-content/uploads/2023/05/DSC02952-scaled.jpg`

**Subpage hero images:** `https://sahajlandell.com.br/wp-content/uploads/2024/09/DSC02520-scaled.jpg` (psicoterapia individual), `https://sahajlandell.com.br/wp-content/uploads/2024/12/DSC02648-scaled.jpg` (quem sou)

### File Changes

| File | Change |
|------|--------|
| `src/components/HeroSection.tsx` | Replace local image imports with original site URLs |
| `src/components/AboutSection.tsx` | Replace about photo with original URL |
| `src/components/TransformationsSection.tsx` | Replace transformations image with original URL |
| `src/components/ServicesSection.tsx` | Replace 4 service images with original URLs + add 5th service (Regenera) |
| `src/components/TestimonialsSection.tsx` | Add testimonial photos from original site |
| `src/components/FooterSection.tsx` | Replace footer image with original URL |
| `src/components/ServicePageLayout.tsx` | No change needed (receives heroImage as prop) |
| `src/pages/QuemSou.tsx` | Replace hero + about image URLs with originals |
| `src/pages/SahajLandell.tsx` | Replace image URLs with originals, update text content to match original |
| `src/pages/PsicoterapiaIndividual.tsx` | Replace hero image URL, update content to match original exactly |
| `src/pages/PsicoterapiaGrupo.tsx` | Replace hero image URL |
| `src/pages/TerapiaCorporal.tsx` | Replace hero image URL |
| `src/pages/Bioescalada.tsx` | Replace hero image URL |
| `src/pages/Regenera.tsx` | Replace hero image URL |

### Approach

All components will switch from importing local `src/assets/*.jpg` files to using string URL constants pointing to the original site's CDN. This avoids needing to download and bundle large image files while ensuring exact visual fidelity to the original site.

Content text on the subpages (QuemSou, PsicoterapiaIndividual, etc.) will be updated to match the exact wording from the original site where it currently differs.

