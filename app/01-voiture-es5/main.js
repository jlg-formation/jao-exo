function Voiture(vmax, marque, prix) {
    this.vmax = vmax;
    this.marque = marque;
    this.prix = prix;
}

Voiture.prototype.start = function() {
    console.log(`Vrom Vroum, je suis une ${this.marque}...`);
}

console.log('Voiture', Voiture);
console.log('Voiture %O', Voiture);

const ds4 = new Voiture(180, 'DS', 22000);
ds4.start();
const megane = new Voiture(160, 'Renault', 15000);
megane.start();
