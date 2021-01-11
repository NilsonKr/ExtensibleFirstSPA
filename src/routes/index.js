import header from '../templates/header.js';
import home from '../pages/home.js';
import character from '../pages/character.js';
import error404 from '../pages/error404.js';
import getHash from '../utils/getHash.js';
import resolveRoutes from '../utils/resolveRoutes.js';


const routes = {
    '/':home,
    '/:id': character,
    '/contact': 'Contact',
}

const router = async () => {
    const Header = document.getElementById('Header') || null
    const main = document.getElementById('content') || null

    Header.innerHTML = await header()

    let hash = getHash()
    console.log(hash)
    let route = await resolveRoutes(hash)
    let render = routes[route] ? routes[route] : error404

    main.innerHTML = await render()
}


export default router