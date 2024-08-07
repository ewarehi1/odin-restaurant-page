import pasta from './pasta.jpg';

function pageContents() {
    const container = document.querySelector('#content')

    const welcome = document.createElement('h2')
    welcome.textContent = 'Welcome to our restaurant!'


    const description = document.createElement('div')
    description.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

    const image = document.createElement('img')
    image.setAttribute('src', pasta)
    image.setAttribute('alt', 'pasta bowl probably ai generated')

    container.append(welcome, description, image)
}

export { pageContents }