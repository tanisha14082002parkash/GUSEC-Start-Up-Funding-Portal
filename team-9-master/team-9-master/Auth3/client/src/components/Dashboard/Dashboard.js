import axios from 'axios';
import React from 'react';
import "./Dashboard.css";
import Logo2 from "./logo2.png";
import Logo3 from "./logo2.png";


const Dashboard = () =>{

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
        

        const mouseEvent3=(event)=>{
            event.target.style.backgroundColor="rgb(213, 72, 72)";
            event.target.style.color="white";
            event.target.style.cursor="pointer";
            }

        const handleClick=()=>{
        window.location.href='/login';
        }

        const accept_idea=(event)=>{
            var id1=event.target.id;
            var last_char=id1[id1.length-1];
            const url_3=`http://localhost:1086/accept/?type=login&database=startup&choice=accept&id=${last_char}`;
            axios.get(url_3).then(res=>{console.log(res);console.log(res.status);});
            
            
            var to_rm='cards'+last_char;
        
            document.getElementById(to_rm).style.display="none";
        }

        const reject_idea=(event)=>{
            var id1=event.target.id;
            var last_char=id1[id1.length-1];
            const url_3=`http://localhost:1086/reject/?type=login&database=startup&choice=accept&id=${last_char}`;
            axios.get(url_3).then(res=>{console.log(res);console.log(res.status);});
            
            var to_rm='cards'+last_char;
            document.getElementById(to_rm).style.display="none";
        }

      const print_func=(res_data)=>{

        for(var i=0;i<res_data.length;i++){
            document.getElementById("middle").innerHTML+=`<div id='cards${i}'><span id="s6">Startup Name:</span> ${res_data[i].startupName}<span id="s1"><span id="s6">Founder Name:</span> ${res_data[i].name}</span><br/><br/><br/><span id="s2"><span id="s6">Startup Idea:</span> ${res_data[i].idea}</span><input type="button" id="btn${i}" value="Reject" onMouseLeave={{mouseEvent2}} onMouseOver={{mouseEvent}}></input><input type="button" value="Approve" id="bt${i}" onMouseLeave={mouseEvent2} onMouseOver={mouseEvent}></input></div><br/><br/><br/>`;
            
            console.log(res_data[i]);
        }

        document.getElementById(`bt0`).onmouseleave=mouseEvent2;
        document.getElementById(`bt0`).onmouseover=mouseEvent;
        document.getElementById(`btn0`).onmouseleave=mouseEvent3;
        document.getElementById(`btn0`).onmouseover=mouseEvent;
        document.getElementById(`bt0`).onclick=accept_idea;
        document.getElementById(`btn0`).onclick=reject_idea;

        document.getElementById(`bt1`).onmouseleave=mouseEvent2;
        document.getElementById(`bt1`).onmouseover=mouseEvent;
        document.getElementById(`btn1`).onmouseleave=mouseEvent3;
        document.getElementById(`btn1`).onmouseover=mouseEvent;
        document.getElementById(`bt1`).onclick=accept_idea;
        document.getElementById(`btn1`).onclick=reject_idea;

        document.getElementById(`bt2`).onmouseleave=mouseEvent2;
        document.getElementById(`bt2`).onmouseover=mouseEvent;
        document.getElementById(`btn2`).onmouseleave=mouseEvent3;
        document.getElementById(`btn2`).onmouseover=mouseEvent;
        document.getElementById(`bt2`).onclick=accept_idea;
        document.getElementById(`btn2`).onclick=reject_idea;

        document.getElementById(`bt3`).onmouseleave=mouseEvent2;
        document.getElementById(`bt3`).onmouseover=mouseEvent;
        document.getElementById(`btn3`).onmouseleave=mouseEvent3;
        document.getElementById(`btn3`).onmouseover=mouseEvent;
        document.getElementById(`bt3`).onclick=accept_idea;
        document.getElementById(`btn3`).onclick=reject_idea;

        document.getElementById(`bt4`).onmouseleave=mouseEvent2;
        document.getElementById(`bt4`).onmouseover=mouseEvent;
        document.getElementById(`btn4`).onmouseleave=mouseEvent3;
        document.getElementById(`btn4`).onmouseover=mouseEvent;
        document.getElementById(`bt4`).onclick=accept_idea;
        document.getElementById(`btn4`).onclick=reject_idea;

        document.getElementById(`bt5`).onmouseleave=mouseEvent2;
        document.getElementById(`bt5`).onmouseover=mouseEvent;
        document.getElementById(`btn5`).onmouseleave=mouseEvent3;
        document.getElementById(`btn5`).onmouseover=mouseEvent;
        document.getElementById(`bt5`).onclick=accept_idea;
        document.getElementById(`btn5`).onclick=reject_idea;

      }

const find_all=()=>{
    const url_1 = `http://localhost:1086/dashboard/?type=login&database=startup`;
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
<h1>Start-Up Ideas</h1>
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
<br/><br/>

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

export default Dashboard