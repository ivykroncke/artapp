import React, { Component } from 'react'
import { Artist, Title, SpaceDiv, GalleryDiv } from './SharedComponents'
import { Grid, Image, Icon } from 'semantic-ui-react'

import { GalleryTitle } from './SharedComponents'
import { GalleryLink } from './SharedComponents'
import { InfoContainer } from './SharedComponents'

export default class Gallery extends Component {

  render() {

    const artworksList = this.props.artworks.map((artwork, i) => {

      return (
        <Grid.Column key={i}>
          <Image src={artwork.img} alt='artwork' />
          <InfoContainer>
            <GalleryTitle>{artwork.title}</GalleryTitle>
            <GalleryLink href={`${artwork.link}`}>More Info<Icon name='chevron circle right' /></GalleryLink>
          </ InfoContainer>
        </ Grid.Column>
          )
        }
      )
    
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
      
