import { pageContents }  from './main-page-content'
import { menuTab } from './menu-tab'
import { aboutTab } from './about-tab'

export const bin = document.querySelector('#content')

pageContents()

function emptyBin() {
    bin.textContent = ''
}

const home = document.querySelector('#home')
home.addEventListener('click', () => {
    emptyBin()
    pageContents()
})

const menu = document.querySelector('#menu')
menu.addEventListener('click', () => {
    emptyBin()
    menuTab()
})

const about = document.querySelector('#about')
about.addEventListener('click', () => {
    emptyBin()
    aboutTab()
})