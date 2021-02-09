// function slider() {
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
// }

// slider();
