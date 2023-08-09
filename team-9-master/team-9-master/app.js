MongoClient = require('mongodb').MongoClient;
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const { devNull } = require('os');
const { GridFSBucket } = require('mongodb');
const { redirect, sendFile } = require('express/lib/response');
// const url = 'mongodb://localhost:27017/';
const databasename = 'firstdb';
const session = require('express-session');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const url = "mongodb+srv://team9:team9@cluster0.vb8fvg4.mongodb.net/?retryWrites=true&w=majority";
app.get('/', function (req, res) {
    res.sendFile(__dirname+"/home.html")
});

app.get('/api/v1/startup', (req, res) => {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db('team9');
        dbo.collection("startup").find().toArray(function(err,data){
            if (err) throw err;
            res.json(data)
            db.close;
        });
    }) 
})

app.post('/api/v1/startup', (req, res) => {
    res.send("success")
    console.log(req.body)
    

    //to create data from db

    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db('team9');

        var myobj = {  name: "1001",startup:"blah blah",member:"1", idea:"demo"};
        dbo.collection("startup").insertOne(myobj,function(err,res){
                if (err) throw err;
                console.log("1 document inserted");
                db.close;
            });
    });
  })

  app.put('/api/v1/startup', (req, res) => {
    res.send("success")
    console.log(req.body)

    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db('team9');
 
        var myobj = { "$set": {  name: "1002", startup:"blah blah 2222",member:"1=3", idea:"demo11"} };
        dbo.collection("startup").updateOne({_id: req.body._id}, myobj,function(err,res){
                if (err) throw err;
                console.log("1 document inserted");
                db.close;
            });
    });
  })

  app.delete('/api/v1/startup', (req, res) => {
    // res.send("success")
    console.log(req.body)
    //to create data from db

    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db('team9');
        dbo.collection("startup").deleteOne({_id: req.body._id},function(err, data){
                if (err) throw err;
                console.log("1 document inserted");
                res.json({"detail":"deleted succesfully"})
                db.close;
            });
    });
  })


app.listen(3000, function () {
    console.log('app listening on port 3000!');
});
