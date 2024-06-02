let arr = ['a','b','c','d','e'];

//Slice
console.log(arr.slice(2));
console.log(arr.slice(1,4));
console.log(arr.slice(-2));
console.log(arr.slice(1,-2));
console.log(arr.slice());
console.log([...arr]);

//Splice
console.log(arr.splice(1,2));
console.log(arr);

//Reverse
let arr2 = ["j","i","h","g","f"];
console.log(arr2.reverse());
console.log(arr2);

//Concat
console.log(arr.concat(arr2));
//Spread Method
console.log(...arr,...arr2);