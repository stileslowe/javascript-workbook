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
  console.log("a: " + activeStacks.a);
  console.log("b: " + activeStacks.b);
  console.log("c: " + activeStacks.c);
  //console.log(stacks)
}

// const isTheStackEmpty = (startStack) => {
  
//   if (activeStacks[startStack] === undefined || activeStacks[startStack].length == 0) {
//     console.log('this array is empty');
//     return true;
//   } 
// }
const startPop = (activeStacks,startStack) => {
  activeStacks[startStack].pop();}

const endPush = (activeStacks,endStack) => {
  activeStacks[endStack].push(startPop);}


function movePiece() {
  startPop();
  endPush();
  // Your code here
  // take last number from start stack array and put at end of end stack array
  
  console.log(startPop);
  
  console.log(endPush);

}

// const properMove = (startPop,endPush) => {
//   if(startPop < endPush) {
//     return true;
//   }
// }

function isLegal(startPop,endPush,endStack) {
  // Your code here
  if (activeStacks[endStack] === undefined) {
    console.log('this is triggering');
    return true;
    
  } 

  if (startPop > endPush) {
    return false;
  }
  // if(isTheStackEmpty()) {
  //   console.log('Please move from a non-empty stack.');
  // } else {
  //   properMove();
  // }
  // start stack cannot be empty
  // move cannot go onto end stack if last number in the end stack array is less than itself

}

const checkForWin = (activeStacks) => {
  // Your code here
  // user wins if c: 4,3,2,1
  //const lastStack = activeStacks[];
  if (activeStacks === {a:[],b:[],c:[4,3,2,1]}) {
    console.log('You win!');
    return true;
  } else {
    return false;
  }
  //} else {
    //getPrompt();
//}
}

function towersOfHanoi(startStack, endStack) {
  // Your code here
  // is the move a legal move?
  // if so, move piece. if not, tell user the rules of why their move is not allowed.
  // prompt user to move piece again. check for wins until win is met.
  // if (isLegal()) {
  //   movePiece(startStack,endStack);
  // } else {
  //   console.log('illegal move');
  // }
  if (isLegal(startPop,endPush,endStack)) {
    movePiece();
  }

  if (checkForWin()) { //if won, set stacks back to original stacks.
    console.log('this is reading checkforwin is true');
    //activeStacks = stacks;
  } else {
    getPrompt();
  }
} 


  



function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      //getPrompt();
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
