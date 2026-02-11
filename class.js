



// class Player {
//     constructor(name, age) {
//         console.log("calling the constructor method", name);
//         this.name = name;
//         this.age = age;
//     }
// }
// const user1 = new Player("Chaitey", 20);
// const user2 = new Player("Rahim", 22);
// console.log(user1);
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log(`${this.name}is eating`);
    }
}

class Dog extends Animal {
    constructor(name, bread, age) {
        super(name, age)
        this.bread = bread;
    }

    bark() {
        console.log(`${this.name} is barking`);

    }
}
class Cat extends Animal {
    constructor(name, age) {
        super(name, age)
    }
    meow() {
        console.log(`${this.name} is meow`);
    }
}
class Bird extends Animal {
    constructor(name, age) {
        super(name, age)
    }

    fly() {
        console.log(`${this.name} is flying`);

    }
}
const dog1 = new Dog("simba", "persian", 1);
dog1.eat()
console.log(dog1);
