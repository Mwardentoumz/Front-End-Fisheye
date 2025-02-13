export class ImageFactory {
    constructor(data){

        this._media = data
        this._id = data.id
        this._photographerId = data.photographerId
        this._title = data.title
        this._image = data.image
        this._likes = data.likes
        this._date = data.date
        this._price = data.price
        this.$wrapperCard = null
               
    }

    get photographerId(){
        return this._photographerId
    }

    get id(){
        return this._id
    }

    get title(){
        return this._title
    }

    get image(){
        return `../Public/assets/medias/${this._image}`
    }

    get likes(){
        return this._likes
    }

    get date(){
        return this._date
    }

    get price(){
        return this._price
    }
 }
