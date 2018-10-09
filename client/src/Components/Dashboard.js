import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Dashboard extends Component {

  state = {
    username: ''
  }

  getUsername = async () => {
    const userId = this.props.match.params.userId
    const response = await axios.get(`/api/users/${userId}`)
    this.setState({
      username: response.data.userName
    })
  }

  componentDidMount = () => {
    this.getUsername()
  }

  render() {

    return (
      <div>
        <h1>Dashboard</h1>
        <div> Username: {this.state.username}</div>
          <Link to={`/users/{userId}/edit`}>Edit this user</Link>
      </div>
    )
  }
}
