function viewSelectedTown(){
    var townsOnStorage = JSON.parse(localStorage.getItem('regNumbersList'))
   document.getElementById("selectedTownReg").innerHTML = "";
  // var myTown = '';

  var checkedButton = document.querySelector("input[name ='town']:checked");

  var regLi = document.createElement('Li');
  var myTown = checkedButton.value

  for(var i = 0; i < townsOnStorage.length; i++){
      const element = townsOnStorage[i];

  
      if(myTown){
          regLi.innerHTML = element;
          console.log(myTown)
          printEachTownElem.appendChild(regLi);

      }

  }

  
          // myTown = checkedButton.value
      
  // for (let i = 0; i < townsOnStorage.length; i++) {
  //     const element = townsOnStorage[i];
  //     console.log(townsOnStorage[i])
  //   var regLi = document.createElement('Li');
  //   regLi.innerHTML = element;
 
      
  //    //  const newContent = document.createTextNode(element);
  //     printEachTownElem.appendChild(regLi);
  // //  clearInput()

 
  // }
// }
  
}