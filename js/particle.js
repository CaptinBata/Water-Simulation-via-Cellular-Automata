class Particle {
    colours = {
        "-1": "rgb(225,225,225)",
        "0": "rgb(0,0,0)",
        "1": "rgb(148,176,255)",
        "1.1": "rgb(125,160,255)",
        "1.2": "rgb(83,136,252)",
        "1.3": "rgb(82,126,247)",
        "1.4": "rgb(70,118,250)",
        "1.5": "rgb(46,102,255)",
        "1.6": "rgb(33,92,255)",
        "1.7": "rgb(23,85,255)",
        "1.8": "rgb(18,81,255)",
        "1.9": "rgb(10,75,255)",
        "2": "rgb(0,68,255)",
    };
    position = null
    mass = 0;
    keys = Object.keys(this.colours);

    constructor(x, y) {
        this.keys = this.keys.sort();
        this.position = new Vector(x, y);
    }

    draw(context) {
        context.beginPath();
        context.rect(this.position.x, this.position.y, 10, 10);
        context.closePath();

        this.setDrawModes(context, "", this.findColourFromMass());
    }

    findColourFromMass() {
        for (let i = 0; i < this.keys.length; i++) {
            let keyAsNumber = Number(this.keys[i]);
            if (this.mass <= keyAsNumber)
                return this.colours[this.keys[i]];
        }
    }

    update() {

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