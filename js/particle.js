class Particle {
    colours = {};
    position = null
    mass = 0;
    keys = null
    maxIncrease = 0.05;
    maxMass = 1;

    constructor(x, y, colours) {
        this.position = new Vector(x, y);
        this.colours = colours;
        this.keys = Object.keys(this.colours).sort();
    }

    draw(context) {
        context.beginPath();
        context.rect(this.position.x, this.position.y, 10, 10);
        context.closePath();

        this.setDrawModes(context, "", this.findColourFromMass());
    }

    findColourFromMass() {
        for (let i = 0; i < this.keys.length - 1; i++) {
            let firstKeyAsNumber = Number(this.keys[i]);
            let secondKeyAsNumber = Number(this.keys[i + 1]);
            if (this.mass >= firstKeyAsNumber && this.mass < secondKeyAsNumber)
                return this.colours[this.keys[i]];
        }
    }

    updateBottom(bottom) {
        if (bottom.mass >= 0 && bottom.mass < bottom.maxMass) { //if not stone and not full
            let needed = bottom.maxMass - bottom.mass;

            if (needed >= this.mass && this.mass > 0) {
                bottom.mass += this.mass;
                this.mass -= this.mass;
            } else {
                if (needed != 0 && this.mass > 0) {
                    needed = this.mass - needed;
                    bottom.mass += needed;
                    this.mass -= needed;
                }
            }
        }
    }

    updateLeftAndRight(left, right) {

    }

    updateTop(top) {

    }

    update(bottom, left, right, top) {
        this.updateBottom(bottom);
        this.updateLeftAndRight(left, right);
        this.updateTop(top);

        if (top.maxMass >= 1)
            this.maxMass = top.maxMass + this.maxIncrease;
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