import {bin} from './index'

function menuTab() {
    const header = document.createElement('h2')
    header.textContent = 'This is our menu!'

    const menu = document.createElement('ul')

    const pasta = document.createElement('li')
    pasta.innerText = 'a lil pasta in a bowl'

    const pizza = document.createElement('li')
    pizza.innerText = 'pizza'

    const concrete = document.createElement('li')
    concrete.innerText = 'concrete'

    menu.append(pasta, pizza, concrete)

    bin.append(header, menu)
}

export { menuTab }