require('dotenv').config();
const DBschema = require('./DBschema/apiDbSchema');

const readAllRouter = require('./routes/readAllRouter');
const multitask = require('./routes/multitask');
const updateRouter = require('./routes/update');

const express = require('express');
const app = express();
const mongoose = require('mongoose'); // data base
const nodemailer = require('nodemailer'); // EMAIL


const port = process.env.PORT || 3030;
var server = app.listen(port, listening);



var ip = require("ip");
var ipvar = ip.address();


function listening() {console.log(`listening at ${ipvar}:${port}`)};


    

app.use(express.urlencoded({ extended: false})); // this is for read post data
app.use(express.json()); //this is to read json


//middleware

app.use('/multitask', multitask);
app.use('/update', updateRouter);
app.use('/readAll', readAllRouter); 
app.use(express.static('web'));
app.all('*', (req, res) => {res.status(404).send('<h1>404! Page not found</h1>');});// this ons in the end

var isoDateTime;
dateTime();
 
//DataBase
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true});
const db =  mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log(`Connected to database ${isoDateTime}`));


function dateTime(){
    var date = new Date();
    isoDateTime = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString()
    //console.dir(`Server run test ${isoDateTime}`);
}

function alive(){
    dateTime();
    console.dir(`Server run test ${isoDateTime}`);
}

setInterval(function () {alive();}, 10000);





async function firstAlarm(){
    try{
       const dbResults = await DBschema.find();

        var lastValueArr0 = dbResults[0].device.data.value.slice(-1)[0];
       console.log(lastValueArr0);

        
    } 
    catch (err) {
        console.log({message: err.message})
    }

};


