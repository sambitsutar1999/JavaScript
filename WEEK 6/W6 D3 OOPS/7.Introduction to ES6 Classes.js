//  Class Expressions
// const personcl = class{

// }

// Class Declaration
class personcl {
    constructor(firstName,birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear
    }
    calcAge(){
        console.log(2024 - this.birthYear)
    }

    greet(){
        console.log("Hey There!")
    }
}

const sambit = new personcl('Sambit',1999);
console.log(sambit);

//console.log(rohit.__proto__);
console.log(sambit.__proto__ === personcl.prototype)

sambit.calcAge();

personcl.prototype.greet = 

sambit.greet();

//Classes are not hoisted
//Classes are also first class citizen in js