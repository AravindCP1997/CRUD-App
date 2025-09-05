const express = require('express');
const mongoose = require('mongoose');
const app = express();

const port = 
app.use(express.json());

const url = 'mongodb://localhost/mynewdatabase';
mongoose.connect(url,{useNewUrlParser:true});

const con = mongoose.connection;

con.on('open',()=>{
    console.log('Connected');
});

const bookSchema = new mongoose.Schema({
    title:String,
    year:Number
})

const book = new mongoose.model('book',bookSchema);


app.get('/',(req,res)=>{
    findbook('2022').then(data=>{
        res.json(data);
    })
})

app.post('/',(req,res)=>{
    var receivedbook = req.body;
    var newBook = new book(receivedbook);
    newBook.save();
    res.send('Saved');
})

app.listen(5000,()=>{
    console.log('server started..');
});

async function findbook(year){
    var bookfind = await book.find({year:year}).exec();
    return bookfind;
}