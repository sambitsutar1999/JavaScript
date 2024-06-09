console.log("connected");
const getGithubUser = async function () {
    try {
        const res = await fetch(`https://api.github.com/users`)
        const data = await res.json();
        // console.log(data)
        return data
    } catch (err) {
        console.error(err.message)
    }
};

(async function(){
    try{
        const user = await getGithubUser();
        console.log(user)
    }catch(error){
        console.error(error.message)
    }

    console.log("Finished getting userd")
})()
// const user = getGithubUser();
// //   console.log(user)

// user.then((data) => {
//     console.log(data)
// }).catch((err) => {
//     console.error(err.message)
// }).finally(() => {
//     console.log("Finished getting data from the function")
// });

// (function(){
//     console.log("This is IEF")
// })()