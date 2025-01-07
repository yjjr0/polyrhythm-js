class Ball {
    constructor(track, radius, speed, soundFrequency, hue) {
        this.track = track;
        this.radius = radius;
        this.speed = speed;
        this.soundFrequency = soundFrequency;
        this.hue = hue;
        this.angle = 0;
        this.completedRevolution = false;
        this.passedStartLine = false;
    }

    updateSpeed(minSpeed, index, speedStep) {
        this.speed = minSpeed + index * speedStep;
    }

    move() {
        this.angle += this.speed;
        if (this.angle >= 2 * Math.PI) {
            this.angle -= 2 * Math.PI;
            if (!this.completedRevolution) {
                playSound(this.soundFrequency, 2);
                this.completedRevolution = true;
            }
        } else {
            this.completedRevolution = false;
        }

        if (!this.passedStartLine && this.angle > 0 && this.angle < 0.1) {
            this.passedStartLine = true;
            this.track.startLightUp = true;
            setTimeout(() => {
                this.track.startLightUp = false;
            }, 500);
        }

        if (this.angle > 0.1) {
            this.passedStartLine = false;
        }
    }

    draw(ctx) {
        const x = this.track.center.x + this.track.radius * Math.cos(this.angle);
        const y = this.track.center.y + this.track.radius * Math.sin(this.angle);
        ctx.beginPath();
        ctx.arc(x, y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsl(${this.hue}, 100%, 50%)`;
        ctx.fill();
    }
}