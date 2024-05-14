const mongoose= require("mongoose")
require("dotenv").config()
//const url= `mongodb://127.0.0.1:27017/newDB`
const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL,
                    {useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=>{
        console.log("DB successfull")
    })
    .catch((error)=> {
        console.log("Issue in Db")
        console.error(error.message)
        process.exit(1)
    })
}
module.exports= dbConnect