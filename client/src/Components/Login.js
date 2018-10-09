import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Login extends Component {
  
  state = {
    users: []
  }

  componentDidMount = async () => {
    const response = await axios.get('/api/users/')
    this.setState({ users: response.data })
  }

  render() {
    const allUsers = this.state.users.map((user, index) => {
      return (
        <div key={index}>
          <Link to={`/users/${user._id}`}>
            username: {user.userName}
           </Link>
        </div>
      )
    })

    return (
      <div>
        <h1>Log In</h1>
        {allUsers}
      </div>
    )
  }
}
