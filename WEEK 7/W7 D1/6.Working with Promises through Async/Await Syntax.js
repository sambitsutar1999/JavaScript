const whereAmI = async function () {
    // console.log("Thisn is from async function")
    // const res = await fetch(`https://restcountries.eu/rest/v2/name/${country}`);
    const res = await fetch(`https://api.github.com/users`)
    const data = await res.json();
    console.log(data)
}
whereAmI();
console.log("first log")