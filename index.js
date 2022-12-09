const express = require("express");
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const Cors = require("Cors");
require('dotenv').config();

app.use(express.json());
app.use(Cors());

mongoose.connect(process.env.MONGODB,
{
    useNewUrlParser:true,
});

const movieRouter = require("./Routes/movies.routes");
app.use("/", movieRouter);

const userRouter = require("./Routes/user.routes");
app.use("/user", userRouter);

app.get("/", (req, res)=>{
    res.send("Server running")
})


app.listen(process.env.PORT || 3000, ()=>{
    console.log("Server is running at 3000");
})
