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
function ninja() {
  return this;
}
function samurai() {
  "use strict";
  return this;
}
assert(ninja() === window, "Assert A: in a nonstrict mode ninja function the context is the global window object");
assert(samurai() === undefined, "Assert B: in a strict mode samurai function the context is not the global window object, its undefined");























