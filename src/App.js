

import './App.css';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Card from './components/Card';

import AllChart from './components/AllChart';
import Admin from './components/Admin';



function App() {

  return (
    <div id="wrapper">


      <Sidebar />

      {/* Content Wrapper */}
      <div id="content-wrapper" className="d-flex flex-column">
        {/* Main Content */}
        <div id="content">
          {/* Navbar items */}
          <Navbar /><br />

          {/* total card  */}
          <Card />
          {/* total charts */}
          <AllChart />

          {/* admin data in table  */}
          <Admin />
        </div>


      </div>

    </div>
  );
}

export default App;
