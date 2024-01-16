let menuBtn = document.querySelector('.open-menu');
let menu = document.querySelector('.mobile-menu');
let backdrop = document.querySelector('.backdrop')
let menuItem = document.querySelectorAll('.menu-close');

if (menuBtn) {
  menuBtn.addEventListener('click', function () {
    menu.classList.toggle('is-open');
    backdrop.style.display = menu.classList.contains('is-open')
      ? 'block'
      : 'none'
  });

  menuItem.forEach(function (item) {
    item.addEventListener('click', function () {
      menu.classList.toggle('is-open');
      backdrop.style.display = 'none';
    });
  });

  backdrop.addEventListener('click', function () {
    menu.classList.remove('is-open');
    backdrop.style.display = 'none';
  })
}