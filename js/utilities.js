class Utilities {
    static getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    static cloneParticle(original, colours) {
        let copy = new Particle(original.position.x, original.position.y, colours);
        copy.mass = original.mass;
        copy.maxMass = original.maxMass;

        return copy;
    }

    static lerpColor(colourFrom, colourTo, amount) {

        var ah = +colourFrom.replace('#', '0x'),
            ar = ah >> 16, ag = ah >> 8 & 0xff, ab = ah & 0xff,
            bh = +colourTo.replace('#', '0x'),
            br = bh >> 16, bg = bh >> 8 & 0xff, bb = bh & 0xff,
            rr = ar + amount * (br - ar),
            rg = ag + amount * (bg - ag),
            rb = ab + amount * (bb - ab);

        return '#' + ((1 << 24) + (rr << 16) + (rg << 8) + rb | 0).toString(16).slice(1);
    }
}