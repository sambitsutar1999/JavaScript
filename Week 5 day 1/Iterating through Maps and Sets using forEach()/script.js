// Using forEach in Sets Map

const currencies = new Map([
    ['USD','United States Dollar'],
    ['INR','Indian Rupees'],
    ['EUR','Euro']
])

currencies.forEach(function(value,key,map){
    console.log(`${key} :${value}`)
})

//USING FOREACH IN SETS
let currenciesunique = new Set(['USD','INR','USD','EUR','INR'])

currenciesunique.forEach(function(value,key,set){
    console.log(`${value}:${value}`)
})