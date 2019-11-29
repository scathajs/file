const express = require("express");
const app = express();
const cors = require("cors");
const fileUpload = require("express-fileupload");

app.use(cors({ optionSuccessStatus: 200 }));
app.use(fileUpload());

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.post("/api/fileanalyse", function(req, res) {
  if (!req.files || !req.files.upfile) return res.send("No file found");
  res.json({
    name: req.files.upfile.name,
    type: req.files.upfile.mimetype,
    size: req.files.upfile.size
  });
});

var listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});