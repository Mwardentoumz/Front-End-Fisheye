class photographers {
    constructor(data){

        this._profilPath = 'assets/photographers/'
        this._id = data.id
        this._name = data.name
        this._city = data.city
        this._country = data.country
        this._tagline = data.tagline
        this._price = data.price
        this._portrait = data.portrait
        this._portfolio = []
    }

    get name(){
        return this._name
    }

    get id(){
        return this._id
    }

    get city(){
        return this._city
    }

    get country(){
        return this._country
    }

    get tagline(){
        return this._tagline
    }

    get price(){
        return this._price
    }

    get portrait(){
        return `../assets/photographers/${this._portrait}`
    }
  }






// function photographerFactory(data) {
//     const { name, portrait } = data;

//     const picture = `assets/photographers/${portrait}`;


    
