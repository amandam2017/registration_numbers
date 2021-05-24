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

    var pattern = /[CAKL]\s\d{3,6}/g;
    var regNumberNotMatching = 'enter registration number correctly'

    function eachRegNum(plateNumber){
        var enteredRegNum;
        if (pattern.test(plateNumber)){
            if (plateNumber != '') {
                enteredRegNum += plateNumber
            }
        }
        else{
            return regNumberNotMatching
        }
    }

    return {
        setReg,
        getReg,
        eachRegNum
    }
}


//use reg.startWith methos to get reg according to their town
// if(registrationNumbers === registrationNumbers.startsWith('CA')){
//     displayReg += 'Cape Town'
// }