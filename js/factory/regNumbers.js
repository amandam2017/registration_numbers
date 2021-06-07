function regNum(storageReigstrations) {
    // console.log(storageReigstrations)
    var regNumberList = storageReigstrations || [];
    var localReg = ''

    var pattern1 = /^((CA|CK|CL)\s([0-9]){6})$/ ;
    var pattern3 = /^((CA|CK|CL)\s\d{3}\-\d{3})$/;
    var pattern2 =  /^((CA|CK|CL)\s\d{3}\s\d{3})$/;

    function setReg(plateNumber){
        if (!regNumberList.includes(plateNumber) && pattern1.test(plateNumber) || pattern2.test(plateNumber) || pattern3.test(plateNumber)){
        // if (!regNumberList.includes(plateNumber) && plateNumber.match(pattern)) {
            regNumberList.push(plateNumber)
            return localReg = plateNumber
        } 
    }

    function getReg(){
        return regNumberList;
    }


    function addBtnErrors(plateNumber){

        var emptyFieldError = '*Please enter plate number*'
        var alreadyExistRegError = '*Registration number already exist*'
        var incorrectPatternError = '*Please enter a registration number correctly*'

        
        if(plateNumber){
            if(pattern1.test(plateNumber) || pattern2.test(plateNumber) || pattern3.test(plateNumber)){
                if(regNumberList.includes(plateNumber)){
                    return alreadyExistRegError;
                }
                // if(pattern1.test(plateNumber)=== false || pattern2.test(plateNumber)===false || pattern3.test(plateNumber)===false){
                //     return incorrectPatternError;        
                // }
            } else {
                return incorrectPatternError;        

            }
        } 
        else{
            return emptyFieldError;
        }       
  
    }

    return {
        setReg,
        getReg,
        // eachRegNum,
        addBtnErrors
    }
}
