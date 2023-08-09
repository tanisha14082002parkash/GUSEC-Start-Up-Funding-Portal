import React,{useState} from 'react';
import "./Register.css";
import axios from "axios";
import emailjs from "emailjs-com";

const Register = () => {
    const [ user, setUser] = useState({
        name:'',
        mobileno:'',
        team_mem:'',
        email:'',
        fund:'',
        idea:'',
        user:'',
        pass:'',
        repass:'',
        fname:'',
        cname:'',
        team_num:'',
        type_of_inc:'',
        legal_name:'',
        dir_name:'',
        fund_status:'',
        fund_req:'',
        reg_addr:'',
        pan_no:'',
        bank_name:'',
        bank_no:'',
        ifsc:'',
        faci_req:'',
        freq_uti:'',
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
        window.location.href='login';
        }

    const handleChange=(event)=>{
        console.log(user.name);
        console.log(user.email);
        console.log(user.mobileno);
        console.log(user.team_mem);
        console.log(user.fund);
        console.log(user.idea);
        console.log(user.user);
        console.log(user.pass);
        console.log(user.repass);
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
    

    const handleClick=()=>{
        console.log(user.name);
        console.log(user.email);
        console.log(user.mobileno);
        console.log(user.team_mem);
        
        console.log(user.fund);
        console.log(user.idea);
        console.log(user.user);
        console.log(user.pass);
        console.log(user.repass);
        }
        

    const handleSubmit=(e)=>{
            console.log(user.name);
            console.log(user.email);
            console.log(user.team_mem);
            console.log(user.mobileno);
            console.log(user.fund);
            console.log(user.idea);
            console.log(user.user);
            console.log(user.pass);
            console.log(user.repass);
            
            e.preventDefault();
            if(user.name!="" && user.email!="" && user.team_mem!="" && user.mobileno!="" && 
            user.fname!="" &&
            user.cname!="" && 
            user.team_num!="" &&
            user.type_of_inc!="" &&
            user.legal_name!="" &&
            user.dir_name!="" &&
            user.fund_status!="" &&
            user.fund_req!="" &&
            user.reg_addr!="" &&
            user.pan_no!="" &&
            user.bank_name!="" &&
            user.bank_no!="" &&
            user.ifsc!="" &&
            user.faci_req!="" &&
            user.freq_uti!="" && user.fund!="" && user.idea!=""){
            if(true){
                user.user=user.name+'_'+user.fname;
                user.pass=user.fname+'@'+'123';
                user.repass=user.pass;
            let headers = new Headers();
            
                headers.append('Content-Type', 'application/json');
                headers.append('Accept', 'application/json');
               
                headers.append('Origin','http://localhost:1086');
                headers.append('Access-Control-Allow-Origin', '*');
            

                var data = {
                    to_email:user.email,
                  };
                  var templateParams = {
                    to_email: user.email,
                    to_name: user.name,
                    message: `Username:${user.user} and Password:${user.pass}`
                };
                  emailjs.send('service_asunz8s','template_uxk7qwt', templateParams, 'Ysay8aZzSm4SPIKQT').then(
                    function (response) {
                      console.log(response.status, response.text);
                    },
                    function (err) {
                      console.log(err);
                    }
                  );
            






            const url = `http://localhost:1086/register?type=register&name=${user.name}&fname=${user.fname}&cname=${user.cname}& team_num=${user.team_num}&type_of_inc=${user.type_of_inc}&legal_name=${user.legal_name}&dir_name=${user.dir_name}&fund_status=${user.fund_status}&fund_req=${user.fund_req}&reg_addr=${user.reg_addr}&pan_no=${user.pan_no}&bank_name=${user.bank_name}&bank_no=${user.bank_no}&ifsc=${user.ifsc}&faci_req=${user.faci_req}&mobileno=${user.mobileno}&email=${user.email}&team_mem=${user.team_mem}&fund=${user.fund}&idea=${user.idea}&pass=${user.pass}&repass=${user.repass}&lastest=ooop&users=${user.user}&lastone=last`;
            axios.post(url,user).then(
                response => {
            console.log(response.status);
            if(response.status==200){
            alert("You have registered successfully");
            window.location.href='formsubmissionpage';
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
<form id='inputForm' method='POST' target='http://localhost:1086/register' encType='multipart/form-data'>
<h1 className="h_style">Sign-In Your Start-Up</h1>
<br/>
<hr className="hr_style"/>
<br/>
&nbsp;&nbsp;&nbsp;
<input type='text' onChange={handleChange} placeholder='Enter Your Start Up Name' size='60' id='name' className='inp_style' required/><br/><br/>

&nbsp;&nbsp;&nbsp;
<input type='text' onChange={handleChange} placeholder='Enter Founders Name' size='60' id='fname' className='inp_style' required/><br/><br/>

&nbsp;&nbsp;&nbsp;
<input type='text' onChange={handleChange} placeholder='Enter Co-Founders' size='60' id='cname' className='inp_style' required/><br/><br/>

&nbsp;&nbsp;&nbsp;
<input type='text' onChange={handleChange} placeholder='Enter Type of Incorporation' size='60' id='type_of_inc' className='inp_style' required/><br/><br/>

&nbsp;&nbsp;&nbsp;
<input type='text' onChange={handleChange} placeholder='Enter Name of Legal Entity' size='60' id='legal_name' className='inp_style' required/><br/><br/>

&nbsp;&nbsp;&nbsp;
<input type='text' onChange={handleChange} placeholder='Enter Name of Directors/Partners' size='60' id='dir_name' className='inp_style' required/><br/><br/>

&nbsp;&nbsp;&nbsp;
<input type='text' onChange={handleChange} placeholder='Enter Funding Status' size='60' id='fund_status' className='inp_style' required/><br/><br/>

&nbsp;&nbsp;&nbsp;
<input type='text' onChange={handleChange} placeholder='Enter Funding Requirements' size='60' id='fund_req' className='inp_style' required/><br/><br/>

&nbsp;&nbsp;&nbsp;
<input type='text' onChange={handleChange} placeholder='Enter Registered address' size='60' id='reg_addr' className='inp_style' required/><br/><br/>

&nbsp;&nbsp;&nbsp;
<input type='text' onChange={handleChange} placeholder='Enter PAN number' size='60' id='pan_no' className='inp_style' required/><br/><br/>

&nbsp;&nbsp;&nbsp;
<input type='text' onChange={handleChange} placeholder='Enter Name of Bank' size='60' id='bank_name' className='inp_style' required/><br/><br/>

&nbsp;&nbsp;&nbsp;
<input type='text' onChange={handleChange} placeholder='Enter Bank Account Number' size='60' id='bank_no' className='inp_style' required/><br/><br/>

&nbsp;&nbsp;&nbsp;
<input type='text' onChange={handleChange} placeholder='Enter IFSC Code' size='60' id='ifsc' className='inp_style' required/><br/><br/>

&nbsp;&nbsp;&nbsp;
<input type='text' onChange={handleChange} placeholder='Enter Facilities Required' size='60' id='faci_req' className='inp_style' required/><br/><br/>

&nbsp;&nbsp;&nbsp;
<input type='text' onChange={handleChange} placeholder='Enter Frequency of utility' size='60' id='freq_uti' className='inp_style' required/><br/><br/>





&nbsp;&nbsp;&nbsp;
<input type='text' onChange={handleChange} placeholder='Enter Founders Email' size='60' id='email' pattern='^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$' className='inp_style' required/><br/><br/>
&nbsp;&nbsp;&nbsp;
<input type='text' onChange={handleChange} placeholder='Enter Founders Contact Number' size='60' id='mobileno' pattern='^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$' className='inp_style'required/><br/><br/>

&nbsp;&nbsp;&nbsp;
<input type='text' onChange={handleChange} placeholder='Enter No. of Team Members' size='60' id='team_num' className='inp_style' required/><br/><br/>


&nbsp;&nbsp;&nbsp;
<input type='text' onChange={handleChange} placeholder='Enter your Team Members names' size='60' id='team_mem' className='inp_style' required/><br/><br/>
&nbsp;&nbsp;&nbsp;
<input type='text' onChange={handleChange} placeholder='Enter your Start Up idea' size='60' id='idea' className='inp_style' required/><br/><br/>
&nbsp;&nbsp;&nbsp;
<input type='text' onChange={handleChange} placeholder='Enter your proposed funding' size='60' id='fund' className='inp_style' required/><br/><br/>

&nbsp;&nbsp;&nbsp;

<input id='signup' type='submit' onClick={handleSubmit} value='Register' className="but_style" onMouseLeave={mouseEvent} onMouseOver={mouseEvent2}/><br/><br/>


<br/><br/>



</form>
</div>
<br/>
</div>
)

}

export default Register;

