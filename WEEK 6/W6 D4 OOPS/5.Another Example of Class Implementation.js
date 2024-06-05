class Account{
    constructor(owner,currency,pin){
        this.owner = owner;
        this.currency = currency;
        this.pin = pin;
        this.movements = [];
        this.locale = navigator.language
    }
    // Public Interfaces
    deposite(val){
        this.movements.posh(val);
    }
    withdrawl(val){
        this.deposite(-val)
    }
    approveLoan(){
        return true
    }
    requestLoan(val){
        if (this.approveLoan){
            this.deposite(val)
        }
    }
}
const acc1 = new Account('Sambit Sutar','INR',1111);
acc1.deposite(200);
acc1.deposite(450);
acc1.withdrawl(600);
acc1,requestLoan(800);

acc1.approveLoan();

console.log(acc1.pin);
console.log(acc1);
