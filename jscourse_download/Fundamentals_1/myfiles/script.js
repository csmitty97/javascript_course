/*let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda"

console.log(firstName);
console.log(firstName);
console.log(firstName);

//Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';

let job1 = 'programmer';
let job2 = 'teacher';


console.log(myFirstJob);
*/

/* Practice Assessment 1

let country = "United States";
let continent = "North America";
let population = "337"
console.log(country);
console.log(continent);
console.log(population);
*/

/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

//console.log(typeof true);
console.log(typeof javascriptIsFun);
//console.log(typeof 23);
//console.log(typeof "Jonas");

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
*/
/*
let age = 30;
age = 31;

const birthYear = 1991;
//birthYear = 1990;
//const job;

var job = 'programmer';
job = 'teacher';

lastName = 'Schmedtmann';
console.log(lastName);
*/
/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2*2*2

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + ' ' + lastName);

// Assignment Operators
let x = 10 + 5; // x=15
x += 10; // x = x + 10 = 25
x *= 4; // x = x*4 = 100
x++; // x=x+1 = 101
x--; //  x=x-1 = 100
x--; // x=x-1 = 99
console.log(x);

// Comparison Operators
console.log(ageJonas > ageSarah); //  >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
*/
/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;  // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/

//CODING CHALLENGE 1//
/*
//Test Data 1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const johnBMI = massJohn / heightJohn ** 2;
const markBMI = massMark / (heightMark * heightMark);
const markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI);

*/
/*
//Test Data 2
let massMark = 95;
let heightMark = 1.88;
let massJohn = 85;
let heightJohn = 1.76;

const markBMI = (massMark / heightMark ** 2);
const johnBMI = (massJohn / heightJohn ** 2);
console.log('Johns BMI is ', johnBMI, 'and Marks BMI is ', markBMI);

const markHigherBMI = (markBMI > johnBMI);
console.log(markHigherBMI);
*/
/*
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);
*/
/*
const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving license 🎁');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years.`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/

//CODING CHALLENGE 1//
/*
//Test Data 1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const johnBMI = massJohn / heightJohn ** 2;
const markBMI = massMark / (heightMark * heightMark);

if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI}) !`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than (${markBMI}) !`);
}

*//*
//Test Data 2
let massMark = 95;
let heightMark = 1.88;
let massJohn = 85;
let heightJohn = 1.76;

const markBMI = (massMark / heightMark ** 2);
const johnBMI = (massJohn / heightJohn ** 2);
console.log('Johns BMI is ', johnBMI, 'and Marks BMI is ', markBMI);

if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI}) !`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than (${markBMI}) !`);
}
*/
/*
// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion
console.log('I am ' + 23 + ' years old.'); // = I am 23 years old.
console.log('23' + '10' + 3); // = 10
// - * and / change strings into numbers
console.log('hello' / 'neighbor'); // = NaN

let n = '1' + 1; // = 11
n = n - 1; // 11 - 1 = 10
console.log(n);

2 + 3 + 4 + '5' // = 95

'10' - '4' - '3' -2 + '5' // 15
*/

// 5 falsy values: 0, '', undefined, null, NaN
/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if (money) {
    console.log("Don't spend it all ;)"); // returns if money is > 0 OR < 0;
}
else {
    console.log('You should get a job.');  //returns if money = 0
}

let height = 0;
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is undefined');  //a bug b/c 0 is "undefined" but is totally valid and unaccounted for
}
*/
/*
const age = '18';
if (age === 18) console.log('You just became an adult! (strict)');  // === returns a true/false value; must be exact
if (age == 18) console.log('You just became an adult! (loose)');// == performs type coercion so '18' == 18 is true

const favorite = Number(prompt("What is your favorite number?"));
console.log(favorite);  //used 23 when prompted for example
console.log(typeof favorite);

if (favorite === 23) {  // '23' == 23 True  '23' === 23 False
    console.log('Cool! 23 is an amazing number!')
}
else if (favorite === 7) {
    console.log('7 is a cool number')
}
else if (favorite === 9) {
    console.log('9 is also a cool number')
}
else {
    console.log('Number is not 23 or 7 or 9')
}

if (favorite !== 23) console.log('Why not 23?'); // !== means "different from" 
// !== is strict and != is loose  always use strict version for everything
*/

/*
const hasDriversLicense = true; // variable A
const hasGoodVision = true; // variable B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

/*if (hasDriversLicense && hasGoodVision) {
    console.log('Sarah is able to drive!')
} else {
    console.log('Someone else should drive.');
}

const isTired = true;  // variable C

console.log(isTired);
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!')
} else {
    console.log('Someone else should drive.');
}
*/

/*
// CODING CHALLENGE 3
const dolphinsGameOne = 96;
const dolphinsGameTwo = 108;
const dolphinsGameThree = 89;
const dolphinsAverage = (dolphinsGameOne + dolphinsGameTwo + dolphinsGameThree) / 3;
console.log('The Dolphins team average is ', (dolphinsAverage));

const koalasGameOne = 88;
const koalasGameTwo = 95;
const koalasGameThree = 110;
const koalasAverage = (koalasGameOne + koalasGameTwo + koalasGameThree) / 3;
console.log('The Koalas team average is ', (koalasAverage));

if (dolphinsAverage > koalasAverage) {
    console.log('The Dolphins have a higher score than the Koalas');
} else if (koalasAverage > dolphinsAverage) {
    console.log('The Koalas have a higher score than the Dolphins')
} else {
    console.log('Looks like yall got the same score, huh? Thats wild. lmao')
}

if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
    console.log('The Dolphins win the trophy!')
} else if (koalasAverage > dolphinsAverage && koalasAverage >= 100) {
    console.log('The Koalas win the trophy!')
} else if (dolphinsAverage === koalasAverage && dolphinsAverage >= 100 && koalasAverage > 100) {
    console.log('We have a draw!');
}
else {
    console.log('Scores are less than 100.....No one wins the trophy....Yall bad.')
}
*/

/*
const day = 'thursday';

switch (day) {
    case 'monday':   // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup'); // breaks make it stop reading results
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples'); //wednesday and thursday will have same result
        break;
    case 'friday':
        console.log('Records videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day!');
}



if (day === 'monday') {
    console.log("Plan course structure");
} else if (day === 'tuesday') {
    console.log("Prepare theory videos");
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend! :D');
} else {
    console.log('Not a valid day!');
}
*/

/*
3 + 4 // = an expression.   EXPRESSIONS PRODUCE VALUES
1991 // expression
true && false && !false // expression

if (23 > 10) {
    const str = '23 is bigger';  //no values produced.  Only a variable called str
}

console.log(`I'm ${2037 - 1991} years old.`); // this is an expression
console.log(`I'm ${2037 - 1991} years old ${str}`) //doesn't work because const str isn't a complete expression.
*/

/*
// TERNARY CONDITIONAL OPERATOR
const age = 22;
age >= 18 ? console.log(`I like to drink wine.`) :
    console.log(`I like to drink water.`);

const drink = age >= 18 ? 'wine!' : `water!`;
console.log(drink);
// SHORTER VERSION FOR BELOW!

let drink2;
if (age >= 18) {
    drink2 = `wine!`;
} else {
    drink2 = `water!`;
}
console.log(drink2);

console.log(`I like to drink ${drink}`);
console.log(`I like to drink ${age >= 18 ? 'wine!' : `water!`}`)
*/

/*
// CODING CHALLENGE 4
const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * .15 : bill * .20

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value was ${bill + tip},!`);
*/