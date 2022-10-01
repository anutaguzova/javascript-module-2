function setAlarm() {
  let timerValue = document.querySelector("#alarmSet").value;
  
  let timeRemain = document.querySelector("#timeRemaining");

  let hours = Math.floor((timerValue % (60 * 60 * 24)) / ( 60 * 60));  
  let minutes = Math.floor((timerValue % (60 * 60)) / 60);  
  let seconds = Math.floor((timerValue % 60));  

  
    timeRemain.textContent = `Time Remaining: ${hours}:${minutes}:${seconds} `

    if (timerValue) {  
      setInterval(() => {  
       setAlarm();  
      }, 1000);  
     } else {  
      alert('ENTER THE HRS AND MINS!');  
     }  
  
}


// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
