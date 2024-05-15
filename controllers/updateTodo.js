const Todo= require("../models/Todo")
exports.updateTodo= async(req, res) => {
   try{
    const {id}= req.params;
    const{title, description}= req.body
    const todo= await Todo.findByIdAndUpdate(
        {_id:id},
        {title, description, updatedAt:Date.now()},

    )
    if(!todo){
        return res.status(400).json({
            success: false,
            message: "no data found"
        })
    }
    res.status(200).json({
        status: true,
        data: todo,
        message: `todo data with id ${id} updated successfully`
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