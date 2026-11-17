# fromzero — Editorial Portfolio

A production-ready **Vite + Vanilla HTML/CSS/JavaScript** portfolio inspired by the selected black / off-white / acid-lime **fromzero** brand direction.

## Run in VS Code (Windows PowerShell)

```powershell
npm.cmd install
npm.cmd run dev
```

Open the localhost URL shown in your terminal.

## Build for Cloudflare Pages

```powershell
npm.cmd run build
```

Cloudflare Pages settings:

- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`

Alternatively upload the generated `dist` folder using Direct Upload.

## Customize

- `index.html` — page content, project descriptions, contact link
- `src/style.css` — responsive layout, colors, typography
- `src/main.js` — emblem tilt, reveal, and project details dialog
- `public/assets/fromzero-wordmark.svg` — selected fromzero wordmark, traced from the approved concept
- `public/assets/fz-mark.svg` — selected FZ monogram, traced from the approved concept
- `public/assets/amwaj.webp`, `sbtc.webp`, `debus.webp` — user's screenshots

**Before publishing:** replace `YOUR_EMAIL@example.com` in `index.html` with your actual contact email. Links to SBTC and Debus are not invented: project images open case details instead.

## Design decisions

The 3D object previously felt cluttered. This version deliberately uses a single monogram with a tiny CSS 3D tilt (up to ~4.5 degrees), no spinning rings or glowing particles. It will remain readable and stable even if JavaScript is disabled.

Respectful motion: hover effects only on fine pointers, and the OS reduced-motion preference is honored.

## Notes

The SVG logo assets are approximate traces of the selected AI-generated branding concept and are suitable as a starting point. Polish in a vector editor before using as final trademark artwork.
