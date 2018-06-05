class Multiply {
    constructor(total, n) {
        this.total = total;
        this.n = n;
    }

    draw() {
        const c = new Circle(200);
        c.draw();
        for (let i = 0; i < this.total; i++) {
            const a = (360 / this.total) * i;
            c.setPoint(a);
        }
        for (let i = 0; i < this.total; i++) {
            const a1 = (360 / this.total) * i;
            const a2 = (360 / this.total) * i * this.n;

            c.setLine(a1, a2);
        }
    }
}