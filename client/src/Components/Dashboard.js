import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import BrowseArt from './BrowseArt';
import Gallery from './Gallery';
import Nav from './Nav';

import { Container } from './SharedComponents';

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
  }

  componentDidMount = () => {
    this.getUsername()
  }

  render() {
    //test again to see if I can use state instead of Link to params...
    const userId = this.props.match.params.userId

    return (
      <Container>
        <Nav 
          username={this.state.username}
          userId={this.state.userId} />
        <BrowseArt 
        username={this.state.username}
        userId={this.state.userId}
        firstName={this.state.firstName}
        lastName={this.state.lastName}
        artworks={this.state.artworks}/>
        <Gallery 
          username={this.state.username}
          userId={this.state.userId}
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          artworks={this.state.artworks}
        />
      </Container>
    )
  }
}
