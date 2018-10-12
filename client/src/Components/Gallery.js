import React, { Component } from 'react'
import { Artist, Title, SpaceDiv, GalleryDiv } from './SharedComponents'
import { Grid, Image } from 'semantic-ui-react'

export default class Gallery extends Component {

  render() {
    const moreInfo = this.state.artInfo.link
    const artworksList = this.props.artworks.map((artwork, i) => {
      return (
        <Grid.Column key={i}>
          <Image src={artwork.img} alt='artwork' href={`${moreInfo}`}/>
          <Title>{artwork.title}</Title>
          {/* <a href={`${moreInfo}`} target='_blank'>More In</a> */}
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

