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

function printStacks() {
  console.log("a: " + activeStacks.a);
  console.log("b: " + activeStacks.b);
  console.log("c: " + activeStacks.c);
}

function movePiece(startStack, endStack, activeStacks) {
  // Your code here
  let startPop = activeStacks[startStack].pop();
  console.log(startPop);
  let endPush = activeStacks[endStack].push(startPop);
  console.log(endPush);
  checkForWin();
}

function isLegal() {
  // Your code here
  return true;
}

function checkForWin() {
  // Your code here
  //const lastStackWin = activeStacks
  console.log("checking for win");
}

function towersOfHanoi(startStack, endStack, activeStacks) {
  // Your code here
  if (isLegal()) {
    movePiece(startStack, endStack, activeStacks);
    checkForWin();
  } else {
    console.log("You've made an illegal move. You cannot move a larger piece onto a smaller piece. You also cannot move a piece from an empty stack.");
    getPrompt();
  }

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
