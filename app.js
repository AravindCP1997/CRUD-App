const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const port = 
app.use(express.json());
app.use(cors());

const data = {
    name:"Aravind",
    age:28
}

app.get('/',(req,res)=>{
    res.json(data);
})

app.post('/',(req,res)=>{
    res.send('Saved');
})

app.listen(5000,()=>{
    console.log('server started..');
});