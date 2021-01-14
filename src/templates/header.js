const header = () => {
    const view = `
    <div class="Header-main" id="MainHeader">
        <div class="Header-logo">
            <h1>
            <a href="/">
                100tifi.co
            </a>
            </h1>   
        </div>
        <div class="Header-nav">
            <a href="#/about/">
                About
            </a>
            <button id="darkModeButton">
                <span><i class="fas fa-sun"></i></span>
                <span><i class="fas fa-moon"></i></span>
            </button>
        </div>
    </div>
    `;
    return view
}


export default header