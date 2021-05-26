const addButtonElem = document.querySelector('.button');
const enteredRegElemt = document.querySelector('.enteredReg');
const printRegNumElem = document.querySelector('.printRegNumber');
const noMatchRegElem = document.querySelector('.noMatchReg');
const unMatchPatternElem = document.querySelector('.unMatchPattern');
const buttonShowElem = document.querySelector('.buttonShow');
const printEachTownElem = document.querySelector('.printEachTown');

// const errorMessageOutputElem = document.querySelector('.errorMessageOutput');
// const buttonResetElem = document.querySelector('.buttonReset');


var storageList = []
if(localStorage['regNumbersList']){
    storageList = JSON.parse(localStorage.getItem('regNumbersList'))
}

//an instance for my function
var registrations = regNum(storageList);

function displayRegNum(){

    // create a new list element regList
    var regList = document.createElement('Li');

    //and give it some content
    var carReg = enteredRegElemt.value
    // regList.innerHTML = enteredRegElemt.value;
    if(carReg){
        regList.innerHTML = registrations.setReg(carReg);
        noMatchRegElem.innerHTML = ""
    }else if(!carReg){
        noMatchRegElem.innerHTML = registrations.errors(carReg);
        return regList.innerHTML = ""
    }
    else{
        unMatchPatternElem.innerHTML =  registrations.errors(carReg);
    } 

    // add the text node to the newly created list element
    printRegNumElem.appendChild(regList);

    // add the created printRegNumElem and its content into the DOM
    // const printRegNumElem = document.getElementById("div1");


    enteredRegElemt.value = ''

    let key = registrations.getReg()
    localStorage.setItem('regNumbersList', JSON.stringify(key))
    // console.log(key);

    setTimeout(function(){
        noMatchRegElem.innerHTML = ""
        unMatchPatternElem.innerHTML = ""

    }, 5000)
}

// keep local storage on page reload

function resetFun(){
    // localStorage.clear()
    location.reload()
}

// view selected towns onlocal storage
function viewSelectedTown() {
    var townsOnStorage = JSON.parse(localStorage.getItem('regNumbersList'))
    document.getElementById("selectedTownReg").innerHTML = "";

    // var checkedButton = document.querySelector("input[name ='town']:unchecked");
    
    var checkedButton = document.querySelector("input[name ='town']:checked");
    var selectedTwn = checkedButton.value

    var eachTown = document.createElement('Li');

    for (var i = 0; i < townsOnStorage.length; i++) {
        if(townsOnStorage[i].startsWith(selectedTwn)){
           console.log(townsOnStorage[i])
        printEachTownElem.appendChild(townsOnStorage[i]);

        }
        else{   
            return document.getElementById("selectedTownReg").innerHTML += townsOnStorage[i] + ', '
        // console.log('Registrations of a selected town: ' + townsOnStorage[i]);
        }
    }

}
    
// viewSelectedTown(townsOnStorage)


addButtonElem.addEventListener('click', displayRegNum);
// buttonShowElem.addEventListener('click', resetFun)
buttonShowElem.addEventListener('click', viewSelectedTown)

