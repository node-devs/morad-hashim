const express =require("express")
const app=express()
app.get("/home",function(req,res){
    res.send("welcome to home page")
})
app.listen(123)
console.log("app start at port 123")