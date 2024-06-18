'use strict'

// мобильное меню
const burgerMenuButton = document.querySelector('.mobmenu__burger');
const imgMenuButton = document.querySelector('.mobmenu__stiks');
const mobmenu = document.querySelector('.mobmenu__menu');
const body = document.querySelector('body');
const menuList = document.querySelectorAll('.mobmenu__list');
const menuItems = document.querySelectorAll('.mobmenu__item');

function OpenMobMenu() {
  mobmenu.classList.remove('mobmenu__menu--unvis');
    mobmenu.classList.add('mobmenu__menu--vis');
    imgMenuButton.classList.remove('mobmenu__stiks--op');
    imgMenuButton.classList.add('mobmenu__stiks--cl');
    body.classList.add('body__no-scroll');
}

function CloseMobMenu () {
  mobmenu.classList.remove('mobmenu__menu--vis');
    mobmenu.classList.add('mobmenu__menu--unvis');
    imgMenuButton.classList.remove('mobmenu__stiks--cl');
    imgMenuButton.classList.add('mobmenu__stiks--op');
    body.classList.remove('body__no-scroll');
}

burgerMenuButton.addEventListener('click', (e) => {
  if (mobmenu.classList.contains('mobmenu__menu--unvis') && 
      imgMenuButton.classList.contains('mobmenu__stiks--op')) {
      OpenMobMenu();
  } 
  else if (mobmenu.classList.contains('mobmenu__menu--vis') && 
          imgMenuButton.classList.contains('mobmenu__stiks--cl')) {
      CloseMobMenu ();
  } else {
      CloseMobMenu ();
  }
});    

burgerMenuButton.addEventListener('touch', (event) => {
  if (mobmenu.classList.contains('mobmenu__menu--unvis') && 
      imgMenuButton.classList.contains('mobmenu__stiks--op')) {
      OpenMobMenu();
  } 
  else if (mobmenu.classList.contains('mobmenu__menu--vis') && 
          imgMenuButton.classList.contains('mobmenu__stiks--cl')) {
      CloseMobMenu ();
  } else {
      CloseMobMenu ();
  }
});  

mobmenu.addEventListener('click', function(event) {
  if (event.target.tagName === 'A') {
    CloseMobMenu ();
  }
});
mobmenu.addEventListener('touch', function(event) {
  if (event.target.tagName === 'A') {
    CloseMobMenu ();
  }
});
