//Using For Of Loop

const movements = [200,400,600,800,1000,-150,-250,-350,-450];
for (let movement of movements){
    if(movement > 0) {
        console.log(`You have deposited ${movement}`)
    } else {
        console.log(`You have withdrawed ${Math.abs(movement)}`)
    }
}

//Using for each method
movements.forEach(function(movement){
    if(movement > 0) {
        console.log(`You have deposited ${movement}`)
    } else {
        console.log(`You have withdrawed ${Math.abs(movement)}`)
    } 
})



//Transaction declaration
const movements = [200,400,600,800,1000,-150,-250,-350,-450];
movements.forEach(function(movement,i,arr){
    if(movement > 0) {
        console.log(`Tr ${i+1}You have deposited ${movement}`)
    } else {
        console.log(`Tr ${i+1}You have withdrawed ${Math.abs(movement)}`)
    } 
})

//Transaction declaration using for of method
for (let [i,movement] of movements.entries()) {
    if(movement > 0) {
        console.log(`Tranction ${i+1}You have deposited ${movement}`)
    } else {
        console.log(`Tranction ${i+1}You have withdrawed ${Math.abs(movement)}`)
    }
}