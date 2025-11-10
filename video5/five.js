// MASTERING ARRAYS

// PUSH IN ARRAY THROUGH PROMPT
// let prompt = require("prompt-sync")();
// let arr = new Array(5);

// for(let i=1; i<=arr.length ; i++){
//   let n = prompt("Enter anything")
//   arr.push(n);
// }
// console.log(arr);
// so this was wrong bcoz array length is not fixed each time u push an element it gets added to the back of array and length keeps on increasing 

// let prompt = require("prompt-sync")();
// let arr = new Array(5);

// for(let i = 0; i< arr.length; i++){
//   arr[i] = prompt("Enter a number:");
// }

// console.log(arr)



// sum of array in a element 

// let prompt = require("prompt-sync")();
// let arr = new Array(5)

// let sum = 0;

// for(let i = 0; i < arr.length; i++ ){
//    arr[i] = Number(prompt("ENter a number"))
//    sum = sum + arr[i];
// }
// console.log(arr)
// console.log(sum)

// find maximum of the element of an array

// let arr = [23,45,67,23,87,34,67,100]
// let max = 0
// for(let i=0; i< arr.length; i++){
//   if(arr[i]> max)
//   max = arr[i]
// }
// console.log(arr)
// console.log(`The maximum element is : ${max}`)

// find minimum of the elements in an array
// let arr = [12,34,56,788,54,1,0]
// let min = arr[0];
// for(let i =0; i< arr.length; i++){
//   if(arr[i] < min){
//     min = arr[i]
//   }
// }
// console.log(`Minimum element is ${min}`)

// Find 2nd Max and Max in an array
let arr = [10,30,40,40,40]

let max = Math.max(arr[0], arr[1]);
let sMax = Math.min(arr[0], arr[1]);

for(let i =2; i< arr.length; i++){
  if(arr[i] > max){
    sMax = max
    max = arr[i]
  }else if(arr[i] > sMax && arr[i] !== max){
    sMax = arr[i]
  }
}
console.log(`The max no. is ${max} and second max is ${sMax}`);