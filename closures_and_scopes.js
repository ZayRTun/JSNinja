//A simple closure
// var outerValue = "ninja";
// function outerFunction() {
//   assert(outerValue === "ninja", "i can c the ninja");
// }
// outerFunction();
//Another complex example
// var outerValue = "samurai";
// var leter;

// function outerFunction() {
//   var innerValue = "ninja";

//   function innerFunction() {
//     assert(outerValue === "samurai", "i can c the samurai");
//     assert(innerValue === "ninja", "i can c the ninja");
//   }
//   later = innerFunction;    
// }
// outerFunction();
// later();


//Putting closures to work
//Using closures to approximate private variables
// function Ninja() {
//   var feints = 0;
//   this.getFeints = function() {
//     return feints;
//   };
//   this.feint = function() {
//     feints++;
//   }
// }
// var ninja1 = new Ninja();
// ninja1.feint();
// //this varifies that we cant get the variable directly
// assert(ninja1.feints === undefined, "the private data is inaccessible to us.");
// //we are able to change the private variable, even though we had no direct access to it.
// assert(ninja1.getFeints() === 1, "we r able to access the internal feint count.");

// var ninja2 = new Ninja();
// assert(ninja2.getFeints() === 0, "the 2nd ninja obj gets its own feints variable.");


//Using closures with callbacks
//using a closure in a timer interval callback
// function animateIt(elementId) {
//   var elem = document.getElementById(elementId);
//   var tick = 0;
//   var timer = setInterval(function() {
//     if (tick < 100) {
//       elem.style.left = elem.style.top = tick + "px";
//       tick++;
//     } else {
//       clearInterval(timer);
//       assert(tick === 100, "tick accessed via a closure.");
//       assert(elem, "element also accessed via a closure.");
//       assert(timer, "timer reference also obtained via a closure.");
//     }
//   }, 50);
// }
// animateIt("box1");
// animateIt("box2");


//Exploring how closures work
// function Ninja() {
//   var feints = 0;
//   this.getFeints = function() {
//     return feints;
//   };
//   this.feint = function() {
//     feints++;
//   }
// }
// var ninja1 = new Ninja();
// assert(ninja1.feints === undefined, "and the private data is inaccessible");
// ninja1.feint();
// assert(ninja1.getFeints() === 1, "we're able to access the inter feint count through getters");
// var ninja2 = new Ninja();
// assert(ninja2.getFeints() === 0, "the second ninja object gets its own feints variable");