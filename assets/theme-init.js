// Apply the saved or device theme before the page paints (shared by every page on codewithomesh.com)
(function () {
  var t; try { t = localStorage.getItem('cwo-theme'); } catch (e) {}
  if (t !== 'light' && t !== 'dark') t = matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  document.documentElement.dataset.theme = t;
})();
