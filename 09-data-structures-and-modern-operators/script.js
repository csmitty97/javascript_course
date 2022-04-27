'use strict';

const weekdays = ['mon', 'tues', 'wed', 'thur', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for a later exercise

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 Enhanced Object Literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}!`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}!`
    );
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/*
////////////////////////////////////////////
// String Methods Practice

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

//console.log(flights.split('+'));

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  //console.log(type);
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(40);
  console.log(output);
}
*/

/*
/////////////////////////////////////////////////////
// Working With Strings Part 3

console.log('a+very+nice+string'.split('+')); // turns string into an array
// [a, very, nice, string]
console.log('Jonas Schmedtmann'.split(' ')); // [Jonas, Schmedtmann]

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' '); //turns array into string
console.log(newName); // Mr. Jonas SCHMEDTMANN

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }

  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedtmann');

// Padding
const message = 'Go to gate 23!';
// we want string to be 25 characters and we want to pad string in the beginning with +
console.log(message.padStart(25, '+')); // +++++++++++Go to gate 23!
console.log(message.padEnd(25, '+')); // Go to gate 23!+++++++++++
console.log(message.padStart(25, '+').padEnd(30, '+')); // +++++++++++Go to gate 23!+++++

const maskCreditCard = function (number) {
  const str = number + ''; // turn number into string same as String(number);
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(64637836)); // ****7836
console.log(maskCreditCard(4334846386467384));
console.log(maskCreditCard('334859493847755774747'));

// Repeat
const message2 = 'Bad weather... All Departures Delayed... ';
console.log(message2.repeat(5)); //repeats string 5 times

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
};

planesInLine(5);
planesInLine(3);
planesInLine(12);
*/
/*

//////////////////////////////////////////////////////////
//  Working with Strings Part 2
const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase()); // transforms string to lower case
console.log(airline.toUpperCase()); // transforms string to upper case

// Fix Capitalization in name
const passenger = 'jOnAs'; // should look like Jonas
const passengerLower = passenger.toLowerCase(); // jonas

const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing Emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';

//const lowerEmail = loginEmail.toLowerCase();
//const trimmedEmail = lowerEmail.trim(); // trim gets rid of all empty spaces
// trimStart and trimEnd for removing empty space in only beginning/end
//console.log(trimmedEmail);
// OR
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail); // should be true

// replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate')); // only replaced first occurence
console.log(announcement.replaceAll('door', 'gate')); // replaces all instances
console.log(announcement.replace(/door/g, 'gate')); // also replaces all instances

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320')); //true
console.log(plane.includes('Boeing')); // false
console.log(plane.startsWith('Air')); // true

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
}

// Practice Exercise
//  CASE SENSITIVE
const checkBaggage = function (items) {
  const baggage = itemstoLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome Aboard');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and a camera');
checkBaggage('Got some snacks and a gun for protection.');
*/
/*
///////////////////////////////////////////////////////////
//  Working with Strings Part 1

// Strings are zero based
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]); // A
console.log(plane[1]); // 3
console.log(plane[2]); // 2
console.log('B737'[0]); // B

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r')); // 6  - first instance of r
console.log(airline.lastIndexOf('r')); //10  -last instance of r
console.log(airline.indexOf('portugal')); // -1  case sensitive so can't be found
console.log(airline.indexOf('Portugal')); // 8

// SLICE is position at which extraction will start
console.log(airline.slice(4)); // Air Portugal = sub string (part of original str)
console.log(airline.slice(4, 7)); // Air  /stops extracting at 7 position

console.log(airline.slice(0, airline.indexOf(' '))); // TAP
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Portugal / +1 bc of space
console.log(airline.slice(-2)); // al  / extract from end when using negative
console.log(airline.slice(1, -1)); // AP Air Portuga

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat.');
  else console.log('You got lucky!');
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('jonas'));
console.log(typeof new String('jonas')); // object
console.log(typeof new String('jonas').slice(1)); // string
*/

///////////////////////////////////// NOTES ////////////////////////////////
// Arrays vs Sets

// Use ARRAYS when needing ordered lists of values (may contain duplicates) or to manipulate data
// Use SETS when working with unique values or when high performance is really important.   (Removes Duplicates)

// Objects vs Maps

// OBJECTS are easier to write and access values with . and [].  (More traditional key/value store) use OBJECTS when you need functions as values
// MAPS are easy to iterate/ easy to compute size / keys can have any data type and have better performance.  Use maps when you need to map keys to values

/*
/////////////////////////////////////////////////
//  Map Iterations

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct!'],
  [false, 'Try Again.'],
]);
console.log(question);

// Convert Object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz App
console.log(question.get('question'));

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
//const answer = Number(prompt('Your Answer'));
const answer = 3;
console.log(answer);

console.log(question.get(question.get('correct') === answer));

// Convert Map to Array
console.log([...question]);
console.log(question.entries());
console.log(question.keys());
console.log(question.values());
*/
/*
///////////////////////////////////////////////////////////
//  Maps
// data structures to use to map values to keys
// data is stored in key value pairs in maps (like objects)

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

// or chain all sets together
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

console.log(rest.get('name')); // Classico Italiano
console.log(rest.get(true)); // We are open
console.log(rest.get(1)); // Firenze, Italy

const time = 21;
// if we are at 21 hours (9pm), then we are open.  (between 11 and 23 hours)
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);

//rest.set([1, 2], 'Test');
const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
//rest.clear();
console.log(rest.size);

//console.log(rest.get([1, 2]));  // undefined  not same as rest.set([1,2], 'Test')
console.log(rest.get(arr));
*/
/*
/////////////////////////////////////////////////
// Sets
// similar to an array
const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(orderSet); // pasta, pizza, risotto  //duplicates are gone

console.log(new Set('Jonas')); // 'j' 'o' 'n' 'a' 's'
console.log(orderSet.size); // 3
console.log(orderSet.has('Pizza')); // returns boolean value checking if value is in set
console.log(orderSet.has('Bread'));
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread'); // only adds garlic bread once
orderSet.delete('Risotto'); // deletes risotto
//orderSet.clear();  clears entire set

console.log(orderSet);
// cannot use array value to retreive value as there are no indexes in sets

for (const order of orderSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)]; // returns set as an array
console.log(staffUnique);
console.log(new Set(staff).size);
*/
/*
///////////////////////////////////////////////
//  Looping Objects
// Property Names
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);
// Property Values
const values = Object.values(openingHours);
console.log(values);

// Entries object
const entries = Object.entries(openingHours);
console.log(entries);

// destructuring
// [key, value]
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}.`);
}
*/
/*
//////////////////////////////////////////////////
// Optional Chaining
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon.open);  //error open is undefined

// WITH optional chaining
//only if property before ? exists, (not null/undefined) then it will be read, else undefined will be read
console.log(restaurant.openingHours.mon?.open); // undefined because of (mon)
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ['mon', 'tues', 'wed', 'thur', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed'; // nullish coalescing operator needed
  console.log(`On ${day}, we open at ${open}.`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
//const users = [];
console.log(users[0]?.name ?? 'User array empty');

if (users.length > 0) console.log(users[0].name);
else console.log('user array empty');

// Normally use nullish coalescing operator along with optional chaining
*/
/*
//////////////////////////////////////////
// For of loop
// loop over entire array
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const item of menu.entries()) {
//console.log(`${item[0] + 1}: ${item[1]}`);
}

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

// console.log([...menu.entries()]);
*/
/*
/////////////////////////////////////////////////
// AND / OR assignment operators
const rest1 = {
  name: 'Capri',
  //numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// OR assignment operator
//rest1.numGuests = rest1.numGuests || 10;
//rest2.numGuests = rest2.numGuests || 10;
//rest1.numGuests ||= 10;
//rest2.numGuests ||= 10;

// nullish assignment operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignment operator
//rest1.owner = rest1.owner && '<ANONYMOUS>';
//rest2.owner = rest2.owner && '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1); // returned name, numGuests = 20
console.log(rest2); // returned name, owner, numGuests = 10
*/

/*
////////////////////////////////////////////////////////////
// Nullish Coalescing Operator
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish: null and undefined  (NOT 0 or '')
// ?? works with nullish values. we need 0 as a value for this example
// so returns 0 ( or empty strings if presented) instead of null or undefined

const guestCorrect = restaurant.numGuests ?? 10; //
console.log(guestCorrect);
*/

/*
/////////////////////////////////////////////////////////
// Short Circuiting ( && and ||)

console.log('---- OR ------');
// Use ANY data type, return ANY data type, short-circuiting
//short circuits when first value is truthy
// returns truthy value
console.log(3 || 'Jonas'); // 3
console.log('' || 'Jonas'); // 'Jonas'
console.log(true || 0); // true
console.log(undefined || null); // null  bc undefined is first falsy

console.log(undefined || 0 || '' || 'Hello' || 23 || null); // 'Hello' bc it is first value that is truthy

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1); // returns 10 if numGuests is undefined

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('----- AND ----'); // AND operator short circuits when first value is falsy and returns that falsy value without evaluating second operand
// short circuits when first value is false
//completely opposite with OR operator
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'Jonas'); // null is first falsy value

// Practical Example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
*/

/*
///////////////////////////////////////////////////////////
// REST

// 1) Destructuring

// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); // 1 ,2, [3,4,5]

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu, //did not produce name of skipped food but create array of all food after last food called (risotto)
];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  console.log(numbers);
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
// Compresses arguments (REST)
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');
*/

///////////////////////////////////////////
/*
// Spread Operator
// spread operator takes all elements from array and doesn't create new variables
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr); // same as next line
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy Array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 Arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);

// Real-World Example
const ingredients = [
  //prompt(`Let's make pasta! Ingredient 1?`),
  //prompt(`Let's make pasta! Ingredient 2?`),
  // prompt(`Let's make pasta! Ingredient 3?`),
];
console.log(ingredients);
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/
/*
////////////////////////////////////////////////////
// Destructuring Objects
restaurant.orderDelivery({
  time: '23:30',
  address: 'Via Del Sol, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});


const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default Values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating Variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

// Mutating a = 111, b = 999 into a = 23, b = 7
({ a, b } = obj);
console.log(a, b);

// Nested Objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/
/*
//////////////////////////////////////////////////
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

// taking elements out of categories array.
// follows order of elements
// leaving a hole in destructuring skips second element and the second element becomes the third element
//const [first, , second] = restaurant.categories;
//console.log(first, second);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//Switching Variables

// switch vegetarian and italian placement
// create a temporary variable
//const temp = main;
//main = secondary;
//secondary = temp;
//console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, 'and', mainCourse);

// Nested Destructuring
const nested = [2, 4, [5, 6]];
//const [i, , j] = nested;
//console.log(i, j);     //returns 2, [5,6]
const [i, , [j, k]] = nested;
console.log(i, j, k); // returns 2 5 6

// Default Values
// setting default values to all variables so that none can be undefined
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

*/

/*
////////////////////     CODING CHALLENGE 1    /////////////////////////////

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
*/
/*
// Step 1
const [players1, players2] = game.players;
console.log(players1, players2);

// Step 2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// Step 3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// Step 4
const players1Final = [...players1, 'Thiago ', 'Coutinho ', 'Perisic'];
console.log([players1Final]);

// Step 5
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

//Step 6

const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
  console.log(players);
};

//printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
//printGoals('Davies', 'Muller');
printGoals(...game.scored);

// Step 7
team1 < team2 && console.log('Team 1 is more likely to win.');
team1 > team2 && console.log('Team 2 is more likely to win.');
team1 === team2 && console.log('Game likely to end in a draw!');
*/

///////////////////////////  Coding Challenge 2  //////////////////////
/*
// Step 1
const scored = [...game.scored];

for (const [i, player] of scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

// Step 2
let average = 0;
const odds = Object.values(game.odds);
// average = average (0) + odd (game.odd[0] )     creates sum of all odds
// average = sum of averages divided by length of odds (30)
for (const odd of odds) average += odd;
average /= odds.length;
console.log(`The average odd is ${average}.`);

// Step 3
for (const [team, odd] of Object.entries(game.odds)) {
  //ternary operator used
  // string = if team is equal to game.odds.x then draw, else victory for teams
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

//console.log(`Odd of victory ${game.team1}: ${game.odds.team1} `);
//console.log(`Odd of draw: ${game.odds.x}`);
//console.log(`Odd of victory ${game.team2}: ${game.odds.team2}`);

// Bonus
// I didn't get this one
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
*/

///////////////////////////// CODING CHALLENGE 3 /////////////////////////////
/*
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// Step 1  (use sets)

const events = [...new Set(gameEvents.values())];

console.log(events);

// Step 2
gameEvents.delete(64);

// Step 3
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minuets`
);
const time = [...gameEvents.keys()].pop();
// removing final key from set and storing it in 'time' variable
console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

// Step 4
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'First' : 'Second';
  console.log(`[${half} Half] ${min}: ${event}`);
}
}
*/

/*
//////////////////////// CODING CHALLENGE 4  //////////////////////////////

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n'); // text splits between and creates new line

  // loop for all test data first and second words
  //convert to lowerCase, empty spaces and split words
  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    //console.log(row, first, second);

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});
*/
