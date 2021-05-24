const addButtonElem = document.querySelector('.button');
const enteredRegElemt = document.querySelector('.enteredReg');
const printRegNumElem = document.querySelector('.printRegNumber');
const noMatchRegElem = document.querySelector('.noMatchReg')
// const errorMessageOutputElem = document.querySelector('.errorMessageOutput');
// const buttonResetElem = document.querySelector('.buttonReset');

//an instance for my function
var registrations = regNum(storageList);

var storageList = []
if(localStorage['regNumbersList']){
    storageList = JSON.parse(localStorage.getItem('regNumbersList'))
}

function displayRegNum(){


    // var carReg = enteredRegElemt.value 


    // noMatchRegElem.innerHTML = registrations.eachRegNum()
    // console.log(registrations.eachRegNum)


    // create a new list element regList

    var regList = document.createElement('Li');

    //and give it some content
    regList.innerHTML = enteredRegElemt.value;
    registrations.setReg(enteredRegElemt.value);


    // add the text node to the newly created list element
    printRegNumElem.appendChild(regList);

    // add the created printRegNumElem and its content into the DOM
    // const printRegNumElem = document.getElementById("div1");


    enteredRegElemt.value = ''


    let key = registrations.getReg()
    localStorage.setItem('regNumbersList', JSON.stringify(key))
    console.log(key);
}

addButtonElem.addEventListener('click', displayRegNum)