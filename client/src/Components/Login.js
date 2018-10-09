import React, { Component } from 'react'
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

  toggleLoginView = () => {
    this.setState({
      loginView: !this.state.loginView
    })
  }

  render() {
    return (
      <div>
        <h1>Log In</h1>

      {/* Toggle loginView controller */}
      <div>
        <button onClick={this.toggleLoginView}>
          {this.state.loginView 
            ? "Create a New User"
            : null
          }
        </button>
      </div>

        <div>
          {this.state.loginView ? (

          <LoginListView 
            users={this.state.users}
          />
            ):(
            <CreateUserView 
            
          />
            ) }
        </div>
      </div>
    )
  }
}
