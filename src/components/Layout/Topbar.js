import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
class Topbar extends Component {
  Logout= () =>{
    sessionStorage.clear();
  }
    render() {
        return (
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            {/* Topbar Navbar */}
            <ul className="navbar-nav ml-auto">
              {/* Nav Item - Search Dropdown (Visible Only XS) */}
  
              {/* Nav Item - Alerts */}
              {/* Nav Item - Messages */}

              
              {/* Nav Item - User Information */}

            </ul>
          </nav>
        );
    }
}

export default Topbar;