const myCanvas = document.querySelector("#myCanvas");
const width = window.innerWidth;
const height = window.innerHeight; 
myCanvas.width = width;
myCanvas.height = height;

const trackCenter = {x: width / 2, y: height / 2};
const trackMinRadius = width / 20;
const trackStep = 25;
const ballRadius = 8;

const soundFrequencies = [
    1760, 1396.91, 1174.66, 987.77, 783.99,
    659.25, 523.25, 440, 349.23, 293.66
];

const tracks = [];
const balls = [];
const N = 10;

for (let i = 0; i < N; i++) {
    const trackRadius = trackMinRadius + i * trackStep;
    const ballSpeed = ballMinSpeed + i * ballSpeedStep;
    const ballSoundFrequency = soundFrequencies[i];
    const hue = (i * 360) / N;
    const track = new Track(trackCenter, trackRadius, hue);
    const ball = new Ball(track, ballRadius, ballSpeed, ballSoundFrequency, hue);
    tracks.push(track);
    balls.push(ball);
}

const ctx = myCanvas.getContext("2d");

function animate() {
    ctx.clearRect(0, 0, width, height);
    tracks.forEach(track => {
        track.draw(ctx);
        track.drawStartCircle(ctx);
    });
    balls.forEach(ball => ball.move());
    balls.forEach(ball => ball.draw(ctx));
    requestAnimationFrame(animate);
}

animate();