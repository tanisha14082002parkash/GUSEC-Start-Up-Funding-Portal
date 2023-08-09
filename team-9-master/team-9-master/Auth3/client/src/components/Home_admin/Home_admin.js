import axios from 'axios';
import React from 'react';
import "./Home_admin.css";
import Logo2 from "./logo2.png";
import Logo3 from "./logo2.png";
import Logo4 from "./aboutpic.jpg";

const Home_admin = () =>{

   const mouseEvent=(event)=>{
        event.target.style.backgroundColor="black";
        event.target.style.color="white";
        event.target.style.cursor="pointer";
        }
       const mouseEvent2=(event)=>{
        event.target.style.backgroundColor="rgb(18, 156, 156)";
        event.target.style.color="white";
        event.target.style.cursor="pointer";
        }
        
        const handleClick=()=>{
        window.location.href='/login';
        }

      


    return (
        <div className="bodyyy">
            <div className="container">
                
            <div className="divstyle3">
            <div className="img_div">
                <img src={Logo3} className="img_div"></img>
            </div>

<div className="divstyle2">
<a href="/">Home</a>
</div>
<div className="divstyle2">
<a href="/dashboard">Available Requests</a>
</div>
<div className="divstyle2">
<a href="/reviewmeeting">Review Meetings</a>
</div>

<div className="divstyle2">
<a href="http://localhost:4248/section5admin">Grant Access</a>
</div>


</div>

<div className="divstyle4">
<input id='signup' type='button' onClick={handleClick} value='Log Out' className="but_style" onMouseLeave={mouseEvent2} onMouseOver={mouseEvent}/>
</div>

<br/>
<br/>
<br/>

<br/><br/>
<div className="divstyle5">
<h1>Home Page</h1>
</div>
<br/><br/><br/>

<div id="middle"><br/>

<img src={Logo4} className="img_div2"></img>


</div>

<div id="middle_right">
        <h1 id="h11">Here to Ease your Work!</h1>
        <br/>
        <h2 id="p11">So this is a platform where you as <br/>admins can perform all of your <br/>tasks in an automated and fast <br/>manner.<br/><br/>
        You are a valuable asset <br/>to the Company!</h2>

</div>

<br/>
<br/>
<br/>
<br/>
<br/>


<div id="remove2">
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/><br/>
<br/>



</div>

 



<div className="footer">

<div className="divstyle">
<img src={Logo2} height='140' width='195'></img>
</div>

<div className="footer_div1">
<p>Instagram: @GUSEC</p>
<p>Twitter: @GUSEC</p>
<p>Facebook: @GUSEC</p>
</div>

<div className="footer_div2">
<p>Email: GUSEC2022@gmail.com</p>
<p>Contact-No: +1025421XX</p>

</div>

</div>

            </div>
        </div>
    )
}

export default Home_admin