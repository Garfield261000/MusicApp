const express = require('express');
const app = express();

const cors = require("cors");

app.get('/', function (req, res) {
  return res.json("hi..")
});



app.listen(4000, ()=> console.log("Listening to port 4000"));