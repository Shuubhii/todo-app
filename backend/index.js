// write basic express boilerplate code
// with express.json( middleware)
const express= require("express");
const { createtodos , updatetodos } = require("./types.js")
const todo = require("./db.js")
const app  = express();

app.use(express.json())

app.post("/todo", async function(req,res){

    const createpayload = req.body;
    const parsedpaylod = createtodos.safeParse(createpayload);
    if (!parsedpaylod.success){
        res.status(411).json({
            msg: "You sent wrong inputs"
        })
        return 
    }

    // insert to mongodb
    await todo.create({
        title: createpayload.title,
        description : createpayload.description,
        completed : false
    })
    res.json({ mas: "todo created"})
})

app.get("/todos", async function(req,res){

    const todos = await todo.find({})
    res.json({todos})

})

app.put("/completed",async function(req,res){

    const updatepayload = req.body;
    const parsedpayload = updatetodos.safeParse(updatepayload);
    if (!parsedpaylod.success){
        res.status(411).json({
            msg: "You sent wrong inputs"
        })
        return 
    }

    await todo.update({
        _id: req.body.id},
        {completed: true
    })
    res.json({
        msg: "todo marked as completed"
    })
})

