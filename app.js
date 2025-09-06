const express = require('express');
const mongoose = require('mongoose');
const app = express();

const port = 
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('This is our response for this Get Request');
})

app.post('/',(req,res)=>{
    res.send('Saved');
})

app.listen(5000,()=>{
    console.log('server started..');
});