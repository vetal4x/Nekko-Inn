// Hamburger

const header = document.querySelector('.header');
const hamburger = document.querySelector('.header__hamburger');

hamburger.addEventListener('click', () => {
  header.classList.toggle('open');
});

const wrappers = document.querySelectorAll('.accordion__wrapper');

wrappers.forEach(wrapper => {
  const label = wrapper.querySelector('.our-rooms__accordion-label');

  label.addEventListener('click', () => {
    wrappers.forEach(w => {
      if (w !== wrapper) w.classList.remove('active');
    });
    wrapper.classList.toggle('active');
  });
});

