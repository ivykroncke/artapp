import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import LoginListView from './LoginListView';
import CreateUserView from './CreateUserView';

export default class Login extends Component {

  state = {
    users: [],
    loginView: true
  }

  componentDidMount = async () => {
    const response = await axios.get('/api/users/')
    this.setState({ users: response.data })
  }

  render() {

    return (
      <div>
        <h1>Log In</h1>
        <div>
          {this.state.loginView ? (

          <LoginListView 
            users={this.state.users}
          />
            ):(
            <CreateUserView />
            ) }
        </div>
      </div>
    )
  }
}
