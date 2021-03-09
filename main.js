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

let counter1 = 1,
  counter2 = 1;

function slider(wrapper, wapperItem, counter, time) {
  let offset = wapperItem[0].offsetWidth;

  const swapLeft = () => {
    wrapper.style.transform = `translate(-${offset}px)`;
    offset = offset + wapperItem[0].offsetWidth;
  };

  const swapRight = (counter) => {
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
    setInterval(changing, time);
  };

  sliding();
}

// slider(wrapperLeyout, wrapperItem, counter1, 7000);
// slider(opinionWrapper, opinionElements, counter2, 10000);

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

baguetteBox.run('.l-gallery', {});

const swiper = new Swiper('.swiper-container', {
  loop: true,

  autoplay: {
    delay: 5000,
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
