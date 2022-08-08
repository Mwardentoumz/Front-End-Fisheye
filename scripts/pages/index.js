class App {
    constructor() {
        this.photographerApi = new PhotographerApi('../data/photographers.json')
        
    }
        async displayData() {
            const photographersSection = document.querySelector(".photographer_section");

            const photographersData = await this.photographerApi.getPhotographers();
            console.log(photographersData)
            const NewPhotographer = photographersData.map(photographer => new photographers(photographer))
            console.log(NewPhotographer)

            NewPhotographer.forEach(photographer => {
                const Template = new photographerCard(photographer)
                console.log(photographerCard)
                photographersSection.appendChild(Template.createPhotographerCard())
                
                    
            })
        }      
    }


const app = new App()
app.displayData()


    
