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

}


document.querySelector(".next").addEventListener("click", () => plusSlides(1));
document.querySelector(".prev").addEventListener("click", () => plusSlides(-1))