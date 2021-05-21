const addButtonElem = document.querySelector('.button');
const enteredRegElemt = document.querySelector('.enteredReg');
const printRegNumElem = document.querySelector('.printRegNumber');
// const errorMessageOutputElem = document.querySelector('.errorMessageOutput');
// const buttonResetElem = document.querySelector('.buttonReset');

//an instance for my function
var registrations = regNum();

var storageList = []
if(localStorage['regNumbersList']){
    storageList = JSON.parse(localStorage.getItem('regNumbersList'))
}

function displayRegNum(){

    var carReg = enteredRegElemt.value 

    registrations.setReg(carReg)

    printRegNumElem.innerHTML = registrations.eachRegNum(carReg)

    enteredRegElemt.value = ''


    let key = registrations.getReg()
    localStorage.setItem('regNumbersList', JSON.stringify(key))
    console.log(key);
}

addButtonElem.addEventListener('click', displayRegNum)