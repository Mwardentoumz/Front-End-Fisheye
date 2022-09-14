export class VideoFactory {
    constructor(data){

        this._media = data
        this._id = data.id
        this._photographerId = data.photographerId
        this._title = data.title
        this._video = data.video
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

    get video(){
        return `../Public/assets/medias/${this._video}`
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
