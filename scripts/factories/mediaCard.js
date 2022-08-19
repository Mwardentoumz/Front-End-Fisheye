class mediaCard {
    constructor(media) {
        this._media = media
        this.$wrapperCard = null
        
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
                    <input type="hidden" value="${this._media.index}
                    <div class="title_likes">
                        <h3 class="media_title">${this._media.title}</h3>
                        <div class="likes_heart">
                            <span class="likes">${this._media.likes}</i></span>
                            <img class="likes_heart" src="./assets/icons/heart-solid.svg" alt="coeur"></img>
                        </div>
                    </div>
                </article>
            `
        this.$wrapperCard.innerHTML = card
        return this.$wrapperCard

    
    };

    createVideoCard(){
        this.$wrapperCard = document.createElement('div')
        
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
                            <span class="likes">${this._media.likes}</span>
                            <img class="likes_heart_img" src="./assets/icons/heart-solid.svg" alt="coeur"></img>
                            
                        </div>
                    </div>
                </article>
            `
        this.$wrapperCard.innerHTML = card
        return this.$wrapperCard    
    };

    createCard(){
        if(this._media instanceof ImageFactory){
            return (this.createImgCard())
        }else if(this._media instanceof VideoFactory){
            return (this.createVideoCard())
        }}
}