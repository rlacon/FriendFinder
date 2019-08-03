// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");
// var friendsData = require("../data/friendsData");



// ===============================================================================
// LOAD DATA
// ===============================================================================

//var tableData = require("../data/tableData");
//var waitListData = require("../data/waitinglistData");


// ===============================================================================
// ROUTING
// ===============================================================================
module.exports = function(app) {

    // API GET Requests
    // ---------------------------------------------------------------------------
    // Use axios to make this call
    app.post("/friends", function(req, res) {
        console.log("Making a post call to add new friend...");
        console.log(req);
        res.json(true);
    });
    

    // API POST Requests
    // ---------------------------------------------------------------------------
  
    // app.post("/friends", function(req, res) {
    
    // });
  
  };
  