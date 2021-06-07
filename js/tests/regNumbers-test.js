














describe("This instance is testing registration function....", function(){
    it('should be able to set and get the entered unique registration number CA 12547, CL 12345 and CK 12345' , function(){

        const registrations = regNum();

        registrations.setReg('CA 12547') 
        registrations.setReg('CL 12345')     
        registrations.setReg('CK 12345')     

        [{registrations:'CA 12547'},{registrations:'CL 12345'},{registrations:'CK 12345'},registrations.getReg()]
        assert.deepEqual();        
        
    });

    it('should filter the registrations according to a selected town', function(){
        const registrations = regNum();
        registrations.viewSelectedTown('CL')

        assert.equal('CL', registrations.viewSelectedTown())
    })

    it('should be able to add a registration number that matches the pattern', function(){
        const registrations = regNum;
        
        registrations.setReg('CK 12345');
    })

    it('should display error messages saying *please enter your a registration number* if a user clicked add button without entering registration number' , function(){

        const registrations = regNum()
        var noReg = "*Please enter plate number*"

        registrations.setReg('');
        
        assert.equal(noReg, registrations.errors())        
    });

     it('should display error messages saying *Please enter a registration number correctly* if a user entered a registration incorrectly and the incorrect registration number wont be added to the list of the entered registrations' , function(){

        const registrations = regNum()
        var incorrectRegFormat = "*Please enter a registration number correctly*";

        registrations.setReg('ca14578');
        
        assert.equal(incorrectRegFormat, registrations.errors())        
    });

    it('should display error messages saying *registration number already exist* if a user is entering a registration more than one time' , function(){

        const registrations = regNum()
        var regAlreadyExist = "*registration number already exist*"

        registrations.setReg('CA 12457');
        registrations.setReg('CA 12457');
        
        assert.equal(regAlreadyExist, registrations.errors())        
    });
    


})




// window.onload = () => {
//     // console.log('page is fully loaded');
//     var regList = document.createElement('Li');
//     storageList.forEach(element => {
//         console.log(element);
//         printRegNumElem.appendChild(regList);
//         console.log(regList);


//         regList.innerHTML = element;

//     });


//   };


   // window.onload = () => {
    //     // console.log('page is fully loaded');
    //     var regList = document.createElement('Li');
    //     for (let i = 0; i < regList.length; i++) {
    //         const element = array[i];
    //         console.log(element);

    //         regList.innerHTML = element;
    //         printRegNumElem.appendChild(element);

    //     }
    // };



    