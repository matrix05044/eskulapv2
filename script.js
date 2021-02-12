// opinions

const opinionWrapper = document.querySelector('.c-opinions-wrapper');
const opinionElements = opinionWrapper.querySelectorAll(
  '.c-opinions-wrapper__item'
);

//leyout
const wrapperLeyout = document.querySelector('.l-header-section-wrapper');
const wrapperItem = Array.from(
  wrapperLeyout.querySelectorAll('.c-header-section')
);

let counter = 1;

function slider(wrapper, wapperItem) {
  let offset = wapperItem[0].offsetWidth;

  const swapLeft = (counter) => {
    wrapper.style.transform = `translate(-${offset}px)`;
    offset = offset + wapperItem[0].offsetWidth;
  };

  const swapRight = () => {
    wrapper.style.transform = `translate(-${offset}px)`;
    offset = offset - wapperItem[0].offsetWidth;
  };

  const changing = () => {
    if (counter < wrapperItem.length - 1) {
      swapLeft();
      counter++;
    } else if (
      counter > wrapperItem.length - 2 &&
      counter < wrapperItem.length * 2 - 2
    ) {
      swapRight();
      counter++;
    } else {
      counter = 0;
    }
  };

  const sliding = () => {
    setInterval(changing, 5000);
  };

  sliding();
}

slider(wrapperLeyout, wrapperItem);
slider(opinionWrapper, opinionElements);

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

slider();

// const wrapper = document.querySelector('.l-header-section-wrapper');
// const wrapperItem = wrapper.querySelectorAll('c-header-sectio');
// const elemWidth = wrapperItem[0].offsetWidth;
// let counter = 1;
// let offset = elemWidth;

// const swapLeft = (counter) => {
//   wrapper.style.transform = `translate(-${offset}px)`;
//   offset = offset + elemWidth;
// };

// const swapRight = () => {
//   wrapper.style.transform = `translate(-${offset}px)`;
//   offset = offset - elemWidth;
// };

// const changing = () => {
//   if (counter < wrapperItem.length - 1) {
//     swapLeft();
//     counter++;
//   } else if (
//     counter > wrapperItem.length - 2 &&
//     counter < wrapperItem.length * 2 - 2
//   ) {
//     swapRight();
//     counter++;
//   } else {
//     counter = 0;
//   }
// };

// const leyaouSlider = () => {
//   setInterval(changing, 5000);
// };

// leyaouSlider();
