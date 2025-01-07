const ballMinSpeedSlider = document.getElementById("ballMinSpeedSlider");
const ballSpeedStepSlider = document.getElementById("ballSpeedStepSlider");
const ballMinSpeedValue = document.getElementById("ballMinSpeedValue");
const ballSpeedStepValue = document.getElementById("ballSpeedStepValue");

let ballMinSpeed = parseFloat(ballMinSpeedSlider.value);
let ballSpeedStep = parseFloat(ballSpeedStepSlider.value);

ballMinSpeedSlider.addEventListener("input", function() {
    ballMinSpeed = parseFloat(this.value);
    ballMinSpeedValue.textContent = this.value;
    balls.forEach((ball, index) => ball.updateSpeed(ballMinSpeed, index, ballSpeedStep));
});

ballSpeedStepSlider.addEventListener("input", function() {
    ballSpeedStep = parseFloat(this.value);
    ballSpeedStepValue.textContent = this.value;
    balls.forEach((ball, index) => ball.updateSpeed(ballMinSpeed, index, ballSpeedStep));
});