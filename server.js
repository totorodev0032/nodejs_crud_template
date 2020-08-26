const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');

// Route files
const bootcamps = require('./routes/bootcamps');

// Load env vars
dotenv.config({path: './config/config.env'});

// connect to database
connectDB();


const app = express();

// Body Parser
app.use(express.json());




// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Mount routers
app.use('/api/v1/bootcamps', bootcamps);


// For routing in express. As you see, routing in express
// is much easier. Have fun
// app.get('/', (req, res) => {
    // this will show content type text/html.
    // res.send('hello there'); 

    //this will show content type html/text as same.
    //you can send whole html file too.
    // res.send('<h1>hello there</h1>');

    // you can send javascript object too as jsontype
    // res.send({name : "Nagendra"});

    // It will give the same result as above
    // res.json({name: "Nagendra Kumar"});

    // It will help to send status
    // res.statusCode(400);

    //send status code with some message
    // res.status(400).json({success:"fail"});

// })



const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, console.log(`SERVER runnig in ${process.env.NODE_ENV} mode on ${PORT}`.yellow.bold));

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}.red`);
    // Close the server & exit process
    server.close(() => process.exit(1));
})