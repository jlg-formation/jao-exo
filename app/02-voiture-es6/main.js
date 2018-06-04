class Voiture {
    
    constructor(marque, prix, vmax) {
        this.marque = marque;
        this.prix = prix;
        this.vmax = vmax;
    }

    start() {
        console.log(`Vroum, Vroum, je suis une ${this.marque}...`);
    }
}

console.log('Voiture', Voiture);
console.log('Voiture %O', Voiture);

const ds4 = new Voiture('DS', 22000, 180);
ds4.start();
const megane = new Voiture('Renault', 15000, 150);
megane.start();
