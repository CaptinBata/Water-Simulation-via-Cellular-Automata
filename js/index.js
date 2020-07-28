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

    setupEvents() {
        window.addEventListener("click", (e) => {
            if (e.button == 0) //left mouse button
            {
                //spawn ground
            }
            else if (e.button == 2) //right mouse button
            {
                //spawn water
            }
        });
    }

    start() {
        for (let x = 0; x < this.getWindowWidth() / 10; x++) {
            this.grid.push([]);
            for (let y = 0; y < this.getWindowHeight() / 10; y++) {
                this.grid[x].push(new Particle(x * 10, y * 10));
                this.grid[x][y].draw(this.context);
            }
        }
    }
}

let sim = new Simulation();
sim.start();