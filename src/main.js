let menuBtn = document.querySelector('.open-menu');
let menu = document.querySelector('.mobile-menu');
let backdrop = document.querySelector('.backdrop');
let menuItem = document.querySelectorAll('.menu-close');

if (menuBtn) {
  menuBtn.addEventListener('click', function () {
    menu.classList.toggle('is-open');
    backdrop.style.display = menu.classList.contains('is-open')
      ? 'block'
      : 'none';
    document.body.style.overflow = menu.classList.contains('is-open')
      ? 'hidden'
      : 'auto';
  });

  menuItem.forEach(function (item) {
    item.addEventListener('click', function () {
      menu.classList.toggle('is-open');
      backdrop.style.display = 'none';
      document.body.style.overflow = 'auto';
    });
  });

  backdrop.addEventListener('click', function () {
    menu.classList.remove('is-open');
    backdrop.style.display = 'none';
    document.body.style.overflow = 'auto';
  });
}

// Scroll to top button
let mybutton = document.getElementById('scroll-up-btn');

window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}

mybutton.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
  });
});
