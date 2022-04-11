// key value pairs for stores and employees
let storeEmployeeObjects = {
    98053: [1,2,3,4],
    98007: [5,6,7,8],
    98077: [9,10,11,12],
    98055: [13,14,15,16],
    98011: [17,18,19,20],
    98046: [21,22,23,24]
};

let keys = Object.keys(storeEmployeeObjects);
let randomStoreNumber = keys[keys.length * Math.random() << 0]
let randomEmployeeId = storeEmployeeObjects[randomStoreNumber].length * Math.random() << 0;

// define a constructor to create order objects
let OrderObject = function (pStoreId, pSalesPersonId, pCdId, pPricePaid, pDate) {
    this.StoreID = pStoreId;
    this.SalesPersonID = pSalesPersonId;
    this.CdID = pCdId;
    this.PricePaid = pPricePaid;
    this.Date = pDate;
}

let initialDateTime = Date.now();
let newOrder;
let CdIDs = [123456, 123654, 321456, 321654, 654123, 654321, 543216, 354126, 621453, 623451];

function getRandomCd(){
    let randomIndex = getRandomIntInclusive(0, CdIDs.length-1);
    return CdIDs[randomIndex];
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
  

function generateRandomOrder(){
    keys = Object.keys(storeEmployeeObjects);
    randomStoreNumber = keys[keys.length * Math.random() << 0];
    randomEmployeeId = storeEmployeeObjects[randomStoreNumber].length * Math.random() << 0;

    newOrder = new OrderObject(randomStoreNumber, storeEmployeeObjects[randomStoreNumber][randomEmployeeId], getRandomCd(), getRandomIntInclusive(5,15), initialDateTime);
    initialDateTime = initialDateTime + getRandomIntInclusive(5000, 30000);
}

function createDisplay(){
    generateRandomOrder();
    let divOrderList = document.getElementById("divOrderList");
    divOrderList.innerHTML = `StoreID = ${newOrder.StoreID} <br>
                                SalesPersonID = ${newOrder.SalesPersonID} <br>
                                CdID = ${newOrder.CdID} <br>
                                PricePaid = ${newOrder.PricePaid} <br>
                                Date = ${newOrder.Date} <br>`
}

function addOneToServer(isOneOrder = true){
    createDisplay();

    if(isOneOrder){
        console.log("adding a single order")
        fetch('/AddOrder', {
            method: "POST",
            body: JSON.stringify(newOrder),
            headers: {"Content-type": "application/json; charset=UTF-8"}
            })
            .then(response => response.json()) 
            .then(json => console.log(json)
            )
            .catch(err => console.log(err));
    } else {
        console.log("adding 500 orders")
        fetch('/Add500Order', {
            method: "POST",
            body: JSON.stringify(newOrder),
            headers: {"Content-type": "application/json; charset=UTF-8"}
            })
            .then(response => response.json()) 
            .then(json => console.log(json)
            )
            .catch(err => console.log(err));
    }
}

function add500ToServer(){
    for (let i = 0; i < 500; i++) {
        addOneToServer(false);
    }
}

document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("buttonCreate").addEventListener("click", function (){
        createDisplay();
    });

    document.getElementById("buttonAddOne").addEventListener("click", function (){
        addOneToServer();
    });

    document.getElementById("buttonAdd500").addEventListener("click", function (){
        add500ToServer();
    })
});  
// end of wait until document has loaded event  *************************************************************************