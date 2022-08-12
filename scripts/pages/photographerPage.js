class AppPhotographer {
    constructor(media) {
        //initialisation de l'API
        this._media = media
        this.photographerApi = new PhotographerApi('../data/photographers.json')

    }
    async displayPhotographer() {

        //accès à l'élement du DOM
        const photographersSection = document.querySelector(".photographer_header");
        const mediasSection = document.querySelector(".medias_section")
        const portfolio = []

        //récupération des paramètres URL
        const queryString = window.location.search
        const urlParams = new URLSearchParams(queryString)
        const photographerId = parseInt(urlParams.get('id'))

        //récupérer les medias et le photographe

        const photographersData = await this.photographerApi.getPhotographerById(photographerId);
        const mediasData = await this.photographerApi.getMediasById(photographerId)
        const NewPhotographer = new photographers(photographersData)
        
        // générer le header

        const Template = new photographerCard(photographersData)
        photographersSection.appendChild(Template.createPhotographerHeader())
  
        //générer le portfolio 
        const NewMedias = mediasData.map(media => new mediaFactory(media))  
        NewMedias.forEach(medias => {
            const Template = new mediaCard(medias)
            console.log(Template)
            portfolio.push(Template)
            mediasSection.appendChild(Template.createCard())
        })

        console.log(portfolio)
        
        // portfolio.forEach(media => {
            const main = document.querySelector("main")
            const links = Array.from(main.getElementsByTagName("a"))
            console.log(links)
            links.forEach(link => {
              link.addEventListener('click', e => {
                e.preventDefault()
                const timer = setTimeout(() => {
                  clearTimeout(timer)
                }, 500)
                const lightbox = new Lightbox(mediasData, photographersData)
                console.log(lightbox
                  )
                lightbox.init()
              })
            })
      //     })
      //   }
      // }
    }}

const App2 = new AppPhotographer()
App2.displayPhotographer()

