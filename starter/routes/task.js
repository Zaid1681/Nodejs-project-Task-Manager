const express = require("express")
const router = express.Router()
const  {getAllTasks, createTask, updateTask, getTask, deleteTask} = require("../controller/task")


//specifying which request must come at which routes
router.route("/").get( getAllTasks).post(createTask)
router.route("/:id").patch(updateTask).get(getTask).delete(deleteTask)


module.exports = router;