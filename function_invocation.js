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
// function Button() {
//   this.clicked = false;
//   this.click = function() {
//     this.clicked = true;
//     assert(button.clicked, "the btn has been clicked");
//   };
// }
// var button = new Button();
// var elem = document.getElementById("btn");
// elem.addEventListener("click", button.click);

// function juggle() {
//   var result = 0;
//   for (var i = 0; i < arguments.length; i++) {
//     result += arguments[i];
//   }
//   this.result = result;
// }
// var ninja1 = {};
// var ninja2 = {};
// juggle.apply(ninja1, [1,2,3,4]);
// juggle.call(ninja2, 5,6,7,8);
// assert(ninja1.result === 10, "juggled via apply")
// assert(ninja2.result === 26, "juggled via call")


//Building a forEach function to demonstrate setting a function context
// function forEach(list, callback) {
//   for (var n = 0; n < list.length; n++) {
//     callback.call(list[n], n);
//   }
// }
// var weapons = [
//   {type: 'shuriken'},
//   {type: 'katana'},
//   {type: 'nunchucks'}
// ];
// forEach(weapons,function(index) {
//   assert(this === weapons[index], "Got the expected value of " + weapons[index].type)
// });
// var foods = [
//   {type: 'noodle'},
//   {type: 'friedRice'},
//   {type: 'hotpot'}
// ];

// function forEach(listofObj, callback) {
//   for (var i = 0; i < listofObj.length; i++) {
//     callback.call(listofObj[i], i);
//   }
// };
// forEach(foods, function(index) {
//   assert(this === foods[index], "the context is object: " + foods[index].type)
// })


//Arrow functions to work around callback function contexts
// function Button() {
//   this.clicked = false;
//   this.click = () => {
//     this.clicked = true;
//     assert(button.clicked, "the button has been clicked!");
//   }
// }
// var button = new Button();
// var elem = document.getElementById('btn');
// elem.addEventListener('click', button.click);


//Arrow functions and object literals
// assert(this === window, 'this is === window');
// var button = {
//   clicked : false,
//   click : () => {
//     this.clicked = true;
//     assert(button.clicked, 'the button has been clicked');
//     assert(this === window, 'the function context is the window');
//     assert(window.clicked, 'the click is store in the window');
//   }
// }
// var elem = document.getElementById('btn');
// elem.addEventListener('click', button.click);


//Using the bind method
// var button = {
//     clicked : false,
//     click : function() {
//       this.clicked = true;
//       assert(button.clicked, 'the button has been clicked');
//       assert(this === window, 'the function context is the window');
//       assert(window.clicked, 'the click is store in the window');
//     }
//   }
// var elem = document.getElementById('btn');
// elem.addEventListener('click', button.click.bind(button));
// var boundFunctions = button.click.bind(button);
// assert(boundFunctions != button.click, "calling bind creates a completely new function");


//Exercises
  //rest parameters
// function sum(...restArg) {
//   var sum = 0;
//   for (var i = 0; i < restArg.length; i++) {
//     sum += restArg[i];
//   }
//   return sum;
// }  
// assert(sum(1,2,3) === 6, "passing in 3 arg using rest parameter");

//Exercises 2
// function getSamurai(samurai) {
//   "use strict";
//   arguments[0] = "Ishida";
//   return samurai;
// }
// function getNinja(ninja) {
//   arguments[0] = "Fuma";
//   return ninja;
// }
// var samurai = getSamurai("Toyotomi");
// assert(samurai === "Toyotomi", "samurai is Toyotomi");
// var ninja = getNinja("Yoshi");
// assert(ninja === "Fuma", "ninja is Fuma");

//Exercise 3
// function whoAmI1() {
//   "use strict";
//   return this;
// }
// function whoAmI2() {
//   return this;
// }
// assert(whoAmI1() === window, "will not pass due to strict mode")
// assert(whoAmI2() === window, "will pass cause not in strict mode");

//Exercise 4
// var ninja1 = {
//   whoAmI : function() {
//     return this;
//   }
// }
// var ninja2 = {
//   whoAmI : ninja1.whoAmI
// }
// var identify = ninja2.whoAmI;
// assert(ninja1.whoAmI() === ninja1, "this will pass as a method of ninja1");
// assert(ninja2.whoAmI() === ninja1, "this will fail cause the func belongs to ninja2 obj now");
// assert(identify() === ninja1, "this fails cause the identity is assigned object ninja2");
// assert(ninja1.whoAmI.call(ninja2) === ninja2, "this passes cause we are using the function call method");
// console.log(ninja1.whoAmI.call(ninja2))

//Exercise 5
// function Ninja() {
//   this.whoAmI = () => this;
// }
// var ninja1 = new Ninja();
// var ninja2 = {
//   whoAmI: ninja1.whoAmI
// };
// assert(ninja1.whoAmI() === ninja1, 'this passes cause arrow funcs inherits its contexts');
// assert(ninja2.whoAmI() === ninja1, 'this do not pass cause of arrow function inheritance');

//Exercise 6
// function Ninja() {
//   this.whoAmI = function() {
//     return this;
//   }
// }
// var ninja1 = new Ninja();
// var ninja2 = {
//   whoAmI: ninja1.whoAmI
// };
// assert(ninja1.whoAmI() === ninja1, 'this passes cause arrow funcs inherits its contexts');
// assert(ninja2.whoAmI() === ninja2, 'this passes');


//Test
// var elem = document.getElementById("divBtn");
// elem.addEventListener("click", function() {
//   this.style.backgroundColor = "red";
// });












