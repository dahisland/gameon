function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground"); // Const for modal background
const modalBtn = document.querySelectorAll(".modal-btn"); // Const for button lauch modal
const formData = document.querySelectorAll(".formData"); // Const for modal datas
const spanClose = document.querySelectorAll(".close"); // Const for span close modal
const form = document.querySelector("form"); // Const for form
const modalBody = document.querySelector(".modal-body"); // Const for form content

// Launch modal with event : by clicking on <button class="modal-btn">
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Close modal with event : by clicking on <span class="close">
spanClose.forEach((span) => span.addEventListener("click", closeModal));

// Function called to launch modal form by clicking on <button class="modal-btn">
function launchModal() {
  modalbg.style.display = "block";
  form.style.display = "block";
}
// Function called to close modal by clicking on <span class="close">
function closeModal() {
  modalbg.style.display = "none";
}
// Function validate form onsubmit
function validate(event) {
  // if all conditions are respected
  if (checkbox1.checked == false) {
    event.preventDefault(); // Prevent defalut reloading page after submit
    alert("Vous devez accepter les conditions d'utilisation");
  } else {
    event.preventDefault(); // Prevent defalut reloading page after submit
    form.style.display = "none"; // form is hidden to display new content
    // Insert content in HTMl to display a message of thanks
    modalBody.innerHTML =
      '<p class="txt-thanks">Merci pour votre inscription<p><button class="btn-close">Fermer</button>';
    // Close modal with event : by clicking on <button class="btn-close">
    const buttonClose = document.querySelectorAll(".btn-close"); // const for button close for "thanks" message
    buttonClose.forEach((btnClose) =>
      btnClose.addEventListener("click", () => {
        closeModal();
      })
    );
  }
}
