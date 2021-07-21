const tabsBtns = document.querySelectorAll('.catalog__btn');
const tabsItems = document.querySelectorAll('.tab__item');

tabsBtns.forEach(onTabClick);

function onTabClick(el) {
  el.addEventListener('click', function () {
    let currentBtn = el;
    let tabId = currentBtn.getAttribute('data-tab');
    let currentTab = document.querySelector(tabId);

    if (!currentBtn.classList.contains('catalog__btn--active')) {
      tabsBtns.forEach(el => {
        el.classList.remove('catalog__btn--active');
      });

      tabsItems.forEach(el => {
        el.classList.remove('tab__item--active');
      });

      currentBtn.classList.add('catalog__btn--active');
      currentTab.classList.add('tab__item--active');
    }
  });
}
