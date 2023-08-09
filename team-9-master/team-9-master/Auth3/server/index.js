var express=require('express');
var app=express();
var url=require('url');
var axios=require('axios');
var MongoClient=require('mongodb').MongoClient;
var cors=require("cors");
app.use(cors());




app.post('/register',function(req,res){
console.log('Registration Received');
MongoClient.connect('mongodb+srv://team9:team9@cluster0.vb8fvg4.mongodb.net/?retryWrites=true&w=majority',{useUnifiedTopology:true},function(err,db){
if(err){throw err;}
var dbo=db.db('team9');
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
MongoClient.connect('mongodb+srv://team9:team9@cluster0.vb8fvg4.mongodb.net/?retryWrites=true&w=majority',{useUnifiedTopology:true},function(err,db){
if(err){throw err;}
var dbo=db.db('team9');
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
MongoClient.connect('mongodb+srv://team9:team9@cluster0.vb8fvg4.mongodb.net/?retryWrites=true&w=majority',{useUnifiedTopology:true},function(err,db){
if(err){throw err;}
var dbo=db.db('team9');
var obj=url.parse(req.url,true).query;
console.log(obj);
console.log('user is ');
console.log(obj.users);
console.log('pass is ');
console.log(obj.pass);
var crr={'user':obj.users};
dbo.collection('startup').find(crr).toArray(function(err,res1){
if(err){throw err;}
res.setHeader('Access-Control-Allow-Origin','*');
if(res1.length==0){
console.log('User isnt registered...');
res.status(201).send('didnt register');
}else{
var found=0;
var found_at=0;
for(var i=0;i<res1.length;i++){
if(res1[i].pass==obj.pass){found=1;found_at=i;}
}


if(found==0){
console.log('Incorrect Password');
res.status(202).send('incorrect password');
}else{

if(res1[found_at].isApproved=='approved'){
res.status(200).send('User credentials are correct');}
else if(res1[found_at].isApproved=='rejected'){
res.status(208).send('Idea Rejected');
}else{
res.status(209).send('Idea under Process');
}
}
}
});


});


});




app.post('/loginasadmin',function(req,res){
console.log('Admin Login Request Received');
MongoClient.connect('mongodb+srv://team9:team9@cluster0.vb8fvg4.mongodb.net/?retryWrites=true&w=majority',{useUnifiedTopology:true},function(err,db){
if(err){throw err;}
var dbo=db.db('team9');
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





app.post('/startupregis', (req, res) => {
    
   

    MongoClient.connect('mongodb+srv://team9:team9@cluster0.vb8fvg4.mongodb.net/?retryWrites=true&w=majority', function (err, db) {
        if (err) throw err;
        var dbo = db.db('team9');
        var obj=url.parse(req.url,true).query;
        var name_1=obj.name_1;
        var phoneNumber = obj.phoneNumber;
        var address = obj.address;
        var institutionName = obj.institutionName;
        var email_1 = obj.email_1;
        var startupName = obj.startupName;
        var startupIdea = obj.startupIdea;
        var firmName = obj.startupIdea;
        var cofounder = obj.cofounder;
        var link = obj.link;
	  var app_no=obj.app_no;
	
	  var user_name=startupName+'_'+name_1;
	  var pass=name_1+'@'+'123';

        var myobj = {  'name': name_1,startup:startupName,member:"1",'Application_No':app_no,'user':user_name,'pass':pass,isApproved:"notdecided",'phoneNumber' : phoneNumber,'address' : address,'institutionName' : institutionName,'email' : email_1,'startupName' : startupName,'startupIdea' : startupIdea,'firmName' : firmName,'cofounder' : cofounder,'link' : link,'idea':startupIdea};
        
        
        
        dbo.collection("startup").insertOne(myobj,function(err,result){
                if (err) {throw err};
                console.log("1 document inserted");
                
                res.status(200);
                res.send('https://www.google.com');
                                db.close();
            });
        });
    })



app.get('/dashboard',(req,res)=>{

MongoClient.connect('mongodb+srv://team9:team9@cluster0.vb8fvg4.mongodb.net/?retryWrites=true&w=majority', function (err, db) {
if (err) throw err;
var dbo = db.db('team9');
var obj=url.parse(req.url,true).query;
var table_name=obj.database;

dbo.collection(table_name).find({}).toArray(function(err, result) {
    if (err) throw err;
    res.status(200).send(result);
    db.close();
});

});

})




app.get('/accept',(req,res)=>{

MongoClient.connect('mongodb+srv://team9:team9@cluster0.vb8fvg4.mongodb.net/?retryWrites=true&w=majority', function (err, db) {
if (err) throw err;
var dbo = db.db('team9');
var obj=url.parse(req.url,true).query;
var table_name=obj.database;
var id1=obj.id;

dbo.collection(table_name).find({}).toArray(function(err, result) {
    if (err){ throw err };
    var startupname=result[id1].startupName;
    console.log(startupname);
    dbo.collection(table_name).update({'startupName':startupname},{$set:{isApproved:"approved"}},(errorr,results)=>{
if(errorr){throw errorr};
res.status(200).send(result);
db.close();
})
    
});

});

})


app.get('/about',(req,res)=>{
res.sendFile(__dirname+"/aboutus.html")
})

app.get('/contactus',(req,res)=>{
res.sendFile(__dirname+"/contactus.html")
})



app.get('/reject',(req,res)=>{

MongoClient.connect('mongodb+srv://team9:team9@cluster0.vb8fvg4.mongodb.net/?retryWrites=true&w=majority', function (err, db) {
if (err) throw err;
var dbo = db.db('team9');
var obj=url.parse(req.url,true).query;
var table_name=obj.database;
var id1=obj.id;

dbo.collection(table_name).find({}).toArray(function(err, result) {
    if (err){ throw err };
    var startupname=result[id1].startupName;
    console.log(startupname);
    dbo.collection(table_name).update({'startupName':startupname},{$set:{isApproved:"rejected"}},(errorr,results)=>{
if(errorr){throw errorr};
res.status(200).send(result);
db.close();
})
    
});

});

})


app.get('/about',(req,res)=>{
res.sendFile(__dirname+"/aboutus.html")
})

app.get('/contactus',(req,res)=>{
res.sendFile(__dirname+"/contactus.html")
})













console.log('server running at 1086');
app.listen(1086);

