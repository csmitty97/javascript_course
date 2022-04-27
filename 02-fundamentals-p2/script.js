/*
'use strict'; //helps us with errors

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive!");

//const interface = 'Audio';
// const private = 534;   Strict mode reserves these words for possible futures uses in JS code

*/
/*
//function name is logger
function logger() {
    console.log('My name is Caleb');
}

// Calling / Running / Invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');
*/

/*
//Function Declaration                can call a variable before function
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(1991);

// Function Expression                    can NOT call a variable before expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age1, age2);
*/

/*
//Arrow Function
const calcAge3 = birthYear => 2037 - birthYear;   // dont need {} and return happens implicity without calling for it explicitly.
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years.`
}

console.log(yearsUntilRetirement(1997, 'Caleb'));
console.log(yearsUntilRetirement(1980, 'Jonas'));
*/

/*
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangesPieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangesPieces} pieces of oranges.`;
    return juice;
}
console.log(fruitProcessor(2, 3));
*/

/*
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years.`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired.`);
        return -1;

    }

}
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));
*/

/*
// FUNCTION CODING CHALLENGE 1
// Data 1
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
let scoreDolphins = calcAverage(44, 93, 71);
let scoreKoalas = calcAverage(65, 54, 49);

console.log(`TEST DATA 1: The Dolphins average is ${scoreDolphins}, and the Koalas average is ${scoreKoalas}.`);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`The Dolphins win: ${avgDolphins} to ${avgKoalas}!! Congratulations fishies!`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`The Koalas win: ${avgKoalas} to ${avgDolphins}!! Congrats land mammals!!`);
    } else {
        console.log(`Sheesh. Looks like neither of yall got double the others score.  Do better. No one wins today.`);
    }
}
//call checkWinner function
checkWinner(scoreDolphins, scoreKoalas);


// Data 2
scoreDolphins = calcAverage(255, 54, 41);
scoreKoalas = calcAverage(23, 34, 47);
console.log(`TEST DATA 2: The Dolphins average is ${scoreDolphins}, and the Koalas average is ${scoreKoalas}.`);
checkWinner(scoreDolphins, scoreKoalas);

//checkWinner function is completely independent and can be used with different numbers
checkWinner(300, 230);
*/

/*
// ARRAYS
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);   // arrays are zero based
console.log(friends[2]);

console.log(friends.length);  // = 3 (not zero based) .length tells exact amount of elements in array
console.log(friends[friends.length - 1]); // .length not zero based so will take length and subtract 1 to get actual last element in array

//replacing elements in array
friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice'] cannot change array

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

//Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

console.log(calcAge(years));//cannot subtract a whole array.  cannot do operations with arrarys


const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
*/

/*
const friends = ['Michael', 'Steven', 'Peter'];

//Add elements
const newLength = friends.push('Jay');  // push is a function, adds Jay to end of array
console.log(friends);
console.log(newLength);

friends.unshift('John'); // unshift adds John to beginning of array and returns length
console.log(friends);

//Remove elements
friends.pop(); //Removes last element of array.  Removed Jay
const popped = friends.pop();  // Removed Peter
console.log(friends);
console.log(popped);

const lost = friends.shift(); //Removes first
console.log(friends);
console.log(lost);

console.log(friends.indexOf('Steven')); // returns zero based element of steven

friends.push(23);
console.log(friends.includes('Steven')); //returns T/F is parameter is included in array
console.log(friends.includes('Bob'));
console.log(friends.includes(23));  //Tests for strict string/number inclusion

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven');
}
*/


//ARRAYS - CODING CHALLENGE 2
/*
const calcTip = function (bill) {
    const tip = bill >= 50 && bill <= 300 ? bill * .15 : bill * .20;
    return tip;
}

const bills = [125, 555, 44];
console.log([bills]);


let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log([tips]);

let total = [(bills[0] + tips[0]), (bills[1] + tips[1]), (bills[bills.length - 1] + tips[tips.length - 1]),];
console.log([total]);

console.log(bills.length);
console.log([bills], [tips], [total]);
*/

/*
INTRODUCTION TO OBJECTS
         object
const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

const jonas = {  // has five keys and each key has a value
    // key       value
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
*/
// jonas is the object

// in objects, order of values does not matter when retrieving them.
// objects for unstructured data
// in array, order of values matters a lot
// arrays used for order


/*
// OBJECT EXAMPLE
const jonas = {
    // key       value
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);

console.log(jonas.lastName);  // example on retrieving an element of an object
console.log(jonas['lastName']); // retrieves lastName elemen
const nameKey = 'Name';
console.log(jonas['first' + nameKey]);  //  = firstName// returns first Name
console.log(jonas['last' + nameKey]); // = lastName  // returns last name

// console.log(jonas.'last' + nameKey)

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request! What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');
}

/*
jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);
* /

// CHALLENGE
// "JONAS" has "3" friends, and his best friend is called "MICHAEL"

/*
const jonas = {
    // key       value
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

// My Answer
console.log(jonas['firstName'], 'has', jonas.friends.length, 'friends, and his best friend is', jonas.friends[0]);

// Their Answer
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is ${jonas.friends[0]}`)
*/

/*
const jonas = {
    // key       value
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: false,

    //calcAge: function (birthYear) {   //any function attched to object is called a method
    //  return 2037 - birthYear
    //}


    //  calcAge: function () {
    // console.log(this);             // results with whole "jonas" object
    //      return 2037 - this.birthYear;  // calls to birthYear within object
    //  }

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a  ${this.calcAge()} year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`

    }


};

/*
const calcAge = function(birthYear) {        //function doesn't work as it is a declaration
    return 2037 - birthYear;
}
*/

//console.log(jonas.calcAge());

//console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);

/*
// CHALLENGE
// "Jonas is a 46 year old teacher, and he has a/no driver's license."
console.log(jonas.getSummary());
*/


/*
// CODING CHALLENGE 3
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        markBMI = this.mass / this.height ** 2
        return markBMI
    }
}
console.log(mark.calcBMI());

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        johnBMI = this.mass / this.height ** 2
        return johnBMI
    }
}
console.log(john.calcBMI());


if (mark.calcBMI() > john.calcBMI()) {
    console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${john.fullName} (${john.calcBMI()}). `);
} else if (john.calcBMI() > mark.calcBMI()) {
    console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${mark.fullName} (${mark.calcBMI()}) `);
} else {
    console.log(`It looks like ${mark.fullName} and ${john.fullName} have the same BMI (${john.calcBMI()}).`)
}
*/

// LOOPING

//console.log('Lifting weights repetition 1');
//console.log('Lifting weights repetition 1');
//console.log('Lifting weights repetition 1');
//console.log('Lifting weights repetition 1');
//console.log('Lifting weights repetition 1');
//console.log('Lifting weights repetition 1');
//console.log('Lifting weights repetition 1');
//console.log('Lifting weights repetition 1');
//console.log('Lifting weights repetition 1');
//console.log('Lifting weights repetition 1');

/*
// for loop keeps running while condition is TRUE
// for loops have 3 parts
//       variable    condition   counter

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}
*/
/*
const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];
const types = [];
// start for lopps with arrays at 0 because arrays are zero based
//make condition here less than 5 as array ends at 4 due to zero based

for (let i = 0; i < jonas.length; i++) {
    //Reading from jonas array
    console.log(jonas[i], typeof jonas[i]);

    //Filling types array
    //types[i] = typeof jonas[i];  OR
    types.push(typeof jonas[i]);  // (CLEANER)
}

console.log(types); //returns typeof for entire jonas array

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

//continue and break
console.log('------ONLY STRINGS-------')                      //back to jonas array example
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue;         // skips non strings and continues
    // if typeof jonas[i] isn't equal to string then continue

    console.log(jonas[i], typeof jonas[i]);
}


console.log('------BREAK WITH NUMBER-------')                      //back to jonas array example
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === 'number') break;                  // breaks/stops at first number
    // if typeof jonas[i] isn't equal to string then continue

    console.log(jonas[i], typeof jonas[i]);
}
*/
/*
console.log('hello');
const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

// 0, 1, ......, 4
// 4, 3, .......,0

//                                         Example 1  Decreasing Loop
//To decrease by 1
for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}

//                                      Example 2  Loop inside a loop
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`Starting Exercise ${exercise}---------------`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weights repetition ${rep}.`)
    }
}
*/
//   
/*                                              While Loops
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}
// This bottom loop will run only while the top loop is true
let rep = 1;
while (rep <= 10) {
    console.log(`WHILE:  Lifting weights repetition ${rep}`);
    rep++;
}
*/
/*
let rep = 1;
while (rep <= 10) {
    //console.log(`WHILE:  Lifting weights repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;     //Math.trunc changes decimals to whole numbers

while (dice !== 6) {
    console.log(`You rolled a ${dice}.`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end....');
}
*/

/*
// CODING CHALLENGE 4

const calcTip = function (bill) {
    const tip = bill >= 50 && bill <= 300 ? bill * .15 : bill * .20;
    return tip;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];


for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);


// CALCULATING AVERAGE OF AN ARRAY
const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        //sum = sum + arr[i];
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));

*/
