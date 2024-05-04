const express= require("express")
const cors=require("cors")
const mongoose= require("mongoose")
const productRouter=require('./Routers/productRouter')
const catalogRouter=require('./Routers/catalogRouter')
const adminRouter=require('./Routers/adminRouter')
const app= express()
require("dotenv").config()
app.use(express.json())
app.use(cors())
const port=5000
const uri=process.env.ATLAS_URI

app.use('/api/admin',adminRouter)
app.use('/api/products',productRouter)
app.use('/api/catalog',catalogRouter)
app.get('/', (req, res) => {res.send('Successful response.');});
app.listen(port,(res,req)=>
{
    console.log(`Sever running on port ${port}`)
})

mongoose.connect(uri,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    }) 
    .then(()=>console.log("mongoose connection established"))
    .catch((erorr)=>console.log("mongoose connection failed",erorr.message))