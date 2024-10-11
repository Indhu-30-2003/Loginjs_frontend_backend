const express=require("express")

const app=express()
const username="Indhu"
const password=1234

app.get("/login",function(req,res){
    console.log(req.query.username,req.query.password)
    if(req.query.username==username && req.query.password==password){
        res.send("Login Successful")
    }
    else{
        res.send("Login Unsuccessful")
    }
   

})
app.post("/login",function(req,res){
    console.log(req.body.username,req.body.password)
    if(req.body.username==username && req.body.password==password){
        res.send("Login Successful")
    }
    else{
        res.send("Login Unsuccessful")
    }
   

})

app.listen(3000,function(){
    console.log("server started")
})