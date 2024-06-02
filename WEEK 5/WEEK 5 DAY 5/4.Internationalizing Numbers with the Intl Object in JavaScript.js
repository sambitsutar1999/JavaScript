const num = 33543434.23;

const options = {
    style: "currency",
    currency: "INR"
}

console.log(num)     
console.log("US",new Intl.NumberFormat('en-US',options).format(num));
console.log("Germany", new Intl.NumberFormat('de-DE', options).format(num));
console.log("Syria", new Intl.NumberFormat('ar-SY',options).format(num));


//Output
33543434.23
/* 
US₹33,543,434.23
Germany33.543.434,23 ₹
Syria ٣٣٬٥٤٣٬٤٣٤٫٢٣ ₹ 
*/