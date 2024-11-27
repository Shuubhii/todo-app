// write basic express noilerplate code
// with express.json( middleware)
const express= require("express");
const { createtodos , updatetodos } = require("./types.js")
const app  = express();

app.use(express.json())

app.post("/todo", function(req,res){

    const createpayload = req.body;
    const parsedpaylod = createtodos.safeParse(createpayload);
    if (!parsedpaylod.success){
        res.status(411).json({
            msg: "You sent wrong inputs"
        })
        return 
    }
    // insert to mongodb
})

app.get("/todos", function(req,res){

})

app.put("/completed",function(req,res){

    const updatepayload = req.body;
    const parsedpayload = updatetodos.safeParse(updatepayload);
    if (!parsedpaylod.success){
        res.status(411).json({
            msg: "You sent wrong inputs"
        })
        return 
    }



})

