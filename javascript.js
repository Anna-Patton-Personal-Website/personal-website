let message = "Hello World";
console.log(message); //used console.log to display message in JS

// JS FOR NAVBAR 
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// IDK WHY LINE 5 ISN'T BEING READ
hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
}))