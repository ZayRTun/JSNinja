//Arguments Parameters
// function whatever(a, b, c) {
//   assert(a === 1, 'The value of a is 1');
//   assert(b === 2, 'the value of b is 2');
//   assert(c === 3, 'the value of c is 3');
//   assert(arguments.length === 5, "Passed in 5 parameters");
//   assert(arguments[0] === 1, 'arg 0 is a');
//   assert(arguments[4] === 5, 'arg 4 is 5');
// }
// whatever(1,2,3,4,5);


//Sum all function arguments
// function sum () {
//   var sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   return sum;
// }
// assert(sum(1, 2) === 3, 'adding two numbers');
// assert(sum(1, 2, 3) === 6, 'adding three numbers');
// assert(sum(1, 2, 3, 4) === 10, 'adding 4 numbers');


//Sum all function arguments using the RestParameter
// function sum(a, ...restArgs) {
//   for (let i = 0; i < restArgs.length; i++) {
//     a += restArgs[i];
//   }
//   return a;
// }
// assert(sum(1, 2) === 3, 'adding two numbers');
// assert(sum(1, 2, 3) === 6, 'adding three numbers');
// assert(sum(4, 2, 3, 4) === 13, 'adding 4 numbers');


//function Arguments Aliases function arguments
// "use strict";
// function infiltrate(person) {
//   assert(person === 'gardener', 'ther person is a gardener using strict');
//   assert(arguments[0] === 'gardener', 'arguments[0] is a gardener');

//   arguments[0] = 'ninja';
//   assert(person === 'ninja', 'ther person is a ninja now');
//   assert(arguments[0] === 'ninja', 'arguments[0] is a ninja now');

//   person = 'gardener';
//   assert(person === 'gardener', 'the person is a gardener again');
//   assert(arguments[0] === 'ninja', 'arguments[0] is still a ninja using strict mode');
// }
// infiltrate('gardener');


//Invocation as a function
// function ninja() {
//   return this;
// }
// function samurai() {
//   "use strict";
//   return this;
// }
// assert(ninja() === window, "Assert A: in a nonstrict mode ninja function the context is the global window object");
// assert(samurai() === undefined, "Assert B: in a strict mode samurai function the context is not the global window object, its undefined");


//Invocation as a method
// var ninja = {};
// ninja.skulk = function() {return this};
// assert(ninja.skulk() === ninja, "contaxt is ninja object");

// function whatsMyContext() {
//   return this;
// }
// assert(whatsMyContext() === window, "function call on window");

// var getMyThis = whatsMyContext;
// assert(getMyThis() === window, "another func call in window");

// var ninja1 = {
//   getMyThis: whatsMyContext
// };
// assert(ninja1.getMyThis() === ninja1, "working with 1st ninja");

// var ninja2 = {
//   getMyThis: whatsMyContext
// };
// assert(ninja2.getMyThis() === ninja2, "working with 2nd ninja");


//Invoking function as a constructor **
// function Ninja() {
//   this.skulk = function() {
//     return this;
//   };
//   return 1;
// }
// var ninja1 = new Ninja();
// var ninja2 = new Ninja();
// assert(ninja1.skulk() === ninja1, '1st ninja is skulking');
// assert(ninja2.skulk() === ninja2, "2nd ninja is skulking too")
// assert(Ninja() === 1, "calling the func as function")
// assert(typeof ninja1 === 'object', 'ninja1 is an object')

// var puppet = {
//   rules: false
// };
// function Emperor() {
//   this.rules = true;
//   return puppet;
// }
// var emperor = new Emperor();
// assert(emperor === puppet, "the emp is a puppet");
// assert(emperor.rules === false, "the puppet does not know how to rule");


//Invocation with apply and call





















