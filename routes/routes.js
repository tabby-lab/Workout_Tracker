const path=require("path")
const db=require("../models")
function routes(app){
     app.get("/", function(req,res){
         res.sendFile(path.join(__dirname,"../public/index.html"))
     })
     app.get("/exercise", function(req,res){
         res.sendFile(path.join(__dirname,"../public/exercise.html"))
    })
    app.get("/stats", function(req,res){
        res.sendFile(path.join(__dirname,"../public/stats.html" ))
    })


    app.get("/api/workouts",function(req,res){
        db.Workout.find({}).then(function(data){
            res.json(data)
        })
        
    })

    app.post("/api/workouts", function(req,res){
        const newExercise=req.body
        db.Workout.create(newExercise).then(function(data){
            res.json(data)
        })
    })
      
   app.put("/api/workouts/:id", function(req,res){
       const newExercise=req.body
       const id=req.params.id
       db.Workout.findOneAndUpdate(
        { _id: id }, 
        { $push: { exercises: newExercise  } },
       function (error, success) {
             if (error) {
                 console.log(error);
             } else {
                 console.log(success);
                 res.send("success")
             }
         });
   })

   app.get("/api/workouts/range", function(req,res){
       db.Workout.find({}).then(function (data){
        res.json(data)
       })
   })

}

module.exports=routes