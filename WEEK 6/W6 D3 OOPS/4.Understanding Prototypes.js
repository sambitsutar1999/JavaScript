console.log(person.prototype);

person.prototype.calcAge = function(){
    console.log(2024 - this.birthYear)
}

//ryan.calcAge();
//riya.calcAge();

console.log(ryan.__proto__);
console.log(ryan.__proto__ === person.prototype)
console.log(riya.__proto__ === person.prototype);

person.prototype.species = "Homo Sapiens";
console.log(ryan)
console.log(ryan,species);

console.log(ryan.hasOwnProperty('firstname'));
console.log(ryan.hasOwnProperty('species'))