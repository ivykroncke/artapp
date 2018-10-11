import React, { Component } from 'react'
import axios from 'axios';

import {  StyledImage } from './SharedComponents'
import {  TopInfo } from './SharedComponents'
import {  Artist } from './SharedComponents'
import {  ArtistAndTitleAndYear } from './SharedComponents'
import {  TitleAndYear } from './SharedComponents'
import {  LikeButtons } from './SharedComponents'
import {  LikeOrSkip } from './SharedComponents'


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

    handleChange = () => {
        const artworks = [...this.state.artworks[0]]
        console.log(artworks)
    }

    saveLike = async () => {
        const artworks = [...this.state.artworks]
        artworks[0].liked = true
        this.setState({ artworks })

        const userId = this.props.userId
        await axios.post(`/api/users/${userId}/artworks`, artworks[0])
    }

    saveUnLike = async () => {
        const artworks = [...this.state.artworks]
        artworks[0].unliked = true
        this.setState({ artworks })

        const userId = this.props.userId
        await axios.post(`/api/users/${userId}/artworks`, artworks[0])
    }

    render() {

        return (
            <div>
                <TopInfo>
                    <ArtistAndTitleAndYear>
                        <Artist>{this.state.artworks[0].artist}</Artist>
                        <TitleAndYear>{this.state.artworks[0].title}, {this.state.artworks[0].year}</TitleAndYear>
                    </ArtistAndTitleAndYear>
                    <LikeButtons >
                        <LikeOrSkip onClick={this.saveLike}>Like</LikeOrSkip>
                        <LikeOrSkip onClick={this.saveUnLike}>Skip</LikeOrSkip>
                    </ LikeButtons>
                </TopInfo>
                <StyledImage src={this.state.artworks[0].img} alt={this.state.artworks[0].title} />
                {/* <div>Style: {this.state.artworks[0].style}</div>
                 */}
            </div>
        )

    }

}