import React, { Component } from 'react'
import { Artist, Title, SpaceDiv, GalleryDiv } from './SharedComponents'
import { Grid, Image, Icon, Button } from 'semantic-ui-react'

import { GalleryTitle } from './SharedComponents'
import { GalleryLink } from './SharedComponents'
import { InfoContainer } from './SharedComponents'

export default class Gallery extends Component {

  callToggle = () => {
    this.props.toggleBrowseOrGallery()
}

  render() {

    const artworksList = this.props.artworks.map((artwork, i) => {
      return (
        <Grid.Column key={i}>
          <Image src={artwork.img} alt='artwork' />
          <InfoContainer>
            <GalleryTitle>{artwork.title}</GalleryTitle>
            <GalleryLink href={`${artwork.link}`}><Icon name='chevron circle right' /></GalleryLink>
          </ InfoContainer>
        </ Grid.Column>
      )
    })

    return (
      <div>
        <GalleryDiv>
          <GalleryTitle>My Gallery</ GalleryTitle>
          <GalleryLink>Click Arrows for More Information</GalleryLink>
          <SpaceDiv />
          <Grid verticalAlign='middle' relaxed='very' columns={3} centered >
            <Grid.Row>{artworksList}</Grid.Row>
          </Grid>
        </GalleryDiv>
        <Button basic color='black' onClick={this.callToggle}>
          Back To Browse
         </Button>
      </div>
    )
  }
}

