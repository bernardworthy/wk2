//Declaring baseline values for x and y
var x = 0;
var unit = "";
var cupstoquarts = .25;
var quartstocups = 4;
var meterstoyards = 1.09361;
var yardstometers = .9144;

// setX takes a string as a parameter, casts it
// to a number, and stores that value in x
function setX(xString) {
  x = Number(xString);
}

//store unitString as unit
function setUnit(unitSelected) {
  unit = unitSelected;
}

//convert function
function convert() {

  if (unit === "cupstoquarts") {

    alert(x + " cup(s) is " + x * cupstoquarts + " quart(s)");

  } else if (unit === "quartstocups") {

    alert(x + " quart(s) is " + x * quartstocups + " cup(s)");

  } else if (unit === "meterstoyards") {

    alert(x + " meter(s) is " + x * meterstoyards + " yard(s)");

  } else if (unit === "yardstometers") {

    alert(x + " yards(s) is " + x * yardstometers + " meter(s)");

  } else if (unit === "fahrenheittocelcius") {

    alert(x + " degrees Fahrenheit is " + (x - 32)*(5/9) + " degrees Celcius");

  } else if (unit === "celciustofahrenheit") {

    alert(x + " degrees Celcius is " + (x * (9/5) + 32) + " degrees Fahrenheit");

  }
}
