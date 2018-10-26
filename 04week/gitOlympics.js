'use strict'



const printListOfOlympians = (myOlympiansArray) => {
   
    myOlympiansArray.forEach(function(element) {
        console.log(element)
    });
}
let myOlympiansArray = ['one','two','three','four','five'];
printListOfOlympians(myOlympiansArray);