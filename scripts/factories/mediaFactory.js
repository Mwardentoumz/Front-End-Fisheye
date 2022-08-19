class mediaFactory {
    constructor(data) {

        if (data.hasOwnProperty('image')) {
            return new ImageFactory(data)


        } else if (data.hasOwnProperty('video')) {
            return new VideoFactory(data)
        } else {
            throw 'Invalid Data'
        }
    }
}

