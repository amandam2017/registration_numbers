function regNum(){
    var regNumberList = [];

    function setReg(plateNumber){ 
        regNumberList.push(plateNumber)    
    }

    function getReg(){
        return regNumberList;
    }

    function eachRegNum(regNumber){
        var enteredRegNum = [];
        if(regNumber != ''){
            enteredRegNum += regNumber
        }
        return enteredRegNum

    }

    return{
        setReg,
        getReg,
        eachRegNum
    }
}


//use reg.startWith methos to get reg according to their town
// if(registrationNumbers === registrationNumbers.startsWith('CA')){
//     displayReg += 'Cape Town'
// }