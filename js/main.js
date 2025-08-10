// Hamburger

const header = document.querySelector('.header');
const hamburger = document.querySelector('.header__hamburger');

hamburger.addEventListener('click', () => {
  header.classList.toggle('open');
  document.body.classList.toggle('lock');
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

// Clients Slider

const clientsSwiper = new Swiper('.slider--clients .swiper', {
  grabCursor: true,
  loop: true,
  speed: 700,
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 30,
    depth: 100,
    scale: 0.9,
    stretch: 0,
    slideShadows: false,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.clients-button-next',
    prevEl: '.clients-button-prev',
  },
  slidesPerView: 1,

  breakpoints: {
    480: {
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      centeredSlides: true,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 10,
    },
    1280: {
      slidesPerView: '5',
      centeredSlides: false,
      spaceBetween: 15,
      effect: 'slide',
      speed: 5000, 
      autoplay: {
        delay: 0, 
        disableOnInteraction: false,
      },
      allowTouchMove: false, 
    },
  },
});

// Testimonial Slider Mobile

const testimonialsSwiperMobile = new Swiper(
  '.slider-testimonials--mobile .swiper',
  {
    grabCursor: true,
    effect: 'creative',
    speed: 700,
    loop: true,
    navigation: {
      nextEl: '.testimonials-button-next--mobile',
      prevEl: '.testimonials-button-prev--mobile',
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
  }
);

// Testimonial Slider Mobile PC

const testimonialsSwiperPc = new Swiper('.slider-testimonials--pc .swiper', {
  grabCursor: true,
  speed: 700,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.testimonials-button-next--pc',
    prevEl: '.testimonials-button-prev--pc',
  },
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 20,

  breakpoints: {
    1024: {
      slidesPerView: '3',
      centeredSlides: true,
      spaceBetween: 20,
    },
  },
});

// Today Date

const dateInput = document.getElementById('date');
const today = new Date().toISOString().split('T')[0];
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

//Image Gallery

const initImageGallery = () => {
  const galleryContainer = document.querySelector('.image-gallery__images');
  const galleryImages = document.querySelectorAll('.image-gallery__image');

  galleryContainer.style.setProperty('--total-images', galleryImages.length);

  galleryContainer.addEventListener('click', (event) => {
    const clickedImage = event.target.closest('.image-gallery__image');

    if (
      !clickedImage ||
      clickedImage.classList.contains('image-gallery__image--active')
    )
      return;

    galleryImages.forEach((image) => {
      image.classList.remove('image-gallery__image--active');
    });

    clickedImage.classList.add('image-gallery__image--active');
  });
};

initImageGallery();
