'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {

  // Your code here
  
  //const translateWord = (word) => {

  const wordArray = word.split('');
  
  
  const vowelsArray = ['a','e','i','o','u'];
  //const vowelsArrayLength = vowelsArray.length;
  
  const wordLength = wordArray.length;
  
  
 
  

  const consonantArray = [];
  let wordArrayEnd = [];

  for (let step = 0; step < wordLength; step++) {

    const letter = wordArray[step];
    //console.log(step);
    //console.log(letter + "this is the letter im on in the loop");
    if (vowelsArray.includes(letter)) {
      if (step == [0]) {
        console.log(word + 'yay');
        break;
      } {
          
        //console.log(letter + " - this is the vowel");
        //console.log(step);
        wordArrayEnd = wordArray.slice(step);
        //console.log(wordArrayEnd);
        break;
      }
    }
      
    consonantArray.push(letter);
      
  }

  /*for (let vowel = 0, vowel < vowelsArrayLength; vowel++) {
        if (vowels.includes(letter)) {
          console.log(letter);
        }
      }*/
  //console.log(letter);
    



  //const consonant = wordArray.shift();
  //console.log(consonant);
    
  //console.log(consonantArray);
 
  const pigLatinArray = wordArrayEnd.concat(consonantArray + 'ay');
  const pigLatinWord = pigLatinArray.join("");
  console.log(pigLatinWord);
  //console.log(wordArray);
}
  
  
  
  



//translateWord('computer');}
//no: ask user to enter a word

//yes: identify if the first letter of the word entered is a consonant or vowel

//if the first letter is a vowel, add yay to the end of the word and return new word;
//if the first letter is a consonant, then check if the next letter is a consonant, and so forth until you find a vowel
//take the consonant(s) that you've found and add them to the end of the word and add 'ay' after those consonants.
  
//identifyLetter(word);



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
