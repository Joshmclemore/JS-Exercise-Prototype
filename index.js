/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}
Person.prototype.eat = function(edible){
  if(this.stomach.length < 10){
    this.stomach.push(edible);
  }
}

Person.prototype.poop = function(){
  this.stomach = [];
}

Person.prototype.toString = function(){
  return `${this.name}, ${this.age}`;
}


// create some new people

const sallie = new Person ('Sallie', 26)
const mark = new Person ('Mark', 23)
const cori = new Person ('Cori', 25)

console.log(sallie.toString());
console.log(mark.toString());
console.log(cori.toString());

mark.eat('pizza');
mark.eat('spaghetti');
mark.eat('ramen');

console.log(mark.stomach);

mark.poop();

console.log(mark.stomach);


/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}

Car.prototype.fill = function(gallons){
  this.tank = this.tank + gallons;
}

Car.prototype.drive = function(distance){
  this.odometer = this.odometer + distance;
  this.tank = this.tank - (distance / this.milesPerGallon)};
  //My attempt at stretch 2 below - couldn't get it.
//   if((this.tank - (distance / this.milesPerGallon)) === 0){
//     return `I ran out of fuel at ${this.odometer} miles!`
//   } else if(this.tank - (distance / this.milesPerGallon) < 0){
//     return `I ran out of fuel at ${((this.tank + (distance / this.milesPerGallon)) * (this.odometer + distance)) / 10} miles!`
// } else {
//   return `Tank has ${this.tank} gallons left`
// } };

const hummer = new Car('Hummer', 5)

hummer.fill(5);
hummer.drive(20);
console.log('task 2', hummer);

// console.log('task 2, stretch 2: ', hummer.drive(30));

console.log()


/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name, age, favoriteToy) {
 Person.call(this, name, age);
 this.favoriteToy = favoriteToy;
}
Baby.prototype = Object.create(Person.prototype);

Baby.prototype.play = function() {
  return `Playing with ${this.favoriteToy}.`
}

const doug = new Baby('Doug', 1, 'car')

doug.eat('strawberry');
console.log('task 3a', doug);
console.log('task 3b', doug.play());
/* 
  TASK 4
  In your own words explain the four principles for the "this" keyword below:
  1. Within the global scope, the value of 'this' will be the window object.
  2. When a function is called by a preceding dot, the object left of the dot gets 'this'. Also known as, "implicit".
  3. New binding - 'this' refers to a specific instance of an object that is created and return by a constructor function
  4. Explicit binding - explicitling defining 'this' using the 'call' or 'apply' method
*/


///////// END OF CHALLENGE /////////

/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
  console.log('its working!');
  return 'bar';
}
foo();
module.exports = {
  foo,
  Person, 
  Car,
  Baby
}