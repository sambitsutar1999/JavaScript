
//API

navigator.geolocation.
    getCurrentPosition(pos => console.log(pos),
        err => console.log(err))




//CALLING API WITH NEW PROMISE

const getPosition = function () {
    return new Promise(function(resolve,reject){
    navigator.geolocation.getCurrentPosition(
        position => resolve(position),
        err => reject(err)
    )
})
}
getPosition().then(pos => console.log(pos))



//Anather Method
const getNewPosition = function(){
    return new Promise(function(resolve,reject){
        navigator.geolocation.getCurrentPosition(resolve.reject)
    })
}
getNewPosition().then(pos => console.log(pos))

