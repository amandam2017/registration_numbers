"use strict";

var addButtonElem = document.querySelector('.button');
var enteredRegElemt = document.querySelector('.enteredReg');
var printRegNumElem = document.querySelector('.printRegNumber');
var noMatchRegElem = document.querySelector('.noMatchReg');
var unMatchPatternElem = document.querySelector('.unMatchPattern');
var buttonShowElem = document.querySelector('.buttonShow');
var printEachTownElem = document.querySelector('.printEachTown'); // const errorMessageOutputElem = document.querySelector('.errorMessageOutput');
// const buttonResetElem = document.querySelector('.buttonReset');

var storageList = [];

if (localStorage['regNumbersList']) {
  storageList = JSON.parse(localStorage.getItem('regNumbersList'));
} //an instance for my function


var registrations = regNum(storageList);

function displayRegNum() {
  // create a new list element regList
  var regList = document.createElement('Li'); //and give it some content

  var carReg = enteredRegElemt.value; // regList.innerHTML = enteredRegElemt.value;

  if (carReg) {
    regList.innerHTML = registrations.setReg(carReg); // add the text node to the newly created list element

    printRegNumElem.appendChild(regList);
    noMatchRegElem.innerHTML = "";
  } else if (!carReg) {
    noMatchRegElem.innerHTML = registrations.errors(carReg);
    regList.innerHTML = "";
  } else {
    unMatchPatternElem.innerHTML = registrations.errors(carReg);
    regList.innerHTML = "";
  } // add the created printRegNumElem and its content into the DOM
  // const printRegNumElem = document.getElementById("div1");


  enteredRegElemt.value = '';
  var key = registrations.getReg();
  localStorage.setItem('regNumbersList', JSON.stringify(key)); // console.log(key);

  setTimeout(function () {
    noMatchRegElem.innerHTML = "";
    unMatchPatternElem.innerHTML = "";
  }, 4000);
} // keep local storage on page reload


function resetFun() {
  // localStorage.clear()
  location.reload();
} // view selected towns onlocal storage


function viewSelectedTown() {
  var townsOnStorage = JSON.parse(localStorage.getItem('regNumbersList'));
  document.getElementById("selectedTownReg").innerHTML = ""; // var checkedButton = document.querySelector("input[name ='town']:unchecked");

  var checkedButton = document.querySelector("input[name ='town']:checked");
  var checkedTown = checkedButton.value;
  var selectedTwnList = [];

  for (var i = 0; i < townsOnStorage.length; i++) {
    var twnList = townsOnStorage[i];

    if (twnList.startsWith(checkedTown)) {
      console.log(twnList);
      selectedTwnList.push(twnList);
      return selectedTwnList;
    } else {
      document.getElementById("selectedTownReg").innerHTML += townsOnStorage[i] + ', '; // console.log('Registrations of all town: ' + townsOnStorage[i]);
    }
  }
} // viewSelectedTown(townsOnStorage)


addButtonElem.addEventListener('click', displayRegNum); // buttonShowElem.addEventListener('click', resetFun)

buttonShowElem.addEventListener('click', viewSelectedTown);