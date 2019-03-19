import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
// import Loginscreen from './components/common/login';
// import Signupscreen from './components/common/signup';
// import Homescreen from './components/common/home';
//import Aboutscreen from './components/common/home';
import Routes from '../src/components/routes/routes'


class App extends Component {
  render() {
    return (
      <div className="App">

        <Routes />

      </div>
    );
  }
}

export default App;
