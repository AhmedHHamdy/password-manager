const express = require('express');
const app = express();
const mongoose = require('mongoose')
const mongoStore = require('connect-mongo')
const cors = require('cors');
const mainRoutes = require('./routes/main')
const connectDB = require('./config/database')
app.use(cors());
app.use(express.json())



// env config
require('dotenv').config({path: './config/.env'})

connectDB()

app.use('/', mainRoutes)

app.listen(process.env.PORT, () => {
    console.log("Server is on port 3000");
})
