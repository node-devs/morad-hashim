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

router.get('/getUser/:id',function(req,res){
   const id=req.params.id
    const users=usermodel .findById({_id:id}).exec()
    users.then((data)=>res.json(data))
    users.catch((err)=>res.json(err))
    
})

router.put('/updateUser/:id',function(req,res){
     const id=req.params.id
     const data=req.body
     const users=usermodel .findOneAndUpdate({_id:id},{$set:data}).exec()
     
     users.then(()=>res.send("user updated succesfuly"))
     users.catch((err)=>res.json(err))
     
 })

 router.delete('/deleteUser/:id',function(req,res){
    const id=req.params.id
    const users=usermodel .findByIdAndDelete({_id:id}).exec()
    
    users.then(()=>res.send("user deleted succesfuly"))
    users.catch((err)=>res.json(err))
    
})

module.exports=router