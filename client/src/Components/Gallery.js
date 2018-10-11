import React, { Component } from 'react'

import { GalleryGrid } from './SharedComponents'
import { GridImage } from './SharedComponents'
import { GalleryHeading } from './SharedComponents'


export default class Gallery extends Component {
    
  render() {
      const artworksList = this.props.artworks.map((artwork, i) => {
          return (
              <div key={i} >
                  <GridImage src={artwork.img} alt='artwork' />
              </div >
          )
      })
      
    return (
      <div>
        <GalleryHeading>{this.props.username}'s Gallery</GalleryHeading>
        <GalleryGrid>
          {artworksList}
       </GalleryGrid>
      </div>
    )
  }
}
