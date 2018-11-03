"use strict";

//Write a JavaScript program to display the current day and time.

const todaysDate = () => { 
  const today = new Date(); 
  console.log(today); 
}
todaysDate(); //run todaysDate

//Write a JavaScript program to convert a number to a string.

const numToString = (num) => {
  const newString = num.toString(); 
  console.log(newString); 
}
numToString(1776);

//Write a JavaScript program to convert a string to the number.

const stringToNum = (myString) => {
  const myNewNum = Number(myString);
  console.log(myNewNum);
}
stringToNum('9175729249');

/*Write a JavaScript program that takes in different datatypes and prints out whether they are a:
Boolean
Null 
Undefined
Number
NaN 
String*/

const whatDatatype = (dataType) => { 
  console.log(typeof dataType);
}
whatDatatype('forty four');

//Write a JavaScript program that adds 2 numbers together.

const newSum = (num1,num2) => {
  console.log(num1 + num2);
}
newSum(3,6);

//Write a JavaScript program that runs only when 2 things are true.

const isValidPresident = (num1,num2) => {
  if (num1 && num2 <= 44) {
    console.log('Valid President');
  } else {
    console.log('Not Valid President.')
  }
}
isValidPresident(40,5);

// -- OR --

const bothTrueNewSum = (num1,num2) => { 
  num1 && num2 > 0
    ? console.log(num1 + num2)
    : console.log('Integers only please. Thanks.');
}

bothTrueNewSum(0,6);

//Write a JavaScript program that runs when 1 of 2 things are true.

const orTrueNewSum = (num1,num2) => { 
  num1 || num2 > 0
    ? console.log(num1 + num2)
    : console.log('Integers only please. Thanks.');
}
orTrueNewSum(0,6);  

//Write a JavaScript program that runs when both things are not true.

const bothFalseNewSum = (num1,num2) => { 
  num1 && num2 == 0
    ? console.log('Integers only please. Thanks.')
    : console.log(num1 + num2);
}
bothFalseNewSum(9,6);  
