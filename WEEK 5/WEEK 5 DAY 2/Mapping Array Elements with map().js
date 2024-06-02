// Map Method

let arr = [1,10,33,22,34];
let arr2 = arr.map(function(el){
    return el * 2
})
console.log(arr2);

//Second example

const movements = [200,-450,400,3000,-650,-130,70,1300];
const usdtoinr = 2.2;
const movementsInr = movements.map(function(mov){
    return mov * usdtoinr

});
console.log(movementsInr);

//Using For Of Method

const movements = [200,-450,400,3000,-650,-130,70,1300];
const movementUsdof = [];
for(const mov of movements){
movementUsdof.push(mov * eurToUsd)
}
console. log (movementUsdof)