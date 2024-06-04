const arr = [3,6,6,4,9,0,3,7];

console.log(arr.__proto__)
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__)
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function(){
    return[...new Set(this)]
}

console.log(arr.unique());

console.dir(x => x+1);

const h1 = document.querySelector('.h1')
console.dir(h1);