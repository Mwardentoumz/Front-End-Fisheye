class AppPhotographer {
    constructor() {
        this.photographerApi = new PhotographerApi('/data/photographers.json')

    }
    async displayPhotographer() {

        //accès à l'élement du DOM
        const photographersSection = document.querySelector(".photographer_header");

        //récupération de l'ID
        const queryString = window.location.search
        const urlParams = new URLSearchParams(queryString)
        const userId = parseInt(urlParams.get('id'))

        const photographersData = await this.photographerApi.getPhotographerById(userId);
        const NewPhotographer = new photographers(photographersData)
        

        const Template = new photographerCard(photographersData)
        photographersSection.appendChild(Template.createPhotographerHeader())
    };

    async displayMedias() {

        //accès à l'élement du DOM
        const mediasSection = document.querySelector(".medias_section");

        //récupération de l'IDs
        const queryString = window.location.search
        const  urlParams = new URLSearchParams(queryString)
        const photographerId = parseInt(urlParams.get('id'))

        const mediasData = await this.photographerApi.getMediasById(photographerId)
        
        
        const NewMedias = mediasData.map(media => new medias(media))
        console.log(NewMedias)

        // const NewPhotographer = photographersData.map(photographer => new photographers(photographer))
        //     console.log(NewPhotographer)

        //     NewPhotographer.forEach(photographer => {
        //         const Template = new photographerCard(photographer)
        //         console.log(photographerCard)
        //         photographersSection.appendChild(Template.createPhotographerCard())
                

        NewMedias.forEach(medias => {
            const Template = new mediaCard(medias)
            console.log(mediaCard)
            mediasSection.appendChild(Template.createMediaCard())
            
        });

    }
}



const App2 = new AppPhotographer()
App2.displayPhotographer()
App2.displayMedias()