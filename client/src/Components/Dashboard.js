import React, { Component } from 'react'
import axios from 'axios'
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
    this.setState({
      browseOrGallery: !this.state.browseOrGallery
    })
  }

  render() {
    // Keep an eye on this in case anything breaks, but shouldn't need anymore
    // since most everything can be pulled from this.state...
    // const userId = this.props.match.params.userId

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

              <button onClick={this.toggleBrowseOrGallery}>
                View Your Artwork
              </button>

            </div>
          ) : (
              <div>
                <Gallery
                  username={this.state.username}
                  userId={this.state.userId}
                  firstName={this.state.firstName}
                  lastName={this.state.lastName}
                  artworks={this.state.artworks} />

                <button onClick={this.toggleBrowseOrGallery}>
                  Back To Browse </button>

              </div>
            )}
        </div>
      </Container>
    )
  }
}
