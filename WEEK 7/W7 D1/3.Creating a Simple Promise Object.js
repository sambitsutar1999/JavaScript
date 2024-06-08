const lotteryPromise = new Promise(function (resolve, reject) {
    if (Math.random() > 0.5) {
        resolve('You Won')
    } else {
        reject("You Lost Your Money")
    }
})
lotteryPromise.then(res => console.log(res)).catch(err => console.log(err))





//----------------OutPut-------------------------
// You Lost Your Money
// You Won







const lotteryPromise = new Promise(function (resolve, reject) {
    console.log("Lottery Draw is Taking place")
    setTimeout(() => {
    if (Math.random() > 0.5) {
        resolve('You Won')
    } else {
        reject(new Error("You Lost Your Money"))
    }
},2000)
})
lotteryPromise.then(res => console.log(res)).catch(err => console.error(err))


//----------------------OUTPUT------------------
// Lottery Draw is Taking place
// ERROR!
// Error: You Lost Your Money





//Promisify setTimeout

const wait = function(seconds){
    return new Promise(function(resolve){
        setTimeout(resolve,seconds * 1000)
    })
}

wait(2).then(()=>{
    console.log(' 1 second passed');
        return wait(1)
    
}).then(()=>{
    console.log('2 second passed')
    return wait(1)
}).then(()=>{
    console.log('3 second passed')
    return wait(1)
}).then(()=>{
    console.log('4 second passed')
    return wait(1)
}).then(()=>{
    console.log('5 second passed')
    return wait(1)
}).then(()=>{
    console.log('6 second passed')
    return wait(1)
}).then(()=>{
    console.log('7 second passed')
    return wait(1)
}).then(()=>{
    console.log('8 second passed')
    return wait(1)
})





//---------------------OUTPUT----------------------
// Lottery Draw is Taking place
// You Won
//  1 second passed
// 2 second passed
// 3 second passed
// 4 second passed
// 5 second passed
// 6 second passed
// 7 second passed
// 8 second passed