'use strict';

// OOP (Object Oriented Programming)

// Classes = blueprints (methods that need filled)
// Instances = info that fills those classes

// the 4 fundamental OOP principles

// ABSTRACTION  - ignore/hide details that don't matter/ overview perspective of what we're implementing

// ENCAPSULATION - keeping properties/methods private inside the class so not accessible from outside the class.  Some methods can be exposed as a (API)

// INHERITANCE - One class inheriting another class as a parent/child class relationship.  EX: Admin(child class) has same properties/methods as User(parent class) class with some additions. Done to reuse logic.

// POLYMORPHISM - a child class can overwrite a method it inherited from a parent class
////////////////////////////////////////////////////////
// Classical OOP: Classes -> Instances
// Using classes to create an instance = instantiation

// OOP in JavaScript: Prototypes
// Prototypes contains methods
// Prototypal inheritance: caontains methods that are accessible to all objects linked to that prototype

// Objects are linked to a prototype object
// Behavior is delegated to the linked prototype object
/*
const num = [1, 2, 3];
console.log(num.map(v => v * 2)); // (3)[2,4,6]
*/
////////////////////////////////////////////////

// 3 Ways of Implementing Prototypal Inheritance in JS

// 1) Constructor Functions -
// Technique to create objects from a function.
// This is how built in objects like Maps/Arrays/Sets are implemented

// 2) ES6 Classes
// Layer of abstraction over construction functions
// Do not behave like classes in classical OOP
// Better Syntax

// 3) Object.create()
// Easiest and most straightforward way of linking object to a prototypal object

///////// Constructor Functions and a new Operator
/*
const Person = function (firstName, birthYear) {
  //console.log(this); // Person {}

  // Instance Properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never Create a method inside a constructor function
  //this.calcAge = function () {
  // console.log(2037 - this.birthYear);
  //};
};

const jonas = new Person('Jonas', 1991);
console.log(jonas); // Person {firstName: 'Jonas', birthYear: 1991}

// 1. New empty object is created
// 2. Function is called, this(keyword) = {} (object)
// 3. {} linked to prototype
// 4. function automatically returns {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(jonas instanceof Person); // true
const jay = 'Jay';
console.log(jay instanceof Person); //

Person.hey = function () {
  console.log('Hey there!');
  console.log(this);
};
Person.hey();

/*
// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge(); // 46
matilda.calcAge(); // 20
jack.calcAge(); // 62

console.log(jonas.__proto__ === Person.prototype); // true

console.log(Person.prototype.isPrototypeOf(jonas)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false

Person.prototype.species = 'Homo Sapiens';
console.log(jonas, matilda);
console.log(jonas.species, matilda.species); // Homo Sapiens Homo Sapiens

console.log(jonas.hasOwnProperty('firstName')); // true
console.log(jonas.hasOwnProperty('species')); // false

// this allows us to call the calcAge function thats stored in the prototype without having to store it in every object in order to not hinder performance or have repeat code.

console.log(jonas.__proto__);
// Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor); // Person(firstName, birthYear)

const arr = [3, 6, 6, 9, 4, 5, 6, 9, 3]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype); // true

console.log(arr.__proto__.__proto__);
console.log(arr.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);

//////////////////////////////////////////////////////// Coding Challenge 1

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

// Data 1: 'BMW' 120km/h
// Data 2: 'Mercedes' 95km/h

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
bmw.brake();

mercedes.accelerate();
mercedes.brake();
mercedes.brake();
*/

///////////////// ES6 Classes
/*
// class expression
//const PersonCl = class {};

// class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // Methods will be add to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    console.log(name);
    // add underscore to avoid naming conflict when using same name in constructor function
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static Method
  static hey() {
    console.log('Hey there!');
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype); // true

//PersonCl.prototype.greet = function () {
//console.log(`Hey ${this.firstName}`);
//};

jessica.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens  - can pass return them from functions
// 3. Classes are executed in strict mode

const walter = new PersonCl('Walter White', 1965);

// Static Method example
PersonCl.hey();

const account = {
  owner: 'jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);

// Object.create

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();
console.log(steven);

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();
*/

/////////////////////////////// Coding Challenge 2
/*
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  get speedUS() {
    return this.speed / 1.6; // returns speed in mi/h units
  }

  set speedUS(speed) {
    this.speed = speed * 1.6; // returns speed in km/h units
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speedUS}`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speedUS}`);
  }
}

const ford = new CarCl('Ford', 120);

ford.accelerate();
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);
*/

// Inheritance
/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  // How to call an inherited class
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking Prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student); // true
console.log(mike instanceof Person); // true bc of linked prototypes
Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
*/

///////////////////////////////////////////// Coding Challenge 3
/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `Tesla going at ${this.speed}km/h, with a charge of ${this.charge}%`
  );
};

EV.prototype.brake = function () {
  this.speed -= 5;
  this.charge;
  console.log(
    `Tesla going at ${this.speed}km/h, with a charge of ${this.charge}%`
  );
};

const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);

tesla.brake();
tesla.accelerate();
tesla.accelerate();

tesla.accelerate();
tesla.brake();
*/

/////////////////////////////////// Inheritance bt ES6 Classes
/*
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    console.log(name);
    // add underscore to avoid naming conflict when using same name in constructor function
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
  // Static Method
  static hey() {
    console.log(`Hey There!`);
  }
}

// link prototypes behind the scenes
class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // constructor function of parent class
    // Always needs to happen first in order to call this keyword
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  // Overriding calcAge method
  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      } years old.`
    );
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();
*/

////////////////////////////////////// Inheritance bt classes: Object.create
/*
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();
*/

/////////////////////////// More Class Examples
/*
// 1) Public Fields
// 2) Private Fields
// 3) Public Methods
// 4) Private Methods
// (there is also the static version)

class Account {
  // 1) Public fields (instances)
  locale = navigator.language;

  // 2) Private fields (instances) - syntax(#) makes it private
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // Protected Property
    this.#pin = pin;
    //this._movements = [];
    //this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }
  // 3) Public Methods
  //Public Interface of Objects
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan Approved`);
      return this;
    }
  }

  // 4) Private Methods
  // #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }

  static helper() {
    console.log('Helper');
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
const acc2 = new Account('Caleb', 'US', 1234);

//acc1._movements.push(250);
//acc1._movements.push(-140);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
//acc1.approveLoan(1000);

console.log(acc1);
//console.log(acc1.pin);
// Correct way to get movements
console.log(acc1.getMovements());

// Cannot access these as they are private fields
//console.log(acc1.#movements);
//console.log(acc1.#pin);
//console.log(acc1.#approveLoan(100));

Account.helper();

////////////////////////////////////////// Chaining Methods

acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());
*/

////////////////////////////////////////////////////// Coding Challenge 4
/*
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6; // returns speed in mi/h units
  }

  set speedUS(speed) {
    this.speed = speed * 1.6; // returns speed in km/h units
  }
}

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `Rivian is going at ${this.speed}km/h, with a charge of ${this.#charge}%`
    );
    return this;
  }
}

// Data Car 1: 'Rivian' going at 120km/h, with a charge of 23%
const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);

rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .accelerate();

console.log(rivian.speedUS);
*/
