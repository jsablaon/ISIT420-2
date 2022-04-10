
let cddA = [];

// define a constructor to create movie objects
let cdObject = function (pStoreID, pSalesPersonID, pCdID, pPricePaid, pDate) {
    this.StoreID = pStoreID;
    this.SalesPersonID = pSalesPersonID;
    this.CdID = pCdID;
    this.PricePaid = pPricePaid;
    this.Date = pDate;
}

let selectedGenre = "not selected";

document.addEventListener("DOMContentLoaded", function () {

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
        createOne();
    });

    document.getElementById("buttonDelete").addEventListener("click", function () {
        deleteMovie(document.getElementById("deleteID").value);
    });

    document.getElementById("buttonClear").addEventListener("click", function () {
        document.getElementById("title").value = "";
        document.getElementById("year").value = "";
    });

    $(document).bind("change", "#select-genre", function (event, ui) {
        selectedGenre = $('#select-genre').val();
    });



});
// end of wait until document has loaded event  *************************************************************************

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }


  function simpFill(data){
      
    // var fillArray = [];
    // fillArray = data;
    var cont = document.getElementById("container");
     while (cont.firstChild) {    // remove any old data so don't get duplicates
         cont.removeChild(cont.firstChild);
     };

    // create ul element and set the attributes.
    var ul = document.createElement('ul');

    for (i = 0; i <= data.length - 1; i++) {
        var li = document.createElement('li');
        li.innerHTML = data[i];

        ul.appendChild(li);
    }

    cont.appendChild(ul);

}

function createOne(){


    let cdArray = [];
    const storeID = [98053 , 98007, 98077, 98055, 98011, 98046];
    const cdID = [123456, 123654, 321456, 321654, 654123,
        654321, 543216, 354126, 621453, 623451];
    let rds = Math.floor(Math.random()*storeID.length);
    var randomStore = storeID[rds];//why wont this run as a const

    // let oldDateObj = Date.now();
    // var newDateObj = new Date(oldDateObj.getTime() + diff*60000);

    if (randomStore = 98053){
      const randomSPID = randomInt(1,4);
      var rcd = Math.floor(Math.random()* cdID.legnth); //getting a random index
      var randomCD = cdID[rcd];
      const randomPrice = randomInt(5,15);
      const date = "test date";
      cdArray.push(randomStore,randomSPID,randomCD,randomPrice,date);
      simpFill(cdArray);

    }
    else if (randomStore = 98007){
        const randomSPID = randomInt(4,8);
        var rcd = Math.floor(Math.random()* cdID.legnth); //getting a random index
      var randomCD = cdID[rcd];
      const randomPrice = randomInt(5,15);
      cdArray.push(randomStore,randomSPID,randomCD,randomPrice);
      simpFill(cdArray);

    }
    else if (randomStore = 98077){
        const randomSPID = randomInt(9,12);
        var rcd = Math.floor(Math.random()* cdID.legnth); //getting a random index
        var randomCD = cdID[rcd];
        const randomPrice = randomInt(5,15);
        cdArray.push(randomStore,randomSPID,randomCD,randomPrice);
        simpFill(cdArray);

    }
    else if (randomStore = 98055){
        const randomSPID = randomInt(9,12);
        var rcd = Math.floor(Math.random()* cdID.legnth); //getting a random index
        var randomCD = cdID[rcd];
        const randomPrice = randomInt(5,15);
        cdArray.push(randomStore,randomSPID,randomCD,randomPrice);
        simpFill(cdArray);

    }
    else if (randomStore = 98011){
        const randomSPID = randomInt(9,12);
        var rcd = Math.floor(Math.random()* cdID.legnth); //getting a random index
        var randomCD = cdID[rcd];
        const randomPrice = randomInt(5,15);
        cdArray.push(randomStore,randomSPID,randomCD,randomPrice);
        simpFill(cdArray);

    }
    else if (randomStore = 98046){
        const randomSPID = randomInt(9,12);
        var rcd = Math.floor(Math.random()* cdID.legnth); //getting a random index
        var randomCD = cdID[rcd];
        const randomPrice = randomInt(5,15);
        cdArray.push(randomStore,randomSPID,randomCD,randomPrice);
        simpFill(cdArray);

    }


}

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
        // clear prior data
    var divMovieList = document.getElementById("divMovieList");
    while (divMovieList.firstChild) {    // remove any old data so don't get duplicates
        divMovieList.removeChild(divMovieList.firstChild);
    };

    var ul = document.createElement('ul');
    cddA = data;
    cddA.forEach(function (elements,) {   // use handy array forEach method
        var li = document.createElement('li');
        li.innerHTML = element.StoreID + "  &nbsp &nbsp  &nbsp &nbsp "
        + element.SalesPersonID + " &nbsp &nbsp  &nbsp &nbsp  " + element.CdID + " &nbsp &nbsp  &nbsp &nbsp  "+element.PricePaid+" &nbsp &nbsp  &nbsp &nbsp  "+element.Date;
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
      .then(json => console.log(json))
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



