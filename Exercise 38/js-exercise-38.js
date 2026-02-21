const hamburgerButton = document.querySelector(".hamburger-button");
const navBar = document.querySelector(".navbar");

hamburgerButton.addEventListener("click", function() {
    navBar.classList.toggle("active")
})