class Simulation {
    grid = [];
    constructor() {
        this.setupCanvas();
        this.setupEvents();
    }

    setupCanvas() {
        this.canvas = document.getElementById("gameCanvas");
        this.canvas.width = this.getWindowWidth();
        this.canvas.height = this.getWindowHeight();
        this.context = this.canvas.getContext("2d");
        this.clearScreen();
    }

    getWindowWidth() {
        let remainder = (window.innerWidth - 25) % 10;

        if (remainder != 0)
            return window.innerWidth - 25 - remainder;
        return window.innerWidth;
    };

    getWindowHeight() {
        let remainder = (window.innerHeight - 25) % 10;

        if (remainder != 0)
            return window.innerHeight - 25 - remainder;
        return window.innerHeight;
    };

    clearScreen() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.fillStyle = "#000000";
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    };

    spawnWaterParticle(event) {
        this.grid.forEach(x => {
            x.forEach(y => {
                if (event.clientX > y.position.x && event.clientX < y.position.x + 10)
                    if (event.clientY > y.position.y && event.clientY < y.position.y + 10)
                        y.mass = 1;
            })
        })
    }

    setupEvents() {
        window.addEventListener("mousedown", (event) => {
            if (event.button == 0) //left mouse button
            {
                this.spawnWaterParticle(event);
                //spawn ground
            }
            else if (event.button == 1) { } //right mouse button

        });
    }

    setupGrid() {
        for (let x = 0; x < this.getWindowWidth() / 10; x++) {
            this.grid.push([]);
            for (let y = 0; y < this.getWindowHeight() / 10; y++) {
                this.grid[x].push(new Particle(x * 10, y * 10));
            }
        }
    }

    update() {
        this.grid.forEach(x => {
            x.forEach(y => {
                y.update();
            })
        })
    }

    draw() {
        this.grid.forEach(x => {
            x.forEach(y => {
                y.draw(this.context);
            })
        })
    }

    simLoop() {
        this.update();
        this.draw();
        window.requestAnimationFrame(this.simLoop.bind(this));
    }

    start() {
        this.setupGrid();
        this.simLoop();
    }
}

let sim = new Simulation();
sim.start();