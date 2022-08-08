class mediaFactory{
    constructor(data){
     
    if (data.hasOwnProperty('image')){
        return new mediasImg(data)
        
        }else{
            return new mediasVideo(data)
        }
    }
}

