/* в этот файл добавляет скрипты*/
const navMain = document.querySelector('.main-header__navigation');
const navToggle = document.querySelector('.main-header__toggle');

navMain.classList.remove('main-header__navigation--nojs');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('main-header__navigation--closed')) {
    navMain.classList.remove('main-header__navigation--closed');
    navMain.classList.add('main-header__navigation--opened');
  } else {
    navMain.classList.add('main-header__navigation--closed');
    navMain.classList.remove('main-header__navigation--opened');
  }
});
