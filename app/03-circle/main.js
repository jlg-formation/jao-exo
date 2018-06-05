class Circle {
    constructor(radius) {
        this.radius = radius;
        this.cx = 1.5 * radius;
        this.cy = 1.5 * radius;
    }

    draw() {
        const div = document.querySelector('div');
        const r = this.radius;
        div.innerHTML = `
<svg width="${3 * r}" height="${3 * r}">
    <circle cx="${this.cx}" cy="${this.cy}" r="${r}" stroke="#000" stroke-width="2" fill="transparent" />
</svg>
    `;
    }

    setPoint(angle) {
        const svgns = "http://www.w3.org/2000/svg";
        const svg = document.querySelector('svg');
        const point = document.createElementNS(svgns, 'circle');
        point.setAttribute('cx', this.cx);
        point.setAttribute('cy', this.cy);
        point.setAttribute('r', 10);
        point.setAttribute('fill', '#000');
        point.setAttribute('stroke', '#000');
        point.setAttribute('stroke-width', '2');

        svg.appendChild(point);
    }
}

function main() {
    const c = new Circle(200);
    c.draw();
    c.setPoint(10);
}

main();