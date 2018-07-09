// import './utils';
// import subtract, {square, add} from './utils';
//
// console.log('app.js is running!');
// console.log(square(4));
// console.log(add(100, 23));
// console.log(subtract(100, 23));

// import isSenior, { isAdult, canDrink } from "./person";
//
// console.log(isAdult(17));
// console.log(canDrink(23));
// console.log(isSenior(64));

// install -> import -> use
// import validator from 'validator';
//
// console.log(validator.isEmail('wcywin@gmail.com'));

//=======================

// New Syntax with the Babel Plugin "transform-class-properties"
class OldSyntax {
    constructor() {
        this.name = 'Mike';
        this.getGreeting = this.getGreeting.bind(this);
    }
    getGreeting() {
        return `Hi. My name is ${this.name}!`;
    }
}

const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting;
console.log(getGreeting());

//-------------------

class NewSyntax {
    name = "Jen";
    getGreeting = () => {
        return `Hi. My name is ${this.name}!`;
    }
}

const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting;
console.log(newGetGreeting());