class Particle {
    colour = "";
    position = null
    constructor(x, y) {
        this.colour = `rgb(${Utilities.getRandomInt(0, 255)}, ${Utilities.getRandomInt(0, 255)}, ${Utilities.getRandomInt(0, 255)})`
        this.position = new Vector(x, y);
    }

    draw(context) {
        context.beginPath();
        context.rect(this.position.x, this.position.y, 10, 10);
        context.closePath();

        this.setDrawModes(context, "", this.colour);
    }

    setDrawModes(context, strokeStyle, fillStyle) {
        if (strokeStyle != "") {
            context.strokeStyle = strokeStyle
            context.stroke();
        }
        if (fillStyle != "") {
            context.fillStyle = fillStyle
            context.fill();
        }
    }
}