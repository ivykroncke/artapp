import React, { Component } from 'react'
import styled from 'styled-components'

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: 50vw 50vw;
  grid-gap: 1fr;
  align-items: center;
`

const GridImage = styled.img`
  max-width: 25vw;
  padding: 25px;
`

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
        <GalleryGrid>
          {artworksList}
       </GalleryGrid>
      </div>
    )
  }
}
