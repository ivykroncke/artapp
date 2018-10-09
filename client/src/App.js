import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/users/:userId' component={Dashboard} />
        </Switch>
      </Router>
    )
  }
}

export default App;
