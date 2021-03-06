import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import LoginListView from './LoginListView'
import CreateUserView from './CreateUserView'

import { Button } from 'semantic-ui-react'
import { LoginBackground } from './SharedComponents'
import { LoginContainer } from './SharedComponents'
import { LoginHeading } from './SharedComponents'


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
    this.setState({ users, redirect: true })
    console.log(this.state.users)
  }

  render() {

    if (this.state.redirect === true) {
      const i = this.state.users.length - 1
      const newUserId = this.state.users[i]._id
      console.log(newUserId)
      return (<Redirect to={`/users/${newUserId}`} />)
    }

    return (
      <LoginBackground>
        {this.state.loginView ? (
          <LoginContainer>
            <LoginHeading>
              Sign In
            </LoginHeading>
            <LoginListView
              users={this.state.users} />
            <Button basic color='black' onClick={this.toggleLoginView}>
              Create New User
            </Button>
          </LoginContainer>
        ) : (
            <LoginContainer>
              <LoginHeading> Create New User </LoginHeading>
              <CreateUserView
                addUserToUsers={this.addUserToUsers}
                handleSubmit={this.handleSubmit} />
            </LoginContainer>
          )}
      </LoginBackground>
    )
  }
}
