import React, { Component } from 'react'

export default class BrowseArt extends Component {

    state = {
        //faux API for testing... will change to broader external sheet or connect external API
        artchoices: [
            {
                title: 'Campbell\'s Soup Cans',
                artist: 'Andy Warhol',
                style: 'Pop',
                year: 1962,
                img: 'https://www.historylists.org/images/campbell\'s-soup-cans-by-andy-warhol.jpg',
                viewed: false
            },
            {
                title: 'Guernica',
                artist: 'Pablo Picasso',
                style: 'Cubism',
                year: 1937,
                img: 'https://www.historylists.org/images/guernica-by-pablo-picasso.jpg',
                viewed: false
            },
            {
                title: 'No 1 (1950) Lavender Mist',
                artist: 'Jackson Pollock',
                style: 'Abstract Expressionism',
                year: 1950,
                img: 'https://www.historylists.org/images/guernica-by-pablo-picasso.jpg',
                viewed: false
            }
        ]
    }

    render() {

        return (
            <div>
                <h3>{this.state.artchoices[0].artist}</h3>
                <div>{this.state.artchoices[0].year}</div>
                <img src={this.state.artchoices[0].img} />
                <div>Style: {this.state.artchoices[0].style}</div>
            </div>
        )

    }

}