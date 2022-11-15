const mongoose = require("mongoose")


//creating schema
const TaskSchema = new mongoose.Schema({
    name : String ,
    completed :  Boolean,

})

//creating a model of schema
module.exports  = mongoose.model("Task" , TaskSchema )  //craeting a cllection/database with the name as a task 