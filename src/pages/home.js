import getData from '../utils/getData.js'




const  home = async () => {
    const data = await getData()
    const view = `
     <section class="Characters">
        ${data.results.map(char => `
        <article class="Character-item">
            <a href="#/${char.id}/">
                <img src="${char.image}" alt="${char.name}" />
                <h2>${char.name}</h2>
            </a>
        </article>     
        `).join('')}
    </section>
    `;

    return view
}




export default home

