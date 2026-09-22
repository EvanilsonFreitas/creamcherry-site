/* ========================================
   CREAM CHERRY — Main JS
   ======================================== */

/* ── Overlay element ── */
const overlay = document.createElement('div');
overlay.className = 'mobile-overlay';
document.body.appendChild(overlay);

/* ── Header scroll animation ── */
const header = document.getElementById('header');
let lastScrollY = 0;

function onScroll() {
  const y = window.scrollY;
  header.classList.toggle('scrolled', y > 60);
  lastScrollY = y;
  updateActiveNav();
}

window.addEventListener('scroll', onScroll, { passive: true });

/* ── Mobile menu ── */
const hamburger   = document.getElementById('hamburger');
const mobileMenu  = document.getElementById('mobileMenu');
const mobileClose = document.getElementById('mobileClose');

function openMenu() {
  // Show overlay: set display:block first, then add .show on next frame
  overlay.style.display = 'block';
  requestAnimationFrame(() => overlay.classList.add('show'));
  mobileMenu.classList.add('open');
  hamburger?.classList.add('open');
  document.body.classList.add('menu-open');
}

function closeMenu() {
  overlay.classList.remove('show');
  mobileMenu.classList.remove('open');
  hamburger?.classList.remove('open');
  document.body.classList.remove('menu-open');
  // Hide overlay after fade-out completes
  setTimeout(() => { overlay.style.display = 'none'; }, 400);
}

hamburger?.addEventListener('click', openMenu);
mobileClose?.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

// Swipe right to close (touch)
let touchStartX = 0;
mobileMenu?.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
mobileMenu?.addEventListener('touchend', e => {
  if (e.changedTouches[0].clientX - touchStartX > 60) closeMenu();
}, { passive: true });

// Close on nav link click
mobileMenu?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

/* ── Active nav on scroll ── */
function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link');
  let current = '';
  sections.forEach(s => {
    if (window.scrollY + 100 >= s.offsetTop) current = s.id;
  });
  navLinks.forEach(link => {
    const href = link.getAttribute('href') || '';
    // Only toggle anchor-based links; leave page links alone
    if (href.startsWith('#')) {
      link.classList.toggle('active', href === `#${current}`);
    }
  });
}

/* ── Smooth anchor scroll ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e) {
    const hash = this.getAttribute('href');
    if (hash === '#') return;
    const target = document.querySelector(hash);
    if (!target) return;
    e.preventDefault();
    window.scrollTo({ top: target.offsetTop - 80, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  });
});

/* ── FAQ Accordion ── */
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', function() {
    const item   = this.closest('.faq-item');
    const answer = item.querySelector('.faq-answer');
    const isOpen = this.classList.contains('open');
    // Close all
    document.querySelectorAll('.faq-question.open').forEach(q => {
      q.classList.remove('open');
      q.closest('.faq-item').querySelector('.faq-answer').classList.remove('open');
    });
    if (!isOpen) {
      this.classList.add('open');
      answer.classList.add('open');
    }
  });
});

/* ── Scroll reveal ── */
const revealEls = document.querySelectorAll(
  '.reveal, .reveal-left, .reveal-right, .reveal-scale'
);
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.10, rootMargin: '0px 0px -40px 0px' });
revealEls.forEach(el => revealObs.observe(el));

/* ── Flavor tabs (Home) ── */
const flavorsGrid = document.getElementById('flavorsGrid');
if (flavorsGrid && typeof FLAVORS !== 'undefined') {
  function renderFlavors(tab) {
    const items = FLAVORS[tab] || [];
    flavorsGrid.classList.add('fade-out');
    setTimeout(() => {
      flavorsGrid.innerHTML = items.map(item => `
        <div class="flavor-card reveal-scale visible">
          <div class="flavor-card__img">${item.emoji}</div>
          <div class="flavor-card__body">
            ${item.tag ? `<div class="flavor-card__tag">${item.tag}</div>` : ''}
            <div class="flavor-card__name">${item.name}</div>
            <div class="flavor-card__desc">${item.desc}</div>
            <div class="flavor-card__footer">
              <a href="pages/cardapio.html" class="btn btn--sm btn--outline" style="font-size:.75rem;padding:.3rem .85rem">Ver cardápio</a>
            </div>
          </div>
        </div>
      `).join('');
      flavorsGrid.classList.remove('fade-out');
    }, 180);
  }
  document.querySelectorAll('.flavor-tab').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.flavor-tab').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      renderFlavors(this.dataset.tab);
    });
  });
  renderFlavors('tradicionais');
}

/* Cart removed — site is catalogue only */

/* ── Toast ── */
function showToast(msg) {
  const toast    = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');
  if (!toast || !toastMsg) return;
  toastMsg.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

/* ── Newsletter ── */
function subscribeNewsletter() {
  const input = document.getElementById('newsletterEmail');
  if (!input) return;
  const email = input.value.trim();
  if (!email || !email.includes('@')) { showToast('Digite um e-mail válido.'); return; }
  input.value = '';
  showToast('Inscrição realizada com sucesso!');
}
