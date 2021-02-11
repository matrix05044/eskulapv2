function slider() {
  const opinionWrapper = document.querySelector('.c-opinions-wrapper');
  const opinionElements = opinionWrapper.querySelectorAll(
    '.c-opinions-wrapper__item'
  );
  const elemWidth = opinionElements[0].offsetWidth;
  let counter = 1;
  let offset = elemWidth;

  const swapLeft = (counter) => {
    opinionWrapper.style.transform = `translate(-${offset}px)`;
    offset = offset + elemWidth;
  };

  const swapRight = () => {
    opinionWrapper.style.transform = `translate(-${offset}px)`;
    offset = offset - elemWidth;
  };

  const changing = () => {
    if (counter < opinionElements.length - 1) {
      swapLeft();
      counter++;
    } else if (
      counter > opinionElements.length - 2 &&
      counter < opinionElements.length * 2 - 2
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

menuItems.forEach((item) => {
  item.addEventListener(
    'click',
    (elem) => {
      menuItems.forEach((element) => {
        element.classList.remove('c-menu-nav__link--active');
      });
      elem.target.classList.add('c-menu-nav__link--active');
    },
    false
  );
});

bg.addEventListener('click', moveMenu, false);
hamburger.addEventListener('click', moveMenu, false);

slider();
