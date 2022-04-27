'use strict';

/*
//////////////////////////////////////////
// Default Values
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  //numPassengers = numPassengers || 1;
  //price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
// cannot skip arguments so set it to undefined and it will be assigned the default value
createBooking('LH123', undefined, 1000);
*/

/*
const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 24739479284) {
    alert('Checked in');
  } else {
    alert('Wrong Passport!');
  }
};
//checkIn(flight, jonas);
//console.log(flight);
//console.log(jonas);

// Is same as doing...
//const flightNum = flight;
//const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};
// passing in person object and gets reflected in jonas
// pass jonas object into checkIn function and passport number is no longer the same as in checkIn function
newPassport(jonas);
checkIn(flight, jonas);
*/

/*
///////////////////////////////////////
// Functions Accepting Callback Functions
const oneWord = function (str) {           //gets rid of spaces and makes everything lowercase 
  return str.replace(/ /g, '').toLowerCase();
};
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' '); // splits first word from rest of phrase and makes first word Upper case
};
// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};
transformer('JavaScript is the best!', upperFirstWord); // Javascript is the best!
transformer('JavaScript is the best!', oneWord); //javascriptisthebest!


// JS uses callbacks all the time
const high5 = function () {
  console.log('👋');
};
document.body.addEventListener('click', high5);
['Jonas', 'Martha', 'Adam'].forEach(high5);`
*/

/*
///////////////////////////////////////////////
//Functions Returning Functions

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeterHey = greet('Hey'); //this value is a function

greeterHey('Jonas'); // Hey Jonas
greeterHey('Steven'); // Hey Steven

greet('Hello')('Jonas'); //Hello Jonas

//Challenge
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi')('Jonas');
*/

/////////////////////////////////////
// The Call and Apply Methods
/*
const lufthansa = {
  airline: 'Luftahansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

//Does not work
//book(23, 'Sarah Williams');

// Call Method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

// Apply Method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

// Apply method isn't used as much anymore because of spread operator...
book.call(swiss, ...flightData);

/////////////////////////////////////////////
// Bind Method
//book.call(eurowings, 23, 'Sarah Williams');
// use bind method to create function with this keyword
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23); // still needs passenger name
bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
// we need to pass a function through instead of calling a function so we bind lufthansa

// Partial Application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200)); // 220

// first argument for bind is this keyword but here is doesn't matter so null
const addVAT = addTax.bind(null, 0.23); // arguments are this keyword, rate
//addVAT = value => value+value * .23;

console.log(addVAT(100));
console.log(addVAT(23));

/// Challenge 2

const tax = function (rate) {
  return function (value) {
    console.log(`The total is ${value + value * rate}`);
    // OR return value + value * rate
  };
};
const total = tax(0.23);
total(100);
*/

///////////////////////// Coding Challenge 1 //////////////////////
/*
const poll = {
  question: 'What is your favorite programming language?',
  options: ['0: Javascript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0,0,0,0]
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // get answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);

    // register answer
    typeof answer === 'number' &&
      answer < this.options.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 6, 9, 6, 1] });
*/

//////////////////////////////////////////////////
// Invoked Function Expressions
/*
const runOnce = function () {
  console.log(`This will never run again`);
};
runOnce();

// IIFE   // used to execute a function only once.
(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})(); // the () at the end calls the function

//console.log(isPrivate);

(() => console.log('This will ALSO never run again'))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}
//console.log(isPrivate);  // does not work
console.log(notPrivate); //works bc of var
*/

//////////////////////////////////////////////////
// Closures
/*
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passenger(s).`);
  };
};

const booker = secureBooking();

// When running all three at the same time
booker(); // 1 passengers
booker(); // 2 passengers
booker(); // 3 passengers

console.dir(booker); // returns function itself

// passengerCount = 0 -> booker() is Closure

// Closure = closed over variable environment of the execution conext in which a function was created, even after execution context is gone.
// Close gives a function access to all variables of its parent function, even after that parent function has returned. The function keeps a reference to its outer scope, which preserves the scope chain throughout time.
// A closure makes sure that a function doesn't lose connection to variables that existed at the functions birth place.
// A closure is like a backpack that a function carries around wherever it goes. This backpack has all the variables that were present in the environment where the function was created.
// We do NOT have to create closures manually.  There is no way for us to explicitly access closed-over variables
*/

////////////////////////////////////////////
// More Closures
/*
// Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f(); // 46  // a variable is inside backpack of f function

// re-assigning f function
h();
f(); // 1554
console.dir(f); // closure has value of b

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);
  // 1000 miliseconds

  console.log(`Will start boarding in ${wait} seconds`);
};

//const perGroup = 1000; // does not use re-assignment.  closure has priority in scope
// number of passengers, and time waiting (in seconds) for logs
boardPassengers(180, 3);
*/

//////////////////////////// Coding Challenge 2 /////////////////////
/*
// changing header from red to blue when clicking body

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
    // closure allows the change in color.  original function is already executed and gone but variables are still accessible when creating the addEventhandler function to change the color.
  });
})();
*/
