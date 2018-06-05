function makeCircle() {
    const div = document.querySelector('div');
    div.innerHTML = `
<svg width="600" height="600">
    <circle cx="300" cy="300" r="200" stroke="#000" stroke-width="2" fill="transparent" />
</svg>
    `;

}

function main() {
    makeCircle();
}

main();