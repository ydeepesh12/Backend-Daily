const express=require("express");
const app=express();
app.get("/",(req,res)=>{
    res.send("Hello Deepesh")
})

app.get("/contact",(req,res)=>{
    res.send("Heloo from contact route")
})

app.listen(3000,()=>console.log("server is running on port 3000"));