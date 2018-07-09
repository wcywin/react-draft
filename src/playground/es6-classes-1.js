class Person {
    constructor(name = 'John Smith', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi, I'm ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` Their Major is ${this.major}`;
        }

        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();

        if (this.homeLocation) {
            return greeting + ` I'm visiting from ${this.homeLocation}.`;
        }

        return greeting;
    }
}


const me = new Traveler('Wojciech Cywinski', 30, 'New York');
console.log(me.getDescription());
console.log(me.getGreeting());

const other = new Traveler('Marta Michalska', 28);
console.log(other.getDescription());
console.log(other.getGreeting());

const john = new Traveler(undefined, 28, 'Nowhere');
console.log(john.getDescription());
console.log(john.getGreeting());

const other2 = new Student(undefined, 1, 'Computer Science');
console.log(other2.hasMajor());