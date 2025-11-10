// Electricity bill calculation

// let unit = Number(prompt("What is the total number of units:"));
// let amount = 0;

// if(unit > 400){
//   amount = (unit - 400) * 13;
//   unit = 400;
// }

// if(unit > 200 && unit <=400){
//   amount += (unit - 200) * 8;
//   unit = 200;
// }

// if(unit >100 && unit <= 200){
//   amount += (unit - 100) * 6;
//   unit = 100;
// }

// if(unit > 0 && unit <= 100){
//   amount += unit * 4.2;
// }

// console.log("Final bill amount is Rs" + amount)
// console.log(unit)




// INR DENOMINATION QUESTION

// let amount = Number(prompt("Enter the amount that u want to calculate total no. of notes for: "))

// if(amount >= 500){
//   console.log("Total number of Rs 500 Notes are :", Math.floor(amount/500)); // it will give total no of notes used to make that amount or close to it
//   amount = amount % 500; // it will give the remaining amount 
// }

// if(amount >= 200 && amount < 500){
//   console.log("Total number of Rs 200 notes are :", Math.floor(amount/200));
//   amount = amount % 200; 
// }

// if(amount >= 100 && amount < 200){
//   console.log("Total number of Rs 100 notes are :", Math.floor(amount/100));
//   amount = amount % 100;
// }

// if(amount >= 50 && amount < 100){
//   console.log("Total no. of Rs 50 notes are :", Math.floor(amount/50));
//   amount = amount % 50;
// }

// if(amount >= 20 && amount < 50){
//   console.log("Total number of rs 20 notes are :",Math.floor(amount/20));
//   amount = amount % 20;
// }

// if(amount >= 10 && amount < 20){
//   console.log("Total number of rs 10 coins are :", Math.floor(amount/10));
//   amount = amount % 10;
// }

// if(amount >= 5 && amount < 10){
//   console.log("Total number of rs 5 coins are:", Math.floor(amount/5));
//   amount = amount % 5;
// }

// if(amount >= 2 && amount < 5){
//   console.log("Total number of rs 2 coins are :", Math.floor(amount/2));
//   amount = amount % 2;
// }

// if(amount >= 1 && amount < 2){
//   console.log("Total number of rs 1 coins are :",1);
//   console.log("Amount becomes zero")
// }


//switch case

// 


// switch (true) {
//   case 12<13:
//     console.log("hey")
//     break;

//   case 14> 1:
//     console.log("bdusb")
//     break;

//   default: console.log("invalid")
//     break;
// }


let num = 0.1 + 0.2;

switch (true) {
  case (num - 0.3) < Number.EPSILON:
    console.log("equal")
    break;

  case 0.4:
    console.log("hey")
    break;


  default: console.log("Namste")
    break;
}

// js mein 0.1 + 0.2 is not eqqual to 0.3 it is 0.300000000000000004 bcoz computer ese hi store krta h 
//jab do numbers ke beech ka differece Number.EPSILON se chota ho jaata h tab hm unhe equal maan lete h 

// isiliye yahn pr hmne ese use kiya h 
// number.epsilon boht chota number hota h yeh eke special constant h in js