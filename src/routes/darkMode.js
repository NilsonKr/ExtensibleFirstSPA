const setDarkMode = (hash,firstRender) => {

    const body =  document.querySelector('body')
  
    if(body.classList.contains('bodyDark') && firstRender === true){
        document.getElementById('MainHeader').classList.toggle('HeaderDark')
        document.querySelector('#darkModeButton').classList.toggle('darkMode')
        if(hash === 'about'){
            document.getElementById('error404').classList.toggle('Erorr404Dark')
          }
        if(hash === 'home'){
            document.querySelectorAll('#charHome').forEach(char => char.classList.toggle('homeDarkMode'))
        }
        if(typeof parseInt(hash) === "number"){
            document.querySelectorAll('.Characters-card').forEach(char => char.classList.toggle('CharactersDark'))
        }
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
        if(hash === 'home'){
            document.querySelectorAll('#charHome').forEach(char => char.classList.toggle('homeDarkMode'))
        }
        if(hash === 'about'){
          document.getElementById('error404').classList.toggle('Erorr404Dark')
        }
        if(typeof parseInt(hash) === "number"){
            document.querySelectorAll('.Characters-card').forEach(char => char.classList.toggle('CharactersDark'))
        }
} 

export default setDarkMode