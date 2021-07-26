const sr = ScrollReveal({
  distance: '60px',
  duration: 2500,
});

sr.reveal(`.home__content, .home__image,
           .production__item,
           .popular__item,
           .catalog__tabs, .catalog__content,
           .review__item`, {
  origin: 'top',
  interval: 100,
});

sr.reveal(`.footer__icon, .footer__copy`, {
  origin: 'bottom',
  distance: '20px',
  duration: 2000,
  interval: 100,
});

sr.reveal(`.order__content`, {
  distance: '0px',
  duration: 2000,
  opacity: 0,
});
