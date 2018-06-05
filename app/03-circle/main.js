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
        const a = - angle * 2 * Math.PI / 360;
        const svgns = "http://www.w3.org/2000/svg";
        const svg = document.querySelector('svg');
        const point = document.createElementNS(svgns, 'circle');
        point.setAttribute('cx', this.cx + this.radius * Math.cos(a));
        point.setAttribute('cy', this.cy + this.radius * Math.sin(a));
        point.setAttribute('r', 3);
        point.setAttribute('fill', '#000');
        point.setAttribute('stroke', '#000');
        point.setAttribute('stroke-width', '2');

        svg.appendChild(point);
    }

    setLine(angle1, angle2) {
        const svgns = "http://www.w3.org/2000/svg";
        const svg = document.querySelector('svg');
        const line = document.createElementNS(svgns, 'line');
        line.setAttribute('x1', 10);
        line.setAttribute('y1', 20);
        line.setAttribute('x2', 50);
        line.setAttribute('y2', 100);
        line.setAttribute('stroke', '#000');
        line.setAttribute('stroke-width', '2');

        svg.appendChild(line);
    }
}

function main() {
    const c = new Circle(200);
    c.draw();
    c.setPoint(30);
    c.setPoint(60);
    c.setPoint(90);
    c.setPoint(270);
    c.setLine(30, 90);
}

main();
