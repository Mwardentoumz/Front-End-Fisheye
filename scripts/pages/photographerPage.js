class AppPhotographer {

  constructor(media, photographer) {
    //initialisation de l'API
    this._media = media
    this._photographer = photographer
    this.photographerApi = new PhotographerApi('../data/photographers.json')
    this._portfolio = []
    this._id = parseInt(new URLSearchParams(window.location.search).get('id'))
    this._button = null
  }


  get portfolio() {
    return this._portfolio
  }

  get media() {
    return this._media
  }

  get likes() {
    return this._likes
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


    this._portfolio.forEach(mediaCard => {
      const img = mediaCard.$wrapperCard.querySelector('a')

      img.addEventListener('click', e => {
        e.preventDefault()
        const timer = setTimeout(() => {
          clearTimeout(timer)
        }, 500)
        const lightbox = new Lightbox(mediaCard._media, mediaCard._media._photographerId, this._portfolio)
        console.log(lightbox)
        lightbox.init()

      })
    })

    const buttonCollection = document.getElementsByClassName('likes')
    const ArrayFromButtonCollection = Array.from(buttonCollection)
    let total = 0
    
    for (let item of buttonCollection) {
      parseInt(item.innerHTML)
      item.addEventListener('click', e => {
      if (item.hasAttribute('id')) {
        item.innerHTML = parseInt(item.innerHTML) - 1
        item.removeAttribute('id')
      } else {
        item.innerHTML = parseInt(item.innerHTML) + 1
        item.setAttribute('id', 'liked')
        
      }
      total = parseInt(item.innerHTML)
      
    
    })
    }
    for (let item of buttonCollection){
      total += parseInt(item.innerHTML)
      item.addEventListener('click', e => {
        if (item.hasAttribute('id')) {
          total --
          item.removeAttribute('id')
        } else {
          total ++
          item.setAttribute('id', 'liked')
      
      }
      console.log(total)
    })
    }
    console.log(total)
    console.log(buttonCollection)
    console.log(ArrayFromButtonCollection)



  }
  // async getAllLikes() {

  //   const datas = await this.photographerApi.getMediasById(this._id)
  //   console.log(datas)
  //   let totalLikes = 0
  //   datas.forEach(data => {
  //     totalLikes = totalLikes + data.likes
  //   })
  //   console.log(totalLikes)
  // }
}


const App2 = new AppPhotographer()
App2.displayPhotographer()
// App2.getAllLikes()

// document.body.addEventListener('click', (event) => {
//   const button = event.target.closest('.likes');

//   if (button.hasAttribute('id')) {
//     button.innerHTML = parseInt(button.innerHTML) - 1
//     button.removeAttribute('id')
//   } else {
//     button.innerHTML = parseInt(button.innerHTML) + 1
//     button.setAttribute('id', 'liked')
//   }
// })












