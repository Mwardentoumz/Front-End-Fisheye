    async function getPhotographers() {
        // Penser à remplacer par les données récupérées dans le json
        const url = '../data/photographers.json'
        return fetch(url)
        .then(response => response.json())
        .then((data) => {
            console.log(data)
            return data.photographers})
        
        .catch((err) => console.log(err));
        // et bien retourner le tableau photographers seulement une fois
        
                        
        }

        async function displayData() {
            const photographersSection = document.querySelector(".photographer_section");

            const photographersData = await getPhotographers();
            console.log(photographersData)
            const NewPhotographer = photographersData.map(photographer => new photographers(photographer))
            console.log(NewPhotographer)

            NewPhotographer.forEach(photographer => {
                const Template = new photographerCard(photographer)
                console.log(photographerCard)
                photographersSection.appendChild(Template.createPhotographerCard())
                
                    
            })
        }      
        async function init() {
            // Récupère les datas des photographes
            
            return displayData();
        };
        
        init();

    
