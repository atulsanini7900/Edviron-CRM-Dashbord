
import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Card from './components/Card';

import AllChart from './components/AllChart';
import Admin from './components/Admin';



function App() {
  const [style, setStyle]=useState("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");

  const changeStyle=()=>{
      if(style==="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"){
        setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled")
      }else{
        setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
      }
  }
  const changeStyle1=()=>{
    if(style=="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"){
      setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled1")
    }else{
      setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
    }
}

  return (
    <div id="wrapper">
      

        <Sidebar />

{/* Content Wrapper */}
<div id="content-wrapper" className="d-flex flex-column">
            {/* Main Content */}
            <div id="content">
              
              


            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3" onClick={changeStyle1}>
                <i className="fa fa-bars" />
            </button>
        
          <Navbar /><br />
          <Card />

          <AllChart/>

         
    {/* <MyChart/> */}


    <Admin/>
        </div>


      </div>

    </div>
  );
}

export default App;
