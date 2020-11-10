import css from "./css/style.css";

import template from './template/menu.hbs'
import menu from './json/menu.json'

function insertElements(data, template, place) {
  const element = template(data)
  place.insertAdjacentHTML('beforeend', element)
}

insertElements(menu, template, document.querySelector('.js-menu'))

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const body = document.body
let toggleBtn = document.querySelector('.theme-switch__toggle')

if((localStorage.length == 0)){
  localStorage.setItem('themeChange', Theme.LIGHT)
}

if(localStorage.getItem('themeChange') == Theme.DARK){
  body.classList.add(Theme.DARK)
  body.classList.remove(Theme.LIGHT)
  toggleBtn.checked = true
}

toggleBtn.addEventListener('change', () => {
  if(toggleBtn.checked){
    localStorage.setItem('themeChange', Theme.DARK)
    body.classList.add(Theme.DARK)
    body.classList.remove(Theme.LIGHT)
    console.log('change to dark theme')
  }else{
    localStorage.setItem('themeChange', Theme.LIGHT)
    body.classList.add(Theme.LIGHT)
    body.classList.remove(Theme.DARK)
    console.log('change to light theme')
  }
})