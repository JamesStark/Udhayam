let express = require("express");
let app = express();
let path = require("path");

app.use(express.static(path.resolve(__dirname + "/assets")));

app.get("*", function(req, res) {
  res.sendFile(__dirname+"/index.html");
});

app.listen(process.env.PORT || 3000);
