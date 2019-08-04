// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// ===============================================================================

var friends = require("../data/friends");




// ===============================================================================
// ROUTING
// ===============================================================================
module.exports = function (app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    // app.post("/api/friends", function (req, res) {
    //     console.log("Making a post call to add new friend...");
    //     console.log(req);
    //     res.json(true);
    // });

    app.post("/api/friends", function (req, res) {
        console.log("Making a post call to add new friend...");
        friends.push(req.body);
        res.json(true);
    });
};
