const getJSON = function (url, errorMsg = 'Something went wrong') {
    return fetch(url).then(response => {
        if (!response.ok) throw new Error(`${errorMsg} (${response.status})`)
        return response.json();
    });
};


const get3User = async function (u1, u2, u3) {
    try {
        // const user1 = await getJSON(`https://api.github.com/users/${u1}`)
        // const user2 = await getJSON(`https://api.github.com/users/${u2}`)
        // const user3 = await getJSON(`https://api.github.com/users/${u3}`)

        // console.log(user1.location, user2.location, user3.location)

        const data = await Promise.all([
            getJSON(`https://api.github.com/users/${u1}`),
         getJSON(`https://api.github.com/users/${u2}`),
         getJSON(`https://api.github.com/users/${u3}`)
        ])
        data.map((d) => {
            console.log(d.location)
        })
    } catch (error) {
        console.error(error, "")
    }
}

get3User('mojombo','wycats','pjhyett')