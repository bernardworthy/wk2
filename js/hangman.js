//_______________________________________

var filtered = hangmanWords.filter(function(word){
  return word.length > 2;
});

//var  = filtered.length

var hangmanDisplayWordIndex = Math.round(Math.random() * filtered.length);

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

var myVideo = document.getElementById("video1");
var userplay = document.getElementsByClassName("user-play");

function hideUserPlay() {
  // userplay.setAttribute("class", "hidden");
  for (var i = 0; i < userplay.length; ++i) {
    userplay[0].style.display = 'none';
  }
}


function showUserPlay() {
  // userplay.style.display = "";
  for (var i = 0; i < userplay.length; ++i) {
    userplay[0].style.display = '';
  }
}

function showUserPlayInit() {
  setTimeout(showUserPlay, 15000);
}

function play() {
  if (myVideo.paused)
  myVideo.play();
}

function pauseOpeningInit() {
  setTimeout(pause, 15000);
}

function pauseInit() {
  setTimeout(pause, (44000 / hangmanDisplayWord.length));
}


function pause() {
  if (myVideo.play)
  myVideo.pause();
}

hideUserPlay();
play();
pauseOpeningInit();
showUserPlayInit();


//____________________________________

var userGuess;
var guessCount = 8;
var guessLettersArr = [];
var guessLettersString;
var correctCount = 0;
var overlay = document.getElementsByClassName("overlay");
var waitMessage = document.getElementsByClassName('wait-message');

function updateGuessCount() {
  var lives = document.getElementsByClassName("lives");

  for (var i = 0; i < lives.length; ++i) {
    lives[0].textContent = guessCount;
  }

}

updateGuessCount();

function wrongGuess() {

  for (var i = 0; i < overlay.length; ++i) {
    overlay[0].style.display = 'inline-block';
    overlay[0].style.backgroundImage = "url('img/wrong.png')";
    overlay[0].style.WebkitAnimation = "wrong 3s";
    overlay[0].style.animation = "wrong 3s";
    overlay[0].addEventListener('webkitAnimationEnd',function( event ) { overlay[0].style.display = 'none'; }, false);

  }

}

function winInit() {
  setTimeout(win, 44000/hangmanDisplayWord.length);
}


function win() {
    for (var i = 0; i < overlay.length; ++i) {
    hideUserPlay();
    overlay[0].removeAttribute('style','animation');
    overlay[0].removeAttribute('style','display');
    overlay[0].style.display = 'inline-block';
    overlay[0].style.backgroundImage = "url('img/win.png')";
    overlay[0].style.backgroundColor = "#fff";
  }
}

function deleteLives() {
  guessCount = 0;
}

function setGuess(letter){
  userGuess = letter.toLowerCase();
}

function clearGuess(input){
  input.value = '';
}

// function changeColor(){
//   var newColor = document.querySelector('.user-guess-letters');
//
//   if (checkGuess() === false){
//     newColor.setAttributeNode(correctLetter);
//
//   }
// }

function insertGuessLetters() {
  guessLettersArr.push(userGuess);
  guessLettersString = guessLettersArr.join(' ');

  document.querySelector('.user-guess-letters').textContent = guessLettersString;
}

function replace(letterIndex){
  hangmanUnderscores[letterIndex] = userGuess;
}

function checkGuess(){

  var correct = false;

  for (var i = 0; i < hangmanDisplayWord.length; ++i) {

    if (userGuess === hangmanDisplayWord[i]) {

      underscoreArr[i] = userGuess;

      correct = true;

    }
  }
}

function submitGuess(){

  var correct = false;

  for (var i = 0; i < hangmanDisplayWord.length; ++i) {

    if (userGuess === hangmanDisplayWord[i]) {

      underscoreArr[i] = userGuess;

      //userGuess.setAttributeNode(correctLetter.value);

      console.log(i);
      updateUnderscore();
      correct = true;
      correctCount = ++correctCount;
    }
  } if (correct === false){
    wrongGuess();
    guessCount = --guessCount;
    insertGuessLetters();
  } else {
    play();
    pauseInit();
  }

  clearGuess(document.querySelector('.guess-box'));
  updateGuessCount();

  if (guessCount <= 0) {

    for (var i = 0; i < overlay.length; ++i) {
      hideUserPlay();
      overlay[0].removeAttribute('style','animation');
      overlay[0].removeAttribute('style','display');
      overlay[0].style.display = 'inline-block';
      overlay[0].style.backgroundImage = "url('img/lose.png')";
      overlay[0].style.backgroundColor = "#fff";
    }
  }

  if (correctCount === hangmanDisplayWord.length) {
    winInit();
  }

}
