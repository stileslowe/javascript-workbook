"use strict";

//Write a JavaScript program to display the current day and time.

<<<<<<< Updated upstream
const todaysDate = new Date; //declare a constant variable called todaysDate. Use method new Date; to define the variable as the current date. 
console.log(todaysDate); //print todaysDate.
=======
const todaysDate = new Date; //establish a constant variable called todaysDate. Use method new Date; to define the variable as the current date. 
todaysDate(); //print todaysDate.
>>>>>>> Stashed changes

//Write a JavaScript program to convert a number to a string.

const num = 1982; //declare a constant variable called num and define it as 1982.
const numToString = num.toString(); //declare a constant variable called numToString. use method toString to convert num to a string.
console.log(numToString); //print the new string

//Write a JavaScript program to convert a string to the number.

const myString = '9175729249';
const myNewNum = Number(myString);
console.log(myNewNum);

const myContact = parseInt("9175729249 for Stiles");
console.log(myContact);

/*Write a JavaScript program that takes in different datatypes and prints out whether they are a:
Boolean
Null ****
Undefined
Number
NaN *******
String*/

console.log(typeof false)
// the datatype of null is an object "You can consider it a bug in JavaScript that typeof null is an object. It should be null."
console.log(typeof fifty)
console.log(typeof 9)
// NaN part of the Number object. It is still a numeric data type, but it is undefined as a real number.
console.log(typeof "dog")


//Write a JavaScript program that adds 2 numbers together.
const newSum = 5 + 19;
console.log(newSum);

//Write a JavaScript program that runs only when 2 things are true.
const dog = 4;
const cat = 1;

dog === 4 && cat === 1
  ? console.log(5+20)
  : console.log('no can do');

//Write a JavaScript program that runs when 1 of 2 things are true.

dog === 4 || cat === 5
  ? console.log(5+21)
  : console.log('no can do');

//Write a JavaScript program that runs when both things are not true.

dog === 19 || cat === 6
  ? console.log('no can do')
  : console.log(5+22);

