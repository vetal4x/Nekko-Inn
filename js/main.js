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

// Sliders

// Client Slider

const clientsSwiper = new Swiper('.slider--clients .swiper', {
  grabCursor: true,
  effect: 'creative',
  speed: 700,
  loop: true,
  navigation: {
    nextEl: '.clients-button-next',
    prevEl: '.clients-button-prev',
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

// Testimonial Slider

const testimonialsSwiper = new Swiper('.slider--testimonials .swiper', {
  grabCursor: true,
  effect: 'creative',
  speed: 700,
  loop: true,
  navigation: {
    nextEl: '.testimonials-button-next',
    prevEl: '.testimonials-button-prev',
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

// Today Date

const dateInput = document.getElementById('date');
const today = new Date().toISOString().split('T')[0]; // формат YYYY-MM-DD
dateInput.value = today;

//Calendar Icon

const input = document.getElementById('date');
const icon = document.querySelector('.date-icon');

icon.addEventListener('click', () => {
  if (typeof input.showPicker === 'function') {
    input.showPicker(); 
  } else {
    input.focus(); 
  }
});
