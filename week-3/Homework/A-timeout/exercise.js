/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds). 
Hint: try searching for setTimeout. 
(https://www.w3schools.com/jsref/met_win_settimeout.asp)

Task 2
Update your code to make the colour change every 5 seconds to something different. 
Hint: try searching for setInterval. 
(https://www.w3schools.com/jsref/met_win_setinterval.asp)
================
*/


// task 1
const changeColor = setTimeout(myChange, 5000);

function myChange() {
    document.body.style.backgroundColor = "green"
}

// task 2
const changeColorRandom = setInterval(myRandom, 5000);

function myRandom() {
    let rand_1 = Math.floor(Math.random() * 256);
    let rand_2 = Math.floor(Math.random() * 256);
    let rand_3 = Math.floor(Math.random() * 256);
    document.body.style.backgroundColor = "rgb(" + rand_1 + "," + rand_2 + "," + rand_3 + ")";
}