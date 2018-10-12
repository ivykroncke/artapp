import React, { Component } from 'react'
import axios from 'axios'
import BrowseArt from './BrowseArt';
import Gallery from './Gallery';
import Nav from './Nav';

import { Container } from './SharedComponents';
import { Button } from 'semantic-ui-react'

export default class Dashboard extends Component {
  state = {
    username: '',
    userId: '',
    firstname: '',
    lastname: '',
    artworks: [{}],
    browseOrGallery: true
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

  toggleBrowseOrGallery = () => {
    this.getUsername()
    this.setState({ browseOrGallery: !this.state.browseOrGallery })
  }

  render() {

    return (
      <Container>
        <Nav
          username={this.state.username}
          userId={this.state.userId} />

        <div>
          {this.state.browseOrGallery ? (
            <div>
              <BrowseArt
                username={this.state.username}
                userId={this.state.userId}
                firstName={this.state.firstName}
                lastName={this.state.lastName}
                artworks={this.state.artworks} />
              <Button basic color='black' onClick={this.toggleBrowseOrGallery}>
                View Your Artwork
              </Button>
            </div>
          ) : (
              <div>
                <Gallery
                  username={this.state.username}
                  userId={this.state.userId}
                  firstName={this.state.firstName}
                  lastName={this.state.lastName}
                  artworks={this.state.artworks}
                  toggleBrowseOrGallery={this.state.browseOrGallery} />
                <Button basic color='black' onClick={this.toggleBrowseOrGallery}>
                  Back To Browse
                </Button>
              </div>
            )}
        </div>
      </Container>
    )
  }
}
