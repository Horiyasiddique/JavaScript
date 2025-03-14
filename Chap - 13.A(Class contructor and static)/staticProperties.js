class Animal {
    constructor(name){
        this.name = name;

    }
    static makeSound(sound){
        console.log(`${this.name} sounds ${this.sound}`)

    }
}

class Cat extends Animal{
    constructor(name, sound, diet ){
        super(name, sound)
        this.sound = sound;
        this.diet = diet;
        console.log(`${this.name} sounds ${sound}. It eats ${diet}`)

    }
}

let billie = new Cat('billie', 'meow meow', 'fish and chicken')
console.log(billie.makeSound())