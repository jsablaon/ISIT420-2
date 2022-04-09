let x = 2;
var express = require('express');
var router = express.Router();
var fs = require("fs");

let ServerOrderArray = [];
let ServerOrderObject = function (pStoreId, pSalesPersonId, pCdId, pPricePaid, pDate){
  this.StoreID = pStoreId,
  this.SalesPersonID = pSalesPersonId,
  this.CdID = pCdId,
  this.PricePaid = pPricePaid,
  this.Date = pDate
}

// my file management code, embedded in an object
fileManagerOrder  = {
  write: function() {
    let data = JSON.stringify(ServerOrderArray);    // take our object data and make it writeable
    fs.writeFileSync('ordersData.json', data);  // write it
  },
}

// start by creating data so we don't have to type it in each time
let ServerMovieArray = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html');
});

/* Add 500 new Order */
router.post('/Add500Order', function(req, res) {
  const newOrder = req.body;  // get the object from the req object sent from browser
  let newOrderObject = new ServerOrderObject(newOrder.StoreID, newOrder.SalesPersonID, newOrder.CdID, newOrder.PricePaid, newOrder.Date);
  console.log(newOrderObject, "new order object");
  ServerOrderArray.push(newOrderObject);  // add it to our "DB"  (array)
  console.log(`added 1 to server array ${ServerOrderArray.length}`);
  fileManagerOrder.write();
  // prepare a reply to the browser
  var response = {
    status  : 200,
    success : 'Added Successfully'
  }
  res.end(JSON.stringify(response)); // send reply
});

/* Add one new Order */
router.post('/AddOrder', function(req, res) {
  const newOrder = req.body;  // get the object from the req object sent from browser
  let newOrderObject = new ServerOrderObject(newOrder.StoreID, newOrder.SalesPersonID, newOrder.CdID, newOrder.PricePaid, newOrder.Date);
  console.log(newOrderObject, "new order object");
  ServerOrderArray.push(newOrderObject);  // add it to our "DB"  (array)
  console.log(`added 1 to server array ${ServerOrderArray.length}`);
  // prepare a reply to the browser
  var response = {
    status  : 200,
    success : 'Added Successfully'
  }
  res.end(JSON.stringify(response)); // send reply
});

module.exports = router;