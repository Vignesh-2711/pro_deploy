const express = require('express')
const app = express();
const mongoose = require('mongoose')
const productRouter = require('./Routes/ProductRoutes')

app.listen(5000,()=>{
    console.log('server is running..');
})
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('server started')
})

mongoose.connect('mongodb+srv://vigneshrao:Vignesh@mycluster.0p0cv.mongodb.net/?retryWrites=true&w=majority&appName=myCluster')
    .then(()=>console.log('DB connected..'))
    .catch((err) => console.log(err))
app.use("",productRouter);


