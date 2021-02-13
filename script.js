const hamburger = document.querySelector('.c-hamburger');
const menu = hamburger.nextElementSibling;
const hamburgerItem = hamburger.querySelector('.c-hamburger__inner');
const body = document.querySelector('body');
const bg = body.firstElementChild;
const menuItems = Array.from(menu.querySelectorAll('.c-menu-nav__link'));

const moveMenu = () => {
  menu.classList.toggle('c-menu--disactive');
  hamburger.classList.toggle('c-hamburger--active');
  hamburgerItem.classList.toggle('c-hamburger__inner--active');
  bg.classList.toggle('bg-menu--active');
};

bg.addEventListener('click', moveMenu, false);
hamburger.addEventListener('click', moveMenu, false);
