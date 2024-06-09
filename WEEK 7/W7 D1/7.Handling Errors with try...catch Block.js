// try{
//     let y = 1;
//     const x = 3;
//     x = 2;
    
// }catch(err){
//     console.error(err.message);
//     alert(err.message)
// }

const whereAmI = async function () {
try{
    const res = await fetch(`https://api.github.com/users`)
    const data = await res.json();
    console.log(data)
}catch(err){
    console.error(err.message)
    console.log("error",error)
}
}
whereAmI();
whereAmI();
whereAmI();
whereAmI();
whereAmI();
whereAmI();
