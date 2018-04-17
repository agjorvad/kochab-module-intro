const numberModule = require('./number-module'); //import a number
const numberArray = require('./number-array'); //import an array
const addinator = require('./addinator'); //import a function
const creature = require('./creature'); // import a class
const multipleThings = require('./multiple-things'); // import an object
console.log(multipleThings.mantisShrimp);
const killerWhale = new creature('killer whale', 'Scary');
console.log(killerWhale);

console.log(numberModule);

// const numberArray = [2, 5, 2, 6, 8, 23, 89];


// function addinator(array) {
//     let sum = 0;
//     array.forEach((number) => {
//         sum += number;
//     });
//     return sum;
// }

// console.log(addinator(numberArray));
// // function addinator(array) {
// //     let sum = 0;
// //     for (let i = 0; i < numberArray.length; i++) {
// //         sum += numbersArray[i]
//     }
// }


// Make addinator an arrow function
// const addinator = (array) => {
//     let sum = 0;
//     array.forEach((number) => {
//         sum += number;
//     });
//     return sum;
// };   //Needs a semicolon at the end because it is now an assignment due to the arrow function.

// create a killer whale (scary) creature
// log that creature

