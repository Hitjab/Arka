const menu = document.querySelector('.menu__body')
const menuBtn = document.querySelector('.menu__icon')

const body = document.body;

if (menu && menuBtn) {
   menuBtn.addEventListener('click', () => {
      menu.classList.toggle('active')
      menuBtn.classList.toggle('active')
      body.classList.toggle('lock')
   })
}
menu.addEventListener('click', e => {
   if (e.target.classList.contains('menu__body')) {
      menu.classList.toggle('active')
      menuBtn.classList.toggle('active')
      body.classList.toggle('lock')
   }
})

const listItem = document.querySelector('.header__menu-list')

if (listItem) {
   listItem.addEventListener('click', () => {
      listItem.classList.toggle('activelist')
   })
}

const listfooter = document.querySelector('.footer__left-container-item')

if (listfooter) {
   listfooter.addEventListener('click', () => {
      listfooter.classList.toggle('activefooter')
   })
}


