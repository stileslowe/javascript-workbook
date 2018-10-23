

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
        assert.equal(rockPaperScissors(' Rock ', 'ScI sS oRs'), "Hand one wins!");
      });
      it('should check that the input is a string', () => {
        assert.equal(rockPaperScissors('r0c&', 'paper'), "Please enter rock, paper, or scissors in all lowercase.");
        assert.equal(rockPaperScissors('563', '*?:<*&'), "Please enter rock, paper, or scissors in all lowercase.");
        assert.equal(rockPaperScissors('*pa9', '239476'), "Please enter rock, paper, or scissors in all lowercase.");
      });
      it('should check that the user entered a value', () => {
        assert.equal(rockPaperScissors('', 'paper'), "Please enter rock, paper, or scissors in all lowercase.");
        assert.equal(rockPaperScissors('', ''), "Please enter rock, paper, or scissors in all lowercase.");
      });
    });