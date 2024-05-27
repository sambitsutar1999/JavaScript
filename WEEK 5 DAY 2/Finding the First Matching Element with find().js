const movements = [200,-450,400,3000,-650,-130,70,1300];
const firstDeposit = movements.find((mov)=> {
    return mov > 0
});
console.log(firstDeposit);


const account = accounts.find((acc)=>{
    return acc.owner === "Arjit Verma"
});
console.log(account);