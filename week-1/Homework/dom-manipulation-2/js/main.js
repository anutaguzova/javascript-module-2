// part 1
let blueBtn = document.querySelector("#blueBtn");
let orangeBtn = document.querySelector("#orangeBtn");
let greenBtn = document.querySelector("#greenBtn");


let jumbotron = document.querySelector(".jumbotron");
let donateBtn = document.querySelector(".btn.btn-primary.btn-lrg");
let volunteerBtn = document.querySelector(".btn.btn-secondary.btn-lrg");

blueBtn.addEventListener("click", () => {
    jumbotron.style.backgroundColor = '#588fbd';
    donateBtn.style.backgroundColor = '#ffa500';
    volunteerBtn.style.backgroundColor = 'black';
    volunteerBtn.style.color = "white";
})

orangeBtn.addEventListener("click", () => {
    jumbotron.style.backgroundColor = '#f0ad4e';
    donateBtn.style.backgroundColor = '#5751fd';
    volunteerBtn.style.backgroundColor = '#31b0d5';
    volunteerBtn.style.color = "white";
})

greenBtn.addEventListener("click", () => {
    jumbotron.style.backgroundColor = '#87ca8a';
    donateBtn.style.backgroundColor = 'black';
    volunteerBtn.style.backgroundColor = '#8c9c08';
    volunteerBtn.style.color = "black";
})

// part 2
const submitBtn = document.querySelector("button[type='submit']");

const emailField = document.querySelector("#exampleInputEmail1");
const nameField = document.querySelector("#example-text-input");
const describeField = document.querySelector("#exampleTextarea");

submitBtn.addEventListener("click", validate);

function validate(e) {
    if (emailField.value.length === 0 || !emailField.value.includes("@")) {
        emailField.style.backgroundColor = 'red';
    }
    if (nameField.value.length === 0) {
        nameField.style.backgroundColor = 'red';
    }
    if (describeField.value.length === 0) {
        describeField.style.backgroundColor = 'red';
    }

    if (emailField.value.length > 0 && nameField.value.length > 0 && describeField.value.length > 0 && emailField.value.includes("@")) {
        alert("Thank you for filling out the form");
        
        emailField.value = " ";
        nameField.value = " ";
        describeField.value = " ";

    }

    e.preventDefault();
}
