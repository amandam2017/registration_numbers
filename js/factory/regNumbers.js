function regNum(storageReigstrations) {
    // console.log(storageReigstrations)
    var regNumberList = storageReigstrations || [];
    var localReg = ''

    function setReg(plateNumber){
        if (!regNumberList.includes(plateNumber) && plateNumber.match(pattern)) {
            regNumberList.push(plateNumber)
            return localReg = plateNumber
        } 
    }

    function getReg(){
        return regNumberList;
    }

    var pattern = /^[CA|CK|CL]{2}\s\d{6} || [CA|CK|CL]{2}\s\d{3}\s\d{3}$/

    // view selected towns onlocal storage
//  var selectedTwn = '' 

//  function eachRegNum() {
//     //  var townsOnStorage = JSON.parse(localStorage.getItem('regNumbersList'))
//     //  document.getElementById("selectedTownReg").innerHTML = "";
 
//      // var checkedButton = document.querySelector("input[name ='town']:unchecked");
     
//      var checkedButton = document.querySelector("input[name ='town']:checked");
//      if(checkedButton){
//          selectedTwn = checkedButton.value
//      }
//      var selectedTwnList = [];
 
//      for (var i = 0; i < storageReigstrations.length; i++) {
//          var twnList = storageReigstrations[i]
//          if(twnList.startsWith(selectedTwn)){
//             selectedTwnList.push(twnList);
//              // return selectedTwnList;
//          }
 
//      }
 
//  }

    function errors(plateNumber){

        var emptyFieldError = '*Please enter plate number*'
        var alreadyExixtRegError = '*Registration number already exist*'
        var incorrectPatternError = '*Please enter a registration number correctly*'

        if(!plateNumber){
            return emptyFieldError;
        }
        if(plateNumber.match(pattern)){
            if(regNumberList.includes(plateNumber)){
                return alreadyExixtRegError;
            }
            if(!plateNumber.match(pattern)){
                return incorrectPatternError        
            }
        }    
  
    }

    return {
        setReg,
        getReg,
        // eachRegNum,
        errors
    }
}


//use reg.startWith methos to get reg according to their town
// if(registrationNumbers === registrationNumbers.startsWith('CA')){
//     displayReg += 'Cape Town'
// }