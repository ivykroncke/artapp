import React, { Component } from 'react'
import axios from 'axios'

export default class Dashboard extends Component {

  state = {
    username: ''
  }

  getUsername = async () => {
    const userId = this.props.match.params.userId
    const response = await axios.get(`/api/users/${userId}`)
    console.log(response.data.userName)
    this.setState({
      username: response.data.userName
    })
  }

  componentDidMount = () =>{
    this.getUsername()
  }

  render() {

    return (
      <div>
        <h1>Dashboard</h1>
          {this.state.username}
      </div>
    )
  }
}
