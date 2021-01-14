import router from './routes/index.js';
import getHash from './utils/getHash.js';

window.addEventListener('load',router)
window.addEventListener('hashchange', router)


console.log('Hello')