const movements = [200,-450,400,3000,-650,-130,70,1300];
console.log(movements);
console.log(movements.includes(4000));


//SOME

console.log(movements.some((mov) => {
    return mov < -1000
}))

//EVERY
console.log(movements.every((mov) => {
    return mov < -1000
}))

// Separate Callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.filter(deposit));
console.log(movements.every(deposit));