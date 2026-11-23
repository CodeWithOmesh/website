// Shared page behaviour: light/dark toggle, sticky nav, phone menu, reveal animations
(() => {
  const root = document.documentElement, themeBtn = document.getElementById('themeBtn'), metaTheme = document.querySelector('meta[name="theme-color"]');
  const setTheme = (t, save) => { root.dataset.theme = t; if (metaTheme) metaTheme.content = t === 'light' ? '#FBF7F1' : '#0E0E10';
    if (themeBtn) themeBtn.setAttribute('aria-label', t === 'light' ? 'Switch to dark mode' : 'Switch to light mode');
    if (save) { try { localStorage.setItem('cwo-theme', t); } catch (e) {} } };
  setTheme(root.dataset.theme || 'dark', false);
  if (themeBtn) themeBtn.onclick = () => setTheme(root.dataset.theme === 'light' ? 'dark' : 'light', true);
  matchMedia('(prefers-color-scheme: light)').addEventListener('change', e => { let saved; try { saved = localStorage.getItem('cwo-theme'); } catch (_) {} if (!saved) setTheme(e.matches ? 'light' : 'dark', false); });

  const yr = document.getElementById('yr'); if (yr) yr.textContent = new Date().getFullYear();
  const nav = document.getElementById('nav'), burger = document.getElementById('burger');
  addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 10), { passive: true });
  burger.onclick = () => { const o = nav.classList.toggle('open'); burger.setAttribute('aria-expanded', o); burger.textContent = o ? '✕' : '☰'; };
  document.querySelectorAll('#menu a').forEach(a => a.addEventListener('click', () => { nav.classList.remove('open'); burger.setAttribute('aria-expanded', false); burger.textContent = '☰'; }));
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
})();
