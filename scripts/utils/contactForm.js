
// DOM ELEMENTS
const form = document.getElementById('contact_modal')
const send = document.getElementById('send_button')



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

function getConsoleInputs() {
    var fields = document.getElementsByClassName('saisie')
    console.log(fields)
    for (let item of fields){
       
            var usertext = item.value
            console.log(usertext)
    }
        var msg = document.getElementsByClassName('saisie_msg')
        console.log(msg)
        for (let item of fields){
            // item.addEventListener('input', () => {
                var usertext = item.value
                console.log(usertext)
    }
}

send.addEventListener('click', e => {
    e.preventDefault()
    getConsoleInputs()
})







