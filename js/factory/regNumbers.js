function regNum(storageReigstrations) {
    var regNumberList = storageReigstrations || [];
    var localReg = ''

    function setReg(plateNumber){
        // var incorrectPatternError = 'Please enter a registration number correctly'
        // var alreadyExixtRegError = 'Registration number already exist'

        if (!regNumberList.includes(plateNumber) && plateNumber.match(pattern)) {
            regNumberList.push(plateNumber)
            return localReg = plateNumber
        }
        // else if(regNumberList.includes(plateNumber)){
        //     return alreadyExixtRegError
        // }
        // else{
        //     return incorrectPatternError
        // }
        // return regNumberList  
    }

    function getReg(){
        return regNumberList;
    }

    var pattern = /^[CA|CK|CL]{2}\s\d{5} || [CA|CK|CL]{2}\s\d{3}\s\d{3}$/

    



    // function eachRegNum(plateNumber,selectedTown){
    //     // console.log(plateNumber)
    //     // console.log(selectedTown)

    //     var enteredRegNum = [];
    //     if (pattern.test(plateNumber)){
    //         if (selectedTown === 'Cape Town' && plateNumber.match(pattern)) {
    //             enteredRegNum = plateNumber.startsWith('CA')
    //         }
    //         if (selectedTown === 'Malmesbury' && plateNumber.match(pattern)) {
    //             enteredRegNum = plateNumber.startsWith('CK')
    //         }
    //         if (selectedTown === 'Stellenbosch' && plateNumber.match(pattern)) {
    //             enteredRegNum = plateNumber.startsWith('CL')
    //         }
    //     }
    //     else{
    //         return regNumberNotMatching
    //     }
    // }

    function errors(plateNumber, reg){
        console.log(plateNumber)
        console.log(reg)

        var emptyFieldError = '*Please enter plate number*'
        var alreadyExixtRegError = '*Registration number already exist*'
        var incorrectPatternError = '*Please enter a registration number correctly*'

        // var incorrectPatternError = 'please enter a correct registration number'
        if(!plateNumber){
            return emptyFieldError
        } 
        else if(regNumberList.includes(plateNumber)){
            return alreadyExixtRegError
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