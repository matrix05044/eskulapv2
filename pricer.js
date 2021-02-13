const list = Array.from(
  document.querySelectorAll('.c-pricer__item-title-wrapper')
);
const title = document.querySelectorAll('.c-pricer__item-title');
const listItems = document.querySelectorAll('.c-pricer__sub-list');
const listIcon = document.querySelectorAll('.c-pricer__item-title-icon');

const showList = (e) => {
  const index = list.indexOf(e.target);
  listItems[index].classList.toggle('c-pricer__sub-list--active');
  list[index].classList.toggle('c-pricer__item-title-wrapper--active');
  listIcon[index].classList.toggle('c-pricer__item-title-icon--active');
};

list.forEach((elem) => {
  elem.addEventListener('click', showList, false);
});
