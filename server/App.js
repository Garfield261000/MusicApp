const express = require('express');
const app = express();
require ('dotenv'). config ();

const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors({origin : true}));
app.use(express.json());

app.get('/', function (req, res) {
  return res.json("hi..")
});

//user authentication route
const userRoute = require("./routes/auth");
app.use("/api/users/",userRoute);

//artists routes
const artistRoutes = require("./routes/artists");
app.use("/api/artists/",artistRoutes);

//albums routes
const albumRoutes = require("./routes/albums");
app.use("/api/albums/",albumRoutes);

//songs routes
const songRoutes = require("./routes/songs");
app.use("/api/songs/",songRoutes);

mongoose.connect(process.env.DB_URL,{useNewUrlParser : true});
mongoose.connection
.once("open", ()=> console.log("Connected"))
.on("error", (error)=> console.log(`Error: ${error}`))

app.listen(4000, ()=> console.log("Listening to port 4000"));