'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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

const displayMovement = function (movements, sort = false) {
  containerMovements.innerHTML = ''; // deletes old deposits/withdrawals
  //innerHTML similar to text content

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
        <div class="movements__row">
          <div class="movements__type 
          movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__value">${mov}</div>
        </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => (acc += mov), 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => (acc -= mov), 0);
  labelSumOut.textContent = `${out}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, mov) => (acc += mov), 0);
  labelSumInterest.textContent = `${interest}€`;
};

// adding username for each account based on lower case initials
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
  displayMovement(acc.movements);
  // Display Balance
  calcDisplayBalance(acc);
  // Display Summary
  calcDisplaySummary(acc);
};

// Event Handlers
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent Form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  // checks for account username before looking at pin
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and Welcome message
    labelWelcome.textContent = `Welcome Back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear Input Fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  // clears out transfer inputs after use
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    //Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);

    // Delete Account // splicing at index and only 1 method
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

// make sorted false and then allow it to switch back and forth continuously
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovement(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/*
let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE METHOD
console.log(arr.slice(2)); // [c d e]
console.log(arr.slice(2, 4)); // [c d]
console.log(arr.slice(-2)); //[d e]
console.log(arr.slice(-1)); // [e]
console.log(arr.slice(1, -2)); // [b c]
console.log(arr.slice()); // [a b c d e]
console.log([...arr]); // [a b c d e]

// SPLICE METHOD
console.log(arr.splice(2)); // [c d e]
console.log(arr); // a b  /// splice deleted c d e
console.log(arr.splice(-1)); // b
console.log(arr); // a

// REVERSE METHOD
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); // [f g h i j]
console.log(arr2); // [f g h i j]

// CONCAT METHOD
const letters = arr.concat(arr2);
console.log(letters); // [a b c d e f g h i j]
console.log([...arr, ...arr2]); // [a b c d e f g h i j]

// JOIN METHOD
console.log(letters.join(' - ')); // a-b-c-d-e-f-g-h-i-j
*/

////////////////////////////////////////////////
/*
// AT METHOD
const arr = [23, 11, 64];
console.log(arr[0]); //23
console.log(arr.at(0)); //23

console.log(arr[arr.length - 1]); // 3-1 will be 64 as array is zero based
console.log(arr.slice(-1)[0]); //  64
console.log(arr.at(-1)); // 64

console.log('jonas'.at(0)); // j
console.log('jonas'.at(-1)); //s
*/

/////////////////////////////// BRUCE /////////////////////////////////
// FOREACH METHOD
// You can not break out of a foreach loop
// if you need to break out of a loop, use for of loop
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`); // absolute value
  }
}

/////////////////////////////////// BRUCE ///////////////////////////

console.log('------FOREACH------');
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`); // absolute value
  }
});
// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...
*/

//////////////////////////////////////////////
// FOREACH W/ MAPS AND SETS
/*
// Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${_}: ${value}`);
  // forEach on sets make value = key bc sets don't have values.
  // _ is a throw away variable
});
*/

// Data Transformations
// Maps - multiply array * 2 = get array where each value is doubled
// Filter - filter out say, values > 2
// Reduce - reduce an array down to a single value (adding all values together)

///////////////////// Coding Challenge 1 ////////////////////
/*
//Step 1

//Test Data 1
//let juliaData = [3, 5, 2, 12, 7];
//const kateData = [4, 1, 15, 8, 3];

// Test Data 2
let juliaData = [9, 16, 6, 8, 3];
const kateData = [10, 5, 6, 1, 4];

const checkDogs = function () {
  juliaData = juliaData.slice(1, -2);
  console.log(juliaData);

  // Step 2
  const allData = juliaData.concat(kateData);
  console.log(allData);

  // Step 3
  allData.forEach(function (all, i, arr) {
    const dog =
      all >= 3
        ? `Dog number ${i + 1} is an adult and is ${all} years old.`
        : `Dog number ${i + 1} is still a puppy`;
    console.log(dog);

    //if (all >= 3) {
    // console.log(`Dog number ${i + 1} is an adult and is ${all} years old.`);
    //} else {
    //   console.log(`Dog number ${i + 1} is still a puppy`);
    // }
  });
};

checkDogs();


///////////////////////////////////////////
// The Map Method

const eurToUsd = 1.1;

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//const movementsUSD = movements.map(function (mov) {
// return mov * eurToUsd;
//});

//is same as arrow function below

const movementsUSD = movements.map(mov => {
  return mov * eurToUsd;
});

console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'}  ${Math.abs(
      mov
    )}`
);
console.log(movementsDescriptions);*/

//////////////////////////////////////////
// Filter Method
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Deposits
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements); // full array
console.log(deposits); // filters out all negative values

// or use for of loop

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

// Withdrawals
const withdrawals = movements.filter(mov => mov < 0); // filters out positive values
console.log(withdrawals);
*/

/////////////////////////////////////////////
// Reduce Method
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

// first parameter is called the accumulator
// accumulator -> SNOWBALL
// specify 0 at the end to say we want to start adding at 0
//const balance = movements.reduce(function (acc, cur, i, arr) {
// console.log(`Iteration ${i}: ${acc}`);
// return acc + cur;
//}, 0);
const balance = movements.reduce((acc, cur) => (acc += cur), 0);
console.log(balance); // 3840

let balance2 = 0;
for (const mov of movements) balance2 += mov; // 3840
console.log(balance2);

// Maximum value of array
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);
*/

///////////////////// Coding Challenge 2 ////////////////////////
/*
//let testData1 = [5, 2, 3, 1, 15, 8, 3];
//let testData2 = [16, 6, 10, 5, 6, 1, 4];

//Step 1
const calcAverageHumanAge = function (ages) {
  const humanAge = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));

  //Step 2- filter
  const adults = humanAge.filter(age => age > 18);
  console.log(humanAge);
  console.log(adults);

  // Step 3 - Reduce
  const average = adults.reduce(
    (acc, ages) => (acc += ages / adults.length),
    0
  );
  console.log(average);
  return average;
};

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(`${avg1} and ${avg2}`);
*/

/////////////////////////////////////////////////
// Chaining Methods
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;
console.log(movements);
// PIPELINE
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    return mov * eurToUsd;
  })
  // .map(mov => mov *eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);
*/

////////////////////////////// Coding Challenge 3 ///////////////
/*
//const calcAverageHumanAge = function (ages) {
//const humanAge = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));

//const adults = humanAge.filter(age => age > 18);

//const average = adults.reduce(
//  (acc, ages) => (acc += ages / adults.length),
//  0
// );

// return average;
//};

//const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
//const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

const calcAverageHumanAge = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, ages, i, arr) => acc + ages / arr.length, 0);

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(`${avg1} and ${avg2}`);
*/

//////////////////////////////////////////////
// Find Method
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// returns first withdrawals of mov < 0
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(firstWithdrawal); // -400

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

for (const acc of accounts) {
  console.log(account.owner);
}
*/

////////////////////////////////////////////////////
// Some and Every
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);
// Equality
console.log(movements.includes(-130));

// Some Condition
console.log(movements.some(mov => mov === -130)); // true
//checks if there is some value about condition
const anyDeposits = movements.some(mov => mov > 5000); // false
console.log(anyDeposits);

// Every
// only if every method passes through
console.log(movements.every(mov => mov > 0)); // false
console.log(account4.movements.every(mov => mov > 0)); // true

// Separate Callback
const deposit = mov => mov > 0;
console.log(movements.every(deposit)); // false
console.log(account4.movements.every(deposit)); //true
console.log(movements.filter(deposit)); // filters out and returns positive movements
*/

//////////////////////////////
// flat and flatMap
/*
//flat flattens array into 1 array
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat()); // [1,2,3,4,5,6,7,8]

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat()); // [array(2),3,4, array(2), 7,8]

// second level of nesting
console.log(arrDeep.flat(2)); // [1,2,3,4,5,6,7,8]
const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements); // nested arrays of all movements in all accounts

const allMovements = accountMovements.flat();
console.log(allMovements); // single array of all movements of all accounts

const overallBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

//flatMap
//flatMap only goes one level deep; if it goes deeper than 1 level, use flat
const overallBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance2);
*/

///////////////////////////////////////
// Sorting Arrays
/*
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort()); // sorts from A-Z
console.log(owners); // stays A-Z after sorting

// Numbers
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);
//console.log(movements.sort());
// numbers are alphabetically ordered as strings

// return < 0, A, B (keep order)
// return > 0, B, A (switch order)

// ASCENDING
//movements.sort((a, b) => {
/// if (a > b) return 1;
// if (a < b) return -1;
//});
//console.log(movements);

// OR

movements.sort((a, b) => a - b);
console.log(movements);

// DESCENDING
// flip the return numbers
//movements.sort((a, b) => {
//if (a > b) return -1;
// if (a < b) return 1;
//});

// OR

movements.sort((a, b) => b - a);
console.log(movements);
*/

///////////////////////////////////////
// Creating and Filling Arrays
/*
const arr = [1, 2, 3, 4, 5, 6, 7];
// OR
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// Empty Arrays + Fill Method
const x = new Array(7); // creates array with 7 empty elements
//console.log(x);
// cannot fill new Array with map method
// same result
//console.log(x.map(() => 5));

// FILL

x.fill(1);
console.log(x); // [1,1,1,1,1,1,1]

x.fill(1, 3, 5);
console.log(x);

// fill with 23 at position 2 to 6
arr.fill(23, 2, 6);
console.log(arr);

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y); // [1,1,1,1,1,1,1]

// _ because we do not need that argument placement
const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z); // [1,2,3,4,5,6,7]

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );

  console.log(movementsUI);

  const movementsUI2 = [...document.querySelectorAll('.movements__value')];
  console.log(movementsUI2);
});
*/
// TO MUTATE ORIGINAL ARRAY:
// add to original - .push(end) or .unshift(start)
// remove from original - .pop(end) or .shift(start) or .splice(any)
//
// others: - .reverse or .sort or .fill

// A NEW ARRAY
// computed from original - .map (loop)
// filtered using condition -.filter
// portion of original - .slice
// adding original to other: .concat
// flattening the original - .flat or .flatMap

// AN ARRAY INDEX
// based of value - .indexOf
// based on test condition - .findIndex

// AN ARRAY ELEMENT
// based on test condition - .find

// KNOW IF AN ARRAY INCLUDES...
// based on value: - .includes
// based on test condition: .some or .every

//A NEW STRING
// based on separator string: .join

// TO TRANSFORM VALUE:
//based on accumulator: .reduce

// TO JUST LOOP ARRAY
// based on callback: .forEach

/////////////////////////////////////////
// ARRAY METHODS PRACTICE
/*
// Example 1
const bankDepositSum = accounts
  .flatMap(acc => acc.movements) // getting all movements in one array
  .filter(mov => mov > 0) // filter all positive movements
  .reduce((sum, cur) => sum + cur, 0); // add up all positive movements to one value
console.log(bankDepositSum); // 25180

// Example 2
// counting number of movements over 1000

//const numDeposits1000 = accounts
// .flatMap(acc => acc.movements)
// .filter(mov => mov >= 1000).length;

//OR

const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? count : ++count), 0);

console.log(numDeposits1000); // 6

// Prefixed ++ operator
//let a = 10;
//console.log(++a);
//console.log(a++);
//console.log(++a);

// Example 3
// calculating all deposits and all withdrawls
const { deposits, withdrawals } = accounts // sums below is accumulator
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      //cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(deposits, withdrawals);

// Example 4
// create function to convert any string to titlecase : all words are capitalized except for certain ones

// this is a nice title > This Is a Nice title
const converTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);

  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word =>
      exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(' ');
  return capitalize(titleCase);
};
console.log(converTitleCase('this is a nice title'));
console.log(converTitleCase('this is a LONG title but not too long'));
console.log(converTitleCase('and here is another title with an EXAMPLE'));
*/

//////////////////////// CODING CHALLENGE 4 ///////////
/*
// Test Data:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// Step 1
dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
//console.log(dogs);

// Step 2
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);
console.log(
  `Sarah's dog is eating ${
    dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'
  }`
);

// Step 3
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);

// Step 4
//"Matild and Alice and Bob's dogs eat too much!"
//"Sarah and John and Michael's dogs eat too little!"
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little`);

// Step 5
console.log(dogs.some(dog => dog.curFood === dog.recFood));

// Step 6
// current > (recommended )
const checkEatingOkay = dog =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

console.log(dogs.some(checkEatingOkay));

// Step 7
console.log(dogs.filter(checkEatingOkay));

// Step 8
const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);
*/
