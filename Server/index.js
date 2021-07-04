const express = require('express');

const helmet = require('helmet');
// const morgan = require('morgan');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const port = process.env.PORT || 5000;

const app = express();
dotenv.config();

const url = process.env.MONGO_URL;
mongoose.connect('mongodb+srv://codecial:codecialmongodbpassword@codecial.4fdwd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', 
{   
    useNewUrlParser: true,
    useUnifiedTopology: true
}, 
    () => {
    console.log('Connected to database');
});


app.listen(port, () => {
    console.log(`server running on port ${port}`);
})