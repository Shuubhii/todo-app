const mongoose = require("mongoose")

// usually we add the mongodb url in the .env file
// mongodb://localhost:27017/todo

mongoose.connect("mongodb://localhost:27017/todo")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean

})

const todo = mongoose.model("todo",todoSchema)

module.exports={
    todo: todo
}
