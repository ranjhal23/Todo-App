const express= require("express");
const app= express();
require("dotenv").config()
const PORT= process.env.PORT || 4000
app.use(express.json())
const todoRoutes= require("./routes/Todos")
app.use("/api/v1", todoRoutes)
app.listen(PORT, ()=>{
    console.log(`server started at ${PORT} successfully`)
})
const dbConnect= require("./config/database")
dbConnect()
app.get('/', (req, res)=>{
    res.send(`<h1>This is homepage</h1>`)
})