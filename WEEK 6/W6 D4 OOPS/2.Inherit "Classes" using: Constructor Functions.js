//Inheritance in constructor function

const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
}
Person.prototype.calcAge = function () {
    console.log(2024 - this.birthYear)
}
const ketan = new Person('Ketan', 1993);
console.log(ketan);
ketan.calcAge()


const Student = function (firstName, birthYear, course) {
    this.firstName = firstName;
    this.birthYear = birthYear;
    this.course = course;
}

Student.prototype.introduce = function () {
    console.log(`Hey i am ${this.firstNameame} and I study ${this.course}`)
}

const mohan = new Student('Mohan', 1998, 'B.Tech in CS');
console.log(mohan)
mohan.introduce()