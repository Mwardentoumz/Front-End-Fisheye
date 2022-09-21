import {PhotographerApi} from '../API/Api.js'
import {photographers} from '../models/photographer.js'
import {photographerCard} from '../factories/TemplatePhotographerCard.js'


class App {
    constructor() {
        this.photographerApi = new PhotographerApi('../data/photographers.json')
        
    }
        async displayData() {
            const photographersSection = document.querySelector(".photographer_section");

            const photographersData = await this.photographerApi.getPhotographers();
            
            const NewPhotographer = photographersData.map(photographer => new photographers(photographer))
            

            NewPhotographer.forEach(photographer => {
                const Template = new photographerCard(photographer)
                console.log(photographerCard)
                photographersSection.appendChild(Template.createPhotographerCard())
                
                    
            })
        }      
    }


const app = new App()
app.displayData()




    
