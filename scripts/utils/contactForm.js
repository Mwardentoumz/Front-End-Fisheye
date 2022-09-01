
// DOM ELEMENTS
const form = document.getElementById('contact_modal')

function displayModal() {
    const modal = document.getElementsByClassName("contact_button");
	form.style.display = "flex";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    form.style.display = "none";
}

