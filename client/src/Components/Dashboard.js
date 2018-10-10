import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Dashboard extends Component {

  state = {
    username: ''
  }

  getUsername = async () => {
    const userId = this.props.match.params.userId
    const response = await axios.get(`/api/users/${userId}`)
    this.setState({
      username: response.data.userName,
      userId: response.data._id,
      firstName: response.data.firstName,
      lastName: response.data.lastName
    })
  }

  componentDidMount = () => {
    this.getUsername()
  }

  render() {
    const userId = this.props.match.params.userId
    return (
      <div>
        <h1>Dashboard</h1>
        <div> Username: {this.state.username}</div>
          <Link to={`/users/${userId}/edit`}>Edit User</Link>
      </div>
    )
  }
}
