const close_btn= document.querySelector('.menu-close-icon');
const open_btn = document.querySelector('.menu-open-icon');
const menu = document.querySelector('.menu--main');
const menu_back = document.querySelector('.menu__background');
const circle =  document.querySelector('.circle_container');

close_btn.addEventListener('click', toggleOpen)
open_btn.addEventListener('click', toggleOpen)

function toggleOpen() {
  menu.classList.toggle('open');
  menu_back.classList.toggle('open');
  circle.classList.toggle('raised');

}