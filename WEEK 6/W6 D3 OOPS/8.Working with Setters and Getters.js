// Getter & Setter
const account {
    owner: 'Arjit',
    movements: [2000, 400, 4, 899, 766],
    get latest(){
        return (this.movements.slice(-1).pop())
    },
        set latest(mov){
    this.movements.push(mov);
    console.log(this.movements)
}
}

console.log(account);
console.log(account.latest)
account.latest = 1200;













class personcl {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
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

}

const rohit = new personcl('Rohit singh', 1999)
console.log(rohit);