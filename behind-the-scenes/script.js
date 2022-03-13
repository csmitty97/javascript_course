'use strict';

/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    //uses variable lookup in global scope for variables
    let output = `You are ${firstName}, born in ${birthYear}`;
    console.log(output);

    //block scope
    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'Steven';
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      //reassigning outer scopes variable
      output = 'New Output!';
    }
    //console.log(str);  // not defined
    //const/let variable are block scoped. only work inside block scope

    // var variables are function scoped.
    console.log(millenial);
    //add(2, 3); can only use in block as it is in block

    //redefined output variable inside of an inner scope
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);

// console.log(age);   not defined
//cannot access age variable bc it cannot access inner scope. age is in inner scope as it is a function inside a function
// printAge();  same for this function
*/
//-------------------------------------------------------------

/*
// Variables
console.log(me); // undefined as var is hoisted but to value of undefined
// console.log(job); // cannot access before initialization
// console.log(year);

var me = 'Caleb';
let job = 'teacher';
const year = 1991;

// Functions

// called function declaration before it was defined successfully
console.log(addDecl(2, 3));

//cannot access before initialization due to const variables and in the temporal dead zone
//console.log(addExpr(2, 3));
//console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

//variables declared with var will be hoisted and return undefined and thus cannot be functions as it will return "undefined(x,y);"

// Example

if (!numProducts) deleteShoppingCart();
//returned deleteShoppingCart because of var variable being undefined  if(!undefined)

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All Products Deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x); // will declare a property on global window property due to var variable
console.log(y === window.y);
console.log(z === window.z);
*/

/*
// THIS keyword

console.log(this);

// this keyword undefined here as it points to its own this keyword
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  //console.log(this);
};
calcAge(1991);

//arrow function does not get its own this keyword. uses this keyword in parent scope so uses global scope and points to window object
const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  //console.log(this);
};
calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge(1991); // returns 46

//this keyword will point at oject calling the method

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge(); // returns 20

const f = jonas.calcAge;
f(); // this keyword is undefined as year is not defined
// f is regular function call
*/

/*
const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    //console.log(this);
    //console.log(2037 - this.year);

    //  Solution 1
    //const self = this; // self or that
    //const isMillenial = function () {
    // console.log(self);
    //console.log(self.year >= 1981 && self.year <= 1996);
    // };
    // isMillenial();
    // },

    // Solution 2          // arrow function uses this keyword from parent scope which is 'Jonas'
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  //this keyword is window so "Hey undefined"
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
jonas.greet();
jonas.calcAge();

// Arguments keyword  (only exists in regular functions NOT ARROW FUNCTIONS)
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

const addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

addArrow(2, 5, 8);
*/

/*
let age = 30;
let oldAge = age;
age = 31;
console.log(age); // 31
console.log(oldAge); // 30

const me = {
  name: 'Jonas',
  age: 30,
};

// when copying an object and changing one aspect, you are changing that aspect in original object as well as both have same address
const friend = me;
friend.age = 27;
console.log('Friend:', friend);
console.log('Me', me);
*/

/*
// Primitive Types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference Types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);

//does not work as marriedJessica is now empty
//marriedJessica = {};

// Copying Objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);
// Last names are now changed but only works on first level.

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');
console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);
*/
