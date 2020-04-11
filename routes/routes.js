const path=require("path")
function routes(app){
     app.get("/", function(req,res){
         res.sendFile(path.join(__dirname,"../public/index.html"))
     })
}

module.exports=routes