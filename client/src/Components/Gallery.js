import React, { Component } from 'react'

import { Artist, Title, SpaceDiv, GalleryDiv } from './SharedComponents'
import { Grid, Segment, Button, Image } from 'semantic-ui-react'



export default class Gallery extends Component {

  render() {
    const artworksList = this.props.artworks.map((artwork, i) => {
      return (
        <Grid.Column key={i}>
          <Image src={artwork.img} alt='artwork' />
          <Title>{artwork.title}</Title>
        </Grid.Column>
      )
    })

    return (
      <GalleryDiv>
        <Artist>Gallery</Artist>
        <SpaceDiv />
        <Grid verticalAlign='middle' relaxed='very' columns={3} centered >
          <Grid.Row>{artworksList}</Grid.Row>
        </Grid>
      </GalleryDiv>
    )
  }
}

