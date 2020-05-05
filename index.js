const express = require("express")
const routers = require("./routes")
const mongose = require("mongoose")
const { db_url,option} = require("./config")

const app=express()

mongose.connect(db_url,option,function (err){
    if (err) console.error(err)
    console.log("database connected")
})

app.use(express.json())
app.use(express.urlencoded())

app.use(routers)

app.listen(1249)
console.log("server started at port 1249")