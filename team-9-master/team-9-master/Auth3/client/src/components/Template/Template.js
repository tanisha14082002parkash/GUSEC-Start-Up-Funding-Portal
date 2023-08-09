import React from 'react';
import "./Template.css";
import Logo2 from "./logo2.png";
import Logo3 from "./logo2.png";


const Template = () =>{

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
<a href="/">Available Requests</a>
</div>
<div className="divstyle2">
<a href="/">Review Meetings</a>
</div>


</div>

<div className="divstyle4">
<input id='signup' type='button' onClick={handleClick} value='Log In' className="but_style" onMouseLeave={mouseEvent2} onMouseOver={mouseEvent}/>
</div>

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/><br/><br/><br/><br/><br/><br/><br/>
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

export default Template