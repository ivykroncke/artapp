import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Login extends Component {
  state = {
    users: ['Fritz', 'Ivy', 'Charlotte'],
  }

  componentDidMount = async () => {
    const usersFromDB = await axios.get('/api/users/')
    this.setState({ users: usersFromDB.data })
  }

  render() {
    const allUsers = this.state.users.map((users, index) => {
      return (
        <div key={index}>
          <Link to={`/users/${users._id}`}>
            username: {users.userName}
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
