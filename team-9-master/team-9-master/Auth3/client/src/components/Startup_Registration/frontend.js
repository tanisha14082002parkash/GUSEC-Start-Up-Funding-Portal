import React,{useState} from 'react';
import "./frontend.css";
import axios from "axios";
import emailjs from "emailjs-com";


const StartupRegis = () => {
    const [ user, setUser ] = useState({
        name_1:'',
        phoneNumber : '',
        address : '',
        institutionName : '',
        email_1 : '',
        startupName : '',
        startupIdea : '',
        firmName : '',
        cofounder : '',
        link : '',
        text1:''
    })

    const mouseEvent=(event)=>{
        event.target.style.backgroundColor="rgb(18, 156, 156)";
        event.target.style.color="white";
        event.target.style.cursor="pointer";
        }
    const mouseEvent2=(event)=>{
        event.target.style.backgroundColor="black";
        event.target.style.color="white";
        event.target.style.cursor="pointer";
        }
        
     const handleClick2=()=>{
        window.location.href='Loginasadmin';
        }

    const handleChange=(event)=>{
        
        var name1=event.target.id;
        var value1=event.target.value;
    
        setUser({
            ...user,
            [name1]: value1
        })
    
    if(value1!='' && name1=='repass'){
    var value2=user.pass;
    if(value2!=value1){
    document.getElementById('hov').style.display='inline-block';
    }else{
    document.getElementById('hov').style.display='none';
    }
    
    }
    
    }
    

   
        

    const handleSubmit=(e)=>{
            
            
            e.preventDefault();
            if(
            user.name_1!="" &&
            user.phoneNumber !="" &&
            user.address !="" &&
            user.institutionName !="" &&
            user.email_1 !="" &&
            user.startupName !="" &&
            user.startupIdea !="" &&
            user.firmName !="" &&
            user.cofounder !="" &&
            user.link !="" 
            ){
            if(true){
            
            let headers = new Headers();
            
                headers.append('Content-Type', 'application/json');
                headers.append('Accept', 'application/json');
               
                headers.append('Origin','http://localhost:1086');
                headers.append('Access-Control-Allow-Origin', '*');
            
            

            const min_val=11111111;
            const max_val=99999999;
        
        var app_no=Math.floor(Math.random() * (max_val - min_val + 1)) + min_val;
        app_no=app_no+202200000000;
              var templateParams = {
                to_email: user.email_1,
                to_name: user.name_1,
                message: `Your Application has been submitted successfully..\n Your Application Number is : ${app_no}`
            };
              emailjs.send('service_asunz8s','template_x8fmlri', templateParams, 'Ysay8aZzSm4SPIKQT').then(
                function (response) {
                  console.log(response.status, response.text);
                },
                function (err) {
                  console.log(err);
                }
              );
              const url = `http://localhost:1086/startupregis?type=register&name_1=${user.name_1}&app_no=${app_no}&phoneNumber=${user.phoneNumber}&address=${user.address}&institutionName=${user.institutionName}&email_1=${user.email_1}&startupName=${user.startupName}&startupIdea=${user.startupIdea}&firmName=${user.firmName}&cofounder=${user.cofounder}&link=${user.link}&lastone=last`;
            


            axios.post(url,user).then(
                response => {
            console.log(response.status);
            if(response.status==200){
            alert("You have registered successfully");
            window.location.href='/formsubmissionpage';
            }
            
            }
            ).then(
                html => console.log(html)
            );
            
            
            }else{
            alert("Re-Entered Password Doesn't Match the Password..");
            }
            
            
            
            }
            else{
            alert("Empty Feilds Are Not Allowed..");
            }
            }
            

return (

<div className="bodyy">
    <br/>
<div className="div_style">
<form id='inputForm' method='POST' target='http://localhost:1086/startupregis' encType='multipart/form-data'>
<h1 className="h_style">Register Your Start-Up</h1>
<br/>
<hr className="hr_style"/>
<br/>


        <input type="text" id="name_1" placeholder="Enter Founders Name" onChange={handleChange} className='inp_style' size='60'/>
        <br/>
        
        <input type="text" id="phoneNumber" placeholder="Enter Your Phone Number" onChange={handleChange} className='inp_style' size='60'/>
        <br/>
        
        <input type="text" id="address" placeholder="Enter Your Address" onChange={handleChange} className='inp_style' size='60'/>
        <br/>
        
        <input type="text" id="institutionName" placeholder="Enter Your Institution Name" onChange={handleChange} className='inp_style' size='60'/>
        <br/>
        
        <input type="text" id="email_1" placeholder="Enter Your Email" onChange={handleChange} className='inp_style' size='60'/>
        <br/>
        
        <input type="text" id="startupName" placeholder="Enter Your Start Up Name" onChange={handleChange} className='inp_style' size='60'/>
        <br/>
        
        <input type="text" id="startupIdea" placeholder="Enter Your Start Up Idea" onChange={handleChange} className='inp_style' size='60'/>
        <br/>
                <input type="text" id="firmName" placeholder="Enter Your Firm Name" onChange={handleChange} className='inp_style' size='60'/>
        <br/>
        
        <input type="text" id="cofounder" placeholder="Enter Co-Founders Names" onChange={handleChange} className='inp_style' size='60'/>
        <br/>
        
        <input type="text" id="link" placeholder="Enter relevant links" onChange={handleChange} className='inp_style' size='60'/>
        <br/><br/>
        
        <input id='signup' type='submit' onClick={handleSubmit} value='Register' className="but_style" onMouseLeave={mouseEvent} onMouseOver={mouseEvent2}/><br/><br/>



</form>
</div>
<br/><br/><br/><br/>
</div>
)

}

export default StartupRegis;