const router =require ("express").Router()
router.get("/books",function(req,res){
    res.send("we are now in new module ")
})
router.post("/books",function(req,res){
    res.json({
        msg:"you have aded new book",
        data: req.body,
    })
})
module.exports=router