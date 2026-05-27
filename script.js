const nav = document.querySelector('.navlinks');
document.querySelector('.mobile-toggle')?.addEventListener('click', () => nav.classList.toggle('open'));

const links = [...document.querySelectorAll('.navlinks a')];
const sections = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
const setActive = () => {
  let current = sections[0]?.id;
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 130) current = section.id;
  });
  links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${current}`));
};
window.addEventListener('scroll', setActive); setActive();

const buttons = [...document.querySelectorAll('.filter-btn')];
const cards = [...document.querySelectorAll('.product-card')];
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    cards.forEach(card => {
      card.classList.toggle('hidden', filter !== 'all' && card.dataset.category !== filter);
    });
  });
});

document.querySelectorAll('[data-add]').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.textContent = 'Toegevoegd ✓';
    btn.classList.add('secondary');
    setTimeout(() => {
      btn.textContent = 'Bekijk product';
      btn.classList.remove('secondary');
    }, 1400);
  });
});