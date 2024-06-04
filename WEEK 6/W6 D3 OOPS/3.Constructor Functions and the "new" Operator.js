const person = function(firstname,lastname,birthYear){
    //console.log(this)
    
    //Instance Properties

    this.firstname = firstname;
    this.lastname = lastname;
    this.birthYear = birthYear;

    //Don't do this
    this calcAge = function(){
        console.log(2024 - this.birthYear)
    }
}

const sambit = new person('Sambit','Sutar',1999);
console.log(sambit);

// 1 : new {} is created.
// 2 : function is called and 'this' == {}'
// 3 : {} linked to its prototype.
// 4 : function will automatically return {}

const ryan = new person('Ryan','James',2003);
console.log(ryan);

const riya = new person ('Riya','Singh',1996);
console.log(riya);

riya.calcAge();

const sam = "sam";

console.log(ryan instanceof person);
console.log(sam instanceof person;)


