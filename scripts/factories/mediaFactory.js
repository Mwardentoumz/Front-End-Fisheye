class mediaFactory{
    constructor(data){
     
    if (data.hasOwnProperty('image')){
        return new ImageFactory(data)
        
        
        }else{
            return new VideoFactory(data)
        }
    }
}

