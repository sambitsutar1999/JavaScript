// Remainder Decimals
console.log(5/2);   //Output - 2.5
console.log(4/2);  //Output -2

console.log(5%2); //5 = 2*2+1
console.log(8%2); //8 = 3*2+2
console.log(7%2); //7 = 3*2+1

console.log(6%2); //Even
console.log(6%2); //Odd

const isEven = n => n%2 ===0

console.log(isEven(8));
console.log(isEven(213));
console.log(isEven(578));


labelBalance.addEventListener('click',function(){
    [...document.querySelector('.movement__row')].forEach(function(row,i){
        if(i % 2 === 0)
        row.style.backgroundColor = "red;"
    if (i % 3 === 0)
        row.style.backgroundColor = "blue;"
    })
})
