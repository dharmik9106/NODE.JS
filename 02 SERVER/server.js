import http from "http"; 

const server = http.createServer((req,res)=>{ 
    res.write("hello DHARMIK ,How are you ? ");  
    res.end(); 
});

const port = 5021; 

server.listen(port,(err)=>{
    if(err){       
        return console.log("node is not response");
    }
    console.log(`Node is response to Work server ${port}`);  
});