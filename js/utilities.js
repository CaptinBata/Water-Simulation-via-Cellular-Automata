class Utilities {
    static getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    static CloneParticle(original) {
        let copy = new Particle(original.position.x, original.position.y);
        copy.mass = original.mass;
        copy.maxMass = original.maxMass;

        return copy;
    }
}