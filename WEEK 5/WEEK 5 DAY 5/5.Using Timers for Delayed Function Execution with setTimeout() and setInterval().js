// Set Timeout


console.log("I am ordering pizza")

const ing = ['tamatoes','mushrooms'];

const PizzaTRimer = setTimeout((ing1,ing2) =>{
    console.log(`Here is your Pizza🍕 with ${ing1} and ${ing2}`)
},5000,...ing)

if(ing.includes('olives')){
  clearTimeout(PizzaTRimer)
}


//Set Interval

setInterval(()=>{
    const now = newDate();
    console.log(now)
},1000)