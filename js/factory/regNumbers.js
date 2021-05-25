function regNum() {
    var regNumberList = [];

    function setReg(plateNumber){
        if (!regNumberList.includes(plateNumber) && plateNumber.match(pattern)) {
            regNumberList.push(plateNumber)
        }
        return regNumberList  
    }

    function getReg(){
        return regNumberList;
    }

    var pattern = /[CAKL]{2}\s\d{3}/
    var regNumberNotMatching = 'enter registration number correctly'

    function eachRegNum(plateNumber,selectedTown){
        console.log(plateNumber)
        console.log(selectedTown)

        var enteredRegNum;
        if (pattern.test(plateNumber)){
            if (selectedTown === 'Cape Town' && plateNumber.match(pattern)) {
                enteredRegNum += plateNumber.startsWith('CA')
            }
            if (selectedTown === 'Malmesbury' && plateNumber.match(pattern)) {
                enteredRegNum += plateNumber.startsWith('CK')
            }
            if (selectedTown === 'Stellenbosch' && plateNumber.match(pattern)) {
                enteredRegNum += plateNumber.startsWith('CL')
            }
        }
        else{
            return regNumberNotMatching
        }
    }

    function errors(plateNumber){
        var emptyFieldError = 'please enter plate number'
        var incorrectPatternError = 'please enter a correct registration number'
        if(!plateNumber){
            return emptyFieldError
        } else if(plateNumber != plateNumber.match(pattern)){
            return incorrectPatternError
        }
    }

    return {
        setReg,
        getReg,
        eachRegNum,
        errors
    }
}


//use reg.startWith methos to get reg according to their town
// if(registrationNumbers === registrationNumbers.startsWith('CA')){
//     displayReg += 'Cape Town'
// }