import { ImageFactory } from "../models/ImageFactory.js"
import { VideoFactory } from "../models/VideoFactory.js"


export class mediaFactory {
    constructor(data) {

        // eslint-disable-next-line no-prototype-builtins
        if (data.hasOwnProperty('image')) {
            return new ImageFactory(data)


        // eslint-disable-next-line no-prototype-builtins
        } else if (data.hasOwnProperty('video')) {
            return new VideoFactory(data)
        } else {
            throw 'Invalid Data'
        }
    }
}

