// Static Method

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
    }
}

const rohit = new personcl('Rohit Singh',1999)
console.log(rohit)

//calling static method
personcl.sayhello();