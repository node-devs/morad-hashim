const express =require("express")
const app=express()
app.get("/",function(req,res){
    res.send("welcome "+req.query.name)
})
app.listen(12)
console.log("app start at port 12")