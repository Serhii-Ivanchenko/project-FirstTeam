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

// scale for Nav Links
// document
//   .querySelectorAll('.nav-link, .footer-link')
//   .forEach(function (navLink) {
//     navLink.addEventListener('mouseenter', function () {
//       var parentNavItem = navLink.closest('.nav-item, .footer-nav-list-item, .footer-socials-item');
//       if (parentNavItem) {
//         parentNavItem.style.transform = 'scale(1.1)';
//       }
//     });

//     navLink.addEventListener('mouseleave', function () {
//       var parentNavItem = navLink.closest(
//         '.nav-item, .footer-nav-list-item, .footer-socials-item'
//       );
//       if (parentNavItem) {
//         parentNavItem.style.transform = '';
//       }
//     });
//   });
