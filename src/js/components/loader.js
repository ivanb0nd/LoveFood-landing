const loaderContainer = document.querySelector('.loader');

let loader = function () {
  setTimeout(() => {
    loaderContainer.classList.add('loader--fade-out');
  }, 1000);
};

window.onload = loader;
