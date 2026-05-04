
import express from "express";


const app = express();

app.get ("/", (req , res)=> {
    res.send(" This is home page :");

});
const port = 5000; 

app.listen(port,(err)=>{

    console.log(`This  code is lodded... ${port}`);

});