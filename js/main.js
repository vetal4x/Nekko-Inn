// GSAP
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, TextPlugin, ScrollToPlugin);

const smoother = ScrollSmoother.create({
  wrapper: '.wrapper',
  content: '.content',
  smooth: 1.2,
  effects: true,
});

const links = document.querySelectorAll('.header__navbar-item--link');

links.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const target = document.querySelector(link.getAttribute('href'));

    const topPosition =
      target.getBoundingClientRect().top + window.pageYOffset - 50;

    smoother.scrollTo(topPosition, true, 'top');
  });
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

const tabletWidth = window.matchMedia('(min-width: 1280px)');

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
      ease: 'power3.out',
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
    { scaleX: 1, duration: 0.2, ease: 'power1.out' },
    0.25
  );

  aboutTimeline.to(
    '.about__title-underline',
    {
      transformOrigin: 'right center',
      scaleX: 0,
      duration: 0.2,
      ease: 'power1.in',
    },
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
    { scaleX: 1, duration: 0.2, ease: 'power1.out' },
    0.55
  );

  aboutTimeline.to(
    '.about__subtitle-underline',
    {
      transformOrigin: 'right center',
      scaleX: 0,
      duration: 0.2,
      ease: 'power1.in',
    },
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
    {
      x: 140,
      opacity: 0,
      scale: 0.95,
    },
    {
      x: 0,
      opacity: 1,
      scale: 1,
      duration: 0.9,
      ease: 'power3.out',
    },
    0.5
  );

  // Our Rooms Scroll Animations

  // Our Rooms Image Gallery Scroll Animation

  const ourRoomsGalleryTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.our-rooms',
      start: 'top 90%',
      end: 'bottom 90%',
      scrub: true,
    },
  });

  ourRoomsGalleryTimeline.fromTo(
    '.image-gallery__image',
    {
      x: -450,
      flexGrow: 1,
      opacity: 0.3,
    },
    {
      x: 0,
      flexGrow: 1,
      opacity: 0.3,
      stagger: 0.2,
      duration: 1,
      ease: 'power2.out',
    }
  );

  ourRoomsGalleryTimeline.to(
    '.image-gallery__image--active',
    {
      flexGrow: 'var(--total-images)',
      opacity: 1,
      duration: 0.4,
      ease: 'power2.out',
    },
    '>-0.2'
  );

  ourRoomsGalleryTimeline.eventCallback('onUpdate', () => {
    const progress = ourRoomsGalleryTimeline.progress();
    if (progress > 0.8) {
      document.querySelectorAll('.image-gallery__image').forEach((el) => {
        el.style.removeProperty('flex-grow');
        el.style.removeProperty('opacity');
        el.style.removeProperty('transform');
      });
    }
  });

  // Our Rooms Title, Subtitle and Accordion Scroll Animation

  const ourRoomsRightContentTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.our-rooms',
      start: 'top 85%',
      end: 'bottom 110%',
      scrub: true,
    },
  });

  // Our Rooms Title Scroll Animation

  ourRoomsRightContentTimeline.fromTo(
    '.our-rooms__title',
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out' },
    0.2
  );

  ourRoomsRightContentTimeline.fromTo(
    '.our-rooms__title-underline',
    { scaleX: 0, transformOrigin: 'left center' },
    { scaleX: 1, duration: 0.4, ease: 'power1.out' },
    0.35
  );

  ourRoomsRightContentTimeline.to(
    '.our-rooms__title-underline',
    {
      transformOrigin: 'right center',
      scaleX: 0,
      duration: 0.2,
      ease: 'power1.in',
    },
    0.7
  );

  // Our Rooms Subtitle Scroll Animation

  ourRoomsRightContentTimeline.fromTo(
    '.our-rooms__subtitle',
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out' },
    0.6
  );

  ourRoomsRightContentTimeline.fromTo(
    '.our-rooms__subtitle-underline',
    { scaleX: 0, transformOrigin: 'left center' },
    { scaleX: 1, duration: 0.2, ease: 'power1.out' },
    0.75
  );

  ourRoomsRightContentTimeline.to(
    '.our-rooms__subtitle-underline',
    {
      transformOrigin: 'right center',
      scaleX: 0,
      duration: 0.2,
      ease: 'power1.in',
    },
    1.1
  );

  // Our Rooms Accordion Scroll Animation

  ourRoomsRightContentTimeline.fromTo(
    '.accordion__wrapper',
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out', stagger: 0.4 },
    0.9
  );

  // Care Section Scroll Animation

  // Care Cards Scroll Animation

  const careCards = document.querySelectorAll('.care__block');

  const reversedCards = Array.from(careCards).reverse();

  const careTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.care',
      start: 'top 90%',
      end: 'bottom 100%',
      scrub: true,
    },
  });

  careTimeline.fromTo(
    reversedCards,
    {
      x: () => -careCards[0].offsetWidth * 2,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 2,
      stagger: 0.15,
    }
  );

  // Care Title Scroll Animation

  careTimeline.fromTo(
    '.care__intro-title',
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out' },
    0.3
  );

  // Care Subtitle Scroll Animation

  careTimeline.fromTo(
    '.care__intro-subtitle',
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out' },
    0.7
  );

  careTimeline.fromTo(
    '.care__intro-subtitle-underline',
    { scaleX: 0, transformOrigin: 'left center' },
    { scaleX: 1, duration: 0.2, ease: 'power1.out' },
    0.85
  );

  careTimeline.to(
    '.care__intro-subtitle-underline',
    {
      transformOrigin: 'right center',
      scaleX: 0,
      duration: 0.2,
      ease: 'power1.in',
    },
    1.2
  );

  // Care Text Scroll Animation

  careTimeline.fromTo(
    '.care__intro-text',
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' },
    1.4
  );

  // Care Button Scroll Animation

  careTimeline.fromTo(
    '.care__intro-button',
    { scale: 0.8, opacity: 0 },
    { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(1.7)' },
    2
  );

  // Clients Slider Scroll Animation

  gsap.from('.slider--clients', {
    y: 50,
    opacity: 0,
    duration: 0.6,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.slider--clients',
      start: 'top 90%',
    },
  });

  // Pricing Scroll Animations

  const pricingIntroTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.pricing',
      start: 'top 100%',
      end: 'top 20%',
      scrub: true,
    },
  });

  // Pricing Title Scroll Animation

  pricingIntroTimeline.fromTo(
    '.pricing__title',
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out' },
    0.35
  );

  pricingIntroTimeline.fromTo(
    '.pricing__title-underline',
    { scaleX: 0, transformOrigin: 'left center' },
    { scaleX: 1, duration: 0.2, ease: 'power1.out' },
    0.45
  );

  pricingIntroTimeline.to(
    '.pricing__title-underline',
    {
      transformOrigin: 'right center',
      scaleX: 0,
      duration: 0.2,
      ease: 'power1.in',
    },
    0.65
  );

  // Pricing Subtitle Scroll Animation

  pricingIntroTimeline.fromTo(
    '.pricing__subtitle',
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out' },
    0.65
  );

  pricingIntroTimeline.fromTo(
    '.pricing__subtitle-underline',
    { scaleX: 0, transformOrigin: 'left center' },
    { scaleX: 1, duration: 0.2, ease: 'power1.out' },
    0.75
  );

  pricingIntroTimeline.to(
    '.pricing__subtitle-underline',
    {
      transformOrigin: 'right center',
      scaleX: 0,
      duration: 0.2,
      ease: 'power1.in',
    },
    0.95
  );

  // Pricing Text Scroll Animation

  pricingIntroTimeline.fromTo(
    '.pricing__text',
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' },
    1
  );

  // Pricing Cards Scroll Animation

  const pricingCardsTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.pricing__cards',
      start: 'top 80%',
      end: 'bottom 70%',
      scrub: true,
    },
  });

  const pricingCards = document.querySelectorAll('.pricing-card');

  // Pricing Cards Container Scroll Animation

  pricingCardsTimeline.fromTo(
    '.pricing__cards',
    { y: 30, scale: 0.96, opacity: 0 },
    { y: 0, scale: 1, duration: 1.6, opacity: 1, ease: 'power3.out' }
  );

  // Pricing Cards Left Card Scroll Animation

  pricingCardsTimeline.fromTo(
    pricingCards[0],
    {
      x: () => pricingCards[0].offsetWidth * 0.8,
    },
    {
      x: 0,
      duration: 1,
    },
    0.1
  );

  // Pricing Cards Right Card Scroll Animation

  pricingCardsTimeline.fromTo(
    pricingCards[2],
    {
      x: () => -pricingCards[2].offsetWidth * 0.8,
    },
    {
      x: 0,
      duration: 1,
    },
    0.1
  );

  // Pricing Button Scroll Animation

  pricingCardsTimeline.fromTo(
    '.pricing__button',
    { scale: 0.8, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration: 0.4,
      ease: 'back.out(1.7)',
      stagger: 0.08,
    },
    0.8
  );

  // Reviews Scroll Animations

  const reviewsTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.reviews',
      start: 'top 100%',
      end: 'top 20%',
      scrub: true,
    },
  });

  // Reviews Title Scroll Animation

  reviewsTimeline.fromTo(
    '.reviews__title',
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out' },
    0.35
  );

  reviewsTimeline.fromTo(
    '.reviews__title-underline',
    { scaleX: 0, transformOrigin: 'left center' },
    { scaleX: 1, duration: 0.2, ease: 'power1.out' },
    0.45
  );

  reviewsTimeline.to(
    '.reviews__title-underline',
    {
      transformOrigin: 'right center',
      scaleX: 0,
      duration: 0.2,
      ease: 'power1.in',
    },
    0.65
  );

  // Reviews Subtitle Scroll Animation

  reviewsTimeline.fromTo(
    '.reviews__subtitle',
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out' },
    0.65
  );

  reviewsTimeline.fromTo(
    '.reviews__subtitle-underline',
    { scaleX: 0, transformOrigin: 'left center' },
    { scaleX: 1, duration: 0.2, ease: 'power1.out' },
    0.75
  );

  reviewsTimeline.to(
    '.reviews__subtitle-underline',
    {
      transformOrigin: 'right center',
      scaleX: 0,
      duration: 0.2,
      ease: 'power1.in',
    },
    0.95
  );

  // Reviews Text Scroll Animation

  reviewsTimeline.fromTo(
    '.reviews__text',
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' },
    1
  );

  // Reviews Slider Testimonials Scroll Animation

  reviewsTimeline.fromTo(
    '.slider-testimonials--pc',
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' },
    1.2
  );

  // Booking Scroll Animations

  const bookingTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.booking__container',
      start: 'top 100%',
      end: 'top 20%',
      scrub: true,
    },
  });

  // Booking Container Scroll Animation

  bookingTimeline.fromTo(
    '.booking__container',
    { y: 100, opacity: 0 },
    { y: 0, opacity: 1, duration: 2, ease: 'power3.out' }
  );

  // Booking Title Scroll Animation

  bookingTimeline.fromTo(
    '.booking__title',
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out' },
    0.35
  );

  bookingTimeline.fromTo(
    '.booking__title-underline',
    { scaleX: 0, transformOrigin: 'left center' },
    { scaleX: 1, duration: 0.2, ease: 'power1.out' },
    0.45
  );

  bookingTimeline.to(
    '.booking__title-underline',
    {
      transformOrigin: 'right center',
      scaleX: 0,
      duration: 0.2,
      ease: 'power1.in',
    },
    0.65
  );

  // Booking Subtitle Scroll Animation

  bookingTimeline.fromTo(
    '.booking__subtitle',
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out' },
    0.65
  );

  bookingTimeline.fromTo(
    '.booking__subtitle-underline',
    { scaleX: 0, transformOrigin: 'left center' },
    { scaleX: 1, duration: 0.2, ease: 'power1.out' },
    0.75
  );

  bookingTimeline.to(
    '.booking__subtitle-underline',
    {
      transformOrigin: 'right center',
      scaleX: 0,
      duration: 0.2,
      ease: 'power1.in',
    },
    0.95
  );

  // Booking Text Scroll Animation

  bookingTimeline.fromTo(
    '.booking__text',
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' },
    1
  );

  // Booking Form Scroll Animation

  const bookingFormTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.booking__form',
      start: 'top 90%',
      end: 'top',
      scrub: true,
    },
  });

  // Booking Form Fields Scroll Animation

  bookingFormTimeline.fromTo(
    '.booking__field',
    { scale: 0.8, opacity: 0 },
    { scale: 1, opacity: 1, duration: 1.2, ease: 'back.out(1.7)', stagger: 0.2 }
  );

  // Booking Form Button Scroll Animation

  bookingFormTimeline.fromTo(
    '.booking__button',
    { scale: 0.8, opacity: 0 },
    { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(1.7)' },
    '>'
  );

  // Footer Scroll Animations

  const footerTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.footer',
      start: 'top 100%',
      end: 'bottom 90%',
      scrub: true,
    },
  });

  // Footer Container Scroll Animation

  footerTimeline.fromTo(
    '.footer__container',
    { y: 50, opacity: 0, filter: 'blur(10px)' },
    { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1.5, ease: 'power3.out' }
  );

  // Footer Logo Image Scroll Animations

  footerTimeline.fromTo(
    '.footer__intro-logo-image',
    { scale: 0.8, opacity: 0 },
    { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(1.7)' },
    0.45
  );

  // Footer Logo Text Top Scroll Animation

  footerTimeline.fromTo(
    '.footer__intro-logo-text--top',
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out' },
    0.45
  );

  footerTimeline.fromTo(
    '.footer__intro-logo-text--top-underline',
    { scaleX: 0, transformOrigin: 'left center' },
    { scaleX: 1, duration: 0.2, ease: 'power1.out' },
    0.55
  );

  footerTimeline.to(
    '.footer__intro-logo-text--top-underline',
    {
      transformOrigin: 'right center',
      scaleX: 0,
      duration: 0.2,
      ease: 'power1.in',
    },
    0.8
  );

  // Footer Logo Text Bottom Scroll Animation

  footerTimeline.fromTo(
    '.footer__intro-logo-text--bottom',
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out' },
    0.8
  );

  footerTimeline.fromTo(
    '.footer__intro-logo-text--bottom-underline',
    { scaleX: 0, transformOrigin: 'left center' },
    { scaleX: 1, duration: 0.2, ease: 'power1.out' },
    0.9
  );

  footerTimeline.to(
    '.footer__intro-logo-text--bottom-underline',
    {
      transformOrigin: 'right center',
      scaleX: 0,
      duration: 0.2,
      ease: 'power1.in',
    },
    1.15
  );

  // Footer Input Field Scroll Animation

  footerTimeline.fromTo(
    '.footer__intro-form',
    { width: '26%' },
    { width: '62%', duration: 1.2, ease: 'power3.out' },
    0.55
  );

  // Footer Contact Icons Scroll Animation

  footerTimeline.fromTo(
    '.footer__contacts-block-icon',
    { scale: 0.8, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration: 0.4,
      ease: 'back.out(1.7)',
      stagger: 0.3,
    },
    1.55
  );

  // Footer Contact Text Scroll Animation

  footerTimeline.fromTo(
    '.footer__contacts-block-text',
    { rotationX: 90, opacity: 0 },
    {
      rotationX: 0,
      opacity: 1,
      duration: 0.4,
      ease: 'back.out(1.7)',
      stagger: 0.3,
    },
    1.6
  );

  // Footer Plans Scroll Animation

  footerTimeline.fromTo(
    '.footer__plans-title, .footer__plans-item',
    { rotationX: 90, opacity: 0 },
    {
      rotationX: 0,
      opacity: 1,
      duration: 0.4,
      ease: 'back.out(1.7)',
      stagger: 0.2,
    },
    1.4
  );

  // Footer Social Text Scroll Animation

  footerTimeline.from(
    '.footer__social-text',
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
    1.4
  );

  // Footer Social Icons Scroll Animation

  footerTimeline.fromTo(
    '.footer__social-icon',
    { scale: 0.8, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration: 0.4,
      ease: 'back.out(1.7)',
      stagger: 0.2,
    },
    1.6
  );

  // Footer Copyright Scroll Animation

  footerTimeline.fromTo(
    '.footer__copyright--pc, .footer__copyright--mobile',
    { x: '100%', opacity: 0 },
    {
      x: '0%',
      opacity: 1,
      duration: 0.4,
      ease: 'power3.out',
      stagger: 0.2,
    },
    2.2
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

let userSelectedTheme = localStorage.getItem('theme');

// Function to apply theme

function applyTheme(theme) {
  document.body.dataset.theme = theme;

  themeSwitchers.forEach((button) => {
    button.classList.toggle(
      'mobile-menu__theme-switcher--active',
      theme === 'light'
    );
    button.classList.toggle(
      'header__theme-switcher--active',
      theme === 'light'
    );
  });
}

// Detecting the theme when loading a page

function getInitialTheme() {
  if (userSelectedTheme !== null) {
    return userSelectedTheme;
  }

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? '' : 'light';
}

// Applying a theme when loading a page

applyTheme(getInitialTheme());

// Events on switching

themeSwitchers.forEach((button) => {
  button.addEventListener('click', () => {
    const newTheme = document.body.dataset.theme === 'light' ? '' : 'light';
    userSelectedTheme = newTheme;
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
  });
});

window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', (event) => {
    if (userSelectedTheme === null) {
      const newTheme = event.matches ? '' : 'light';
      applyTheme(newTheme);
    }
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

// Calendar Icon

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
