

const express = require("express")

// express app
const app = express()


//routes
app.get("/", (req, res) => {
  res.json( {mssg : "welcome to the app"} )
})

// listening on port 
app.listen(4000, ()=>{
  console.log("listening on port 4000");
})

