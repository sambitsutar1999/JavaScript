const movements = [200,-450,400,3000,-650,-130,70,1300];
const deposits = movements.filter((mov)=>{
  return mov > 0
});
console.log(deposits);

// Using For Of Method 
const depositeFor =[];
for(mov of movements) {
  if(mov > 0){
    depositeFor.push(mov)
  }
}
console.log(depositeFor);

// For Using Arrow for withdrawls

const withdrawals = movements.filter((mov => mov < 0));
console.log(withdrawals);