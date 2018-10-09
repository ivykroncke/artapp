import React, { Component } from 'react'
import axios from 'axios'
import EditUserView from './EditUserView';

export default class Dashboard extends Component {

  state = {
    username: '',
    userId: ''
  }

  getUsername = async () => {
    const userId = this.props.match.params.userId
    const response = await axios.get(`/api/users/${userId}`)
    this.setState({
      username: response.data.userName,
      userId: response.data.userId,
      firstName: response.data.firstName,
      lastName: response.data.lastName
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
          <EditUserView 
            username={this.state.username}
            userId={this.state.userId}
            firstName={this.state.firstName}
            lastName={this.state.lastName}/>
      </div>
    )
  }
}
