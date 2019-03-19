import React from "react";
// import { Router, Route, Switch } from 'react-router';
import { Route, HashRouter } from "react-router-dom";

import Homescreen from '../common/home';
import Signupscreen from '../common/signup';
import Loginscreen from '../common/login';
import Aboutscreen from '../common/about';

class Routes extends React.Component {
  render() {
    console.log(this.props);
    return (
      <HashRouter>
        <div>
          <Route exact path="/" component={Homescreen} />
          <Route exact path="/login" component={Loginscreen} />
          <Route exact path="/signup" component={Signupscreen} />
          <Route exact path="/about" component={Aboutscreen} />
        </div>
      </HashRouter>
    );
  }
}

export default Routes;