const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//Import routes
const postRoutes = require('./routes/posts');

//App middleware
//Extracts the parameters from the UTF-8 encoded bodies(like JSON objects), parses it and makes it available req.body
app.use(bodyParser.json());
//Let unknown origin gets permission to access and load resources
app.use(cors());

//Route middleware
app.use(postRoutes);

//DB configuration
const PORT = 8000;
const DB_URL = 'mongodb+srv://twg:twg123@mernapp.j8d5sa8.mongodb.net/?retryWrites=true&w=majority'

mongoose.set('strictQuery', true);

mongoose.connect(DB_URL)
.then(()=>console.log(`DB connected`))
.catch((err)=>console.log(`DB connection error`,err));

app.listen(PORT, ()=>{
    console.log(`App is running on PORT:${PORT}`)
});