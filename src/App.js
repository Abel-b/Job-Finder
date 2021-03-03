import logo from './logo1.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import {Jobs} from './Jobs';
import Home from './components/Home';
import Admin from './components/Admin';
import Post from './components/Post';


function App() {
  return (
    <div className="App">
      <Router>
        <div className="nav-contents">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img src={logo} className="App-logo" alt="logo" />
          <div className="navbar1">
            <a><Link to={'/'} className="nav-link">Home </Link></a>
            <a><Link to={'/admin'} className="nav-link">Admin</Link></a>
            <a><Link to={'/post'} className="nav-link">Post</Link></a>
          </div>
          </nav>
          </div>
      <Switch>
              <Route path='/' component={Home} />
              <Route path='/admin' component={Admin} />
              <Route path='/post' component={Post} />
          </Switch>
    </Router>
    </div>
  );
}

export default App;
