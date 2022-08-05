class Api {
    /**
     * 
     * @param {string} url 
     */
    constructor(url) {
        this._url = url
    }

    async get() {
        return fetch(this._url)
            .then(res => res.json())
            .then((data) => {
                console.log(data.photographers)
                console.log(data.media)
                return data.photographers
                return data.media

            })

            .catch(err => console.log('an error occurs', err))
    }
    async getPhotographerById(userId) {
        return fetch(this._url)
            .then(response => response.json())
            .then(response => {
                return response.photographers.filter(photographer => photographer.id === userId)[0]
            })
            .catch(err => {
                throw new Error('La requete api getPhotographer a échoué : ', err)
            })
    }
    async getMediasById(photographerId) {
        return fetch(this._url)
            .then(response => response.json())
            .then(response => {
                console.log(response.media.filter(element => element.photographerId === photographerId ))
                return response.media.filter(element => element.photographerId === photographerId )
                
            })
            .catch(err => {
                throw new Error('La requete api getMedia a échoué : ', err)
            })
    }

}



class PhotographerApi extends Api {
    /**
     * 
     * @param {string} url 
     */
    constructor(url) {
        super(url)
    }

    async getPhotographers() {
        return await this.get()

    }
}