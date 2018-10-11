import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import EditUserView from './Components/EditUserView';
import NotFound from './Components/NotFound';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/users' component={Login} />
          <Route exact path='/users/:userId' component={Dashboard} />
          <Route exact path='/users/:userId/edit' component={EditUserView} />
          <Route path='*' component={NotFound} />
        </Switch>
      </Router>
    )
  }
}

export default App;
