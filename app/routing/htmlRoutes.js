// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");


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
  
    app.get("/", function(req, res) {
      res.sendFile(path.join(__dirname, "./../public/index.html"));
    });
  
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "./../public/survey.html"));
    });
  
    // API POST Requests
    // ---------------------------------------------------------------------------
  
    // app.post("/friends", function(req, res) {
    
    // });
  
  };
  