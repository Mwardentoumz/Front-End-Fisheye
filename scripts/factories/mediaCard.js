import {ImageFactory} from '../models/ImageFactory.js'
import {VideoFactory} from '../models/VideoFactory.js'

export class mediaCard {
    constructor(media) {
        this._media = media
        this.$wrapperCard = null
        this._likes = media.likes
        this._date = media.date
        this._price = media.price
        
    }

    get likes(){
        return this._likes
    }

    createImgCard(){
        this.$wrapperCard = document.createElement('div')
        
        const card = `
                <article class="media">
                    <a href=photographerPage.html?id=${this._media.id} aria-label="${this._media.title}">
                        <div class="media__cover">
                            <img class="portfolio" src="${this._media.image}" alt="${this._media.title}"/>
                        
                        </div>                        
                    </a>
                    
                    <div class="title_likes">
                        <h3 class="media_title">${this._media.title}</h3>
                        <div class="likes_heart">
                            <button class="likes">${this._media.likes}</button>
                            <img class="likes_heart_img" src="../Public/assets/icons/heart-solid-purple.png" alt="coeur"></img>
                        </div>
                    </div>
                </article>
            `
        this.$wrapperCard.innerHTML = card
        return this.$wrapperCard

    
    }

    createVideoCard(){
        this.$wrapperCard = document.createElement('div')
        this.$wrapperCard.classList = "container"
        
        const card = `
                <article class="media">
                    <a href=photographerPage.html?id=${this._media._id} aria-label="${this._media.title}">
                        <div class="media__cover">
                            <video class="portfolio" src="${this._media.video}" type="video/mp4" alt="${this._media.title}"/>
                        </div>
                        
                    </a>
                    <div class="title_likes">
                        <h3 class="media_title">${this._media.title}</h3>
                        <div class="likes_heart">
                            <button class="likes">${this._media.likes}</button>
                            <img class="likes_heart_img" src="../Public/assets/icons/heart-solid-purple.png" alt="coeur"></img>
                            
                        </div>
                    </div>
                </article>
            `


        
        this.$wrapperCard.innerHTML = card
        return this.$wrapperCard    
    }

    createCard(){
        if(this._media instanceof ImageFactory){
            return (this.createImgCard())
        }else if(this._media instanceof VideoFactory){
            return (this.createVideoCard())
        }}
    
}