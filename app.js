let express = require("express");
let app = express();

app.use(express.static("dist"));

app.get("/", function(req, res) {
    res.sendFile("../dist/index.html");
});



app.listen(3000, function() {
    console.log("running at 3k")
});