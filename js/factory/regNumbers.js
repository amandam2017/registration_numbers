function regNum(storageReigstrations) {
	// console.log(storageReigstrations)
	var regNumberList = storageReigstrations || [];
	var localReg = ''
	var pattern1 = /^((CA|CK|CL)\s([0-9]){6})$/;
	var pattern3 = /^((CA|CK|CL)\s\d{3}\-\d{3})$/;
	var pattern2 = /^((CA|CK|CL)\s\d{3}\s\d{3})$/;

	function setReg(plateNumber) {
        plateNumber = plateNumber.toUpperCase();


		if(!regNumberList.includes(plateNumber) && pattern1.test(plateNumber) || pattern2.test(plateNumber) || pattern3.test(plateNumber)) {
			// if (!regNumberList.includes(plateNumber) && plateNumber.match(pattern)) {
			regNumberList.push(plateNumber)
			return localReg = plateNumber
		}
	}

	function getReg() {
		return regNumberList;
	}

	function addBtnErrors(plateNumber) {
		var emptyFieldError = '*Please enter plate number*'
		var alreadyExistRegError = '*Registration number already exist*'
		var incorrectPatternError = '*Please enter this format for reg [CL 123452] OR [CK 123-321] OR [CL 012 658]*'
		if(plateNumber) {
			if(pattern1.test(plateNumber) || pattern2.test(plateNumber) || pattern3.test(plateNumber)) {
				if(regNumberList.includes(plateNumber)) {
					return alreadyExistRegError;
				}
			} else {
				return incorrectPatternError;
			}
		} else {
			return emptyFieldError;
		}
	}

	function listErrors(storageReigstrations){
		if(!storageReigstrations){
			return 'there is no registration'
		}

	}

	return {
		setReg,
		getReg,
		addBtnErrors,
		listErrors
	}
}