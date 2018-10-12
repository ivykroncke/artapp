import React, { Component } from 'react'

import { GridImage } from './SharedComponents'
import { GalleryHeading } from './SharedComponents'

import { Grid, Segment } from 'semantic-ui-react'


export default class Gallery extends Component {

  render() {
    const artworksList = this.props.artworks.map((artwork, i) => {
      return (
        <Grid.Column key={i}>
          <GridImage src={artwork.img} alt='artwork' />
        </Grid.Column>
      )
    })



    return (
      <div>
        <GalleryHeading>Gallery</GalleryHeading>
        <Grid verticalAlign='middle' columns={3} centered>
          <Grid.Row>{artworksList}</Grid.Row>
        </Grid>
      </div>
    )
  }
}

