String.prototype.replaceAt = function(index, char) {
  return this.substr(0, index) + char + this.substr(index+char.length);
}

app.controllers.WordBoard = new Ext.Controller({
  
  word:         "",
  hint:         "",
  displayBoard: "",
  usedLetters:  [],
  guessesLeft:  10,
  wrongGuesses:  0,
  score:         0,

  keys: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '?'],

  newGame: function() {
  	this.showAllKeys();

  	// Generate a word
  	var seedWord      = Word.seedWord();
  	this.word         = seedWord.word.toLowerCase();
  	this.hint         = seedWord.hint;
  	this.usedLetters  = [];
  	this.displayBoard = "";
  	this.guessesLeft  = 10;
  	this.score        = 0;
  	this.wrongGuesses = 0;

  	console.log(this.word);
  	console.log(this.hint);
    
    for (var i = 0; i < this.word.length; i++) 	{
    	if (this.word[i] === ' ') {
    		this.displayBoard += ' ';
    	} else {
    		this.displayBoard += '_';
    	}
		}
		Ext.getCmp("displayBoard").update({
			word: this.displayBoard.replace(new RegExp('', 'g'), ' ').replace(new RegExp(' ', 'g'), '&nbsp;').trim()
		});
		Ext.getCmp("guessesLeft").update({
			numGuessesLeft: this.guessesLeft,
			score: this.score
		});
		Ext.getCmp("displayImage").update({
			id: '<img src="app/images/hangman_' + this.wrongGuesses + '.png">' 
		});
		//Ext.getCmp("displayImage").doComponentLayout();
  },

  checkLetter: function(options) {
  	var letter = options.letter.toLowerCase();
  	var found  = false;

  	Ext.getCmp("letter_" + letter.toUpperCase()).disable();

  	for (var i = 0; i < this.word.length; i++) {
  		if (this.word[i] === letter) {
  			found             = true;
  			this.displayBoard = this.displayBoard.replaceAt(i, letter);

  			console.log("Found");
  			console.log(this.displayBoard);
  		}
  	}
  	this.addUsedLetter(letter);

  	if (found === false) {
	  	this.checkLetterLose();
	  } else {
	  	Ext.getCmp("displayBoard").update({
				word: this.displayBoard.replace(new RegExp('', 'g'), ' ').replace(new RegExp(' ', 'g'), '&nbsp;').trim()
			});
			Ext.getCmp("guessesLeft").update({
				numGuessesLeft: this.guessesLeft,
				score: this.score
			});
			this.checkLetterWin();
	  }
	  Ext.getCmp("displayImage").doComponentLayout();
	  
  	return found;
  },

  checkLetterLose: function() {
  	this.guessesLeft--;
  	this.wrongGuesses++;

  	Ext.getCmp("guessesLeft").update({
			numGuessesLeft: this.guessesLeft
		});
		Ext.getCmp("displayImage").update({
			id: '<img src="app/images/hangman_' + this.wrongGuesses + '.png">' 
		});

  	if (this.guessesLeft <= 0) {
  		this.dislableAllKeys();

      // TODO: Show Winning Word!
      for (var i = 0; i < this.word.length; i++) {
        this.displayBoard = this.displayBoard.replaceAt(i, this.word[i]);
      }
      Ext.getCmp("displayBoard").update({
        word: this.displayBoard.replace(new RegExp('', 'g'), ' ').replace(new RegExp(' ', 'g'), '&nbsp;').trim()
      });

      Ext.Msg.confirm('You Lost!', 'Would you like to play again?', function(e)
      {
        if(e == 'yes') {
          Ext.dispatch({
            controller: app.controllers.WordBoard,
            action: 'newGame'
          });
        }
      });
  	}
  },

  checkLetterWin: function() {
  	var hasWon = true;
  	for (var i = 0; i < this.displayBoard.length; i++) {
  		if (this.displayBoard[i] === '_') {
	  		hasWon = false;
	  	}
  	}

  	if (hasWon) {
  		this.dislableAllKeys();
  		
      Ext.Msg.confirm('You Won!', 'Would you like to play again?', function(e)
      {
        if(e == 'yes') {
          Ext.dispatch({
            controller: app.controllers.WordBoard,
            action: 'newGame'
          });
        }
      });
  	}
  	return hasWon;
  },

  addUsedLetter: function(letter) {
  	if (this.usedLetters.indexOf(letter) < 0) {
  		this.usedLetters.push(letter);
  	}
  },

  isLetterUsed: function(letter) {
  	return this.usedLetters.indexOf(letter) === 0;
  },

  numBlankLetters: function() {
  	var numBlank = 0;

  	for (var i = 0; i < this.displayBoard.length; i++) {
  		if (this.displayBoard[i] === '_') numBlank++;
  	}
  	return numBlank;
  },

  showAllKeys: function() {
  	for (var i = 0; i < this.keys.length; i++) {
  		 Ext.getCmp("letter_" + this.keys[i]).enable();
  	}
  },

  dislableAllKeys: function() {
  	for (var i = 0; i < this.keys.length; i++) {
  		 Ext.getCmp("letter_" + this.keys[i]).disable();
  	}
  },

  showHint: function() {
    Ext.Msg.alert('Hint', this.hint, Ext.emptyFn);
  }

});