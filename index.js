const express = require("express");
const mongoose = require('mongoose');
const app = express();
// const Cors = require("Cors");
const path = require('path');
require('dotenv').config();

app.use(express.json());
// app.use(Cors());

mongoose.connect(process.env.MONGODB,
{
    useNewUrlParser:true,
});

const movieRouter = require("./Routes/movies.routes");
app.use("/", movieRouter);

const userRouter = require("./Routes/user.routes");
app.use("/user", userRouter);

// app.use(express.static(path.join(__dirname, 'client/build')))
// app.get('*', function(req,res){
//     res.sendFile(path.join(__dirname, "client/build/index.html"));
// });

// __dirname = path.resolve();
// if(process.env.NODE_ENV==='production'){
//     app.use(express.static(path.join(__dirname,'/client/build')));

//     app.get('*', (req,res)=>{
//         res.sendFile(path.resolve(__dirname,'client','build','index.html'))
//     })
// }else{
//     app.get('/', (req,res)=>{
//         res.send("API is Running...");
//     });
// }
app.get("/", (req, res)=>{
    res.send("Server running")
})


app.listen(process.env.PORT || 3003, ()=>{
    console.log("Server is running at 3000");
})
