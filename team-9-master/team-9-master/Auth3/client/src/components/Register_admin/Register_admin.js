import React,{useState} from 'react';
import "./Register_admin.css";
import axios from "axios";

const Registerasadmin = () => {
    const [ user, setUser] = useState({
        name:'',
        mobileno:'',
        email:'',
        user:'',
        pass:'',
        repass:'',
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
        console.log(user.name);
        console.log(user.email);
        console.log(user.mobileno);

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

        console.log(user.user);
        console.log(user.pass);
        console.log(user.repass);
        }
        

    const handleSubmit=(e)=>{
            console.log(user.name);
            console.log(user.email);

            console.log(user.mobileno);

            console.log(user.user);
            console.log(user.pass);
            console.log(user.repass);
            
            e.preventDefault();
            if(user.name!="" && user.email!=""  && user.mobileno!="" && user.user!="" && user.pass!="" && user.repass!="" ){
            if(user.pass==user.repass){
            
            let headers = new Headers();
            
                headers.append('Content-Type', 'application/json');
                headers.append('Accept', 'application/json');
               
                headers.append('Origin','http://localhost:1086');
                headers.append('Access-Control-Allow-Origin', '*');
            
            const url = `http://localhost:1086/registerasadmin?type=register&name=${user.name}&mobileno=${user.mobileno}&email=${user.email}&pass=${user.pass}&repass=${user.repass}&lastest=ooop&users=${user.user}&lastone=last`;
            axios.post(url,user).then(
                response => {
            console.log(response.status);
            if(response.status==200){
            alert("You have registered successfully");
            window.location.href='Loginasadmin';
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
<form id='inputForm' method='POST' target='http://localhost:1086/registerasadmin' encType='multipart/form-data'>
<h1 className="h_style">Register Your Admin Account</h1>
<br/>
<hr className="hr_style"/>
<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<input type='text' onChange={handleChange} placeholder='Enter Your Name' size='60' id='name' className='inp_style' required/><br/><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<input type='text' onChange={handleChange} placeholder='Enter Your Email' size='60' id='email' pattern='^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$' className='inp_style' required/><br/><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<input type='text' onChange={handleChange} placeholder='Enter Your Mobile Number' size='60' id='mobileno' pattern='^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$' className='inp_style'required/><br/><br/>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;




<input type='text' onChange={handleChange} placeholder='Enter Username' size='60' id='user' className='inp_style' required/><br/><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<input type='password' onChange={handleChange} placeholder='Enter Password' size='60' id='pass' className='inp_style' required/><br/><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<input type='password' onChange={handleChange} placeholder='Re-Enter Password' size='60' id='repass' className='inp_style' required/> <label for='hov' id='hov' className="lab_style">Re-entered Password Doesn't match</label>
<br/><br/>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

<input id='signup' type='submit' onClick={handleSubmit} value='Register' className="but_style" onMouseLeave={mouseEvent} onMouseOver={mouseEvent2}/><br/><br/>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

<input id='backtologin' type='button' onClick={handleClick2} value='Back to Login' className="but_style" onMouseLeave={mouseEvent} onMouseOver={mouseEvent2}/>

<br/><br/>



</form>
</div>
<br/><br/><br/><br/>
</div>
)

}

export default Registerasadmin;

