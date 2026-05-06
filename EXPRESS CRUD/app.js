import express from "express";
import HttpError from "./middleware/app.js";

const app = express();

const TaskList =[{

    id:1,name:"alice",city:"america",  
},
{
    id:2,name:"prince",city:"dubai",

}];

app.use(express.json());

app.get("/TaskList",(req,res)=>{

    if(TaskList.length ===0 ){
        
        return res.status(404).json({
            success:false,
            message:"no task found"
        });
    }
    res.json({
        success:true,
        data:TaskList
    });
});
app.get("/",(req,res)=>{
    res.send("This is home page");
});
app.use((req,res,next)=>{
    return next(new HttpError("route is not found",404));
});
app.use((error,req,res,next)=>{
    if(res.headersSent){
        return next(error);
    }
    res.status(error.statusCode || 500).json({
        message:error.message || "something went wrong",
    });
});
const port = 5000;
app.listen(port,(err)=>{
    if(err){
        console.error("This page is not found",err);
    }
    console.log(`server is running ${port}`);
});