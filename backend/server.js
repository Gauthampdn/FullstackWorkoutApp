
// environment vars
require("dotenv").config()


const express = require("express")
const workoutRoutes = require("./routes/workouts")


// express app
const app = express()

// middleware

app.use(express.json()) // to get req body

app.use( (req, res, next) => {
  console.log(req.method, req.path)
  next()
} )


//routes
app.use("/api/workouts", workoutRoutes)


// listening on port 
app.listen(process.env.PORT, ()=>{
  console.log("listening on port 4000");
})

