class personcl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear
    }
    calcAge() {
        console.log(2024 - this.birthYear)
    }

    greet() {
        console.log("Hey There!")
    }
    get age() {
        return 2024 - this.birthYear
    }
    set fullName(name) {
        if (name.includes(' ')) this._fullName = name
        else alert(`${name} is not a full name`)
    }
    get fullName() {
        return this._fullName
    }

    static sayhello() {
        console.log('Hey there')
        console.log(this)
    }
}
class Studentcl extends personcl {
    constructor(firstName, birthYear, course) {
        super(firstName, birthYear)
        this.course = course;
    }

    introduce() {
        console.log(`Hey my name is ${this._fullName} and i study ${this.course}`)
    }

    calcAge() {
        console.log(`I am ${2024 - this.birthYear} years Old`)
    }
}



const ankit = new Studentcl('Ankit Sharma',1999,'Computer Science B.Tech');
console.log(ankit)

ankit.introduce()
ankit.calcAge()
ankit.greet()