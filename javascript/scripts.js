const close_btn= document.querySelector('.menu-close-icon');
const open_btn = document.querySelector('.menu-open-icon');
const menu = document.querySelector('.menu--main');

close_btn.addEventListener('click', toggleOpen)
open_btn.addEventListener('click', toggleOpen)

function toggleOpen() {
  menu.classList.toggle('open');
}