class Track {
    constructor(center, radius, hue) {
        this.center = center;
        this.radius = radius;
        this.hue = hue;
        this.startLightUp = false;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.center.x, this.center.y, this.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `hsl(${this.hue}, 100%, 50%)`;
        ctx.lineWidth = 2;
        ctx.stroke();
    }

    drawStartCircle(ctx) {
        const startX = this.center.x + this.radius;
        const startY = this.center.y;
        ctx.beginPath();
        ctx.arc(startX, startY, 10, 0, Math.PI * 2);
        ctx.fillStyle = this.startLightUp ? 'lime' : 'gray';
        ctx.fill();
    }
}