var express=require('express');
var app=express();
var url=require('url');
var axios=require('axios');
var MongoClient=require('mongodb').MongoClient;
var cors=require("cors");
app.use(cors());




app.post('/register',function(req,res){
console.log('Registration Received');
MongoClient.connect('mongodb://0.0.0.0:27017/',{useUnifiedTopology:true},function(err,db){
if(err){throw err;}
var dbo=db.db('gusec');
var obj=url.parse(req.url,true).query;
console.log(obj);
var crr={'name':obj.name,'email':obj.email,'fname':obj.fname,'cname':obj.cname,'team_num':obj.team_num,'type_of_inc':obj.type_of_inc,'legal_name':obj.legal_name,'dir_name':obj.dir_name,'fund_status':obj.fund_status,'fund_req':obj.fund_req,'reg_addr':obj.reg_addr,'pan_no':obj.pan_no,'bank_name':obj.bank_name,'bank_no':obj.bank_no,'ifsc':obj.ifsc,'faci_req':obj.faci_req,'freq_uti':obj.freq_uti,'mobileno':obj.mobileno,'team_mem':obj.team_mem,'fund':obj.fund,'idea':obj.idea,'user':obj.users,'pass':obj.pass,'repass':obj.repass,'isApproved':false,'isFunded':false};
dbo.collection('users').insertOne(crr,function(err,res1){
if(err){throw err;}
res.setHeader('Access-Control-Allow-Origin','*');
res.status(200);
res.send('https://www.google.com');

});
});
});


app.post('/registerasadmin',function(req,res){
console.log('Admin Registration Received');
MongoClient.connect('mongodb://0.0.0.0:27017/',{useUnifiedTopology:true},function(err,db){
if(err){throw err;}
var dbo=db.db('gusec');
var obj=url.parse(req.url,true).query;
console.log(obj);
var crr={'name':obj.name,'email':obj.email,'mobileno':obj.mobileno,'user':obj.users,'pass':obj.pass,'repass':obj.repass};
dbo.collection('admins').insertOne(crr,function(err,res1){
if(err){throw err;}
res.setHeader('Access-Control-Allow-Origin','*');
res.status(200);
res.send('https://www.google.com');

});
});
});



app.post('/login',function(req,res){
console.log('Login Request Received');
MongoClient.connect('mongodb://0.0.0.0:27017/',{useUnifiedTopology:true},function(err,db){
if(err){throw err;}
var dbo=db.db('gusec');
var obj=url.parse(req.url,true).query;
console.log(obj);
console.log('user is ');
console.log(obj.users);
console.log('pass is ');
console.log(obj.pass);
var crr={'user':obj.users};
dbo.collection('users').find(crr).toArray(function(err,res1){
if(err){throw err;}
res.setHeader('Access-Control-Allow-Origin','*');
if(res1.length==0){
console.log('User isnt registered...');
res.status(201).send('didnt register');
}else{
var found=0;
for(var i=0;i<res1.length;i++){
if(res1[i].pass==obj.pass){found=1;}
}


if(found==0){
console.log('Incorrect Password');
res.status(202).send('incorrect password');
}else{
res.status(200).send('User credentials are correct');
}
}
});


});


});




app.post('/loginasadmin',function(req,res){
console.log('Admin Login Request Received');
MongoClient.connect('mongodb://0.0.0.0:27017/',{useUnifiedTopology:true},function(err,db){
if(err){throw err;}
var dbo=db.db('gusec');
var obj=url.parse(req.url,true).query;
console.log(obj);
console.log('admin is ');
console.log(obj.users);
console.log('pass is ');
console.log(obj.pass);
var crr={'user':obj.users};
dbo.collection('admins').find(crr).toArray(function(err,res1){
if(err){throw err;}
res.setHeader('Access-Control-Allow-Origin','*');
if(res1.length==0){
console.log('User isnt registered...');
res.status(201).send('didnt register');
}else{
var found=0;
for(var i=0;i<res1.length;i++){
if(res1[i].pass==obj.pass){found=1;}
}


if(found==0){
console.log('Incorrect Password');
res.status(202).send('incorrect password');
}else{
res.status(200).send('User credentials are correct');
}
}
});


});


});








console.log('server running at 1086');
app.listen(1086);

