
// environment vars
require("dotenv").config()


const express = require("express")
const mongoose = require("mongoose")
const workoutRoutes = require("./routes/workouts")


// express app
const app = express()

// middleware
app.use(express.json()) // to get req body

app.use( (req, res, next) => {
  console.log(req.method, req.path)
  next()
} )

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, ()=>{
      console.log("connected to DB and listening on port 4000");
    })
  })
  .catch((err) => {
    console.log(err);
  })


//routes
app.use("/api/workouts", workoutRoutes)


// listening on port 

