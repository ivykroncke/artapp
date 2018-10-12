import React, { Component } from 'react'
import { Artist, Title, SpaceDiv, GalleryDiv } from './SharedComponents'
import { Grid, Image } from 'semantic-ui-react'

export default class Gallery extends Component {

  render() {

    const artworksList = this.props.artworks.map((artwork, i) => {
      const moreInfo = '#'
      if (this.props.artworks[i].link) {
        moreInfo = this.props.artworks[i].link
      } 
      console.log(artwork.link)

      return (
        <Grid.Column key={i}>
          <Image src={artwork.img} alt='artwork' href={`${moreInfo}`}/>
          <Title>{artwork.title}</Title>
        </Grid.Column>
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

