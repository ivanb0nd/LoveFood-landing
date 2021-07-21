// burger

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

burger.addEventListener('click', function() {
  burger.classList.toggle('burger--active');
  nav.classList.toggle('nav--active');
});

window.addEventListener('scroll', function() {
  burger.classList.remove('burger--active');
  nav.classList.remove('nav--active');
});

// home button scroll

const homeBtn = document.querySelector('.home__btn');

if (homeBtn) {
  homeBtn.addEventListener('click', function () {
    const catalogSectionSpacing = document.querySelector('#catalog').getBoundingClientRect().top;
    let headerTopOffset = document.querySelector('.header').offsetHeight;
    let offsetPosition = catalogSectionSpacing - headerTopOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth',
    });
  });
}

// smooth scroll

const navLinks = document.querySelectorAll('.anchor-link');

navLinks.forEach(function(el) {

  el.addEventListener('click', function(e) {
    e.preventDefault();
    const sectionId = el.getAttribute('href').replace('#','');
    const currentSection = document.getElementById(sectionId);
    let topOffset = document.querySelector('.header').offsetHeight;
    const sectionPosition = currentSection.getBoundingClientRect().top;
    const offsetPosition = sectionPosition - topOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth',
    });

  });
});



// active section and scroll up

const sections = document.querySelectorAll('.page-section');
const scrollUpBtn = document.querySelector('.scroll-up');


window.addEventListener('scroll', () => {
  let scrollDistance = window.scrollY;
  let headerOffset = document.querySelector('.header').offsetHeight;
  let scrollSpacing = sections[1].offsetTop - headerOffset;

  sections.forEach((el, i) => {
    if (el.offsetTop - headerOffset <= scrollDistance) {
      navLinks.forEach((el) => {
        if(el.classList.contains('nav__link--active')) {
          el.classList.remove('nav__link--active');
        }
      });
      navLinks[i].classList.add('nav__link--active');
    }
  });

  if (scrollDistance > scrollSpacing) {
    scrollUpBtn.classList.add('scroll-up--active');
  } else {
    scrollUpBtn.classList.remove('scroll-up--active');
  }
});

scrollUpBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
