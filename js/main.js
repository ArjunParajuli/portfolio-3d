import { config } from './config.js';
import { initScene } from './scene.js';

// --- Populate content from config ----------------------------
const $ = (sel) => document.querySelector(sel);

$('[data-logo]').textContent = config.logo;
$('[data-kicker]').textContent = config.kicker;
$('[data-name]').textContent = config.name;
$('[data-tagline]').textContent = config.tagline;
$('[data-about]').textContent = config.about;
$('[data-contact-heading]').textContent = config.contact.heading;
$('[data-contact-text]').textContent = config.contact.text;
$('[data-footer]').textContent = config.footer;

const emailLink = $('[data-email-link]');
emailLink.href = `mailto:${config.contact.email}`;

$('[data-stats]').innerHTML = config.stats
  .map((s) => `<div class="stat"><span class="stat__value">${s.value}</span><span class="stat__label">${s.label}</span></div>`)
  .join('');

$('[data-skills]').innerHTML = config.skills
  .map((s) => `<li class="skill reveal">${s}</li>`)
  .join('');

$('[data-projects]').innerHTML = config.projects
  .map(
    (p) => `
    <a class="card reveal" href="${p.link}" target="_blank" rel="noopener">
      <div class="card__inner">
        <h3 class="card__title">${p.title}</h3>
        <p class="card__desc">${p.description}</p>
        <div class="card__tags">${p.tags.map((t) => `<span>${t}</span>`).join('')}</div>
      </div>
    </a>`
  )
  .join('');

$('[data-socials]').innerHTML = config.socials
  .map((s) => `<a href="${s.url}" target="_blank" rel="noopener">${s.label}</a>`)
  .join('');

// --- Scroll reveal animations --------------------------------
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// --- 3D tilt effect on project cards --------------------------
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reducedMotion) {
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `perspective(800px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateY(-4px)`;
    });
    card.addEventListener('pointerleave', () => {
      card.style.transform = '';
    });
  });
}

// --- 3D background scene (with WebGL fallback) ----------------
try {
  initScene(document.getElementById('bg-canvas'));
} catch (err) {
  console.warn('WebGL unavailable, falling back to static background.', err);
  document.getElementById('bg-canvas').remove();
}
