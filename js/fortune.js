// TODO: Your job is to write logic that will
// give the user one of three random fortunes
//
// Use the alert("Some text value") function
// to tell the user their fortune.

// var name = "Bernard";
// // var pick2 = 2;
// // var pick3 = 3;
//
// if (name.length <= 5) {
//   alert("You will be wise beyond your years.");
// } else if (name.length >5) {
//   alert("You will be richer than the Nile is wide.");
// } else {
//   alert("Your life will be like a dream.");
// }

var fortuneNum = Math.round(Math.random() * 10) + 1;

if (fortuneNum <= 3) {
  alert("You will be wise beyond your years.");
} else if (fortuneNum <=7) {
  alert("You will be richer than the Nile is wide.");
} else {
  alert("Your life will be like a dream.");
}
