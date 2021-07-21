// animate logo


if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

} else {

  const logo = document.querySelector('.logo');
  let isLock = true;

  logo.addEventListener('mouseover', function (event) {

    if (isLock) {
      isLock = false;
      logo.classList.add('animate');

      setTimeout(function () {
        logo.classList.remove('animate');
        isLock = true;
      }, 1500);
    }
  });
}
