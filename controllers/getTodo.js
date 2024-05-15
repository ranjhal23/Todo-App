const Todo=require("../models/Todo")
exports.getTodo= async(req, res)=>{
    try{
        //fetch
        const todos= await Todo.find({})
        //response
        res.status(200)
        .json({
            success: true,
            data: todos,
            message: "data fetched"
        })
    }
    catch(e){
        console.error(e)
        res.status(500)
        .json({
            success: false,
            error: e.message,
            message: "Server error"
        })
        
    }
}
exports.getTodoById= async(req, res)=>{
    try{
        const id= req.params.id;
        const todo= await Todo.findById({_id:id})
        if(!todo){
            return res.status(400).json({
                success: false,
                message: "no data found"
            })
        }
        res.status(200).json({
            status: true,
            data: todo,
            message: `todo data with id ${id} fetched successfully`
        })

    }
    catch(e){
        console.error(e)
        res.status(500)
        .json({
            success: false,
            error: e.message,
            message: "Server error"
        })
    }
}