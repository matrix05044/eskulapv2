const list = Array.from(
  document.querySelectorAll('.c-pricer__item-title-wrapper')
);
const title = document.querySelectorAll('.c-pricer__item-title');
const listItems = document.querySelectorAll('.c-pricer__sub-list');
const listIcon = document.querySelectorAll('.c-pricer__item-title-icon');

const addClass = (index) => {
  list[index].classList.toggle('c-pricer__item-title-wrapper--active');
  listIcon[index].classList.toggle('c-pricer__item-title-icon--active');
};

const showList = (e) => {
  const index = list.indexOf(e.target);

  if (listItems[index].style.maxHeight === '') {
    listItems[index].style.maxHeight =
      listItems[index].childElementCount * 35 + 'px';
    addClass(index);
  } else if (
    (listItems[index].style.maxHeight =
      listItems[index].childElementCount * 35 + 'px')
  ) {
    listItems[index].style.maxHeight = '';
    addClass(index);
  }
};

list.forEach((elem) => {
  elem.addEventListener('click', showList, false);
});
