class photographerCard {
    constructor(photographers) {
        this._photographer = photographers
    }

    createPhotographerCard () {
        
        this.$wrapperCard = document.createElement('div')
    
        const card = `      
          <article class="photographer">
            <a href="photographer.html?id=${this._photographer.id}" aria-label="${this._photographer.name}">
              <div class="photographer__cover">
                <img src="${this._photographer.portrait}" alt="${this._photographer.name}" />
              </div>        
              <h2 class="photographer__title">${this._photographer.name}</h2>        
            </a>
              <div class="photographer__infos" tabindex="0">
                <div class="photographer__infos__local">${this._photographer.city}, ${this._photographer.country}</div>
                <div class="photographer__infos__tagline">${this._photographer.tagline}</div>
                <div class="photographer__infos__price text--grey">${this._photographer.price}€/jour</div>
              </div>
          </article>      
        `
    
        this.$wrapperCard.innerHTML = card
        return this.$wrapperCard
        };
}