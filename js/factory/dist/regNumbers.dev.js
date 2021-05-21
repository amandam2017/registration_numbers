"use strict";

function regNum() {
  var regNumber = []; // var displayReg = [];

  function setReg(enteredReg) {
    if (enteredReg != '') {
      regNumber.push(enteredReg);
    }
  }

  function getReg() {
    return regNumber;
  } // function carReg(enteredReg){
  //     console.log(enteredReg)
  //     // var noRegError = 'please enter a registration number'
  //     if(enteredReg != ''){
  //         displayReg.push(enteredReg)
  //     }
  //      return displayReg
  // }


  return {
    setReg: setReg,
    getReg: getReg // carReg

  };
} //use reg.startWith methos to get reg according to their town
// if(registrationNumbers === registrationNumbers.startsWith('CA')){
//     displayReg += 'Cape Town'
// }