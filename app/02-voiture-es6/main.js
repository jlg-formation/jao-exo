class Person {
    
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    talk() {
        console.log('Hello! My name is %s and I am %d years old.', this.name, this.age);
    }
}

console.log('Person', Person);
console.log('Person %O', Person);

const alice = new Person('Alice', 23);
alice.talk();
const bob = new Person('Bob', 31);
bob.talk();

console.log('alice.talk is equals to bob.talk in memory ?', alice.talk === bob.talk);
