import header from '../templates/header.js';
import home from '../pages/home.js';
import character from '../pages/character.js';
import error404 from '../pages/error404.js';
import getHash from '../utils/getHash.js';
import resolveRoutes from '../utils/resolveRoutes.js';
import setDarkMode from '../routes/darkMode.js';

const routes = {
    '/':home,
    '/:id': character,
    '/contact': 'Contact',
}

const router = async () => {
    const Header = document.getElementById('header') || null
    const main = document.getElementById('content') || null
    Header.innerHTML = await header()
    let firstRender = true
    
    let hash = getHash()
    console.log(hash)
    let route = await resolveRoutes(hash)
    let render = routes[route] ? routes[route] : error404
    
    main.innerHTML = await render()
    const body =  document.querySelector('body')
    setDarkMode(null,firstRender)
    const darkmode = document.getElementById('darkModeButton')
    darkmode.addEventListener('click', () => {
        setDarkMode(hash,false)
    })
}
export default router