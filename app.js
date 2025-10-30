const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const studentRoutes=require('./routes/studentRoutes');

const app=express();

//mongodb connection

mongoose.connect('mongodb://localhost:27017/studentDB',
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    }
).then(()=>
{
    console.log('mongo connected succesfully');
}).catch((err)=>
{
    console.log(err);
})

//middleware

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.set('view engine','ejs');;

//routes

app.use('/',studentRoutes);


//server
const PORT=3000;
app.listen(PORT,()=>
{
    console.log(`server is ruuninh on http://localhost:${PORT}`);
})