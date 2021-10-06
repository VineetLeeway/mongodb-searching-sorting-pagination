const express = require('express');
const userRoute = require('./routes/userRoute');
const dotenv= require('dotenv');
const connectDb = require('./config/db');
dotenv.config()

connectDb();

const app = express();
const PORT = 8000;

app.use(express.json())
app.use('/',userRoute)

app.listen(PORT,()=>{
    console.log('Server is runnong on PORT '+ PORT );
})