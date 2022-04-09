
// let orderArray = [];
let storeEmployeeObjects = {
    98053: [1,2,3,4],
    98007: [5,6,7,8],
    98077: [9,10,11,12],
    98055: [13,14,15,16],
    98011: [17,18,19,20],
    98046: [21,22,23,24]
};

// console.log(Object.keys(storeEmployeeObjects));
// console.log(storeEmployeeObjects[98011]);
let keys = Object.keys(storeEmployeeObjects);
let randomStoreNumber = keys[keys.length * Math.random() << 0]
// console.log(randomStoreNumber, "randomStoreNumber");
let randomEmployeeId = storeEmployeeObjects[randomStoreNumber].length * Math.random() << 0;
// console.log(randomEmployeeId, "randomEmployeeId")
// console.log(storeEmployeeObjects[randomStoreNumber][randomEmployeeId], "storeEmployeeIds");


// console.log(storeEmployeeObjects[keys[ keys.length * Math.random() << 0]]);

// (98053 , 98007, 98077, 98055, 98011, 98046)

// define a constructor to create order objects
let OrderObject = function (pStoreId, pSalesPersonId, pCdId, pPricePaid, pDate) {
    this.StoreID = pStoreId;
    this.SalesPersonID = pSalesPersonId;
    this.CdID = pCdId;
    this.PricePaid = pPricePaid;
    this.Date = pDate;
}

let initialDateTime = Date.now();

let newOrder = new OrderObject(randomStoreNumber, storeEmployeeObjects[randomStoreNumber][randomEmployeeId], 1,1, initialDateTime);
console.log(newOrder, "newOrder");

// random CdID
// (123456, 123654, 321456, 321654, 654123, 654321, 543216, 354126, 621453, 623451)
let CdIDs = [123456, 123654, 321456, 321654, 654123, 654321, 543216, 354126, 621453, 623451];
function getRandomCd(){
    let randomIndex = getRandomIntInclusive(0, CdIDs.length-1);
    console.log(randomIndex, "random index for cd");
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
    console.log(newOrder.StoreID, newOrder.SalesPersonID, newOrder.CdID, newOrder.PricePaid, newOrder.Date, "logging new order object");

    let divOrderList = document.getElementById("divOrderList");

    divOrderList.innerHTML = `StoreID = ${newOrder.StoreID} \n
                                SalesPersonID = ${newOrder.SalesPersonID} \n
                                CdID = ${newOrder.CdID} \n
                                PricePaid = ${newOrder.PricePaid} \n
                                Date = ${newOrder.Date} \n`
}

function addOneToServer(){
    createDisplay();
    fetch('/AddOrder', {
        method: "POST",
        body: JSON.stringify(newOrder),
        headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then(response => response.json()) 
        .then(json => console.log(json)
        )
        .catch(err => console.log(err));
}

function add500ToServer(){
    for (let i = 0; i < 500; i++) {
        console.log(i + 1, "count of orders");
        addOneToServer();
    }
}


let selectedGenre = "not selected";

document.addEventListener("DOMContentLoaded", function () {

    // added by me
    document.getElementById("buttonCreate").addEventListener("click", function (){
        createDisplay();
    });

    document.getElementById("buttonAddOne").addEventListener("click", function (){
        addOneToServer();
    });

    document.getElementById("buttonAdd500").addEventListener("click", function (){
        add500ToServer();
    })

    // end of my addition ======================================

    createList();

// add button events ************************************************************************
    
    document.getElementById("buttonAdd").addEventListener("click", function () {
        let newMovie = new MovieObject(document.getElementById("title").value, 
        document.getElementById("year").value, selectedGenre);

        fetch('/AddMovie', {
            method: "POST",
            body: JSON.stringify(newMovie),
            headers: {"Content-type": "application/json; charset=UTF-8"}
            })
            .then(response => response.json()) 
            .then(json => console.log(json),
            createList()
            )
            .catch(err => console.log(err));
    
        // $.ajax({
        //     url : "/AddMovie",
        //     type: "POST",
        //     data: JSON.stringify(newMovie),
        //     contentType: "application/json; charset=utf-8",
        //      success: function (result) {
        //         console.log(result);
        //         createList();
        //     }
        // });
       
    });

    document.getElementById("buttonGet").addEventListener("click", function () {
        createList();      
    });

    document.getElementById("buttonDelete").addEventListener("click", function () {
        deleteMovie(document.getElementById("deleteID").value);      
    });
    
    document.getElementById("buttonClear").addEventListener("click", function () {
        document.getElementById("title").value = "";
        document.getElementById("year").value = "";
        createList();   
    });

    $(document).bind("change", "#select-genre", function (event, ui) {
        selectedGenre = $('#select-genre').val();
    });

  

});  
// end of wait until document has loaded event  *************************************************************************


function createList() {
// update local array from server

    fetch('/getAllMovies')
    // Handle success
    .then(response => response.json())  // get the data out of the response object
    .then( responseData => fillUL(responseData))    //update our array and li's
    .catch(err => console.log('Request Failed', err)); // Catch errors

    // $.get("/getAllMovies", function(data, status){  // AJAX get
    //     movieArray = data;  // put the returned server json data into our local array
        
    //       // clear prior data
    //     var divMovieList = document.getElementById("divMovieList");
    //     while (divMovieList.firstChild) {    // remove any old data so don't get duplicates
    //         divMovieList.removeChild(divMovieList.firstChild);
    //     };

    //     var ul = document.createElement('ul');

    //     movieArray.forEach(function (element,) {   // use handy array forEach method
    //         var li = document.createElement('li');
    //         li.innerHTML = element.ID + ":  &nbsp &nbsp  &nbsp &nbsp " + 
    //         element.Title + "  &nbsp &nbsp  &nbsp &nbsp "  
    //         + element.Year + " &nbsp &nbsp  &nbsp &nbsp  " + element.Genre;
    //         ul.appendChild(li);
    //     });
    //     divMovieList.appendChild(ul)

    // });
};

function fillUL(data) {
    movieArray = data;
    
    // clear prior data
    var divMovieList = document.getElementById("divMovieList");
    while (divMovieList.firstChild) {    // remove any old data so don't get duplicates
        divMovieList.removeChild(divMovieList.firstChild);
    };

    var ul = document.createElement('ul');
    
    movieArray.forEach(function (element,) {   // use handy array forEach method
        var li = document.createElement('li');
        li.innerHTML = element.ID + ":  &nbsp &nbsp  &nbsp &nbsp " + 
        element.Title + "  &nbsp &nbsp  &nbsp &nbsp "  
        + element.Year + " &nbsp &nbsp  &nbsp &nbsp  " + element.Genre;
        ul.appendChild(li);
    });
    divMovieList.appendChild(ul)
}

function deleteMovie(ID) {

    fetch('/DeleteMovie/' + ID, {
        method: "DELETE",
       // body: JSON.stringify(_data),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      .then(response => response.json()) 
      .then(json => console.log(json), createList())
      .catch(err => console.log(err));


    // $.ajax({
    //     type: "DELETE",
    //     url: "/DeleteMovie/" +ID,
    //     success: function(result){
    //         alert(result);
    //         createList();
    //     },
    //     error: function (xhr, textStatus, errorThrown) {  
    //         alert("Server could not delete Movie with ID " + ID)
    //     }  
    // });
   
}


  
