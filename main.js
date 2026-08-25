document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  if (!toggle || !nav) return;

  function setMenu(open) {
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  toggle.addEventListener('click', function () {
    setMenu(!nav.classList.contains('open'));
  });

  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      setMenu(false);
    });
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && nav.classList.contains('open')) {
      setMenu(false);
      toggle.focus();
    }
  });
});
