const future = new Date(2020,10,11,15,45);
console.log(+future);

const Dayspassed = (days1,days2) => 
Math.abs(days2 - days1) / (1000 * 60*60*24);

const daysPassed = Dayspassed(new Date(2028,10,19),new Date(2023,11,10));
console.log(daysPassed);




//OUTPUT

// 1605089700000
// 1806
