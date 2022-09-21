import {PhotographerApi} from '../API/Api.js'
import {mediaFactory} from '../factories/mediaFactory.js'
import {photographerCard} from '../factories/TemplatePhotographerCard.js'
import {mediaCard} from '../factories/mediaCard.js'
import {Lightbox} from '../utils/lightbox.js'

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
    // const NewPhotographer = new photographers(photographersData)

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
    // const ArrayFromButtonCollection = Array.from(buttonCollection)
    let total = 0

    for (let item of buttonCollection) {
      parseInt(item.innerHTML)
      total += parseInt(item.innerHTML)
      item.addEventListener('click', () => {
        if (item.hasAttribute('id')) {

          item.innerHTML = parseInt(item.innerHTML) - 1
          item.removeAttribute('id')
        } else {

          item.innerHTML = parseInt(item.innerHTML) + 1
          item.setAttribute('id', 'liked')

        }
      })
    }
    const display = document.createElement("div")


    display.classList.add('total_likes')
    console.log(mediasSection)
    mediasSection.appendChild(display)
    console.log(photographersData.price)
    const likes = display.innerHTML = total + "<img class=likes_heart src=./assets/icons/heart-solid.svg alt=icone></img>" + "<span class=likes_price>" + photographersData.price + "€" + "/jour" + "</span>"
    console.log(likes)
    display.style.display = "flex"

    for (let item of buttonCollection) {
      item.addEventListener('click', () => {
        if (item.hasAttribute('id')) {
          display.innerHTML = total-- + "<img class=likes_heart src=./assets/icons/heart-solid.svg alt=icone></img>" + "<span class=likes_price>" + photographersData.price + "€" + "/jour" + "</span>"

        } else {
          display.innerHTML = total++ + "<img class=likes_heart src=./assets/icons/heart-solid.svg alt=icone></img>" + "<span class=likes_price>" + photographersData.price + "€" + "/jour" + "</span>"

        }
      })
    }
    function displayMedias(media) {
      var removeP = document.getElementById("medias_section")
      while (removeP.lastElementChild) {
        removeP.removeChild(removeP.lastElementChild);
      }
      const NewArray = []
      media.forEach(medias => {
        const Template = new mediaCard(medias)
        NewArray.push(Template)
        mediasSection.appendChild(Template.createCard())
        
      })
      NewArray.forEach(mediaCard => {
      const img = mediaCard.$wrapperCard.querySelector('a')

      img.addEventListener('click', e => {
        e.preventDefault()
        const timer = setTimeout(() => {
          clearTimeout(timer)
        }, 500)
        const lightbox = new Lightbox(mediaCard._media, mediaCard._media._photographerId, NewArray)
        console.log(lightbox)
        lightbox.init()

      })
    })
    }
    // function lightbox(media) {
    //   const NewArray = []
    //   console.log(media)
    //   media.forEach(medias => {
    //     const Template = new mediaCard(medias)
    //     NewArray.push(Template)
    //     console.log(NewArray)

      
    //     const img = mediaCard.$wrapperCard.querySelector('a')

    //     img.addEventListener('click', e => {
    //       e.preventDefault()
    //       const timer = setTimeout(() => {
    //         clearTimeout(timer)
    //       }, 500)
    //       const lightbox = new Lightbox(mediaCard._media, mediaCard._media._photographerId, this._portfolio)
    //       console.log(lightbox)
    //       lightbox.init()
    //     })
    //   })
    // }

    const filter = document.getElementsByClassName('filter_portfolio')
    for (let item of filter) {
      item.addEventListener('change', (e) => {
        console.log(e.target.value)
        var selection = e.target.value;
        switch (selection) {
          case 'Date':
            var media = NewMedias.sort((a, b) => {
              return new Date(b._date) - new Date(a._date)
            })
            console.log(media)
            return displayMedias(media);
            // eslint-disable-next-line no-unreachable
            break;
          case 'Popularité':
            // eslint-disable-next-line no-redeclare
            var media = NewMedias.sort((a, b) => { return b._likes - a._likes })
            return displayMedias(media);
            // eslint-disable-next-line no-unreachable
            break;
          case 'Titre':
            // eslint-disable-next-line no-redeclare
            var media = NewMedias.sort((a, b) => { return b._title > a._title ? 1 : -1 })
            return displayMedias(media);
            // eslint-disable-next-line no-unreachable
            break;
          default: return displayMedias(NewMedias);

        }
        // if (selection = "Date") {
        //   var media = NewMedias.sort((a, b) => {
        //     return new Date(b._date) - new Date(a._date)
        //   })
        //   console.log(media)
        //   return displayMedias(media)
        // } else if (selection = "Prix") {
        //   console.log("Tri par prix" + sel)
        //   var media = NewMedias.sort((a, b) => { return b._price - a._price })
        //   return displayMedias(media)
        // } else if (selection = "Popularité") {
        //   var media = NewMedias.sort((a, b) => { return b._likes - a._likes })
        //   return displayMedias(media)
        // }
      })
    }
  }
}




const App2 = new AppPhotographer()
App2.displayPhotographer()












