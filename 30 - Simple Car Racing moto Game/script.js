var blueCar = document.getElementById("bluecar");
var raceCar = document.getElementById("racecar");
var result = document.getElementById("result");
const score = document.getElementById("score");
var game = document.getElementById("game");
var counter = 0;
var jumpsound = document.getElementById("jumpsound");
var isMovingLeft = false; // Variable to track the direction

// bluecar move
blueCar.addEventListener("animationiteration", function () {
    var random = Math.floor(Math.random() * 3) * 130;
    blueCar.style.left = random + "px";
    counter++;
});

// racecar move
document.addEventListener("touchstart", function (e) {
    e.preventDefault(); // Prevent default touch behavior (e.g., scrolling)
    toggleMovement();
});

// Game over
setInterval(function Gameover() {
    var blueCarTop = parseInt(window.getComputedStyle(blueCar).getPropertyValue("top"));
    var blueCarLeft = parseInt(window.getComputedStyle(blueCar).getPropertyValue("left"));
    var raceCarLeft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"));
    if ((blueCarLeft === raceCarLeft) && (blueCarTop > 250) && (blueCarTop < 450)) {
        result.style.display = "block";
        game.style.display = "none";
        score.innerHTML = `score: ${counter} `;
        counter = 0;
    }
}, 10);

function toggleMovement() {
    if (isMovingLeft) {
        moveRaceCarRight();
    } else {
        moveRaceCarLeft();
    }
    isMovingLeft = !isMovingLeft; // Toggle the direction
}

function moveRaceCarLeft() {
    var raceCarLeft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"));
    if (raceCarLeft > 0) {
        raceCar.style.left = (raceCarLeft - 130) + "px";
        jumpsound.play();
    }
}

function moveRaceCarRight() {
    var raceCarLeft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"));
    if (raceCarLeft < window.innerWidth - raceCar.clientWidth) {
        raceCar.style.left = (raceCarLeft + 130) + "px";
        jumpsound.play();
    }
}
