import axios from 'axios';
import React from 'react';
import "./Review_Meeting.css";
import Logo2 from "./logo2.png";
import Logo3 from "./logo2.png";


const ReviewMeeting = () =>{

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

      const print_func=(res_data)=>{

        for(var i=0;i<res_data.length;i++){
          
            
            document.getElementById("middle").innerHTML+=`<div id='cards'><span id="s8"><span id="s2">Startup &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id:</span> ${res_data[i].startup_id}</span> <span id="s1"><span id="s2">Founders &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name:</span> ${res_data[i].num_fulltime}</span><br/><br/><br/> <span id="s2">No. of Interns:</span> ${res_data[i].interns}</div><br/>`;
            console.log(res_data[i]);
        }

      }

const find_all=()=>{
    const url_1 = `http://localhost:1086/dashboard/?type=login&database=review_meeting`;
    axios.get(url_1).then(res=>{console.log(res);console.log(res.data);print_func(res.data);});
    document.getElementById("find2").style.display="none";
    document.getElementById("remove2").style.display="none";
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
<a href="http://localhost:4248/show_admin_request">Grant Access</a>
</div>




</div>

<div className="divstyle4">
<input id='signup' type='button' onClick={handleClick} value='Log Out' className="but_style" onMouseLeave={mouseEvent2} onMouseOver={mouseEvent}/>
</div>

<br/>
<br/>
<br/>
<div className="divstyle5">
<h1>Review Meetings</h1>
</div>



<div id="middle"><br/>


</div>

<br/>
<br/>
<br/>
<br/>
<br/>

<button onClick={find_all} id="find2" className="but_style2" onMouseLeave={mouseEvent2} onMouseOver={mouseEvent}>click here</button>

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
<br/>
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

export default ReviewMeeting