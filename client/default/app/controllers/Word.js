var Word = {

  currentWord: "",

  seedWord: function() {
  	var wordListSize = wordList.length;
  	var rand         = Math.floor(Math.random() * wordListSize);

  	return wordList[rand];
  },

  getWord: function() {
  	return this.currentWord;
  }

};