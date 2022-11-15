require("./db/connect")
const express = require("express");
const app = express();
const port = 5001;
const task = require("./routes/task")
const connectMongo = require("./db/connect"); //returns promise
require("dotenv").config();//invoke config 

app.get("/hello",(req,res)=>{
    res.send("hello homepage this is zaid khan");
})


app.use(express.json()); //imp to run the json file MIDDLEWARE
app.use("/api/v1/task" , task) //middleware multiple routes can be there


//Routes of app 
// app.get("/api/v1/tasks");   -get all the tasks
// app.post("/api/v1/tasks")    - create a new tasks
// app.get("/api/v1/task/:id")  -get a single task
// app.patch("/api/v1/task/:id")    -update task
// app.delete("/api/v1/tasks/:id")  -delete task


//to handle promise write it into the try catch block
const start = async ()=>{
    try {
        await connectMongo(process.env.MONGO_URI)
        console.log("sucessfully connected to the mongo")
        
        app.listen(port , ()=>{
            console.log(`App is listening at the port of ${port} `)
        })
    } catch (error) {
        console.log(error)
        
    }
}

start() //remember to call the start function else the function of connection will not execute