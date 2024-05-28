console.log(23 === 23.0);   //OutPut: true

//Base 10 0 -9 1/10 = 0.1 3/10 = 3.33333
//Binary Base 2 0 1
console.log(0.1 + 0.2) // 0.3
console.log(0.1 + 0.2 === 0.3) //

//Conversion
console.log("This is a String");
console.log(Number(23));
console.log(+'23');

// Parsing
console.log(Number,parseInt('25px',10));
console.log(Number,parseInt('e89',10));

// 2.5 rem
console.log(Number,parseInt('  2.5rem  '));
console.log(Number.parseFloat('   2.5rem  '));


//Check if value is NaN
console.log(Number,isNaN(20));
console.log(Number,isNaN('20'));
console.log(Number,isNaN(+'20x'));
console.log(Number,isNaN(23/0));

// Check if value is Finite
console.log(Number,isFinite(20));
console.log(Number,isFinite('20'));
console.log(Number,isFinite(+'20x'));
console.log(Number,isFinite(23/0));

// Check if value is Integer
console.log(Number,isInteger(20));
console.log(Number,isInteger('20'));
console.log(Number,isInteger(+'20x'));
console.log(Number,isInteger(23/0));
