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
        res.json(bestMatch);
    });

    app.post("/api/friends", function (req, res) {
        var differenceScores = 0;
        var userData = req.body;
        var bestMatch = {
            name: "",
            photo: "",
            scores: Infinity
        }
        for (var i = 0; i < friends.length; i++) {
            var tempFriend = friends[i];

            for (var j = 0; j < tempFriend.scores.length; j++) {
                var friendScores = userData.scores[j];
                var tempFriendScore = tempFriend.scores[j];

                differenceScores += Math.abs(parseInt(tempFriendScore) - parseInt(friendScores));
                console.log(differenceScores);
            }

            if (differenceScores <= bestMatch.scores) {
                bestMatch.name = tempFriend.name;
                bestMatch.photo = tempFriend.photo;
                bestMatch.scores = differenceScores;
            }
        }

        console.log("Making a post call to add new friend...");
        friends.push(userData);
        res.json(bestMatch);
        // $("#match-img").attr("src", data.photo);
        console.log(bestMatch.name);
        console.log(bestMatch.photo);
    });
};
