function main() {
    for (let i = 0; i < 200; i++) {
        setTimeout(() => {
            const m = new Multiply(i, 3);
            m.draw();
        }, 16 * i);

    }

}

main();
