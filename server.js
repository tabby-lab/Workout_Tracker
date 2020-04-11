var express= require('express')
var app= express()

var port= process.env.PORT || 8080

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(express.static("public"))


var routes=require('./routes/routes')

routes(app)

var mongoose=require('mongoose')

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout")

app.listen(port,function(){
    console.log("app is listening http://localhost:" + port)
})
