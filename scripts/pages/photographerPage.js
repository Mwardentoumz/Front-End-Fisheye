class AppPhotographer {
  constructor(media, photographer) {
    //initialisation de l'API
    this._media = media
    this._photographer = photographer
    this.photographerApi = new PhotographerApi('../data/photographers.json')
    this._portfolio = []

  }

    get portfolio(){
      return this._portfolio
    }

  async displayPhotographer() {

    //accès à l'élement du DOM
    const photographersSection = document.querySelector(".photographer_header");
    const mediasSection = document.querySelector(".medias_section")
    

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
      this._portfolio.push(Template)
      mediasSection.appendChild(Template.createCard())
    })



    console.log(this._portfolio)


    this._portfolio.forEach(mediaCard => {
      mediaCard.$wrapperCard.addEventListener('click', e => {
        e.preventDefault()
        const timer = setTimeout(() => {
          clearTimeout(timer)
        }, 500)
        const lightbox = new Lightbox(mediaCard._media, mediaCard._media._photographerId, this._portfolio)
        console.log(lightbox)
        lightbox.init()

      })
      
    })
  }
  //     })
  //   }
  //}
}


const App2 = new AppPhotographer()
App2.displayPhotographer()

