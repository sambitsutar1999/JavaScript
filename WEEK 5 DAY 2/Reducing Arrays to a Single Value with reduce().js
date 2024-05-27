const movements = [200,-450,400,3000,-650,-130,70,1300];
const balance = movements.reduce(function(acc,mov,i,array){
    console.log(`Iteration no:${i+1}:Acc value is ${acc}`)
    return acc + mov
}0);
console.log(balance);



// USING forOf Method

let balance2 = 0;
for(mov of movements) {
    balance2 = balance2 + mov
};
console.log(balance2);



// Maximum value from the movements

const max = movements.reduce((acc,mov)=>{
    if (acc > mov) return acc;
    else return mov
},movements[0]);
console.log(max);