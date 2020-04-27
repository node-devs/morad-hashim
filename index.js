const express =require("express")
const routers = require("./routes")
const app=express()

app.use(express.json())
app.use(express.urlencoded())
app.use(routers)

app.listen(1249)
console.log("app start at port 12")