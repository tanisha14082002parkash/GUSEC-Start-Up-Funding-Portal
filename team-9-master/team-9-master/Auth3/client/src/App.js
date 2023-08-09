
import './App.css';
import Login from "./components/Login/Login";
import Loginasadmin from "./components/Login_admin/Login_admin";
import HomePage from "./components/HomePage/HomePage";
import Register from "./components/Register/Register";
import Home_admin from './components/Home_admin/Home_admin';
import Template from "./components/Template/Template";
import Dashboard from './components/Dashboard/Dashboard';
import ReviewMeeting from './components/Review_meeting/Review_Meeting';
import Form_Submission_Page from './components/Form_Submission_Page/Form_Submission_Page';
import StartupRegis from './components/Startup_Registration/frontend';
import Rejected_idea from './components/Rejected_idea/Rejected_idea';
import Underprocess_idea from './components/Underprocess_idea/Underprocess_idea';
import Client_Home from './components/Client_Home/Client_Home';
import Registerasadmin from './components/Register_admin/Register_admin';
//import startupRegis from "./components/Section_3/frontend"
import * as emailjs from "emailjs-com";




import { BrowserRouter as Router,  Route ,Routes} from "react-router-dom";


function App() {

 
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={  <HomePage/> }>
            
          </Route>
          <Route path="/login" element={<Login />}>
            
          </Route>
          <Route path="/register" element={<Register/>}>
            
          </Route>
          
          <Route path="/template" element={<Template/>}>
            
          </Route>
          
          <Route path="/Loginasadmin" element={<Loginasadmin/>}>
            
          </Route>
          <Route path="/dashboard" element={<Dashboard/>}>
            
          </Route>
          <Route path="/reviewmeeting" element={<ReviewMeeting/>}>
            
          </Route>
         
          <Route path="/formsubmissionpage" element={<Form_Submission_Page/>}>
            
            </Route>
            <Route path="/startupregis" element={<StartupRegis/>}>
            
            </Route>
            <Route path="/homeadmin" element={<Home_admin/>}>
            </Route>

            <Route path="/underprocessidea" element={<Underprocess_idea/>}>
            </Route>
            <Route path="/rejectedidea" element={<Rejected_idea/>}>
            </Route>
            <Route path="/clienthome" element={<Client_Home/>}>
            </Route>
            <Route path="/registeradmin" element={<Registerasadmin/>}>
            </Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;