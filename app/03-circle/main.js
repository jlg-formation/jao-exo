function main() {
    for (let i = 0; i < 400; i++) {
        setTimeout(() => {
            const m = new Multiply(i, 16);
            m.draw();
        }, 16 * i);

    }

}

main();
