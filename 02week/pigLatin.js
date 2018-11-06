'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {

  const translateWord = (word) => { // define translateWord with parameter word
    const wordArray = word.toLowerCase().trim().split(''); // define an array: converts string to array and characters to lowercase and stores in array
    const vowelsArray = ['a','e','i','o','u']; // define an array to hold all vowels for comparison
    let wordArrayEnd = []; // define an array to store the last half of the word
    let consonantArray = []; // define an array to store the first half of the word
  
    for (let step = 0; step < wordArray.length; step++) { // create a loop to step through each element in the word array
      const letter = wordArray[step]; // define each value of the array as a letter
      if (vowelsArray.includes(letter)) { // if the word array includes any items in the vowels array
        if (step == [0]) { // and if the first letter in the array matches a vowel
          return (word + 'yay'); // return the word with attached yay at the end 
        } else { // otherwise
          wordArrayEnd = wordArray.slice(step); // store the remaining elements in the array, introduced above, starting at the index of the first vowel found
          break; // stop the loop
          }
      } else { // Otherwise (the letter is a consonant) 
        consonantArray.push(letter); // in array defined above store each letter that's not a vowel at each loop until a vowel is found
      }
    } 
  
    const pigLatinWord = wordArrayEnd.concat(consonantArray + 'ay').join(""); // define new array: add ay to the consonantArray and add that to end of wordArrayEnd and make it a string
    return pigLatinWord // return the translated word 
  }
  console.log(translateWord(word)); // call the translate function and input your word
}
  
function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
