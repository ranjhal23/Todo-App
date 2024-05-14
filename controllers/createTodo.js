const Todo=require("../models/Todo")
exports.createTodo= async(req, res)=>{
    try{
        //extracting data
        const{title, description}=req.body
        const response= await Todo.create({title, description});
        res.status(200).json({
            success: true,
            data:response,
            message: "Data entry successful"
        })


    }
    catch(e){
        console.error(e)
        console.log(e)
        res.status(500).json({
            success: false,
            data: "internal server error",
            message: e.message
        })

    }
}