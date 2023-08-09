import React,{useState} from 'react';
import "./Login_admin.css";
import axios from "axios";
import Logo from "./logo2.png";

const Loginasadmin = () => {

    const [ user, setUser] = useState({
        user_name:"",
        password:""
    })

   const handleChange=(event)=>{
        var name1=event.target.id;
        var value1=event.target.value;
        
        setUser({
            ...user,
            [name1]: value1
        })


        }    

        const handleSubmit=(event)=>{
            
            event.preventDefault();
            console.log(user.user_name);
            console.log(user.password);
            if(user.user_name!="" && user.pass!=""){
            
            let headers = new Headers();
            
                headers.append('Content-Type', 'application/json');
                headers.append('Accept', 'application/json');
               
                headers.append('Origin','http://localhost:1086');
                headers.append('Access-Control-Allow-Origin', '*');
            
            const url = `http://localhost:1086/loginasadmin/?type=login&users=${user.user_name}&pass=${user.password}`;

            axios.post(url,user).then(
                response => {
            console.log(response.status);
            if(response.status==200){
             
            alert("You have Logged in successfully");
            
            window.location.href='/homeadmin';
           
            }else if(response.status==201){
            alert("You haven't registered yet, please register..");
            }else{
            alert("Entered password is incorrect..");
            }
            
            }
            ).then(
                html => console.log(html)
            );
            
            
            }
            
            
            
            
            else{
            alert("Empty Feilds Are Not Allowed..");
            }
            
            }

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
                

            const mouseEvent3=(event)=>{
                event.target.style.backgroundColor="black";
                event.target.style.color="white";
                event.target.style.cursor="pointer";
                }
            const mouseEvent4=(event)=>{
                event.target.style.backgroundColor="white";
                event.target.style.color="rgb(18, 156, 156)";
                event.target.style.cursor="pointer";
                }
            
             const handleClick2=()=>{
                    window.location.href='RegisterasAdmin';
                    
                    }
            
                    const handleSubmit2=()=>{
                        window.location.href='login';
                        
                        }
                
                    const handleClick3=()=>{
                        window.location.href='startupregis';
                        
                        }
                
                        

return (
<div className="bodyy">
    <div className="root">
    <div>
    
    <img src={Logo} height='135' width='240'/>

    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <h1 className="second_h1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login to Your Admin Account</h1><br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <input type='text' onChange={handleChange} placeholder='Username' size='60' id='user_name' className='inp_style2'/><br/><br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <input type='password' onChange={handleChange} placeholder='Password' size='60' id='password' className='inp_style3'/><br/><br/>
   &nbsp;&nbsp;&nbsp;
    <input type='submit' onClick={handleSubmit} value='Sign in' className="but_style" onMouseLeave={mouseEvent} onMouseOver={mouseEvent2}/>
    <br/><br/>
   &nbsp;&nbsp;&nbsp;
    <input type='button' onClick={handleSubmit2} value='Sign in as Client' className="but_style" onMouseLeave={mouseEvent} onMouseOver={mouseEvent2}/>
    
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
    
    </div>
    <div className="cont">
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/><br/>
    <h1 className="h_style2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;New Here?</h1>
<br/>
    <p className="p_style2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sign up and Start interacting 
    <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;with people you wanna know!</p>
    <br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <input id='signup' type='button' onClick={handleClick3} value='Sign Up as Client' className="but_style3" onMouseLeave={mouseEvent4} onMouseOver={mouseEvent3}/>
    
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>



    </div>


</div>
)

}

export default Loginasadmin;

