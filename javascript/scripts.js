const close_btn = document.querySelector('.menu__close');
const open_btn = document.querySelector('.menu__open');
const menu = document.querySelector('.menu');

close_btn.addEventListener('click', toggleClose)
open_btn.addEventListener('click', toggleClose)

function toggleClose() {
  menu.classList.toggle('close');
}