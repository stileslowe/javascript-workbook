'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

let activeStacks = stacks;

// let activeStackOne = Object.values(stacks['a']);
// let activeStackTwo = Object.values(stacks['b']);
// let activeStackThree = Object.values(stacks['c']);

function printStacks() {
  console.log("a: " + activeStacks.a + " this is activeStacks");
  console.log("b: " + activeStacks.b + " this is activeStacks");
  console.log("c: " + activeStacks.c + " this is activeStacks");
  console.log(stacks)
}

const isTheStackEmpty = () => {
  
  if (pileTwo === undefined || pileTwo.length == 0) {
    console.log('this array is empty');
    return true;
  } 
}

function movePiece() {
  
  // Your code here
  // take last number from start stack array and put at end of end stack array

}

function isLegal() {
  // Your code here

  // start stack cannot be empty
  // move cannot go onto end stack if last number in the end stack array is less than itself

}

function checkForWin() {
  // Your code here
  // user wins if c: 4,3,2,1

}

function towersOfHanoi(startStack, endStack) {
  // Your code here
  // is the move a legal move?
  // if so, move piece. if not, tell user the rules of why their move is not allowed.
  // prompt user to move piece again. check for wins until win is met.

}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
