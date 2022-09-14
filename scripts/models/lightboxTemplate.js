import {ImageFactory} from '../models/ImageFactory'
import {VideoFactory} from '../models/VideoFactory'

export class LightboxTemplate {
    /**
     * @param {Media} media
     */
    constructor (media) {
      this._media = media
      this.$wrapperLightbox = null
      this.$lightboxContent = null
      this.$lightboxCloseButton = null
      this.$lightboxNextButton = null
      this.$lightboxPrevButton = null
      this.$media = null
      this.$title = null
    }
    
    /**
   * GETTERS
   */
  get lightBoxHTMLElement () {
    return this.$wrapperLightbox
  }

  get contentHTMLElement () {
    return this.$lightboxContent
  }

  get closeButton () {
    return this.$lightboxCloseButton
  }

  get nextButton () {
    return this.$lightboxNextButton
  }

  get prevButton () {
    return this.$lightboxPrevButton
  }

  get media () {
    return this.$media
  }

  get title () {
    return this.$title
  }

    /**
   * Template HTML LightBox
   * @returns {HTMLElement}
   */
  createLightBox () {
    const template = document.createElement('aside')
    template.setAttribute('aria-label', 'dialog mode plein ecran')
    template.setAttribute('tabindex', 0)
    template.classList.add('lightbox')

    const content = `
        
        
        <button class="lightbox__prev round" aria-label="Media précédent"><span class="material-symbols-outlined">
        chevron_left
        </span></button>
        <div class="lightbox__container">
          <div class="lightbox__container__content"></div>             
        </div>
        <button class="lightbox__next round" aria-label="Media suivant"><span class="material-symbols-outlined">
        chevron_right
        </span></button>
        <button class="lightbox__close" aria-label="Fermer la boite de dialog"><span class="material-symbols-outlined">
        close
        </span></button>
      `

    template.innerHTML = content

    this.$lightboxContent = template.querySelector('.lightbox__container__content')
    this.$lightboxCloseButton = template.querySelector('.lightbox__close')
    this.$lightboxNextButton = template.querySelector('.lightbox__next')
    this.$lightboxPrevButton = template.querySelector('.lightbox__prev')

    this.$wrapperLightbox = template
    template.style.display = 'flex'
    return template
  }

  /**
   * Factory : Media si video ou image
   * @param {Media} media
   */
  loadFactory (media) {
    this._media = media
    // Definition du template de la lightbox
    if (this._media instanceof ImageFactory) {
      this._loadImage()
    } else if (this._media instanceof VideoFactory) {
      this._loadVideo()
    } 
  }

  /**
   * PRIVATE Chargement d'une image
   */
  _loadImage () {
    const image = new Image()
    image.src = this._media.image
    image.alt = this._media.title
    image.setAttribute('aria-labelledby', 'picture-title')
    image.setAttribute('tabindex', '0')

    const loader = document.createElement('div')
    loader.classList.add('lightbox__loader')

    this.$lightboxContent.innerHTML = ''
    this.$lightboxContent.appendChild(loader)
    this.$media = image

    const title = document.createElement('h2')
    title.id = 'picture-title'
    title.innerHTML = this._media.title
    title.setAttribute('tabindex', 0)
    this.$title = title

    image.onload = () => {
      this.$lightboxContent.removeChild(loader)
      this.$lightboxContent.appendChild(image)
      this.$lightboxContent.appendChild(title)
    }
  }

  /**
   * PRIVATE Chargement d'une video
   */
  _loadVideo () {
    const video = document.createElement('video')
    video.src = this._media.video
    video.setAttribute('title', this._media.description)
    video.setAttribute('tabindex', '0')
    video.autoplay = true
    this.$media = video

    const title = document.createElement('h2')
    title.id = 'picture-title'
    title.innerHTML = this._media.title
    title.setAttribute('tabindex', 0)
    this.$title = title

    this.$lightboxContent.innerHTML = ''
    this.$lightboxContent.appendChild(video)
    this.$lightboxContent.appendChild(title)
  }
}