
  
document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("buttonGet").addEventListener("click", function () {
        createOne();
    });

  
});  


function hourSM(seconds)
{
 
var numhours = Math.floor(((seconds % 31536000) % 86400) / 3600);
var numminutes = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60);
var numseconds = (((seconds % 31536000) % 86400) % 3600) % 60;
   var numillsec = Math.floor((((seconds % 31536000) % 86400) % 3600) / 7.74597);
return " hh " + numhours +  " mm "  + numminutes + " ss " + numseconds + " ms "+ numillsec;

}
let date = Date.now();



function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
 

function createOne(){
  
    const storeID = [98053 , 98007, 98077, 98055, 98011, 98046];
    const cdID = [123456, 123654, 321456, 321654, 654123,
        654321, 543216, 354126, 621453, 623451];
    let rds = randomInt(0,5);
    var randomStore = storeID[rds];

    // let oldDateObj = Date.now();
    // var newDateObj = new Date(oldDateObj.getTime() + diff*60000);

    if (randomStore === 98053){
        
        const randomSPID = randomInt(1,4);
        var rcd = randomInt(0,9);
        //getting a random index
        var randomCD = cdID[rcd];
        const randomPrice = randomInt(5,15);
        const randomDate =hourSM(date);
          let divOrderList = document.getElementById("divOrderList");
          divOrderList.innerHTML = `StoreID = ${randomStore} <br> 
          SalesPersonID = ${randomSPID} <br> 
          CdID = ${randomCD} <br> 
          PricePaid = ${randomPrice} <br> 
          Date = ${randomDate} <br>`
    
    }
    else if (randomStore === 98007){
        const randomSPID = randomInt(4,8);
        var rcd = randomInt(0,9);
         var randomCD = cdID[rcd];
      const randomPrice = randomInt(5,15);
      var rt = randomInt(3000,5000);
      const randomDate =hourSM(date+rt);
      let divOrderList = document.getElementById("divOrderList");
      divOrderList.innerHTML = `StoreID = ${randomStore} <br> 
      SalesPersonID = ${randomSPID} <br> 
      CdID = ${randomCD} <br> 
      PricePaid = ${randomPrice} <br> 
      Date = ${randomDate} <br>`

    }
    else if (randomStore === 98077){
        const randomSPID = randomInt(9,12);
        var rcd = randomInt(0,9);
        var randomCD = cdID[rcd];
        const randomPrice = randomInt(5,15);
        var rt = randomInt(3000,5000);
        const randomDate =hourSM(date+rt);
        let divOrderList = document.getElementById("divOrderList");
        divOrderList.innerHTML = `StoreID = ${randomStore} <br> 
        SalesPersonID = ${randomSPID} <br> 
        CdID = ${randomCD} <br> 
        PricePaid = ${randomPrice} <br> 
        Date = ${randomDate} <br>`;

    }
    else if (randomStore === 98055){
        const randomSPID = randomInt(13,16);
        var rcd = randomInt(0,9);
        var randomCD = cdID[rcd];
        const randomPrice = randomInt(5,15);
        var rt = randomInt(3000,5000);
        const randomDate =hourSM(date+rt);
        let divOrderList = document.getElementById("divOrderList");
        divOrderList.innerHTML = `StoreID = ${randomStore} <br> 
        SalesPersonID = ${randomSPID} <br> 
        CdID = ${randomCD} <br> 
        PricePaid = ${randomPrice} <br> 
        Date = ${randomDate} <br>`

    }
    else if (randomStore === 98011){
        const randomSPID = randomInt(17,20);
        var rcd = randomInt(0,9);
        var randomCD = cdID[rcd];
        const randomPrice = randomInt(5,15);
        var rt = randomInt(3000,5000);
        const randomDate =hourSM(date+rt);
        let divOrderList = document.getElementById("divOrderList");
        divOrderList.innerHTML = `StoreID = ${randomStore} <br> 
        SalesPersonID = ${randomSPID} <br> 
        CdID = ${randomCD} <br> 
        PricePaid = ${randomPrice} <br> 
        Date = ${randomDate} <br>`

    }
    else if (randomStore === 98046){
        const randomSPID = randomInt(21,24);
        var rcd = randomInt(0,9);
        var randomCD = cdID[rcd];
        const randomPrice = randomInt(5,15);
        var rt = randomInt(3000,5000);
        const randomDate =hourSM(date+rt);
        let divOrderList = document.getElementById("divOrderList");
        divOrderList.innerHTML = `StoreID = ${randomStore} <br> 
        SalesPersonID = ${randomSPID} <br> 
        CdID = ${randomCD} <br> 
        PricePaid = ${randomPrice} <br> 
        Date = ${randomDate} <br>`

    }


}
