var addButtonElem = document.querySelector('.button');
var buttonShowAllElem = document.querySelector('.buttonShowAll');
var buttonShowElem = document.querySelector('.buttonShow');

var printEachTownElem = document.querySelector('.printEachTown');
var enteredRegElemt = document.querySelector('.enteredReg');
var printRegNumElem = document.querySelector('.printRegNumber');
var regNotEnteredElem = document.querySelector('.regNotEntered');
var unMatchPatternElem = document.querySelector('.unMatchPattern');
var regAlreadyExistElem = document.querySelector('.regAlreadyExist');

var successfulMessageElem = document.querySelector('.successfulMessage');
// const errorMessageOutputElem = document.querySelector('.errorMessageOutput');
var buttonResetElem = document.querySelector('.buttonReset');
var storageList = []
if(localStorage['regNumbersList']) {
	storageList = JSON.parse(localStorage.getItem('regNumbersList'));
}
//an instance for my function
var registrations = regNum(storageList);

var pattern1 = /^((CA|CK|CL)\s([0-9]){6})$/i;
var pattern3 = /^((CA|CK|CL)\s\d{3}\-\d{3})$/i;
var pattern2 = /^((CA|CK|CL)\s\d{3}\s\d{3})$/i;

function displayRegNum() {
	// create a new list element regList
	var regList = document.createElement('Li');
	// console.log(regList)
	//and give it some content
	var carReg = enteredRegElemt.value
    if (carReg != '') {
        carReg = carReg.toUpperCase();
    }
		// regList.innerHTML = enteredRegElemt.value;
	if(carReg) {
		if(pattern1.test(carReg) || pattern2.test(carReg) || pattern3.test(carReg)) {
			console.log(storageList + "ertyuiop")
			if(!storageList.includes(carReg)) {
				regList.innerHTML = registrations.setReg(carReg);
				// add the text node to the newly created list element
				printRegNumElem.appendChild(regList);
				successfulMessageElem.innerHTML = 'seccessfully added a registration'
				regNotEnteredElem.innerHTML = ""
					// printEachTownElem.innerHTML = "";
			} else {
				regAlreadyExistElem.innerHTML = registrations.addBtnErrors(carReg);
				successfulMessageElem.innerHTML = ""
				unMatchPatternElem = ""
				regList.innerHTML = ""
				// regNotEnteredElem = ""
			}
		} else {
			unMatchPatternElem.innerHTML = registrations.addBtnErrors(carReg);
			successfulMessageElem.innerHTML = ""
			regList.innerHTML = ""
			regNotEnteredElem = ""
		}
	} else {
		regNotEnteredElem.innerHTML = registrations.addBtnErrors(carReg);
		regList.innerHTML = ""
		successfulMessageElem.innerHTML = ""
		regAlreadyExistElem = ""
	}
	enteredRegElemt.value = ''

	let key = registrations.getReg();
	localStorage.setItem('regNumbersList', JSON.stringify(key));
	// console.log(key);
	clearInput();
	setTimeout(function() {
		regNotEnteredElem.innerHTML = ""
		unMatchPatternElem.innerHTML = ""
	}, 4000)
}
// keep local storage on page reload
function resetFun() {
	localStorage.clear()
	location.reload()
}
// view selected towns onlocal storage
var selectedTwn = ''

function viewSelectedTown() {
	printRegNumElem.innerHTML = '';
	var townsOnStorage = JSON.parse(localStorage.getItem('regNumbersList'))
	document.getElementById("selectedTownReg").innerHTML = "";
	// var checkedButton = document.querySelector("input[name ='town']:unchecked");
	var checkedButton = document.querySelector("input[name ='town']:checked");
	if(checkedButton) {
		selectedTwn = checkedButton.value
	}
	var selectedTwnList = [];
	for(var i = 0; i < townsOnStorage.length; i++) {
		var twnList = townsOnStorage[i]
		if(twnList.startsWith(selectedTwn)) {
			selectedTwnList.push(twnList);
			// return selectedTwnList;
		}
	}
	for(let i = 0; i < selectedTwnList.length; i++) {
		const element = selectedTwnList[i];
		//  console.log(selectedTwnList[i])
		var regLi = document.createElement('Li');
		regLi.innerHTML = element;
		//  const newContent = document.createTextNode(element);
		printRegNumElem.appendChild(regLi);
	}
	clearInput();
    // checkedButton.value = false;
}

function showAll(){
	var listReg = registrations.getReg();
	for(let i = 0; i < listReg.length; i++) {
	const element = listReg[i];
	console.log(element)
	var displayOnLoad = document.createElement('Li');
	displayOnLoad.innerHTML = element;
	printRegNumElem.appendChild(displayOnLoad);

	// window.onload = showAll();

}
}

function clearInput() {
	document.getElementById('registrationNumberForm').reset();
}

window.onload = showAll();

addButtonElem.addEventListener('click', displayRegNum);
buttonShowElem.addEventListener('click', viewSelectedTown);
buttonShowAllElem.addEventListener('click', showAll);
buttonResetElem.addEventListener('click', resetFun);