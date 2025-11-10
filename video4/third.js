// console.log("Hello")
// console.log("World")

//  process.stdout.write("Heloo")
//  process.stdout.write("Heloo")


// let prompt = require('prompt-sync')();

// let a = prompt("ENter a number");
// process.stdout.write(a);

// let n = prompt("enter a number")

// for(let i =1; i<=n ; i++){
//   process.stdout.write("* ")
  
// }

// let n = prompt("enetr a number")

// square of stars
// for(let i = 1; i<=n ; i++){

//   // 1st loop 
//   for(let j= 1; j<=n; j++){
//     process.stdout.write("* ")
//   }
//   console.log() // for changing line
// }

// print right angle triangle
// for(let i =1; i<= n; i++){
//   for(let j =1; j<=i; j++){
//     process.stdout.write("* ")
//   }
//   console.log()
// }

// RIGHT ANGLE TRAINGLE BUT WITH NUMBERS
// let prompt = require("prompt-sync")();

// let n = prompt("Enter the number:")

// for(let i =1; i<=n; i++){

//   for(let j= 1; j<= i; j++){
//     process.stdout.write(` ${j}`) // j + " "
//   }
//   console.log()

// }

// RIGHT ANGLE TRIANGLE WITH ALPHABETS. A=65 ; B=66, C= 67, D=68, E=69
// let prompt = require('prompt-sync')();

// let n = prompt("Enter the number")

// for(let i=1; i<=n; i++){

//   let ascii = 65;
//   for(let j=1; j<=i; j++){
//     process.stdout.write(String.fromCharCode(ascii) + " ")
//     ascii++;
//   }

//   console.log()
// }

// INVERTED RIGHT ANGLE TRIANGLE
// let prompt = require("prompt-sync")();

// let n = prompt("Enter a number")

// for(let i = 1 ; i<= n; i++){
//   for(let j = n; j>=i ; j--){
//     process.stdout.write("* ")
//   }
//   console.log()
// }



// MIRROR RIGHT ANGLE TRIANGLE
// let prompt = require("prompt-sync")();

// let n = prompt("Enter a number");

// for(let i = 1; i<=n; i++){

//   // 1st Loop
//   for(let j=n-1 ; j>=i; j--){
//     process.stdout.write("  ")
//   }

//   // 2nd Loop
//   for(let j=1; j<=i; j++){
//     process.stdout.write("* ")
//   }
//   console.log() // for line change after every outer loop iteration
// }


// X PATTERN
// let prompt = require("prompt-sync")();

// let n = Number(prompt("enter a number"))

// for(let i =1; i<=n; i++){

//   //inner columns
//   for(let j=1; j<=n; j++){
//     if(i == j || (i+j == n + 1)) process.stdout.write("* ")
//     else process.stdout.write("  ")
//   }
//   console.log()
// }


// V pattern
// let prompt = require("prompt-sync")();

// let n = prompt("ENter a number");

// // run loop
// for(let i=1 ; i<=n; i++){
//   //inner loop
//   for(let j=1; j<= 2*n; j++){
//     if(i ===j || i+j === 2*n) process.stdout.write("*")
//     else process.stdout.write("  ")
//   }
//   console.log()
// }

// PYRAMID PATTERN
let prompt = require("prompt-sync")();

let n = Number(prompt("Enter a number"));

for (let i = 1; i <= n; i++) {
  // spaces
  for (let j = 1; j <= n - i; j++) {
    process.stdout.write(" ");
  }
  // stars
  for (let k = 1; k <= 2 * i - 1; k++) {
    process.stdout.write("*");
  }
  console.log();
}
