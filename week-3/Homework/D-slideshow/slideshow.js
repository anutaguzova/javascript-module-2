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

let nextGo =  () => plusSlides(1);
let prevGo =  () => plusSlides(-1);

document.querySelector(".next").addEventListener("click", nextGo);
document.querySelector(".prev").addEventListener("click", prevGo);

let nextGoAuto = () => setInterval(nextGo, 1000);
let prevGoAuto = () => setInterval(prevGo, 1000);
 


document.querySelector(".auto-forward").addEventListener("click", nextGoAuto);
document.querySelector(".auto-backward").addEventListener("click", prevGoAuto);


// document.querySelector(".stop").addEventListener("click", prevStop);
