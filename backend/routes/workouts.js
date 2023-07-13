const express = require("express")
const router = express.Router()

const { 
  
  createWorkout,
  getWorkout,
  getWorkouts,
  deleteWorkout,
  updateWorkout

} = require("../controllers/workoutController")

// to GET all workouts
router.get("/", getWorkouts)


// to GET a single workout
router.get("/:id", getWorkout)

// POST a workout
router.post("/", createWorkout)

// DELETE a workout
router.delete("/:id", deleteWorkout)

// UPDATE a workout
router.patch("/:id", updateWorkout)




module.exports = router