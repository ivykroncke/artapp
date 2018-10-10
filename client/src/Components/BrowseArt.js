import React, { Component } from 'react'
import axios from 'axios';

export default class BrowseArt extends Component {

    state = {
        //faux API for testing... will change to broader external sheet or connect external API
        artworks: [
            {
                title: 'Campbell\'s Soup Cans',
                artist: 'Andy Warhol',
                style: 'Pop',
                year: 1962,
                img: 'https://www.historylists.org/images/campbell\'s-soup-cans-by-andy-warhol.jpg',
                liked: false,
                unliked: false
            },
            {
                title: 'Guernica',
                artist: 'Pablo Picasso',
                style: 'Cubism',
                year: 1937,
                img: 'https://www.historylists.org/images/guernica-by-pablo-picasso.jpg',
                liked: false,
                unliked: false
            },
            {
                title: 'No 1 (1950) Lavender Mist',
                artist: 'Jackson Pollock',
                style: 'Abstract Expressionism',
                year: 1950,
                img: 'https://www.historylists.org/images/guernica-by-pablo-picasso.jpg',
                liked: false,
                unliked: false
            }
        ]
    }

    handleChange = (event, i) => {
        const artworks = [...this.state.artworks[0]]
        console.log(artworks)
    }

    saveLike = () => {
        //update state
        //get it
        const artworks = [...this.state.artworks]
        //set it
        artworks[0].liked = true
        //put it back
        this.setState({ artworks })

        //send changes to MongoDB in Art section
        // const userId = this.props.userId
        // await axios.post(`api/users/${userId}/artworks`)
    }

    saveUnLike = () => {
        console.log('Unlike!')
    }

    render() {

        return (
            <div>
                <h3>{this.state.artworks[0].artist}</h3>
                <div>{this.state.artworks[0].year}</div>
                <img src={this.state.artworks[0].img} alt={this.state.artworks[0].title} />
                <div>Style: {this.state.artworks[0].style}</div>

                <div onClick={this.saveLike}>
                    Like
                </div>
                <div onClick={this.saveUnLike}>
                    Skip
                </div>
            </div>
        )

    }

}