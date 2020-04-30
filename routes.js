const router =require ("express").Router()
const mogoose =require("mongoose")
const userschema = new mogoose.Schema({
    username:{ type:String },
    phone:{ type:Number },
    email:{ type:String },
})
const usermodel=mogoose.model("users",userschema)
router.post("/addUser",function(req,res){
    const data=req.body
    new usermodel(data).save()
    res.send("user added to database")
})

router.get("/getUser",function(req,res){
   
    const users=usermodel .find().exec()
    users.then((data)=>res.json(data))
    users.catch((err)=>res.json(err))
    
})
module.exports=router