const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())

var username = "Ramana"
var password = 123

app.use(express.json())//For post (Middleware)
app.use(express.urlencoded({extended : true}))//Middleware

app.post("/login",function(req,res)
{
    console.log(req.body.username)
    if(req.body.username === username &Number( req.body.password) == password)
    {
        res.send(true)
    }
    else{
        res.send(false)
    }
})

app.listen(5000,function(){
    console.log("server started ...")
})