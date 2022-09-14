export class photographerCard {
  constructor(photographers) {
    this._photographer = photographers
  }

  createPhotographerCard() {

    this.$wrapperCard = document.createElement('div')

    const card = `      
          <article class="photographer">
            <a href="photographerPage.html?id=${this._photographer.id}" aria-label="${this._photographer.name}">
              <div class="photographer__cover">
                <img src="${this._photographer.portrait}" alt="${this._photographer.name}" />
              </div>        
              <h2 class="photographer__title">${this._photographer.name}</h2>        
            </a>
              <div class="photographer__infos" tabindex="0">
                <div class="photographer__infos__local">${this._photographer.city}, ${this._photographer.country}</div>
                <div class="photographer__infos__tagline">${this._photographer.tagline}</div>
                <div class="photographer__infos__price">${this._photographer.price}€/jour</div>
              </div>
          </article>      
        `

    this.$wrapperCard.innerHTML = card
    return this.$wrapperCard
  }

  createPhotographerHeader() {

    this.$wrapperCard = document.createElement('div')
    this.$wrapperCard.classList = "photographer_container"

    const card = `      
            <article class="photographer">
              <div class="photographer__infos" tabindex="0">
                  <h3 id="photographer__title" class="photographer__title">${this._photographer.name}</h3>        
                  <div class="photographer__infos__local">${this._photographer.city}, ${this._photographer.country}</div>
                  <div class="photographer__infos__tagline">${this._photographer.tagline}</div>
              </div>
              <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
              <div class="photographer__cover">
                <img src="assets/photographers/${this._photographer.portrait}" alt="${this._photographer.name}" />
              </div>
            </article>      
          `

    this.$wrapperCard.innerHTML = card
    return this.$wrapperCard
  }

}