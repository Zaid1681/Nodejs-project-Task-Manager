//Middle Ware   
const Task = require("../models/Tasks")
const getAllTasks =(req,res)=>{
    res.send("all the tasks!!!!")

}
const createTask = async (req,res)=>{
    // created task
    // const task = TaskSchema.create({"name" : "zaid" , "completed" :true });
    const task = await Task.create(req.body);
      
    res.status(201).json(task)  ;

}
const getTask =(req,res)=>{
    
    res.json({id: req.params.id})

}
const updateTask =(req,res)=>{
    res.send("update task")

}
const deleteTask =(req,res)=>{
    res.send("deleted task")

}


module.exports = {
    getAllTasks , createTask , updateTask , getTask , deleteTask
}


