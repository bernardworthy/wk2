//
// function isBigEnough(word) {
//   return word.length > 2;
// }

var filtered = hangmanWords.filter(function(word){
  return word.length > 2;
});

//var  = filtered.length

var hangmanDisplayWordIndex = Math.round(Math.random() * 10);

var hangmanDisplayWord = filtered[hangmanDisplayWordIndex];

//_______________________________________

//document.querySelector('.word-box').textContent

var dashedWord = hangmanDisplayWord.split('');

var underscoreArr = dashedWord.map(function(char){
  return '_';
});

//var hangmanUnderscores = underscoreArr.join(' ');

function updateUnderscore() {

  var hangmanUnderscores = underscoreArr.join(' ');

  document.querySelector('.word-box').textContent = hangmanUnderscores;
}

updateUnderscore();

//__________________________________________

var userGuess;
var guessCount = 8;

function setGuess(letter){
  userGuess = letter.toLowerCase();
}

function clearGuess(input){
  input.value = '';
}

// function replace(letterIndex){
//   hangmanUnderscores[letterIndex] = userGuess;
// }

function submitGuess(){

  var correct = false;

  for (var i = 0; i < hangmanDisplayWord.length; ++i) {

    if (userGuess === hangmanDisplayWord[i]) {

      underscoreArr[i] = userGuess;
      console.log(i);
      updateUnderscore();
      correct = true;

    }
  } if (correct === false){
    guessCount = --guessCount;
  } clearGuess(document.querySelector('.guess-box'));
}
