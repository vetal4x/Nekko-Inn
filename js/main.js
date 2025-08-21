// GSAP
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, TextPlugin);

ScrollSmoother.create({
  wrapper: '.wrapper',
  content: '.content',
  smooth: 1.1,
  effects: true,
});

// Loader

// Header

const headerTimeline = gsap
  .timeline()
  .set('.header > *:not(.header__mobile-menu)', {
    scale: 0.95,
    opacity: 0,
    filter: 'blur(2px)',
  })
  .to('.header > *:not(.header__mobile-menu)', {
    scale: 1,
    opacity: 1,
    filter: 'blur(0px)',
    duration: 1.5,
    stagger: 0.1,
    ease: 'power2.out',
  });

// Hero

const heroTimeline = gsap
  .timeline()
  .from(
    '.hero__title',
    {
      opacity: 0,
      x: -15,
      scale: 0.97,
      duration: 1.2,
      ease: 'power3.out',
    },
    0.1
  )

  .from(
    '.hero__subtitle',
    {
      opacity: 0,
      x: -5,
      duration: 1.2,
      ease: 'power2.out',
      onStart() {
        this.targets().forEach((el) => (el.style.transformOrigin = 'left'));
      },
      onUpdate() {
        const progress = this.progress();
        this.targets().forEach(
          (el) => (el.style.clipPath = `inset(0 ${100 - progress * 100}% 0 0)`)
        );
      },
      onComplete() {
        this.targets().forEach((el) => (el.style.clipPath = 'inset(0 0 0 0)'));
      },
    },
    0.1
  )

  .from(
    '.hero__text',
    {
      opacity: 0,
      y: 10,
      duration: 1.5,
      ease: 'power2.out',
    },
    0.3
  )

  .from(
    '.hero__button',
    {
      opacity: 0,
      y: 10,
      duration: 1,
      ease: 'power2.out',
    },
    0.5
  )

  .from(
    '.hero__image-main, .hero__image-main--pc, .hero__image-wrapper',
    {
      opacity: 0,
      scale: 0.98,
      duration: 1.2,
      ease: 'power2.out',
    },
    0
  )

  .from(
    '.hero__image-small',
    {
      opacity: 0,
      scale: 0.6,
      duration: 0.8,
      ease: 'power2.out',
      stagger: 0.15,
    },
    0
  );

// Master Timeline

gsap.timeline().add(headerTimeline).add(heroTimeline, 0);

// Scroll Animations

const tabletWidth = window.matchMedia('(min-width: 768px)');

if (tabletWidth.matches) {
  // Hero Scroll Animations

  const heroTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    },
  });

  heroTimeline.to('.hero__content-wrapper', { x: -200, opacity: 0 }, 0);
  heroTimeline.to('.hero__image', { x: 200, opacity: 0 }, 0);

  // Contacts Scroll Animations

  const contactsTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.contacts',
      start: 'top bottom',
      end: 'center+=80% center',
      scrub: true,
    },
  });

  // Contacts Blocks Scroll Animation

  contactsTimeline.fromTo(
    '.contacts__communication',
    { width: '200%' },
    { width: '100%' },
    0
  );

  // Contacts Text and Icons Scroll Animation

  contactsTimeline.fromTo(
    '.contacts__text',
    { x: -20, opacity: 0 },
    { x: 0, opacity: 1, stagger: 0.1 },
    0
  );

  contactsTimeline.fromTo(
    '.contacts__icon',
    { scale: 0.7, opacity: 0, filter: 'blur(2px)' },
    { scale: 1, opacity: 1, filter: 'blur(0px)', stagger: 0.1 },
    0
  );

// About Scroll Animations

const aboutTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: '.about',
    start: 'top 130%',
    end: 'top 20%',
    scrub: true,
  },
});

// About Blocks Scroll Animation

aboutTimeline.fromTo(
  '.about',
  {
    rotateX: 45,
    opacity: 0,
    y: -100,
    transformPerspective: 1000,
    transformOrigin: 'center bottom',
  },
  {
    rotateX: 0,
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: 'power3.out'
  },
  0.15 
);

// About Title Scroll Animation

aboutTimeline.fromTo(
  '.about__title',
  { y: 30, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out' },
  0.2
);

aboutTimeline.fromTo(
  '.about__title-underline',
  { scaleX: 0, transformOrigin: 'left center' },
  { scaleX: 1, duration: 0.2, ease: 'power2.out' },
  0.25
);

aboutTimeline.to(
  '.about__title-underline',
  { transformOrigin: 'right center', scaleX: 0, duration: 0.2, ease: 'power2.in' },
  0.45
);

// About Subtitle Scroll Animation

aboutTimeline.fromTo(
  '.about__subtitle',
  { y: 30, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out' },
  0.5
);

aboutTimeline.fromTo(
  '.about__subtitle-underline',
  { scaleX: 0, transformOrigin: 'left center' },
  { scaleX: 1, duration: 0.2, ease: 'power2.out' },
  0.55
);

aboutTimeline.to(
  '.about__subtitle-underline',
  { transformOrigin: 'right center', scaleX: 0, duration: 0.2, ease: 'power2.in' },
  0.75
);

// About Text Scroll Animation

aboutTimeline.fromTo(
  '.about__text',
  { y: 30, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' },
  0.8 
);

// About Button Scroll Animation

aboutTimeline.fromTo(
  '.about__button',
  { scale: 0.8, opacity: 0 },
  { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(1.7)' },
  0.95
);

// About Image Scroll Animation

aboutTimeline.fromTo(
  '.about__image-wrapper',
  { x: 140, opacity: 0, scale: 0.95 },
  { x: 0, opacity: 1, scale: 1, duration: 0.9, ease: 'power3.out' },
  0.5
);


}
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

// Theme Switcher

const themeSwitchers = document.querySelectorAll(
  '.mobile-menu__theme-switcher, .header__theme-switcher'
);

themeSwitchers.forEach((button) => {
  button.addEventListener('click', () => {
    button.classList.toggle('mobile-menu__theme-switcher--active');
    button.classList.toggle('header__theme-switcher--active');
    document.body.dataset.theme =
      document.body.dataset.theme === 'light' ? '' : 'light';
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
    1440: {
      slidesPerView: '6',
      centeredSlides: false,
      spaceBetween: 20,
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

// Testimonial Slider PC

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
    1600: {
      slidesPerView: '3',
      centeredSlides: true,
      spaceBetween: 30,
    },
  },
});

// Today Date

const dateInput = document.getElementById('date');
const today = new Date().toISOString().split('T')[0];
dateInput.value = today;

//Calendar Icon

const input = document.getElementById('date');
const icon = document.querySelector('.date-icon-wrapper');

let pickerOpen = false;

icon.addEventListener('click', () => {
  if (typeof input.showPicker === 'function') {
    if (!pickerOpen) {
      input.showPicker();
      pickerOpen = true;
      input.addEventListener(
        'blur',
        () => {
          pickerOpen = false;
        },
        { once: true }
      );
    } else {
      input.blur();
      pickerOpen = false;
    }
  } else {
    if (document.activeElement === input) {
      input.blur();
    } else {
      input.focus();
    }
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
