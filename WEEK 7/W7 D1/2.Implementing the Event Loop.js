console.log("Test Start");
setTimeout(() => {
    console.log("0 second timer")
},0)

Promise.resolve("Resolves Promise 1").then(res => console.log(res));

Promise.resolve("Resolved Promise 2").then(res => {
    for (let i=0;i<1000000;i++){}
        console.log(res);
   
})
console.log("Test End")



//--------------OUTPUT---------------
// Test Start
// Test End
// Resolves Promise 1
// Resolved Promise 2
// 0 second timer