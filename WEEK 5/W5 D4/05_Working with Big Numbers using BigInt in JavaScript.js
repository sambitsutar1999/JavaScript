/*Using `BigInt` in JavaScript allows you 
to work with numbers beyond the typical `Number` range, 
which is limited to `Number.MAX_SAFE_INTEGER` and `Number.MIN_SAFE_INTEGER`. 
Here's a basic overview of how you can use BigInt: */







// Working with Big Numbers
console.log(2**53 +1);
console.log(Number.MAX _SAFE_INTEZER);
console.log(2**53 +1);
console.log(2**53 +2);
console.log(2**53 +3);
console.log(2**53 +4);
console.log(2**53 +5);

console.log(657566757656656456845648n);
console.log(BigInt(65674545665));

console.log(3000n + 1000n);
console.log(656757656566454554n * 10000n);


const huge = 6545454564564654567n;
const num = 23;

console.log(huge * num);


//Exceptions
console.log(20n > 15);
console.log(20n === 20);
console.log(typeof 20n);
console.log(typeof 20);
console.log(20n == '20');

//Divisions
console.log(11n/3n)
console.log(11/3)