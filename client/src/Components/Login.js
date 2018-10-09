import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import LoginListView from './LoginListView';
import CreateUserView from './CreateUserView';

export default class Login extends Component {

  state = {
    users: [],
    loginView: true,
    redirect: false
  }

  componentDidMount = async () => {
    const response = await axios.get('/api/users/')
    this.setState({ users: response.data })
  }

  toggleLoginView = () => {
    this.setState({
      loginView: !this.state.loginView
    })
  }

  addUserToUsers = async (newUser) => {
    const response = await axios.post('/api/users', newUser)
    
    const users = [...this.state.users]
    users.push(response.data)
    this.setState({ users, redirect: true, loginView: !this.state.loginView })
  }


  render() {
    if (this.state.redirect) {
      return ( <Redirect to={`/users/{user._id}`} /> )
    }

    return (
      <div>
        <h1>Log In</h1>

        {/* Toggle loginView controller */}
        <div>
          {this.state.loginView ? (
            <div>
              <button onClick={this.toggleLoginView}>Create New User</button>
              <LoginListView
                users={this.state.users} />
            </div>
          ) : (
              <div>
                <CreateUserView
                  addUserToUsers={this.addUserToUsers}
                  handleSubmit={this.handleSubmit}
                />
              </div>
            )}
        </div>
      </div>
    )
  }
}
