// Write your code here

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n)
}

function showSlides(n) {
    let slides = document.querySelectorAll(".mySlides");

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }

    slides[slideIndex - 1].style.display = "block";
    document.querySelector(".number").innerText = slideIndex;
}

let iterate = (direction) => plusSlides(direction);

document.querySelector(".next").addEventListener("click", iterate.bind(null, 1));
document.querySelector(".prev").addEventListener("click", iterate.bind(null, -1));

let autoId
let iterateAuto = (direction) => autoId = setInterval(iterate, 1000, direction)
 
document.querySelector(".auto-forward").addEventListener("click", iterateAuto.bind(null, 1));
document.querySelector(".auto-backward").addEventListener("click", iterateAuto.bind(null, -1));

let stopAuto = () => clearInterval(autoId);

document.querySelector(".stop").addEventListener("click", stopAuto);
