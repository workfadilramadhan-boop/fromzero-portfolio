// FROMZERO - editorial portfolio interactions
// No heavy WebGL stack: the emblem uses restrained CSS perspective instead.

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const hoverAvailable = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

// 01 — Subtle 3D interaction: no endless spinning, rings, or particle clutter.
const emblemStage = document.querySelector('#emblem-stage');
const emblem = document.querySelector('#emblem');
if (emblemStage && emblem && hoverAvailable && !reducedMotion) {
  emblemStage.addEventListener('pointermove', (event) => {
    const rect = emblemStage.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    emblem.style.transform = `rotateX(${(-y * 9).toFixed(2)}deg) rotateY(${(x * 9).toFixed(2)}deg)`;
  });
  emblemStage.addEventListener('pointerleave', () => {
    emblem.style.transform = 'rotateX(0deg) rotateY(0deg)';
  });
}

// 02 — Scroll reveal; content stays visible when JavaScript is disabled.
const revealTargets = document.querySelectorAll('.reveal');
if (!reducedMotion && 'IntersectionObserver' in window) {
  document.documentElement.classList.add('js-ready');
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }
  }, { threshold: 0.1, rootMargin: '0px 0px 70px 0px' });
  revealTargets.forEach((element) => observer.observe(element));
}

// 03 — Project details. Descriptions and labels are editable below.
const projects = {
  amwaj: {
    category: '01 / B2B TRAVEL WEBSITE',
    title: 'Amwaj Tour & Travel',
    description: 'A business-facing Umrah travel website presenting hotel, transportation, visa, and partner services in a clear and approachable interface.',
    image: '/assets/amwaj.webp',
    alt: 'Full screenshot of the Amwaj Tour & Travel website',
    tech: ['WEB DEVELOPMENT', 'TRAVEL', 'BUSINESS WEBSITE']
  },
  sbtc: {
    category: '02 / INDUSTRIAL WEBSITE',
    title: 'Saudi Block Trading',
    description: 'An industrial corporate website with a confident typographic language, structured product presentation, and a straightforward approach to business inquiries.',
    image: '/assets/sbtc.webp',
    alt: 'Full screenshot of the Saudi Block Trading company website',
    tech: ['FRONTEND', 'CORPORATE WEB', 'VISUAL DESIGN']
  },
  debus: {
    category: '03 / INTERACTIVE WEB GAME',
    title: 'Debus Mastery',
    description: 'A browser-based educational adventure built around Banten cultural themes. Interactive missions, pixel-art visuals, and game mechanics help bring the experience to life.',
    image: '/assets/debus.webp',
    alt: 'Full screenshot of the Debus Mastery browser game menu',
    tech: ['PHASER', 'TYPESCRIPT', 'WEB GAME']
  }
};

const dialog = document.querySelector('#project-dialog');
const image = document.querySelector('#dialog-image');
const category = document.querySelector('#dialog-category');
const title = document.querySelector('#dialog-title');
const description = document.querySelector('#dialog-description');
const tags = document.querySelector('#dialog-tech');
let lastTrigger = null;

function closeProjectDialog() {
  if (dialog?.open) dialog.close();
}

if (dialog) {
  document.querySelectorAll('[data-project]').forEach((button) => {
    button.addEventListener('click', () => {
      const project = projects[button.dataset.project];
      if (!project) return;
      lastTrigger = button;
      image.src = project.image;
      image.alt = project.alt;
      category.textContent = project.category;
      title.textContent = project.title;
      description.textContent = project.description;
      tags.replaceChildren();
      project.tech.forEach((label) => {
        const tag = document.createElement('span');
        tag.textContent = label;
        tags.appendChild(tag);
      });
      dialog.showModal();
    });
  });

  dialog.querySelector('.dialog-close')?.addEventListener('click', closeProjectDialog);
  dialog.querySelector('.dialog-back')?.addEventListener('click', closeProjectDialog);
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) closeProjectDialog();
  });
  dialog.addEventListener('close', () => lastTrigger?.focus());
}
