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
                            <img src="${this._media.image}" alt="${this._media.title}"/>
                        </div>                        
                    </a>
                    <div class="title_likes">
                        <h3 class="media_title">${this._media.title}</h3>
                        <div class="likes_heart">
                            <span class="likes">likes</span>
                            <i class="fa-solid fa-heart"></i>
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
                            <video src="${this._media.video}" type="video/mp4" alt="${this._media.title}"/>
                        </div>
                        
                    </a>
                    <div class="title_likes">
                        <h3 class="media_title">${this._media.title}</h3>
                        <div class="likes_heart">
                            <span class="likes">likes</span>
                            <i class="fa-solid fa-heart"></i>
                        </div>
                    </div>
                </article>
            `
        this.$wrapperCard.innerHTML = card
        return this.$wrapperCard    
    };

    createCard(){
        if(this._media instanceof mediasImg){
            return (this.createImgCard())
        }else if(this._media instanceof mediasVideo){
            return (this.createVideoCard())
        }}
}