import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Create from './components/create';
import Edit from './components/edit';
import View from './components/view';
import logo from './images/logo.png';

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="https://codingthesmartway.com" target="_blank">
            <img src={logo} width="30" height="30" alt={logo}/>
          </a>
          <Link to="/" className="navbar-brand"><b>MERN-Stack</b></Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">About</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create</Link>
                </li>
              </ul>
            </div>
        </nav>
        <br/>
        <Route path="/" exact component={View} />
        <Route path="/edit/:id" component={Edit} />
        <Route path="/create" component={Create} />
      </div>
    </Router>
    
  );
}

export default App;
