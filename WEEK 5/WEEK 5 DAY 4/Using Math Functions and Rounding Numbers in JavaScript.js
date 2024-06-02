// Math and Rounding
console.log(Math.sqrt(25));
console.log(25 ** (1/2));
console.log(8 ** (1/3));


console.log(Math.max(2,3,4,5,6));
console.log(Math.min(1,2,3,4,5,6));
console.log(Math.max(2,3,4,'5',6,7))
console.log(Math.max(1,2,'30px',4));


console.log(Math.PI);
console.log(Math.PI * Number.parseFloat('20px') ** 2);

console.log(Math.random());
console.log(Math.trunc(Math.random() * 6)+1);

const randomNum = (min,max) =>
    Math.trunc(Math.random() * (max-min) +1) + min;

console.log(randomNum(10,20));


//Rounding

console.log(Math.round(23.3));

console.log(Math.ceil(23.3));

console.log(Math.floor(23.3));

console.log(Math.trunc(23.3));

// Rounding Decimals
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log((2.3453).toFixed(2));
console.log(+(2.3453).toFixed(2));
