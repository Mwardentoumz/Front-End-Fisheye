class AppPhotographer {
    constructor() {
        this.photographerApi = new PhotographerApi('/data/photographers.json')

    }
    async displayData() {

        //accès à l'élement du DOM
        const photographersSection = document.querySelector(".photographer_header");

        //récupération de l'ID
        const queryString = window.location.search
        const urlParams = new URLSearchParams(queryString)
        const userId = parseInt(urlParams.get('id'))

        const photographersData = await this.photographerApi.getPhotographerById(userId);
        console.log(photographersData)
        const NewPhotographer = new photographers(photographersData)
        console.log(NewPhotographer)

        const Template = new photographerCard(photographersData)
        console.log(photographerCard)
        photographersSection.appendChild(Template.createPhotographerHeader())


    }
}



const App2 = new AppPhotographer()
App2.displayData()