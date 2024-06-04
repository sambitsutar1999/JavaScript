const PersonProto = {
    calcAge() {
        console.log(2024 - this.birthYear)
    },
    init(firstName,birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}
// Calling Objects
const sambit = Object.create(PersonProto);
sambit.firstName = "Sambit";
sambit.birthYear = 1999;

sambit.calcAge();

console.log(sambit.__proto__ === PersonProto)

const sujit = Object.create(PersonProto);
sujit.init('sujit',2008);
console.log(sujit);
sujit.calcAge()