
// DOM ELEMENTS
const form = document.getElementById('contact_modal')




function displayModal() {
    const modal = document.getElementsByClassName("contact_button");
	form.style.display = "flex";
    const photographerName = document.getElementById('photographer__title').innerHTML
    console.log(photographerName)
    const formPhotographer = document.getElementsByClassName('photographer_name')
    console.log(formPhotographer)
    for (let item of formPhotographer){
    item.innerHTML =  photographerName}
    
    
   
    
    

}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    form.style.display = "none";
}







