console.log("Learn Accounting Pro Studio Loaded");
const hamburger = document.querySelector(".hamburger");

const mobileMenu = document.querySelector(".mobile-menu");

const overlay = document.querySelector(".menu-overlay");

hamburger.addEventListener("click",()=>{

hamburger.classList.toggle("active");

mobileMenu.classList.toggle("active");

overlay.classList.toggle("active");

});

overlay.addEventListener("click",()=>{

hamburger.classList.remove("active");

mobileMenu.classList.remove("active");

overlay.classList.remove("active");

});

document.querySelectorAll(".mobile-menu a").forEach(link=>{

link.addEventListener("click",()=>{

hamburger.classList.remove("active");

mobileMenu.classList.remove("active");

overlay.classList.remove("active");

});

});
