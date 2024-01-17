let menuBtn = document.querySelector('.open-menu');
let menu = document.querySelector('.mobile-menu');
let backdrop = document.querySelector('.backdrop')
let menuItem = document.querySelectorAll('.menu-close');

if (menuBtn) {
  menuBtn.addEventListener('click', function () {
    menu.classList.toggle('is-open');
    backdrop.style.display = menu.classList.contains('is-open')
      ? 'block'
      : 'none';
    document.body.style.overflow = menu.classList.contains('is-open') ? 'hidden' : 'auto';
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
  })
}

// Removing mobile menu bg-img in landscape orientation
  function updMobileMenuBg() {
    var mobileMenu = document.querySelector('.mobile-menu');
    var orientation = window.innerWidth > window.innerHeight ? 'landscape' : 'portrait';

    if (orientation === 'landscape') {
      mobileMenu.style.backgroundImage = 'none';
    } else {
      mobileMenu.style.backgroundImage = ('url(./img/menu/menu_mobile_1x.webp)');
    }
  }

  updMobileMenuBg();

  window.addEventListener('orientationchange', function () {
    setTimeout(updMobileMenuBg, 1);
  });

// Scroll to top button
let mybutton = document.getElementById("scroll-up-btn");

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener('click', function () {
  window.scrollTo({
    top: 0
  })
})




