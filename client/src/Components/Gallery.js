import React, { Component } from 'react'

export default class Gallery extends Component {
    
  render() {
      const artworksList = this.props.artworks.map((artwork, i) => {
          return (
              <div  key={i} >
                  <img src={artwork.img} alt='artwork' />
              </div>
          )
      })
      
    return (
      <div>
        {artworksList}
      </div>
    )
  }
}
