const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname,'dist')));

const port = 3000;
app.use(express.json());
app.use(cors());

const data = {
    name:"Aravind",
    age:28
}

app.get('/api',(req,res)=>{
    res.json(data);
})

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'dist','index.html'))
})

app.post('/api',(req,res)=>{
    res.send('Saved');
})

app.listen(5000,()=>{
    console.log('server started..');
});