class mediaCard {
    constructor(media) {
        this._media = media
        this.$wrapperCard = null
    }

    createMediaCard(){
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
                        <span class="likes">likes</span>
                        <span class="heart_symbol">symbol here</span>
                    </div>
                </article>
            `
        this.$wrapperCard.innerHTML = card
        return this.$wrapperCard    
    };
}