const loaderContainer = document.querySelector('.loader');

let loader = function () {
  setTimeout(() => {
    loaderContainer.classList.add('loader--fade-out');
  }, 0);
};

window.onload = () => {
  loader();
};
