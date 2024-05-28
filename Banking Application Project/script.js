//DATA
const account1 = {
    owner: "Arjit Verma",
    movements: [200, -450, 400, 3000, -650, -130, 1300],
    interestRate: 1.2,
    pin: 1111
}
const account2 = {
    owner: "Ravi Gupta",
    movements: [-200, 450, 500, 3300, -350, -530, 700, 300],
    interestRate: 1.5,
    pin: 2222
}
const account3 = {
    owner: "Aditya Pandey",
    movements: [200, -450, 400, 3000, -650, -130, 1300],
    interestRate: 1.5,
    pin: 3333
}
const account4 = {
    owner: "Stuti Singh",
    movements: [430, -450, 400, 1200, -250, -800, 460, 300],
    interestRate: 1,
    pin: 4444
}
const accounts = [account1, account2, account3, account4];

// Eleements Selector
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movement');


const btnLogin = document.querySelector('.login__btn');
const btnTrasfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__innput--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


const displayMovements = function (movements) {

    containerMovements.innerHTML = ''

    movements.forEach(function (mov, i) {
        const type = mov > 0 ? 'deposit' : 'withdrawal'

        const html = `<div class="movement__row">
        <div class="movement__type movement__type--${type}">
            ${i + 1} ${type}</div>
        <div class="movement__date">3 Days Ago</div>
        <div class="movement__value">${mov.toFixed(2)} EUR</div>
    </div>`

        containerMovements.insertAdjacentHTML('afterbegin', html)
    })
}




//Reduce Method For Total Balance Calculation

const calcDisplayBalance = function (acc) {
    acc.balance = acc.movements.reduce((acc, mov) => {
        return acc + mov
    }, 0)
    labelBalance.textContent = `${acc.balance} EUR`
}




// Using Chainning Method

const calcDisplaySummary = function (acc) {
    const income = acc.movements
        .filter(mov => mov > 0)
        .reduce((acc, mov) => acc + mov, 0)

    labelSumIn.textContent = `${income.toFixed(2)} EUR`

    const out = acc.movements
        .filter(mov => mov < 0)
        .reduce((acc, mov) => acc + mov, 0)

    labelSumOut.textContent = `${Math.abs(out).toFixed(2)} EUR`

    const interest = acc.movements
        .filter(mov => mov > 0)
        .map(deposit => (deposit * acc.interestRate) / 100)
        .filter((int, i, arr) => {
            return int > 1
        })
        .reduce((acc, mov) => acc + mov, 0)

    labelSumInterest.textContent = `${interest.toFixed(2)} EUR`
}



// forEach & Map Function for making Username

const createUsername = function (accs) {
    accs.forEach(function (acc) {
        acc.username = acc.owner.toLowerCase().split(' ').
            map(name => name[0]).join('')
    })

}

createUsername(accounts);


const updateUI = function (acc) {
    displayMovements(acc.movements);
    calcDisplayBalance(acc);
    calcDisplaySummary(acc);
}

//Event Handelers Login Functionality


let currentAccount;
btnLogin.addEventListener('click', function (e) {
    e.preventDefault();
    currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value)

    if (currentAccount?.pin === Number(inputLoginUsername.value))
        labelWelcome.textContent`Welcome Back${currentAccount.owner.split(' ')[0]}`
    containerApp.style.opacity = 100;

    // Clear Inputs For Login Form
    inputLoginUsername.value = inputLoginPin.value = "";


    // Calling UI
    updateUI(currentAccount);

})

//Transfer Money Section

btnTrasfer.addEventListener('click', function (e) {
    e.preventDefault();
    const amount = Number(inputTransferAmount.value);
    const receiverAccount =
        accounts.find(acc => acc.username === inputTransferTo.value)

    inputTransferTo.value = inputTransferAmount.value = "";

    if (amount > 0 &&
        receiverAccount &&
        currentAccount.balance > amount &&
        receiverAccount.username !== currentAccount.username) {

        currentAccount.movements.push(-amount);
        receiverAccount.movements.push(amount);

        updateUI(currentAccount);

    }

});

// Closing Account

btnClose.addEventListener("click", function (e) {
    e.preventDefault();

    if (
        inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin

    ) {
    const index = accounts.findIndex(
        acc => acc.username === currentAccount.username
    )

    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
}
inputCloseUsername.value = inputClosePin.value = "";
});

//Loan Request
btnLoan.addEventListener("click",function(e){
    e.preventDefault();
    const amount = Math.floor(inputLoanAmount.value);
    if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)){
        currentAccount.movements.push(amount)
        updateUI(currentAccount)
        inputLoanAmount.value ="";
    }
})