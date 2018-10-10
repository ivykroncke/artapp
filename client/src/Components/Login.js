import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import LoginListView from './LoginListView';
import CreateUserView from './CreateUserView';

import { Container } from './SharedComponents';

export default class Login extends Component {

  state = {
    users: [],
    loginView: true,
    redirect: false,
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

    this.setState({ users, redirect: true})
  }

  // findNewId = () => {
  //   const usersArray = this.state.users
  //   const filterUsers = usersArray.filter((user, i) => {
  //     if(i === usersArray.length -1 ) {
  //       return user._id
  //     }
  //   })
  // }


  render() {

    //this needs revisiting. Need to figure out
    //how to grab the id after passed through mongo and put in redirect
    //or other method.
    if (this.state.redirect) {
      return ( <Redirect to={`/`} /> )
    }

    return (
      <Container>
        <h1>Log In</h1>

        <div>
          {this.state.loginView ? (
            <div>
              <LoginListView
                users={this.state.users} />
              <button onClick={this.toggleLoginView}>
                Create New User</button>
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
      </Container>
    )
  }
}
