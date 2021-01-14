import getHash from "../utils/getHash"

const setDarkMode = (hash,firstRender) => {
    console.log(firstRender)
    const body =  document.querySelector('body')
  
    if(body.classList.contains('bodyDark') && firstRender === true){
        document.getElementById('MainHeader').classList.toggle('HeaderDark')
        document.querySelector('#darkModeButton').classList.toggle('darkMode')
        return
    }
    if(firstRender === true){
        return
    }
        document.getElementById('MainHeader').classList.toggle('HeaderDark')
        document.querySelector('#darkModeButton').classList.toggle('darkMode')
        body.classList.toggle('bodyDark')
        if(hash === '/'){
            document.querySelectorAll('#charHome').forEach(char => char.classList.toggle('homeDarkMode'))
        }
        if(hash !== '/:id' && hash !== '/'){
          
        }
} 

export default setDarkMode