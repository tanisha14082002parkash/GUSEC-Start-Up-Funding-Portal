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
// const emailjs = require('emailjs');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))
app.engine("html", require("ejs").renderFile)


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const url = "mongodb+srv://team9:team9@cluster0.vb8fvg4.mongodb.net/?retryWrites=true&w=majority";
// app.get('/', function (req, res) {
//     res.sendFile(__dirname+"/home.html")
// });
// app.get('/api/v1/startup', (req, res) => {
//     MongoClient.connect(url, function (err, db) {
//         if (err) throw err;
//         var dbo = db.db('team9');
//         dbo.collection("startup").find().toArray(function(err,data){
//             if (err) throw err;
//             res.json(data)
//             db.close;
//         });
//     }) 
// })
app.get('/',function(req,res){
    res.sendFile(__dirname+"/section5.html")
})

app.get('/section5admin',function(req,res){
    res.sendFile("http://localhost:4248/show_admin_request")
})

// app.post('/home', (req, res) => {
    
//     //to create data from db

//     MongoClient.connect(url, function (err, db) {
//         if (err) throw err;
//         var dbo = db.db('team9');
//         var name_1=req.body.username;
//         var phoneNumber = req.body.phoneNumber;
//         var address = req.body.address;
//         var institutionName = req.body.institutionName;
//         var email_1 = req.body.email;
//         var startupName = req.body.institutionName;
//         var startupIdea = req.body.startupIdea;
//         var firmName = req.body.startupIdea;
//         var cofounder = req.body.cofounder;
//         var link = req.body.link;

//         var myobj = {  'name': name_1,startup:"blah blah",member:"1",'phoneNumber' : phoneNumber,'address' : address,'institutionName' : institutionName,'email' : email_1,'startupName' : startupName,'startupIdea' : startupIdea,'firmName' : firmName,'cofounder' : cofounder,'link' : link,idea:"demo"};
        
//         const min_val=11111111;
//         const max_val=99999999;
    
//     var app_no=Math.floor(Math.random() * (max_val - min_val + 1)) + min_val;
//     app_no=app_no+202200000000;
//           var templateParams = {
//             to_email: email_1,
//             to_name: name_1,
//             message: `Your Application has been submitted successfully..\n Your Application Number is : ${app_no}`
//         };
//           emailjs.send('service_asunz8s','template_x8fmlri', templateParams, 'Ysay8aZzSm4SPIKQT').then(
//             function (response) {
//               console.log(response.status, response.text);
//             },
//             function (err) {
//               console.log(err);
//             }
//           );
        
//         dbo.collection("startup_registration").insertOne(myobj,function(err,res){
//                 if (err) throw err;
//                 console.log("1 document inserted");
//                 res.status(200).send("Successfully Registered.")
//                 db.close;
//             });
//         });
//     })

  app.put('/request_grant/update', (req, res) => {
    // res.send("success")
    console.log(req.body)
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db('team9');
        dbo.collection("request_grant").findOne({selection: req.body.selection}, function(err,data){
          console.log(data, req.body.selection)
        })
        // var myobj = ;
        dbo.collection("request_grant").updateOne({selection: req.body.selection }, { $set: {  status: req.body.status } }, function(err,data){
                if (err) throw err;
                console.log("1 document updated");
                db.close;
                res.json({message: "updated"})
            });
    });
  })
//   app.delete('/api/v1/startup/delete', (req, res) => {
//     // res.send("success")
//     console.log(req.body)
//     //to create data from db

//     MongoClient.connect(url, function (err, db) {
//         if (err) throw err;
//         var dbo = db.db('team9');
//         //to delete
//         var myquery={usernmae:"shah"}
//         dbo.collection("startup").deleteOne(myquery,function(err,obj){
//             if (err) throw err;
//             console.log('1 document deleted');
//             db.close();
//         });
//     });
//   })
app.post('/request_for_grant', (req, res) => {
    
  MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db('team9');
      var mydate_1=req.body.mydate;
      var selection_1=req.body.selection;
      var amount_1=req.body.Amount;
      var description_1 = req.body.Description;
      var myobj = {  date: mydate_1,selection:selection_1,amount:amount_1,description:description_1,status:"requested"};
      dbo.collection("request_grant").insertOne(myobj,function(err,result){
              if (err) throw err;
              console.log("1 document inserted");
              // res.send("success")
              db.close;
          });
      console.log(myobj)
      });
      res.send("Success");
  })

  app.get('/show_admin_request', (req, res) => {
    
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db('team9');
        var query = { status: "requested"};
        dbo.collection("request_grant").find(query).toArray(function(err,results){
                if (err) throw err;
                // res.send("success")
                
                var n=results.length;
                console.log(n);
                db.close;
                res.render(__dirname+"/section5admin.html",{result:results});
                
            });
        });
        
    })

app.listen(4248, function () {
    console.log('app listening on port 4248!');
});