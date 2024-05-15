const Todo= require("../models/Todo")
exports.deleteTodo= async(req, res) => {
   try{
    const {id}= req.params;
    const{title, description}= req.body
     await Todo.findByIdAndDelete(id)
    res.status(200).json({
        status: true,
        message: `todo data with id ${id} deleted successfully`
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