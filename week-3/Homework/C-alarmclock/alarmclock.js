function setAlarm() {
    let timerValue = document.querySelector("#alarmSet").value;
    let timeRemain = document.querySelector("#timeRemaining");

    let timer = setInterval(updateTimer, 1000);

    function updateTimer() {
        let minutes = Math.floor((timerValue % (60 * 60)) / 60);
        let seconds = Math.floor((timerValue % 60));

        seconds = seconds < 10 ? "0" + seconds : seconds;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        timeRemain.innerHTML = `Time Remaining: ${minutes}:${seconds}`;

        if (timerValue > 0) {
            timerValue--
            document.getElementById("set").setAttribute("disabled", "");
        }

        if (timerValue === 0) {
            playAlarm();
            document.body.style.backgroundColor = "grey";
            document.querySelector("#alarmSet").removeAttribute("disabled");
            document.getElementById("set").removeAttribute("disabled");
            document.querySelector("#alarmSet").value = ""
        }
    }

    document.getElementById("stop").addEventListener("click", () => {
        clearInterval(timer);
        document.querySelector("#alarmSet").removeAttribute("disabled");
        document.getElementById("set").removeAttribute("disabled");
        timeRemain.innerHTML = 'Time Remaining: 00:00';
        document.querySelector("#alarmSet").value = "";
        document.body.style.backgroundColor = "white";

    });



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
