// sum of n natural numbers

// var pr = prompt("Enter the no.:");

// if (pr === null) {
//   console.log("cancelled");
// } else {
//   let n = Number(pr);

//   if (isNaN(n)) {
//     console.log("Invalid input");
//   } else {
//     if (n <= 0) {
//       console.log("Number should be positive and greater than zero");
//     } else {
//       var sum = 0;
//       for (var i = 1; i <= n; i++) {
//         sum = sum + i;
//       }
//       console.log(sum);
//     }
//   }
// }

// understand what is sum += i

// factorial of a number

// let pr = prompt("which number factorial u want:");

// if (pr === null) {
//   console.log("cancelled");
// } else {
//   let n = Number(pr);
//   if (isNaN(n)) {
//     console.log("Invalid Input");
//   } else if (n === 0) {
//     console.log("The factorial is zero");
//   } else if (n < 0) {
//     console.log("Nuber should be greater than zero");
//   } else {
//     var fac = 1;
//     for (let i = n; i >= 1; i--) {
//       fac = fac * i;
//     }
//     console.log(fac);
//   }
// }

// Factors of a number means n%i === 0

// let pr = prompt("Enter a no. for which u want factors");

// if (pr === null) {
//   console.log("Cancelled");
// } else {
//   let n = Number(pr);
//   if (isNaN(n)) {
//     console.log("give a number");
//   } else {
//     if (n > 0) {
//       for (var i = 1; i < Math.floor(n / 2); i++) {
//         if (n % i === 0) {
//           console.log(i);
//         }
//       }
//       console.log(n);
//     } else {
//       console.log("Number should be greater than zero");
//     }
//   }
// }

// for prime number loop chalaya from 2 to number ke half tak bcoz kisi ke bhi factors uske half tak hi rhte h i.e from 2 to n/2
// Now ek variable bna liya ki isPrime = true; now loop run kara ab jis pr bhi n%i === 0 aa gya this means uska factor h between 2 to its half and at that point uske aage loop nhi chalan bcoz performance affect hogi phir isliye tabhi break krdiya and loop ke bahr console.log krdiya

// let n= Number(prompt("Enter a number that u want to check whether prime or not"))

// if(n>0){
//   console.log(isPrime(n))

// }else{
//   console.log("Number should be greater than zero")
// }

// function isPrime(num){
//   if(num <= 1) return false;
//   if(num === 2) return true;  // only even prime number
//   if(num % 2 === 0) return false; // all even numbers are not prime except 2
//   // now for odd
//   // for odd run a condition
//   for( var i = 3; i <= Math.floor(Math.sqrt(num)); i+=2){
//     if(n%i === 0){
//       return false;
//     }
//   }
//   return true;
// }

// for(var i =1; i<= 11; i++){
//   if(i === 4) continue; // except 4 everything will print ;
//   else console.log(i)
// }

// var i =1;
// while(i<24){
//   if(i === 18){
//     i++;
//     continue;
//   }else{
//     console.log(i);
//   }
//   i++;
// }

// var ans = prompt("jab tak inpiut do jab tak exit nhi dete ")
// while( ans !== "exit"){
//    ans = prompt("keep going")
// }
// console.log("finally")

// sum of digits

// var ans = prompt("Enter the number whose digits u want to add:");
// if (ans === null) {
//   console.log("Cancelled");
// } else {
//   var n = Number(ans)
//   if (isNaN(n)) {
//     console.log("give valid input a number");
//   } else if (n > 0) {
//     console.log(`Number is ${n}`)
//     var sum = 0;
//     var rem = 0;

//     while (n > 0) {
//       rem = n % 10;
//       sum = sum + rem;
//       n = Math.floor(n / 10);
//     }
//     console.log(`sum of this no. is ${sum}`);
//   } else {
//     console.log("Number should be gretaer than zero");
//   }
// }

// reversing a number

// var n = Number(prompt("enter the number to be reversed:"));

// var rem = 0;
// var rev = 0;
// while(n > 0){
//   rem = n%10;
//   rev = rev*10 + rem;
//   n = Math.floor(n/10)
// }

// console.log(`reversed number is ${rev}`)

// Strong Number

// var n = Number(
//   prompt("Enter a number to check whether it is a strong number or not:")
// );

// var sum = 0;
// var copy = n;
// var rem = 0;
// while (n > 0) {

//   var fact = 1;
//   rem = n % 10; // will give the last digit

//   // factorial of that digit
//   for (i = 1; i <= rem; i++) {
//     fact = fact * i;
//   }

//   // add it sum
//   sum = sum + fact;

//   // remove the last digit for next iteration
//   n = Math.floor(n / 10);
// }
// console.log(sum);

// if (copy === sum) {
//   console.log(`It is a strong number bcz ${copy} is equal to sum : ${sum}`);
// } else {
//   console.log("Not a strong number");
// }

// GUESS THE NUMBER USING DO WHILE LOOP

// let n = Math.floor(Math.random() * 100) + 1;

// let guess = 0;
// let t = 1;
// while (guess !== n && t<6) {
//   guess = Number(prompt("Guess the number"));

//   if (isNaN(guess) || guess < 1 || guess > 99) {
//     console.log(
//       "try again cannot be a sentence or a word or greater than 99 or less than 1"
//     );
//     break;
//   }
//     if (guess < n) {
//       console.log("too low . Try again");
//     } else if (guess > n) {
//       console.log("too high...");
//     } else {
//       console.log("Congrats this was the number");
//     }

//     t++;

//     if(guess !== n && t>5){
//       console.log("You are out of turns . You lost...")
//     }
// }

// CALCULATOR

// var a = Number(prompt("Give 1st number"));
// var b = Number(prompt("Give 2nd Number"));
// var n = Number(
//   prompt(
//     `Give operator : 1 is plus , 2 is substract , 3 is multiply, 4 is divide`
//   )
// );

// if (n > 4 || n < 1) {
//   console.log(
//     "Give operator : 1 is plus , 2 is substract , 3 is multiply, 4 is divide"
//   );
// } else if (a < 1 || b < 1) {
//   console.log("a and b should be greater than zero");
// } else {
//   if (n === 1) {
//     console.log(`addition of ${a} and ${b} is ${a + b}`);
//   } else if (n === 2) {
//     console.log(` substraction of ${a} and ${b} is ${a - b}`);
//   } else if (n === 3) {
//     console.log(`Multiplication of ${a} and ${b} is ${a * b}`);
//   } else if (n === 4) {
//     console.log(`divide of ${a} and ${b} is ${a / b}`);
//   } else {
//     console.log("give number between 1-4");
//   }
// }

let a = Number(prompt("Give 1st number:"));
let b = Number(prompt("Give 2nd number:"));
let n = Number(prompt("Give operator(1 for +, 2 for - , 3 for *, 4 for / )"))

// check validation for string and negative numbers
if( a<=0 || b<=0 || isNaN(a) || isNaN(b)){
  console.log("Give a proper number and it should be greater than zero");
}else if(isNaN(n) || n<1 || n>4){
  console.log("Give the given operator numbers (1 for +, 2 for - , 3 for *, 4 for / )")
}else{

  //object table for operators their names and their function
  const operations = {
    1: {name:"addition" , fn: (x,y) => x+y},
    2: {name: "substraction", fn: (x,y) => x-y},
    3: {name: "Multiplication", fn: (x,y) => x*y},
    4: {name: "Division" , fn: (x,y) => x/y},
  }

  //Now we will destructure according to the value given in n 
  const {name, fn}  = operations[n]

  //now show it in console and execute the function accordingly(js will do it)
  console.log(`${name} of ${a} and ${b} is ${fn(a,b)}`)


  const again = prompt("Do u want to reload your program Yes/No")
  if(again.toLowerCase() === "yes"){
    location.reload() // reloads the page
  }else{
    console.log("okay goodbye")
  }

}
