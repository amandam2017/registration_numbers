const addButtonElem = document.querySelector('.button');
const enteredRegElemt = document.querySelector('.enteredReg');
const printRegNumElem = document.querySelector('.printRegNumber');
const noMatchRegElem = document.querySelector('.noMatchReg');
const unMatchPatternElem = document.querySelector('.unMatchPattern');
const buttonShowElem = document.querySelector('.buttonShow');
const printEachTownElem = document.querySelector('.printEachTown');

// const errorMessageOutputElem = document.querySelector('.errorMessageOutput');
// const buttonResetElem = document.querySelector('.buttonReset');


var storageList;
if(localStorage['regNumbersList']){
    storageList = JSON.parse(localStorage.getItem('regNumbersList'))
}

//an instance for my function
var registrations = regNum(storageList);

function displayRegNum(){

    // create a new list element regList
    var regList = document.createElement('Li');
    // console.log(regList)

    //and give it some content
    var carReg = enteredRegElemt.value
    // regList.innerHTML = enteredRegElemt.value;
    if(carReg){
        regList.innerHTML = registrations.setReg(carReg);
        // add the text node to the newly created list element
     printRegNumElem.appendChild(regList);
        noMatchRegElem.innerHTML = ""
    }else if(!carReg){
        noMatchRegElem.innerHTML = registrations.errors(carReg);
         regList.innerHTML = ""
    }
    else{
        unMatchPatternElem.innerHTML =  registrations.errors(carReg);
        regList.innerHTML = ""

    } 

    // enteredRegElemt.value = ''

    let key = registrations.getReg()
    localStorage.setItem('regNumbersList', JSON.stringify(key))
    // console.log(key);
    clearInput()


    setTimeout(function(){
        noMatchRegElem.innerHTML = ""
        unMatchPatternElem.innerHTML = ""

    }, 4000)

}


// keep local storage on page reload

function resetFun(){
    // localStorage.clear()
    location.reload()
}

// view selected towns onlocal storage
 var selectedTwn = '' 

function viewSelectedTown() {
    var townsOnStorage = JSON.parse(localStorage.getItem('regNumbersList'))
    document.getElementById("selectedTownReg").innerHTML = "";

    // var checkedButton = document.querySelector("input[name ='town']:unchecked");
    
    var checkedButton = document.querySelector("input[name ='town']:checked");
    if(checkedButton){
        selectedTwn = checkedButton.value
    }
    var selectedTwnList = [];

    for (var i = 0; i < townsOnStorage.length; i++) {
        var twnList = townsOnStorage[i]
        if(twnList.startsWith(selectedTwn)){
           selectedTwnList.push(twnList);
            // return selectedTwnList;
        }

    }

 for (let i = 0; i < selectedTwnList.length; i++) {
     const element = selectedTwnList[i];
    //  console.log(selectedTwnList[i])
   var  regLi = document.createElement('Li');
   regLi.innerHTML = element;

     
    //  const newContent = document.createTextNode(element);
     printEachTownElem.appendChild(regLi);

 }

 printRegNumElem.innerHTML = "";



     // and give it some content

    // add the text node to the newly created div
    // console.log(newContent)


    // printEachTownElem.appendChild(newContent);


    clearInput()

}

function clearInput(){
    document.getElementById('registrationNumberForm').reset();
}



addButtonElem.addEventListener('click', displayRegNum);
// buttonShowElem.addEventListener('click', resetFun)
buttonShowElem.addEventListener('click', viewSelectedTown)

