'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function rockPaperScissors(hand1, hand2) {
  
  //const checkWhoWins = (hand1,hand2) => {

    if(hand1 === hand2) {
      return "The result is a tie!";

    } else if(hand1 === "rock") {
      if(hand2 === "scissors") {
        return "Hand one wins!";
      } else {
        return "Hand two wins!";
      }

    } else if(hand1 === "paper") {
      if(hand2 === "rock") {
        return "Hand one wins!";
      }
      else {
        return "Hand two wins!";
      }

    } else if(hand1 === "scissors") {
      if(hand2 === "rock") {
        return "Hand two wins!";
      }
      else {
        return "Hand one wins!";
      }
    }
  //}

  /*if (hand1 && hand2 === 'rock' || 'paper' || 'scissors') {
    checkWhoWins();
  } else {
    return "Please enter rock, paper, or scissors in lowercase."
  } */
} 

    


function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });
} else {

  getPrompt();

}
