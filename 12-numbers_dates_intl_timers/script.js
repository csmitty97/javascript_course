'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2022-04-10T17:01:17.194Z',
    '2022-04-12T23:36:17.929Z',
    '2022-04-15T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-08-05T16:33:06.386Z',
    '2022-04-12T14:43:26.374Z',
    '2022-04-10T18:49:59.371Z',
    '2022-04-15T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  //console.log(daysPassed);

  if (daysPassed === 0) return `Today`;
  if (daysPassed === 1) return `Yesterday`;
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    //const day = `${date.getDate()}`.padStart(2, 0);
    //const month = `${date.getMonth() + 1}`.padStart(2, 0);
    //const year = date.getFullYear();
    //return `${month}/${day}/${year}`;
    return new Intl.DateTimeFormat(locale).format(date);
  }
};

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMov = formatCur(mov, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    // In each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    // When time is at 0 seconds, stop timer and log out user
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = 0;
    }
    // Decrease 1s
    time--;
  };
  // Set Time to 5 minutes
  let time = 120;
  // Call timer every second
  tick();
  const timer = setInterval(tick, 1000);

  return timer;
};

///////////////////////////////////////
// Event handlers
let currentAccount, timer;

// FAKE ALWAYS LOGGED IN
//currentAccount = account1;
//updateUI(currentAccount);
//containerApp.style.opacity = 100;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  //console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Experimenting API
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric', // or long for "Sunday"
      month: 'numeric', // or long for "April"
      year: 'numeric',
      //weekday: 'long',
    };

    //const locale = navigator.language; // sets language to specific browser language
    //console.log(locale);

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // Create Current Date and Time
    //const now = new Date();
    //const day = `${now.getDate()}`.padStart(2, 0);
    //const month = `${now.getMonth() + 1}`.padStart(2, 0);
    //const year = now.getFullYear();
    //const hour = `${now.getHours()}`.padStart(2, 0);
    //const min = `${now.getMinutes()}`.padStart(2, 0);
    //labelDate.textContent = `${month}/${day}/${year}, ${hour}:${min}`;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Timer
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

    // Resetting Timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function () {
      // Add movement
      currentAccount.movements.push(amount);

      // Add Loan date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);
      clearInterval(timer);
      timer = startLogOutTimer();
    }, 2500);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

///////////// CONVERTING AND CHECKING NUMBERS
/*
console.log(23 === 23.0);

// Base 10 - represents numbers from 0 to 9.  1/10 = 0.1  3.10 = 3.33333
// Binary base 2 - represents numbers 0 and 1
console.log(0.1 + 0.2); //  .300000000004
console.log(0.1 + 0.2 === 0.3); // false

// Conversion
console.log(Number('23')); // 23
console.log(+'23'); // 23

// Parsing   - tries to get rid of unncessary symbols that aren't numbers
console.log(Number.parseInt('30px', 10)); // 30
console.log(Number.parseInt('e30', 10)); // NaN

// global functions
// ParseInteger
console.log(Number.parseInt('2.5rem')); // 2
//ParseFloat
console.log(Number.parseFloat('2.5rem')); // 2.5
//console.log(Number.parseFloat('   2.5rem   ')); // 2.5

// Checking if value is Not a Number
console.log(Number.isNaN(20)); // false
console.log(Number.isNaN('20')); // false
console.log(Number.isNaN(+'20X')); // true
console.log(Number.isNaN(23 / 0)); // false or Infinity

// best way in Checking if value is a number
console.log(Number.isFinite(20)); // true
console.log(Number.isFinite('20')); // false
console.log(Number.isFinite(+'20X')); // false
console.log(Number.isFinite(23 / 0)); // false  Infinity is not finite
console.log(Number.isInteger(23)); // true
console.log(Number.isInteger(23.0)); // true
console.log(Number.isInteger(23 / 0)); // false
*/

/////////////////////// Math and Rouding
/*
console.log(Math.sqrt(25)); // 5
console.log(25 ** (1 / 2)); // 5
console.log(8 ** (1 / 3)); // 2

console.log(Math.max(5, 18, 23, 11, 2)); // 23
console.log(Math.max(5, 18, '23', 11, 2)); // 23
console.log(Math.max(5, 18, '23px', 11, 2)); // NaN

console.log(Math.min(5, 18, 23, 11, 2)); //2

console.log(Math.PI * Number.parseFloat('10px') ** 2); // 314.159

console.log(Math.trunc(Math.random() * 6));

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
//console.log(randomInt(10, 20));

// Rounding Integers
console.log(Math.trunc(23.3)); // 23

console.log(Math.round(23.3)); //23
console.log(Math.round(23.9)); // 24

// ceil always rounds up
console.log(Math.ceil(23.3)); // 24
console.log(Math.ceil(23.9)); // 24

// floor always rounds down
console.log(Math.floor(23.3)); // 23
console.log(Math.floor(23.9)); // 23

console.log(Math.trunc(-23.3)); // - 23
console.log(Math.floor(-23.3)); // - 24

// Rounding Decimals
// toFixed will always return a string
console.log((2.7).toFixed(0)); // 3 ( string )
console.log((2.7).toFixed(3)); // 2.700 (string)
console.log((2.7).toFixed(2)); // 2.70 (string)
console.log(+(2.345).toFixed(2)); // 2.35 (Number)
*/

// The Remainder Operator
/*
console.log(5 % 2); // 1 bc 5/2 has remainder of 1   5 = 2 * 2 + 1
console.log(8 % 3); // 2     8/3 = 2.6666665  8 = 2 * 3 + 2
console.log(6 % 2); // 0   6/2 = 3 and is an integer number
console.log(7 % 2); // 1    3*2 = 6 + 1 = 7

const isEven = n => n % 2 === 0;
console.log(isEven(8)); // true
console.log(isEven(23)); // false
console.log(isEven(514)); // true

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    // 0, 2, 4, 6,...
    if (i % 2 === 0) row.style.backgroundColor = 'orangered';
    // 0, 3, 6, 9...
    if (i % 3 === 0) row.style.backgroundColor = 'blue';
  });
});
 // every Nth time
 */

// Numeric Separators
/*
// 287,460,000,000
const diameter = 287_460_000_000;
console.log(diameter);

const price = 345_99;
console.log(price);

const transferFee1 = 15_00; //1500
const transferFee2 = 1_500; //1500

const PI = 3.1415;
console.log(PI);

console.log(Number('230_000')); // NaN
console.log(parseInt('230_000')); // 230
*/

/////////////////// Working with BigInt
/*
// any integer larger than below is not safe and cannot be represented
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);

// n transforms regular number into BigInt number to display number accurately
console.log(80756468539764507657560859764n);
console.log(BigInt(8075646));

// Operations
console.log(10000n + 10000n); // 20000n

// Cannot mix BigInt with other types

// Exceptions
console.log(20n > 15); // true
console.log(20n === 20); // false
console.log(typeof 20n); // bigint
console.log(20n == 20); //true
console.log(20n == '20'); // true

// Cannot sqrt a bigInt number

// Divisions
console.log(10n / 3n); // 3 -  cuts off decimal part
*/

//////////////////////////////// Creating Dates
/*
// Create  a Date
const now = new Date();
console.log(now);

console.log(new Date('Apr 15 2022 23:49:39'));
console.log(new Date('December 24, 2015'));
console.log(new Date(account1.movementsDates[0]));
// ZERO BASED
console.log(new Date(2037, 10, 19, 15, 23, 5)); //Nov 19 2037 15:23:05
console.log(new Date(2037, 10, 31, 15, 23, 5)); // Dec 01 2037 15:23:05
//autocorrects to next day so bc november doesn't have 31 days, it goes to Dec 1st.
console.log(new Date(0));

// converting from days to miliseconds
console.log(new Date(3 * 24 * 60 * 60 * 1000));
// 3 days * 24 hours * 60 minutes * 60 seconds * 1000 miliseconds

//// Working with Dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear()); //2037
console.log(future.getMonth()); // 10
console.log(future.getDate()); // 19
console.log(future.getDay()); // 4
console.log(future.getHours()); //15
console.log(future.getMinutes()); //23
console.log(future.getSeconds()); //0
console.log(future.toISOString()); //2037-11-19T21:23:00.000Z
console.log(future.getTime()); // 2142278580000   time passed since date
console.log(new Date(2142278580000)); //Thu Nov 19 2037 15:23:00 GMT-0600 (Central Standard Time)

console.log(Date.now()); // gives timestamp for current Date

future.setFullYear(2040);
console.log(future);
*/

/////////////////// Operations with Dates
/*
const future = new Date(2037, 10, 19, 15, 23);
console.log(+future);

const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 24));

console.log(days1); // returns days passed between date1 and date2
*/

//////////////////////////// Internationalizing Numbers
/*
const num = 3884764.23;

const options1 = {
  style: 'currency',
  unit: 'celsius',
  currency: 'EUR',
  //useGrouping: false,
};

console.log('US: ', new Intl.NumberFormat('en-US', options1).format(num));
console.log('Germany: ', new Intl.NumberFormat('de-DE', options1).format(num));
console.log('Syria: ', new Intl.NumberFormat('ar-SY', options1).format(num));
console.log(
  'Broswer: ',
  new Intl.NumberFormat(navigator.language, options1).format(num)
);
*/

//////////////////////// Timers: setTimeout and setInterval
/*
// setTimeout
const ingredients = ['olives', 'achovies'];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}`),
  3000,
  ...ingredients
); // or 3 * 1000 pass in amount in miliseconds
console.log('Waiting...');

if (ingredients.includes('spinach')) clearTimeout(pizzaTimer); // cancels timer since it includes spinach

// setInterval
setInterval(function () {
  const now = new Date();
  console.log(now);
}, 1000);
*/
