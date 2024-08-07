import { pageContents }  from './main-page-content'
import { menuTab } from './menu-tab'

export const bin = document.querySelector('#content')

pageContents()

const home = document.querySelector('#home')
home.addEventListener('click', () => {
    bin.textContent = ''
    pageContents()
})

const menu = document.querySelector('#menu')
menu.addEventListener('click', () => {
    bin.textContent = ''
    menuTab()
})