let express = require("express");
let app = express(); 

app.use(express.static("dist"));

app.get("/", function(req, res) {
 res.sendFile("../dist/index.html");
});


app.listen(process.env.PORT || 3000, function() {
   return true;
});
