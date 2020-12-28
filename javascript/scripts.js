const close_btn = document.querySelector('.menu__close');
const open_btn = document.querySelector('.menu__open');
const menu = document.querySelector('.menu');

close_btn.addEventListener('click', () => {
  menu.classList.add('close');
})

open_btn.addEventListener('click', ()=> {
  menu.classList.remove('close');
})