// Hamburger

const header = document.querySelector('.header');
const hamburger = document.querySelector('.header__hamburger');

hamburger.addEventListener('click', () => {
  header.classList.toggle('open');
});

// Accordion

const wrappers = document.querySelectorAll('.accordion__wrapper');

wrappers.forEach((wrapper) => {
  const label = wrapper.querySelector('.our-rooms__accordion-label');

  label.addEventListener('click', () => {
    wrappers.forEach((w) => {
      if (w !== wrapper) w.classList.remove('active');
    });
    wrapper.classList.toggle('active');
  });
});

// Slider

const swiper = new Swiper('.swiper', {
  grabCursor: true,
  effect: 'creative',
  speed: 700,
  loop: true,
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  creativeEffect: {
    prev: {
      translate: [0, 0, -400],
      scale: 0.9,
      rotate: [0, 0, -8],
      opacity: 0.8,
    },
    next: {
      translate: ['100%', 0, 0],
      scale: 0.9,
      rotate: [0, 0, 8],
      opacity: 0.8,
    },
  },
});
