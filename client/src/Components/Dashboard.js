import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import BrowseArt from './BrowseArt';

export default class Dashboard extends Component {

  state = {
    username: '',
    userId: '',
    firstname: '',
    lastname: '',
    artworks: [{}]
  }

  getUsername = async () => {
    const userId = this.props.match.params.userId
    const response = await axios.get(`/api/users/${userId}`)
    this.setState({
      username: response.data.userName,
      userId: response.data._id,
      firstName: response.data.firstName,
      lastName: response.data.lastName,
      artworks: response.data.artworks
    })
    await console.log(this.state)
  }

  componentDidMount = () => {
    this.getUsername()
  }



  render() {
    //test again to see if I can use state instead of Link to params...
    const userId = this.props.match.params.userId



    return (
      <div>
        <h1>Dashboard</h1>
        <div> Username: {this.state.username}</div>
        <Link to={`/users/${userId}/edit`}>Edit User</Link>
        <BrowseArt 
        username={this.state.username}
        userId={this.state.userId}
        firstName={this.state.firstName}
        lastName={this.state.lastName}
        artworks={this.state.artworks}/>
      </div>
    )
  }
}
