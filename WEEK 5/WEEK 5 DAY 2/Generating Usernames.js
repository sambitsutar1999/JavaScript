 const account1 = {
    owner: "Arjit Verma",
    movements: [200,-450, 400, 3000,-650,-130, 70, 1300],
    interestRate : 1.2,
    pin:1111
    }
    
    const account2 = {
    owner : "Ravi Gupta",
    movements: [-200, 450, 500,3300, -350,-530, 700, 300],
    interestRate : 1.5,
    pin:2222
    }
    const account3 = {
    owner : "Aditya Pandey",
    movements: [5000, -450, 340, 890,-650,-300,-460, 900],
    interestRate : 1.5,
    pin:3333
    }
    const account4 = {
    owner : "Stuti Singh",
    movements: [430, -450, 400, 1200, -250,-800, 460, 300],
    interestRate : 1,
    pin:4444
    }
    

    const accounts = [account1,account2,account3,account4];
    const createUsername = function(accs){
        accs.forEach(function(acc){
            acc.username = acc.owner.toLowerCase().split(" ").map(name => name[0])
        })
    }

    
